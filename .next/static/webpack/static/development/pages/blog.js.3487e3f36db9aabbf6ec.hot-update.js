webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _content_ProjectText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/ProjectText */ \"./pages/content/ProjectText.js\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.module.css */ \"./pages/content/content.module.css\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/home/niels/Desktop/new-port/pages/blog.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar blog = function blog(_ref) {\n  var allPostsData = _ref.allPostsData,\n      query = _ref.query;\n  var tagsArr = allPostsData.filter(function (post) {\n    if (query) {\n      return post.tags.includes(query);\n    } else {\n      return post;\n    }\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, tagsArr.map(function (_ref2) {\n    var id = _ref2.id,\n        date = _ref2.date,\n        title = _ref2.title,\n        tags = _ref2.tags;\n    return __jsx(\"li\", {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, console.log(id), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/posts/[id]\",\n      as: \"/posts/\".concat(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }, title)), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 15\n      }\n    }), console.log(tags), __jsx(_components_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      dateString: date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 14\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 14\n      }\n    }, tags.map(function (tag) {\n      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: {\n          pathname: '/blog',\n          query: {\n            \"tag\": tag\n          }\n        },\n        as: \"/blog\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 81\n        }\n      }, __jsx(\"button\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 84\n        }\n      }, tag)));\n    })));\n  }))));\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (blog) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  console.log(router.query);\n}, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiYmxvZyIsImFsbFBvc3RzRGF0YSIsInF1ZXJ5IiwidGFnc0FyciIsImZpbHRlciIsInBvc3QiLCJ0YWdzIiwiaW5jbHVkZXMiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJ0YWciLCJwYXRobmFtZSIsInJvdXRlciIsInVzZVJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBaUJBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTZCO0FBQUEsTUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN0QyxNQUFNQyxPQUFPLEdBQUdGLFlBQVksQ0FBQ0csTUFBYixDQUFvQixVQUFBQyxJQUFJLEVBQUk7QUFDMUMsUUFBSUgsS0FBSixFQUFVO0FBQ1osYUFBT0csSUFBSSxDQUFDQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJMLEtBQW5CLENBQVA7QUFBaUMsS0FEL0IsTUFFRztBQUFDLGFBQU9HLElBQVA7QUFBWTtBQUNqQixHQUplLENBQWhCO0FBTUQsU0FDQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixPQUFPLENBQUNLLEdBQVIsQ0FBWTtBQUFBLFFBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFFBQU9DLElBQVAsU0FBT0EsSUFBUDtBQUFBLFFBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFFBQW9CTCxJQUFwQixTQUFvQkEsSUFBcEI7QUFBQSxXQUNYO0FBQUksU0FBRyxFQUFFRyxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0csT0FBTyxDQUFDQyxHQUFSLENBQVlKLEVBQVosQ0FESCxFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixRQUFFLG1CQUFZQSxFQUFaLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlFLEtBQUosQ0FEQSxDQUZGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBTUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaLENBTkQsRUFPQyxNQUFDLHdEQUFEO0FBQU0sZ0JBQVUsRUFBRUksSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBELEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNSixJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDTSxHQUFEO0FBQUEsYUFDbEIsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRTtBQUFDQyxrQkFBUSxFQUFFLE9BQVg7QUFBb0JiLGVBQUssRUFBRTtBQUFFLG1CQUFRWTtBQUFWO0FBQTNCLFNBQVo7QUFBd0QsVUFBRSxFQUFHLE9BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBc0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBU0EsR0FBVCxDQUFILENBQXRFLENBRGtCO0FBQUEsS0FBVCxDQUFOLENBUkQsQ0FEVztBQUFBLEdBQVosQ0FESCxDQURKLENBREEsQ0FERDtBQXVCRixDQTlCRDs7O0FBZ0NlLDRFQUFBZCxJQUFJLEVBQUk7QUFBQTs7QUFDbkIsTUFBTWdCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDSkwsU0FBTyxDQUFDQyxHQUFSLENBQVlHLE1BQU0sQ0FBQ2QsS0FBbkI7QUFHQyxDQUxEO0FBQUEsVUFDbUJlLHFEQURuQjtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUHJvamVjdFRleHQgZnJvbSBcIi4vY29udGVudC9Qcm9qZWN0VGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb250ZW50L2NvbnRlbnQubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGF9IGZyb20gJy4uL2xpYi9wb3N0cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICBjb25zdCBxdWVyeSA9IFwiXCJcbiAgY29uc29sZS5sb2cocXVlcnkpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YSxcbiAgICAgIHF1ZXJ5LFxuICAgIH1cbiAgfVxufVxuXG5cbmNvbnN0IGJsb2cgPSAoeyBhbGxQb3N0c0RhdGEsIHF1ZXJ5IH0pID0+IHtcbiAgICBjb25zdCB0YWdzQXJyID0gYWxsUG9zdHNEYXRhLmZpbHRlcihwb3N0ID0+IHtcbiAgICAgIGlmIChxdWVyeSl7XG4gICAgcmV0dXJuIHBvc3QudGFncy5pbmNsdWRlcyhxdWVyeSl9XG4gICAgZWxzZSB7cmV0dXJuIHBvc3R9XG4gICAgfVxuICApO1xuICAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RhZ3NBcnIubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSwgdGFncyB9KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhpZCl9XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvW2lkXVwiIGFzPXtgL3Bvc3RzLyR7aWR9YH0+XG4gICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAge2NvbnNvbGUubG9nKHRhZ3MpfVxuICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgICAgICAgPGRpdj57dGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTogJy9ibG9nJywgcXVlcnk6IHsgXCJ0YWdcIiA6IHRhZ319fSBhcyA9e1wiL2Jsb2dcIn0+PGE+PGJ1dHRvbj57dGFnfTwvYnV0dG9uPjwvYT48L0xpbms+XG4gICAgICAgICkpfTwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYmxvZyA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbmNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XG5cblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})