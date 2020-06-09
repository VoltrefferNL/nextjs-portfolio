webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/niels/Desktop/new-port/components/Navbar.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Menu = [{\n  path: \"/blog\",\n  name: \"Blog\"\n}, {\n  path: \"/#\",\n  name: \"100DaysofCode\"\n}];\n\nvar Navbar = function Navbar() {\n  return __jsx(Header, {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header_Wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.div_top_hypers,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo_left,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, \"NdV\"), __jsx(\"ul\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ul_top_hypers,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, Menu.map(function (_ref) {\n    var path = _ref.path,\n        name = _ref.name;\n    return __jsx(\"li\", {\n      key: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: path,\n      as: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, name)));\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 3\n    }\n  }));\n};\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcz9jZDgyIl0sIm5hbWVzIjpbIk1lbnUiLCJwYXRoIiwibmFtZSIsIk5hdmJhciIsInN0eWxlcyIsImhlYWRlcl9XcmFwcGVyIiwiZGl2X3RvcF9oeXBlcnMiLCJsb2dvX2xlZnQiLCJ1bF90b3BfaHlwZXJzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsTUFBSSxFQUFFLE9BRFI7QUFDaUJDLE1BQUksRUFBRTtBQUR2QixDQURXLEVBSVg7QUFDRUQsTUFBSSxFQUFFLElBRFI7QUFDY0MsTUFBSSxFQUFFO0FBRHBCLENBSlcsQ0FBYjs7QUFVQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQ2IsTUFBQyxNQUFEO0FBQVEsYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxjQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUVELHlEQUFNLENBQUNFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYseURBQU0sQ0FBQ0csU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVILHlEQUFNLENBQUNJLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVIsSUFBSSxDQUFDUyxHQUFMLENBQVM7QUFBQSxRQUFFUixJQUFGLFFBQUVBLElBQUY7QUFBQSxRQUFRQyxJQUFSLFFBQVFBLElBQVI7QUFBQSxXQUNUO0FBQUksU0FBRyxFQUFFQSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFaO0FBQWtCLFFBQUUsRUFBRUEsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUMsSUFBSixDQURGLENBREYsQ0FEUztBQUFBLEdBQVQsQ0FERixDQUZGLENBREEsRUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEEsQ0FEYTtBQUFBLENBQWY7O0tBQU1DLE07QUFtQlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdmJhci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IE1lbnUgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi9ibG9nXCIsIG5hbWU6IFwiQmxvZ1wiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvI1wiLCBuYW1lOiBcIjEwMERheXNvZkNvZGVcIixcbiAgfSxcblxuICBdXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPEhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfV3JhcHBlcn0+XG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2X3RvcF9oeXBlcnN9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb19sZWZ0fT5OZFY8L2Rpdj5cbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudWxfdG9wX2h5cGVyc30+XG4gICAgIHtNZW51Lm1hcCgoe3BhdGgsIG5hbWV9KSA9PiAoXG4gICAgICA8bGkga2V5PXtuYW1lfT5cbiAgICAgICAgPExpbmsgaHJlZj17cGF0aH0gYXM9e3BhdGh9PlxuICAgICAgICAgIDxhPntuYW1lfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cblxuICAgICApKX0gXG4gICAgICA8L3VsPlxuICA8L2Rpdj5cbiAgPGRpdj48L2Rpdj5cbiAgPC9IZWFkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

})