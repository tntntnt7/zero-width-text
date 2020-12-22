"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var encode = function encode(content) {
  return _toConsumableArray(_toConsumableArray(content).map(function (cell) {
    return cell.charCodeAt().toString(2);
  }).join(' ')).map(function (cell) {
    if (cell === '0') return "\u200B";
    if (cell === '1') return "\u200C";
    return "\u200D";
  }).join('');
};

var decode = function decode(content) {
  return _toConsumableArray(content).map(function (cell) {
    if (cell === "\u200B") return 0;
    if (cell === "\u200C") return 1;
    return ' ';
  }).join('').split(' ').map(function (cell) {
    return String.fromCharCode(parseInt(cell, 2));
  }).join('');
};

var _default = {
  encode: encode,
  decode: decode
};
exports["default"] = _default;