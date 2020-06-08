webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _content_ProjectText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/ProjectText */ \"./pages/content/ProjectText.js\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.module.css */ \"./pages/content/content.module.css\");\n/* harmony import */ var _content_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/home/niels/Desktop/new-port/pages/blog.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar blog = function blog(_ref) {\n  var allPostsData = _ref.allPostsData,\n      query = _ref.query;\n  var tagsArr = allPostsData.filter(function (post) {\n    if (query) {\n      return post.tags.includes(query);\n    } else {\n      return post;\n    }\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, tagsArr.map(function (_ref2) {\n    var id = _ref2.id,\n        date = _ref2.date,\n        title = _ref2.title,\n        tags = _ref2.tags;\n    return __jsx(\"li\", {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, console.log(id), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/posts/[id]\",\n      as: \"/posts/\".concat(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }, title)), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 15\n      }\n    }), console.log(tags), __jsx(_components_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      dateString: date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 14\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 14\n      }\n    }, tags.map(function (tag) {\n      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: {\n          pathname: '/blog',\n          query: {\n            tag: \"tag\"\n          }\n        },\n        as: \"/blog\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 81\n        }\n      }, __jsx(\"button\", {\n        key: \"\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 84\n        }\n      }, tag)));\n    })));\n  }))));\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  console.log(router.query);\n  return blog;\n}, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiYmxvZyIsImFsbFBvc3RzRGF0YSIsInF1ZXJ5IiwidGFnc0FyciIsImZpbHRlciIsInBvc3QiLCJ0YWdzIiwiaW5jbHVkZXMiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJ0YWciLCJwYXRobmFtZSIsInJvdXRlciIsInVzZVJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBaUJBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTZCO0FBQUEsTUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN0QyxNQUFNQyxPQUFPLEdBQUdGLFlBQVksQ0FBQ0csTUFBYixDQUFvQixVQUFBQyxJQUFJLEVBQUk7QUFDMUMsUUFBSUgsS0FBSixFQUFVO0FBQ1osYUFBT0csSUFBSSxDQUFDQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJMLEtBQW5CLENBQVA7QUFBaUMsS0FEL0IsTUFFRztBQUFDLGFBQU9HLElBQVA7QUFBWTtBQUNqQixHQUplLENBQWhCO0FBTUQsU0FDQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixPQUFPLENBQUNLLEdBQVIsQ0FBWTtBQUFBLFFBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFFBQU9DLElBQVAsU0FBT0EsSUFBUDtBQUFBLFFBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFFBQW9CTCxJQUFwQixTQUFvQkEsSUFBcEI7QUFBQSxXQUNYO0FBQUksU0FBRyxFQUFFRyxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0csT0FBTyxDQUFDQyxHQUFSLENBQVlKLEVBQVosQ0FESCxFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixRQUFFLG1CQUFZQSxFQUFaLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlFLEtBQUosQ0FEQSxDQUZGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBTUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaLENBTkQsRUFPQyxNQUFDLHdEQUFEO0FBQU0sZ0JBQVUsRUFBRUksSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBELEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNSixJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDTSxHQUFEO0FBQUEsYUFDbEIsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRTtBQUFDQyxrQkFBUSxFQUFFLE9BQVg7QUFBb0JiLGVBQUssRUFBRTtBQUFFWSxlQUFHLEVBQUc7QUFBUjtBQUEzQixTQUFaO0FBQXdELFVBQUUsRUFBRyxPQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRztBQUFRLFdBQUcsRUFBQyxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZ0JBLEdBQWhCLENBQUgsQ0FBdEUsQ0FEa0I7QUFBQSxLQUFULENBQU4sQ0FSRCxDQURXO0FBQUEsR0FBWixDQURILENBREosQ0FEQSxDQUREO0FBdUJGLENBOUJEOzs7QUFnQ2UsOEVBQU07QUFBQTs7QUFDbEIsTUFBTUUsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNITCxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsTUFBTSxDQUFDZCxLQUFuQjtBQUVBLFNBQU9GLElBQVA7QUFDQyxDQUxEO0FBQUEsVUFDa0JpQixxREFEbEI7QUFBQSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFByb2plY3RUZXh0IGZyb20gXCIuL2NvbnRlbnQvUHJvamVjdFRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29udGVudC9jb250ZW50Lm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcbiAgY29uc3QgcXVlcnkgPSBcIlwiXG4gIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgICBxdWVyeSxcbiAgICB9XG4gIH1cbn1cblxuXG5jb25zdCBibG9nID0gKHsgYWxsUG9zdHNEYXRhLCBxdWVyeSB9KSA9PiB7XG4gICAgY29uc3QgdGFnc0FyciA9IGFsbFBvc3RzRGF0YS5maWx0ZXIocG9zdCA9PiB7XG4gICAgICBpZiAocXVlcnkpe1xuICAgIHJldHVybiBwb3N0LnRhZ3MuaW5jbHVkZXMocXVlcnkpfVxuICAgIGVsc2Uge3JldHVybiBwb3N0fVxuICAgIH1cbiAgKTtcbiAgIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0YWdzQXJyLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUsIHRhZ3MgfSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR9PlxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2coaWQpfVxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL1tpZF1cIiBhcz17YC9wb3N0cy8ke2lkfWB9PlxuICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0YWdzKX1cbiAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgICAgIDxkaXY+e3RhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICA8TGluayBocmVmPXt7cGF0aG5hbWU6ICcvYmxvZycsIHF1ZXJ5OiB7IHRhZyA6IFwidGFnXCJ9fX0gYXMgPXtcIi9ibG9nXCJ9PjxhPjxidXR0b24ga2V5PVwiXCI+e3RhZ308L2J1dHRvbj48L2E+PC9MaW5rPlxuICAgICAgICApKX08L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5jb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuXG5yZXR1cm4gYmxvZ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})