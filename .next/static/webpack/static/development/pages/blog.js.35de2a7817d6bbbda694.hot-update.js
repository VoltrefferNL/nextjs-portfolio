webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _content_ProjectText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/ProjectText */ \"./pages/content/ProjectText.js\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.module.css */ \"./pages/content/content.module.css\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/niels/Desktop/new-port/pages/blog.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar blog = function blog(_ref) {\n  var allPostsData = _ref.allPostsData,\n      query = _ref.query;\n  console.log(allPostsData, query);\n  var tagsArr = allPostsData.filter(function (post) {\n    return post.tags.includes(query);\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, tagsArr.map(function (_ref2) {\n    var id = _ref2.id,\n        date = _ref2.date,\n        title = _ref2.title,\n        tags = _ref2.tags;\n    return __jsx(\"li\", {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }\n    }, console.log(id), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/posts/[id]\",\n      as: \"/posts/\".concat(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }, title)), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }\n    }), console.log(tags), __jsx(_components_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      dateString: date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 14\n      }\n    }));\n  }))));\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiYmxvZyIsImFsbFBvc3RzRGF0YSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInRhZ3NBcnIiLCJmaWx0ZXIiLCJwb3N0IiwidGFncyIsImluY2x1ZGVzIiwibWFwIiwiaWQiLCJkYXRlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFjQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QjtBQUFBLE1BQTFCQyxZQUEwQixRQUExQkEsWUFBMEI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxZQUFaLEVBQTBCQyxLQUExQjtBQUNBLE1BQU1HLE9BQU8sR0FBR0osWUFBWSxDQUFDSyxNQUFiLENBQW9CLFVBQUFDLElBQUksRUFBSTtBQUMxQyxXQUFPQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBVixDQUFtQlAsS0FBbkIsQ0FBUDtBQUVELEdBSGUsQ0FBaEI7QUFLQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLE9BQU8sQ0FBQ0ssR0FBUixDQUFZO0FBQUEsUUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsUUFBT0MsSUFBUCxTQUFPQSxJQUFQO0FBQUEsUUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsUUFBb0JMLElBQXBCLFNBQW9CQSxJQUFwQjtBQUFBLFdBQ1g7QUFBSSxTQUFHLEVBQUVHLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUixPQUFPLENBQUNDLEdBQVIsQ0FBWU8sRUFBWixDQURILEVBRUUsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLFFBQUUsbUJBQVlBLEVBQVosQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUUsS0FBSixDQURBLENBRkYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFNQ1YsT0FBTyxDQUFDQyxHQUFSLENBQVlJLElBQVosQ0FORCxFQU9DLE1BQUMsd0RBQUQ7QUFBTSxnQkFBVSxFQUFFSSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEQsQ0FEVztBQUFBLEdBQVosQ0FESCxDQURKLENBREEsQ0FERjtBQW9CRCxDQTNCRDs7O0FBNkJlWixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFByb2plY3RUZXh0IGZyb20gXCIuL2NvbnRlbnQvUHJvamVjdFRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29udGVudC9jb250ZW50Lm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcbiAgY29uc3QgcXVlcnkgPSBcIkphdmFzY3JpcHRcIlxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgICBxdWVyeSxcbiAgICB9XG4gIH1cbn1cblxuXG5jb25zdCBibG9nID0gKHsgYWxsUG9zdHNEYXRhLCBxdWVyeSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGFsbFBvc3RzRGF0YSwgcXVlcnkpXG4gIGNvbnN0IHRhZ3NBcnIgPSBhbGxQb3N0c0RhdGEuZmlsdGVyKHBvc3QgPT4ge1xuICAgIHJldHVybiBwb3N0LnRhZ3MuaW5jbHVkZXMocXVlcnkpXG4gICAgXG4gIH0pXG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPHNlY3Rpb24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGFnc0Fyci5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlLCB0YWdzIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGlkKX1cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9baWRdXCIgYXM9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB7Y29uc29sZS5sb2codGFncyl9XG4gICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})