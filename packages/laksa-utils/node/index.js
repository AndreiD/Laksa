(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('valid-url'), require('bn.js'), require('number-to-bn'), require('utf8')) :
  typeof define === 'function' && define.amd ? define(['exports', 'valid-url', 'bn.js', 'number-to-bn', 'utf8'], factory) :
  (factory((global.Laksa = {}),global.validUrl,global.bn_js,global.numToBN,global.utf8));
}(this, (function (exports,validUrl,bn_js,numToBN,utf8) { 'use strict';

  numToBN = numToBN && numToBN.hasOwnProperty('default') ? numToBN['default'] : numToBN;
  utf8 = utf8 && utf8.hasOwnProperty('default') ? utf8['default'] : utf8;

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

  /**
   * [isNumber verify param is a Number]
   * @param  {[type]}  obj [value]
   * @return {Boolean}     [boolean]
   */

  const isNumber = obj => {
    return obj === +obj;
  };
  /**
   * [isString verify param is a String]
   * @param  {[type]}  obj [value]
   * @return {Boolean}     [boolean]
   */


  const isString = obj => {
    return obj === `${obj}`;
  };
  /**
   * [isBoolean verify param is a Boolean]
   * @param  {[type]}  obj [value]
   * @return {Boolean}     [boolean]
   */


  const isBoolean = obj => {
    return obj === !!obj;
  };
  /**
   * [isArray verify param input is an Array]
   * @param  {[type]}  obj [value]
   * @return {Boolean}     [boolean]
   */


  const isArray = obj => {
    return Array.isArray(obj);
  };
  /**
   * [isJson verify param input is a Json]
   * @param  {[type]}  obj [value]
   * @return {Boolean}     [boolean]
   */


  const isJson = obj => {
    try {
      return !!JSON.parse(obj);
    } catch (e) {
      return false;
    }
  };
  /**
   * [isObject verify param is an Object]
   * @param  {[type]}  obj [value]
   * @return {Boolean}     [boolean]
   */


  const isObject = obj => {
    return obj !== null && !Array.isArray(obj) && typeof obj === 'object';
  };
  /**
   * [isFunction verify param is a Function]
   * @param  {[type]}  obj [value]
   * @return {Boolean}     [description]
   */


  const isFunction = obj => {
    return typeof obj === 'function';
  };
  /**
   * verify if param is correct
   * @param  {[hex|string]}  address [description]
   * @return {Boolean}         [description]
   */
  // const isAddress = (address) => {
  //   return !!address.match(/^[0-9a-fA-F]{40}$/)
  // }


  const isAddress = address => {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      // check if it has the basic requirements of an address
      return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
      // If it's all small caps or all all caps, return true
      return true;
    }
  };
  /**
   * verify if privateKey is correct
   * @param  {[hex|string]}  privateKey [description]
   * @return {Boolean}            [description]
   */


  const isPrivateKey = privateKey => {
    if (!/^(0x)?[0-9a-f]{64}$/i.test(privateKey)) {
      // check if it has the basic requirements of an privatekey
      return false;
    } else if (/^(0x)?[0-9a-f]{64}$/.test(privateKey) || /^(0x)?[0-9A-F]{64}$/.test(privateKey)) {
      // If it's all small caps or all all caps, return true
      return true;
    } // return !!privateKey.match(/^[0-9a-fA-F]{64}$/)

  };
  /**
   * verify if public key is correct
   * @param  {[hex|string]}  pubkey [description]
   * @return {Boolean}        [description]
   */


  const isPubkey = pubkey => {
    if (!/^(0x)?[0-9a-f]{66}$/i.test(pubkey)) {
      // check if it has the basic requirements of an pubkey
      return false;
    } else if (/^(0x)?[0-9a-f]{66}$/.test(pubkey) || /^(0x)?[0-9A-F]{66}$/.test(pubkey)) {
      // If it's all small caps or all all caps, return true
      return true;
    } // return !!pubkey.match(/^[0-9a-fA-F]{66}$/)

  };
  /**
   * verify if url is correct
   * @param  {[string]}  url [description]
   * @return {Boolean}     [description]
   */


  const isUrl = url => {
    if (typeof url === 'string') {
      return validUrl.isWebUri(url);
    }

    return false;
  };
  /**
   * verify if hash is correct
   * @param  {[string]}  txHash [description]
   * @return {Boolean}        [description]
   */


  const isHash = txHash => {
    if (!/^(0x)?[0-9a-f]{64}$/i.test(txHash)) {
      // check if it has the basic requirements of an txHash
      return false;
    } else if (/^(0x)?[0-9a-f]{64}$/.test(txHash) || /^(0x)?[0-9A-F]{64}$/.test(txHash)) {
      // If it's all small caps or all all caps, return true
      return true;
    } // return !!txHash.match(/^[0-9a-fA-F]{64}$/)

  };
  /**
   * Check if string is HEX
   *
   * @method isHex
   * @param {String} hex to be checked
   * @returns {Boolean}
   */


  const isHex = hex => {
    return (isString(hex) || isNumber(hex)) && /^0x?[0-9a-f]*$/i.test(hex);
  };
  /**
   * check Object isNull
   * @param  {[type]}  obj [description]
   * @return {Boolean}     [description]
   */


  const isNull = obj => {
    return obj === null;
  };
  /**
   * check object is undefined
   * @param  {[type]}  obj [description]
   * @return {Boolean}     [description]
   */


  const isUndefined = obj => {
    return obj === undefined;
  };

  var validators = /*#__PURE__*/Object.freeze({
    isNumber: isNumber,
    isString: isString,
    isBoolean: isBoolean,
    isArray: isArray,
    isJson: isJson,
    isObject: isObject,
    isFunction: isFunction,
    isHash: isHash,
    isUrl: isUrl,
    isPubkey: isPubkey,
    isPrivateKey: isPrivateKey,
    isAddress: isAddress,
    isBN: bn_js.isBN,
    isHex: isHex,
    isNull: isNull,
    isUndefined: isUndefined
  });

  function objToArray(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const newArray = keys.map((k, index) => {
      const Obj = {};
      Obj[k] = values[index];
      return Obj;
    });
    return newArray;
  }

  function injectValidator(func) {
    if (typeof func === 'object' && func !== undefined) {
      const valName = Object.keys(func)[0];
      const valFunc = Object.values(func)[0];
      return Object.assign(valFunc, {
        validator: valName,
        test: obj => valFunc(obj)
      });
    } else return false;
  }

  function extractValidator(vals) {
    const newValidator = [];
    const newArr = objToArray(vals);
    newArr.forEach((v, index) => {
      const newV = injectValidator(v);
      const validatorString = newV.validator;
      newValidator[validatorString] = newV;
      newValidator[index] = newV;
    });
    return newValidator;
  }

  const valArray = extractValidator(validators);
  const {
    isNumber: isNumber$1,
    isString: isString$1,
    isBoolean: isBoolean$1,
    isArray: isArray$1,
    isJson: isJson$1,
    isObject: isObject$1,
    isFunction: isFunction$1,
    isHash: isHash$1,
    isUrl: isUrl$1,
    isPubkey: isPubkey$1,
    isPrivateKey: isPrivateKey$1,
    isAddress: isAddress$1,
    isBN,
    isHex: isHex$1,
    isNull: isNull$1,
    isUndefined: isUndefined$1
  } = valArray;
  /**
   * [Validator description]
   * @param       {[type]} stringToTest    [description]
   * @param       {[type]} validatorString [description]
   * @constructor
   */

  function Validator(stringToTest, validatorString) {
    if (typeof validatorString === 'string' && valArray[`is${validatorString}`] !== undefined) {
      return valArray[`is${validatorString}`].test(stringToTest);
    } else if (typeof validatorString === 'function') {
      return validatorString(stringToTest);
    } else {
      throw new Error(`validator not found :${validatorString}`);
    }
  }

  function tester(value, callback) {
    try {
      const validateResult = valArray.map(func => {
        return func.test(value) ? func.validator.substring(2) : false;
      }).filter(d => d !== false);
      return callback === undefined ? validateResult : callback(validateResult);
    } catch (e) {
      return callback === undefined ? e : callback(e);
    }
  }

  Object.assign(Validator, {
    test: tester
  });
  const validator = Validator;
  /**
   * make sure each of the keys in requiredArgs is present in args
   * @param  {[type]} args         [description]
   * @param  {[type]} requiredArgs [description]
   * @param  {[type]} optionalArgs [description]
   * @return {[type]}              [description]
   */

  function validateArgs(args, requiredArgs, optionalArgs) {
    for (const key in requiredArgs) {
      if (args[key] !== undefined) {
        for (let i = 0; i < requiredArgs[key].length; i += 1) {
          if (typeof requiredArgs[key][i] !== 'function') throw new Error('Validator is not a function');

          if (!requiredArgs[key][i](args[key])) {
            throw new Error(`Validation failed for ${key},should be ${requiredArgs[key][i].validator}`);
          }
        }
      } else throw new Error(`Key not found: ${key}`);
    }

    for (const key in optionalArgs) {
      if (args[key]) {
        for (let i = 0; i < optionalArgs[key].length; i += 1) {
          if (typeof optionalArgs[key][i] !== 'function') throw new Error('Validator is not a function');

          if (!optionalArgs[key][i](args[key])) {
            throw new Error(`Validation failed for ${key},should be ${optionalArgs[key][i].validator}`);
          }
        }
      }
    }

    return true;
  }

  function validateFunctionArgs(ArgsArray, validatorArray) {
    const argLength = ArgsArray.length;
    const valLength = validatorArray.length;
    if (argLength < valLength) throw new Error('Some args are required by function but missing');

    for (let i = 0; i < valLength; i += 1) {
      if (!validatorArray[i](ArgsArray[i])) {
        throw new Error(`Validation failed for arguments[${i}], should be ${validatorArray[i].validator}`);
      }
    }

    return true;
  }

  /**
   * convert number to array representing the padded hex form
   * @param  {[string]} val        [description]
   * @param  {[number]} paddedSize [description]
   * @return {[string]}            [description]
   */

  const intToByteArray = (val, paddedSize) => {
    const arr = [];
    const hexVal = val.toString(16);
    const hexRep = [];
    let i;

    for (i = 0; i < hexVal.length; i += 1) {
      hexRep[i] = hexVal[i].toString();
    }

    for (i = 0; i < paddedSize - hexVal.length; i += 1) {
      arr.push('0');
    }

    for (i = 0; i < hexVal.length; i += 1) {
      arr.push(hexRep[i]);
    }

    return arr;
  };
  /**
   * Converts value to it's hex representation
   *
   * @method numberToHex
   * @param {String|Number|BN} value
   * @return {String}
   */


  const numberToHex = value => {
    if (isNull$1(value) || isUndefined$1(value)) {
      return value;
    }

    if (!Number.isFinite(value) && !isHex$1(value) && !isBN(value) && !isString$1(value)) {
      throw new Error(`Given input "${value}" is not a number.`);
    }

    const number = isBN(value) ? value : toBN(value);
    const result = number.toString(16);
    return number.lt(toBN(0)) ? `-0x${result.substr(1)}` : `0x${result}`;
  };

  const toUtf8 = () => {// to utf 8
  };

  const toAscii = () => {// to be implemented
  };

  const fromUtf8 = () => {// to be implemented
  };

  const fromAscii = () => {// to be implemented
  };

  const toBN = data => {
    try {
      return numToBN(data);
    } catch (e) {
      throw new Error(`${e} of "${data}"`);
    } // to be implemented

  };
  /**
   * Converts value to it's number representation
   *
   * @method hexToNumber
   * @param {String|Number|BN} value
   * @return {String}
   */


  const hexToNumber = value => {
    if (!value) {
      return value;
    }

    return toBN(value).toNumber();
  };
  /**
   * Should be called to get hex representation (prefixed by 0x) of utf8 string
   *
   * @method utf8ToHex
   * @param {String} str
   * @returns {String} hex representation of input string
   */


  const utf8ToHex = str => {
    let hex = '';
    const newString = utf8.encode(str);
    const str1 = newString.replace(/^(?:\u0000)*/, '');
    const str2 = str1.split('').reverse().join('');
    const str3 = str2.replace(/^(?:\u0000)*/, '');
    const str4 = str3.split('').reverse().join('');

    for (let i = 0; i < str4.length; i += 1) {
      const code = str4.charCodeAt(i); // if (code !== 0) {

      const n = code.toString(16);
      hex += n.length < 2 ? `0${n}` : n; // }
    }

    return `0x${hex}`;
  };
  /**
   * Auto converts any given value into it's hex representation.
   *
   * And even stringifys objects before.
   *
   * @method toHex
   * @param {String|Number|BN|Object} value
   * @param {Boolean} returnType
   * @return {String}
   */


  const toHex = (value, returnType) => {
    /* jshint maxcomplexity: false */
    if (isAddress$1(value)) {
      // strip 0x from address
      return returnType ? 'address' : `0x${value.toLowerCase().replace(/^0x/i, '')}`;
    }

    if (isBoolean$1(value)) {
      return returnType ? 'bool' : value ? '0x01' : '0x00';
    }

    if (isObject$1(value) && !isBN(value)) {
      return returnType ? 'string' : utf8ToHex(JSON.stringify(value));
    }

    if (isBN(value)) {
      return returnType ? 'BN' : numberToHex(value);
    } // if its a negative number, pass it through numberToHex


    if (isString$1(value)) {
      if (isHex$1(value) || !Number.isNaN(Number(value))) {
        return returnType ? value < 0 ? 'int256' : 'uint256' : numberToHex(value);
      } else if (!Number.isFinite(value) && !isUndefined$1(value) && Number.isNaN(Number(value))) {
        return returnType ? 'string' : add0x(value);
      }
    }

    return returnType ? value < 0 ? 'int256' : 'uint256' : numberToHex(value);
  };

  const strip0x = value => {
    const newString = toHex(value);
    return `${newString.replace(/^0x/i, '')}`;
  };

  const add0x = value => {
    let newString;

    if (!isString$1(value)) {
      newString = String(value);
      return `0x${newString.replace(/^0x/i, '')}`;
    }

    newString = `0x${value.replace(/^0x/i, '')}`;
    return newString;
  };
  /**
   * Should be called to pad string to expected length
   *
   * @method padLeft
   * @param {String} string to be padded
   * @param {Number} characters that result string should have
   * @param {String} sign, by default 0
   * @returns {String} right aligned string
   */


  const padLeft = (string, chars, sign) => {
    return new Array(chars - string.length + 1).join(sign || '0') + string;
  };
  /**
   * Should be called to pad string to expected length
   *
   * @method padRight
   * @param {String} string to be padded
   * @param {Number} characters that result string should have
   * @param {String} sign, by default 0
   * @returns {String} right aligned string
   */


  const padRight = (string, chars, sign) => {
    return string + new Array(chars - string.length + 1).join(sign || '0');
  };

  const validatorArray = {
    isNumber: [isNumber$1],
    isString: [isString$1],
    isBoolean: [isBoolean$1],
    isArray: [isArray$1],
    isJson: [isJson$1],
    isObject: [isObject$1],
    isFunction: [isFunction$1],
    isHash: [isHash$1],
    isUrl: [isUrl$1],
    isPubkey: [isPubkey$1],
    isPrivateKey: [isPrivateKey$1],
    isBN: [isBN],
    isAddress: [isAddress$1]
  };
  const transformerArray = {
    toBn: toBN,
    toNumber: string => Number(string),
    toString: string => String(string)
  };

  class Method {
    constructor(options) {
      _defineProperty(this, "setMessanger", msg => {
        this.messanger = msg;
      });

      _defineProperty(this, "generateValidateObjects", () => {
        const validatorObject = this.params;
        const requiredArgs = {};
        const optionalArgs = {};

        for (const index in validatorObject) {
          if (index !== undefined) {
            const newObjectKey = index;
            const newObjectValid = validatorObject[index][0];
            const isRequired = validatorObject[index][1];

            if (isRequired === 'required') {
              requiredArgs[newObjectKey] = validatorArray[newObjectValid];
            } else {
              optionalArgs[newObjectKey] = validatorArray[newObjectValid];
            }
          }
        }

        return {
          requiredArgs,
          optionalArgs
        };
      });

      _defineProperty(this, "validateArgs", (args, requiredArgs, optionalArgs) => {
        const reArgs = requiredArgs === undefined ? {} : requiredArgs;
        const opArgs = optionalArgs === undefined ? {} : optionalArgs;

        if (args && this.params !== {}) {
          return validateArgs(args, reArgs, opArgs);
        }

        return true;
      });

      _defineProperty(this, "extractParams", args => {
        const paramsObject = isObject$1(args) ? args : {};
        let result;
        const keyArrayLength = Object.keys(paramsObject).length;
        if (keyArrayLength === 0) result = [];

        if (keyArrayLength === 1 && !this.isSendJson) {
          const resultKey = Object.keys(paramsObject)[0];
          result = [this.transformedBeforeSend(paramsObject[resultKey], resultKey)];
        } else if (keyArrayLength > 0 && this.isSendJson) {
          const newObject = {};
          Object.keys(paramsObject).map(k => {
            newObject[k] = this.transformedBeforeSend(paramsObject[k], k);
            return false;
          });
          result = [newObject];
        }

        return result;
      });

      _defineProperty(this, "transformedBeforeSend", (value, key) => {
        const transformMethod = this.transformer[key];

        if (transformMethod !== undefined) {
          return transformerArray[transformMethod](value);
        } else return value;
      });

      _defineProperty(this, "assignToObject", object => {
        const newObject = {};
        newObject[this.name] = this.methodBuilder();
        return Object.assign(object, newObject);
      });

      _defineProperty(this, "methodBuilder", () => {
        if (this.messanger !== null && this.endpoint === 'client') {
          return (args, callback) => {
            const {
              requiredArgs,
              optionalArgs
            } = this.generateValidateObjects();
            this.validateArgs(args, requiredArgs, optionalArgs);
            const params = this.extractParams(args);
            const newCallback = isFunction$1(args) ? args : callback;

            if (newCallback) {
              return this.messanger.sendAsync({
                method: this.call,
                params
              }, newCallback);
            }

            return this.messanger.send({
              method: this.call,
              params
            });
          };
        }

        if (this.messanger !== null && this.endpoint !== 'client') {
          return (args, callback) => {
            const {
              requiredArgs,
              optionalArgs
            } = this.generateValidateObjects();
            this.validateArgs(args, requiredArgs, optionalArgs);
            const newCallback = isFunction$1(args) ? args : callback;

            if (newCallback) {
              return this.messanger.sendAsyncServer(this.endpoint, args, newCallback);
            }

            return this.messanger.sendServer(this.endpoint, args);
          };
        }
      });

      const {
        name,
        call,
        params: _params,
        endpoint,
        transformer,
        isSendJson
      } = options;
      this.name = name;
      this.call = call;
      this.messanger = null;
      this.params = _params;
      this.transformer = transformer || {};
      this.endpoint = endpoint || 'client';
      this.isSendJson = isSendJson || false;
    }

  }

  class Property {
    constructor(options) {
      _defineProperty(this, "setMessanger", msg => {
        this.messanger = msg;
      });

      _defineProperty(this, "assignToObject", object => {
        const zilName = this.name;

        const asyncGetterName = getName => {
          return `get${getName.charAt(0).toUpperCase()}${getName.slice(1)}`;
        };

        const zilObject = {
          get: this.propertyBuilder(),
          enumerable: true
        };
        const newZilObject = {};
        newZilObject[asyncGetterName(zilName)] = this.propertyBuilder();
        Object.defineProperty(object, zilName, zilObject);
        Object.assign(object, newZilObject);
      });

      _defineProperty(this, "propertyBuilder", () => {
        if (this.messanger !== null) {
          return callback => {
            if (callback) {
              return this.messanger.sendAsync({
                method: this.getter
              }, callback);
            }

            return this.messanger.send({
              method: this.getter
            });
          };
        }
      });

      const {
        name,
        getter,
        setter
      } = options;
      this.name = name;
      this.getter = getter;
      this.setter = setter;
      this.messanger = null;
    }

  }

  exports.Method = Method;
  exports.Property = Property;
  exports.isNumber = isNumber$1;
  exports.isString = isString$1;
  exports.isBoolean = isBoolean$1;
  exports.isArray = isArray$1;
  exports.isJson = isJson$1;
  exports.isObject = isObject$1;
  exports.isFunction = isFunction$1;
  exports.isHash = isHash$1;
  exports.isUrl = isUrl$1;
  exports.isPubkey = isPubkey$1;
  exports.isPrivateKey = isPrivateKey$1;
  exports.isAddress = isAddress$1;
  exports.isBN = isBN;
  exports.isHex = isHex$1;
  exports.isNull = isNull$1;
  exports.isUndefined = isUndefined$1;
  exports.validator = validator;
  exports.validateArgs = validateArgs;
  exports.validateFunctionArgs = validateFunctionArgs;
  exports.extractValidator = extractValidator;
  exports.intToByteArray = intToByteArray;
  exports.toHex = toHex;
  exports.toUtf8 = toUtf8;
  exports.toAscii = toAscii;
  exports.fromUtf8 = fromUtf8;
  exports.fromAscii = fromAscii;
  exports.toBN = toBN;
  exports.hexToNumber = hexToNumber;
  exports.utf8ToHex = utf8ToHex;
  exports.numberToHex = numberToHex;
  exports.padLeft = padLeft;
  exports.padRight = padRight;
  exports.strip0x = strip0x;
  exports.add0x = add0x;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
