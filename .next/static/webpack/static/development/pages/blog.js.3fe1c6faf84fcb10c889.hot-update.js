webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/blogline.js":
/*!********************************!*\
  !*** ./components/blogline.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var _blogline_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogline.module.css */ \"./components/blogline.module.css\");\n/* harmony import */ var _blogline_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blogline_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/home/niels/Desktop/new-port/components/blogline.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Blogline = function Blogline(props) {\n  var tagsArr = props.tagsArr;\n  return __jsx(\"div\", {\n    className: _blogline_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Headline_container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, tagsArr.map(function (_ref) {\n    var id = _ref.id,\n        date = _ref.date,\n        title = _ref.title,\n        tags = _ref.tags;\n    return __jsx(\"li\", {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    }, __jsx(\"article\", {\n      className: _blogline_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Article_listing,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 61\n      }\n    }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      dateString: date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 67\n      }\n    })), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/posts/[id]\",\n      as: \"/posts/\".concat(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 23\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 15\n      }\n    }, title))), \"   \"), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 14\n      }\n    }, tags.map(function (tag) {\n      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: {\n          pathname: '/blog',\n          query: {\n            \"tag\": tag\n          }\n        },\n        as: \"/blog\",\n        key: tag,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 91\n        }\n      }, __jsx(\"button\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 94\n        }\n      }, tag)));\n    })));\n  }));\n};\n\n_c = Blogline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blogline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jsb2dsaW5lLmpzP2Y5ZjciXSwibmFtZXMiOlsiQmxvZ2xpbmUiLCJwcm9wcyIsInRhZ3NBcnIiLCJzdHlsZXMiLCJIZWFkbGluZV9jb250YWluZXIiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsInRhZ3MiLCJBcnRpY2xlX2xpc3RpbmciLCJ0YWciLCJwYXRobmFtZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNyQkMsT0FEcUIsR0FDVkQsS0FEVSxDQUNyQkMsT0FEcUI7QUFFeEIsU0FDSTtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0Msa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0YsT0FBTyxDQUFDRyxHQUFSLENBQVk7QUFBQSxRQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxRQUFPQyxJQUFQLFFBQU9BLElBQVA7QUFBQSxRQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxRQUFvQkMsSUFBcEIsUUFBb0JBLElBQXBCO0FBQUEsV0FDYjtBQUFJLFNBQUcsRUFBRUgsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBUyxlQUFTLEVBQUVILDJEQUFNLENBQUNPLGVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNLE1BQUMsd0RBQUQ7QUFBTSxnQkFBVSxFQUFFSCxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU4sQ0FBNUMsRUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU0sTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLFFBQUUsbUJBQVlELEVBQVosQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUUsS0FBSixDQURRLENBQU4sQ0FEQSxRQURKLEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNQyxJQUFJLENBQUNKLEdBQUwsQ0FBUyxVQUFDTSxHQUFEO0FBQUEsYUFDbEIsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRTtBQUFDQyxrQkFBUSxFQUFFLE9BQVg7QUFBb0JDLGVBQUssRUFBRTtBQUFFLG1CQUFRRjtBQUFWO0FBQTNCLFNBQVo7QUFBd0QsVUFBRSxFQUFHLE9BQTdEO0FBQXNFLFdBQUcsRUFBRUEsR0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFnRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTQSxHQUFULENBQUgsQ0FBaEYsQ0FEa0I7QUFBQSxLQUFULENBQU4sQ0FORCxDQURhO0FBQUEsR0FBWixDQURMLENBREo7QUFnQkgsQ0FsQkQ7O0tBQU1YLFE7QUFvQlNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ibG9nbGluZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Jsb2dsaW5lLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBCbG9nbGluZSA9IChwcm9wcykgPT4ge1xuY29uc3Qge3RhZ3NBcnJ9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRsaW5lX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7dGFnc0Fyci5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlLCB0YWdzIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5BcnRpY2xlX2xpc3Rpbmd9PjxzcGFuPjxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxMaW5rIGhyZWY9XCIvcG9zdHMvW2lkXVwiIGFzPXtgL3Bvc3RzLyR7aWR9YH0+XG4gICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+PC9MaW5rPjwvc3Bhbj4gICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICA8ZGl2Pnt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiAnL2Jsb2cnLCBxdWVyeTogeyBcInRhZ1wiIDogdGFnfX19IGFzID17XCIvYmxvZ1wifSBrZXk9e3RhZ30+PGE+PGJ1dHRvbj57dGFnfTwvYnV0dG9uPjwvYT48L0xpbms+XG4gICAgICAgICkpfTwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dsaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/blogline.js\n");

/***/ })

})