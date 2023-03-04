"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ReduxProvider = function ReduxProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: _.store
  }, children);
};
var _default = ReduxProvider;
exports["default"] = _default;