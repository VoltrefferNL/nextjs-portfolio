webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _content_ProjectText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/ProjectText */ \"./pages/content/ProjectText.js\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.module.css */ \"./pages/content/content.module.css\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/niels/Desktop/new-port/pages/blog.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar blog = function blog(_ref) {\n  var allPostsData = _ref.allPostsData,\n      query = _ref.query;\n  console.log(allPostsData, query);\n  var tagsArr = allPostsData.filter(function (post) {\n    return post.tags.includes(query);\n  });\n  console.log(tagsArr, \"<<<<<<<<<<<<<<<<<<!!<!!!!!!!!!!!\");\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, allPostsData.map(function (_ref2) {\n    var id = _ref2.id,\n        date = _ref2.date,\n        title = _ref2.title,\n        tags = _ref2.tags;\n    return __jsx(\"li\", {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }, console.log(id), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/posts/[id]\",\n      as: \"/posts/\".concat(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    }, title)), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }), console.log(tags), __jsx(_components_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      dateString: date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 14\n      }\n    }));\n  }))));\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiYmxvZyIsImFsbFBvc3RzRGF0YSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInRhZ3NBcnIiLCJmaWx0ZXIiLCJwb3N0IiwidGFncyIsImluY2x1ZGVzIiwibWFwIiwiaWQiLCJkYXRlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFjQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QjtBQUFBLE1BQTFCQyxZQUEwQixRQUExQkEsWUFBMEI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxZQUFaLEVBQTBCQyxLQUExQjtBQUNBLE1BQU1HLE9BQU8sR0FBR0osWUFBWSxDQUFDSyxNQUFiLENBQW9CLFVBQUFDLElBQUksRUFBSTtBQUMxQyxXQUFPQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBVixDQUFtQlAsS0FBbkIsQ0FBUDtBQUFpQyxHQURuQixDQUFoQjtBQUVFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBWixFQUFxQixrQ0FBckI7QUFDRixTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFlBQVksQ0FBQ1MsR0FBYixDQUFpQjtBQUFBLFFBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFFBQU9DLElBQVAsU0FBT0EsSUFBUDtBQUFBLFFBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFFBQW9CTCxJQUFwQixTQUFvQkEsSUFBcEI7QUFBQSxXQUNoQjtBQUFJLFNBQUcsRUFBRUcsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxFQUFaLENBREgsRUFFRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsUUFBRSxtQkFBWUEsRUFBWixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRSxLQUFKLENBREEsQ0FGRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQU1DVixPQUFPLENBQUNDLEdBQVIsQ0FBWUksSUFBWixDQU5ELEVBT0MsTUFBQyx3REFBRDtBQUFNLGdCQUFVLEVBQUVJLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRCxDQURnQjtBQUFBLEdBQWpCLENBREgsQ0FESixDQURBLENBREY7QUFvQkQsQ0F6QkQ7OztBQTJCZVosbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQcm9qZWN0VGV4dCBmcm9tIFwiLi9jb250ZW50L1Byb2plY3RUZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRlbnQvY29udGVudC5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YX0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXG4gIGNvbnN0IHF1ZXJ5ID0gXCJKYXZhc2NyaXB0XCJcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhLFxuICAgICAgcXVlcnksXG4gICAgfVxuICB9XG59XG5cblxuY29uc3QgYmxvZyA9ICh7IGFsbFBvc3RzRGF0YSwgcXVlcnkgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhhbGxQb3N0c0RhdGEsIHF1ZXJ5KVxuICBjb25zdCB0YWdzQXJyID0gYWxsUG9zdHNEYXRhLmZpbHRlcihwb3N0ID0+IHtcbiAgICByZXR1cm4gcG9zdC50YWdzLmluY2x1ZGVzKHF1ZXJ5KX0pXG4gICAgY29uc29sZS5sb2codGFnc0FyciwgXCI8PDw8PDw8PDw8PDw8PDw8PDwhITwhISEhISEhISEhIVwiKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPHNlY3Rpb24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUsIHRhZ3MgfSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR9PlxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2coaWQpfVxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL1tpZF1cIiBhcz17YC9wb3N0cy8ke2lkfWB9PlxuICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0YWdzKX1cbiAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYmxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})