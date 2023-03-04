"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.actions = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _testSlice = require("./slice/testSlice");
var store = (0, _toolkit.configureStore)({
  reducer: {
    test: _testSlice.testSlice.reducer
  }
});
exports.store = store;
var actions = {
  test: _testSlice.testSlice.actions
};
exports.actions = actions;