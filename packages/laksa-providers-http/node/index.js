(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios'), require('mitt')) :
  typeof define === 'function' && define.amd ? define(['axios', 'mitt'], factory) :
  (global.Laksa = factory(global.axios,global.Mitt));
}(this, (function (axios,Mitt) { 'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
  Mitt = Mitt && Mitt.hasOwnProperty('default') ? Mitt['default'] : Mitt;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  class HttpProvider {
    constructor(url, timeout, user, password, headers) {
      _defineProperty(this, "subscribers", new Map());

      _defineProperty(this, "send", async payload => {
        const result = await this.requestFunc({
          payload
        });
        return result;
      });

      _defineProperty(this, "sendServer", async (endpoint, payload) => {
        const result = await this.requestFunc({
          endpoint,
          payload
        });
        return result;
      });

      _defineProperty(this, "subscribe", (event, subscriber) => {
        const subToken = Symbol('subToken');
        this.subscribers.set(subToken, subscriber);
        return subToken;
      });

      _defineProperty(this, "unsubscribe", token => {
        if (this.subscribers.has(token)) {
          this.subscribers.delete(token);
        }
      });

      this.url = url || 'http://localhost:4200';
      this.timeout = timeout || 0;
      this.user = user || null;
      this.password = password || null;
      this.headers = headers;
      this.request = this.instance();
      this.broadcaster = new Mitt();
    }

    instance() {
      const request = axios.create();

      if (this.user && this.password) {
        const AUTH_TOKEN = `Basic ${Buffer.from(`${this.user}:${this.password}`).toString('base64')}`;
        request.defaults.headers.common.Authorization = AUTH_TOKEN;
      }

      request.defaults.headers.post['Content-Type'] = 'application/json';

      if (this.headers) {
        this.headers.forEach(header => {
          request.defaults.headers.post[header.name] = header.value;
        });
      }

      if (this.timeout) {
        request.defaults.timeout = this.timeout;
      }

      return request;
    }

    sendAsync(payload, callback) {
      this.requestFunc({
        payload,
        callback
      });
    }

    sendAsyncServer(endpoint, payload, callback) {
      this.requestFunc({
        endpoint,
        payload,
        callback
      });
    }

    requestFunc({
      endpoint,
      payload,
      callback
    }) {
      const dest = endpoint !== null && endpoint !== undefined ? `${this.url}${endpoint}` : this.url;
      return this.request.post(dest, JSON.stringify(payload)).then(response => {
        const {
          data,
          status
        } = response;

        if (data && status >= 200 && status < 400) {
          if (callback === undefined) {
            return data;
          } else {
            callback(null, data);
          }
        }
      }).catch(err => {
        if (callback === undefined) {
          return err;
        } else {
          callback(err);
        }
      });
    }

  }

  return HttpProvider;

})));