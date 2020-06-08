webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _content_ProjectText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/ProjectText */ \"./pages/content/ProjectText.js\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.module.css */ \"./pages/content/content.module.css\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/niels/Desktop/new-port/pages/blog.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar blog = function blog(_ref) {\n  var allPostsData = _ref.allPostsData,\n      query = _ref.query;\n  var tagsArr = allPostsData.filter(function (post) {\n    return post.tags.includes(query);\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, tagsArr.map(function (_ref2) {\n    var id = _ref2.id,\n        date = _ref2.date,\n        title = _ref2.title,\n        tags = _ref2.tags;\n    return __jsx(\"li\", {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, console.log(id), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/posts/[id]\",\n      as: \"/posts/\".concat(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }, title)), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }), console.log(tags), __jsx(_components_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      dateString: date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 14\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 14\n      }\n    }, tags.map(function (tag) {\n      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/blog\",\n        as: \"/blog\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 46\n        }\n      }, __jsx(\"button\", {\n        onClick: function onClick() {},\n        key: tag,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 49\n        }\n      }, tag)));\n    })));\n  }))));\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiYmxvZyIsImFsbFBvc3RzRGF0YSIsInF1ZXJ5IiwidGFnc0FyciIsImZpbHRlciIsInBvc3QiLCJ0YWdzIiwiaW5jbHVkZXMiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFlQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE2QjtBQUFBLE1BQTFCQyxZQUEwQixRQUExQkEsWUFBMEI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDdEMsTUFBTUMsT0FBTyxHQUFHRixZQUFZLENBQUNHLE1BQWIsQ0FBb0IsVUFBQUMsSUFBSSxFQUFJO0FBQzVDLFdBQU9BLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTCxLQUFuQixDQUFQO0FBQ0MsR0FGZSxDQUFoQjtBQUlELFNBQ0MsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsT0FBTyxDQUFDSyxHQUFSLENBQVk7QUFBQSxRQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPQyxJQUFQLFNBQU9BLElBQVA7QUFBQSxRQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxRQUFvQkwsSUFBcEIsU0FBb0JBLElBQXBCO0FBQUEsV0FDWDtBQUFJLFNBQUcsRUFBRUcsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixFQUFaLENBREgsRUFFRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsUUFBRSxtQkFBWUEsRUFBWixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRSxLQUFKLENBREEsQ0FGRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQU1DQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWixDQU5ELEVBT0MsTUFBQyx3REFBRDtBQUFNLGdCQUFVLEVBQUVJLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRCxFQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTUosSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ00sR0FBRDtBQUFBLGFBQ2xCLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsT0FBWjtBQUFxQixVQUFFLEVBQUcsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUc7QUFBUSxlQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUF6QjtBQUEyQixXQUFHLEVBQUVBLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBc0NBLEdBQXRDLENBQUgsQ0FBbkMsQ0FEa0I7QUFBQSxLQUFULENBQU4sQ0FSRCxDQURXO0FBQUEsR0FBWixDQURILENBREosQ0FEQSxDQUREO0FBdUJGLENBNUJEOzs7QUE4QmVkLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUHJvamVjdFRleHQgZnJvbSBcIi4vY29udGVudC9Qcm9qZWN0VGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb250ZW50L2NvbnRlbnQubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGF9IGZyb20gJy4uL2xpYi9wb3N0cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICBjb25zdCBxdWVyeSA9IFwiSmF2YXNjcmlwdFwiXG4gIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgICBxdWVyeSxcbiAgICB9XG4gIH1cbn1cblxuXG5jb25zdCBibG9nID0gKHsgYWxsUG9zdHNEYXRhLCBxdWVyeSB9KSA9PiB7XG4gICAgY29uc3QgdGFnc0FyciA9IGFsbFBvc3RzRGF0YS5maWx0ZXIocG9zdCA9PiB7XG4gICAgcmV0dXJuIHBvc3QudGFncy5pbmNsdWRlcyhxdWVyeSlcbiAgICB9XG4gICk7XG4gICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPHNlY3Rpb24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGFnc0Fyci5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlLCB0YWdzIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGlkKX1cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9baWRdXCIgYXM9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB7Y29uc29sZS5sb2codGFncyl9XG4gICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgICA8ZGl2Pnt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvYmxvZ1wifSBhcyA9e1wiL2Jsb2dcIn0+PGE+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7fX0ga2V5PXt0YWd9Pnt0YWd9PC9idXR0b24+PC9hPjwvTGluaz5cbiAgICAgICAgKSl9PC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBibG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})