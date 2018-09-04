"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _laksaShared = require("laksa-shared");

var _jsonRpc = _interopRequireDefault(require("./jsonRpc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Messanger = function Messanger(_provider) {
  var _this = this;

  _classCallCheck(this, Messanger);

  _defineProperty(this, "send",
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(data) {
      var payload, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.provider) {
                _context.next = 3;
                break;
              }

              console.error((0, _laksaShared.InvalidProvider)());
              return _context.abrupt("return", null);

            case 3:
              payload = _this.JsonRpc.toPayload(data.method, data.params);
              _context.next = 6;
              return _this.provider.send(payload);

            case 6:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  _defineProperty(this, "sendAsync", function (data, callback) {
    if (!_this.provider) {
      console.error((0, _laksaShared.InvalidProvider)());
      return null;
    }

    var payload = _this.JsonRpc.toPayload(data.method, data.params);

    _this.provider.sendAsync(payload, function (err, result) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    });
  });

  _defineProperty(this, "sendBatch", function (data, callback) {
    if (!_this.provider) {
      console.error((0, _laksaShared.InvalidProvider)());
      return null;
    }

    var payload = _this.JsonRpc.toBatchPayload(data);

    _this.provider.sendAsync(payload, function (err, results) {
      if (err) {
        return callback(err);
      }

      callback(err, results);
    });
  });

  _defineProperty(this, "sendServer",
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(endpoint, data) {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_this.provider) {
                _context2.next = 3;
                break;
              }

              console.error((0, _laksaShared.InvalidProvider)());
              return _context2.abrupt("return", null);

            case 3:
              _context2.next = 5;
              return _this.provider.sendServer(endpoint, data);

            case 5:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());

  _defineProperty(this, "sendAsyncServer", function (endpoint, data, callback) {
    if (!_this.provider) {
      console.error((0, _laksaShared.InvalidProvider)());
      return null;
    } // const payload = this.JsonRpc.toPayload(data.method, data.params)


    _this.provider.sendAsyncServer(endpoint, data, function (err, result) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    });
  });

  _defineProperty(this, "sendBatchServer", function (data, callback) {
    if (!_this.provider) {
      console.error((0, _laksaShared.InvalidProvider)());
      return null;
    } // const payload = this.JsonRpc.toBatchPayload(data)


    _this.provider.sendAsync(data, function (err, results) {
      if (err) {
        return callback(err);
      }

      callback(err, results);
    });
  });

  _defineProperty(this, "setProvider", function (provider) {
    _this.provider = provider;
  });

  this.provider = _provider;
  this.JsonRpc = new _jsonRpc.default();
};

var _default = Messanger;
exports.default = _default;
module.exports = exports.default;