"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testSlice = void 0;
var _require = require("@reduxjs/toolkit"),
  createSlice = _require.createSlice;
var testSlice = createSlice({
  name: 'testSlice',
  initialState: {
    test: null
  }
});
exports.testSlice = testSlice;