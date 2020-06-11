webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/blog.module.css */ \"./styles/blog.module.css\");\n/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_blogline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/blogline */ \"./components/blogline.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/niels/Desktop/new-port/pages/blog.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar blog = function blog(_ref) {\n  _s();\n\n  var allPostsData = _ref.allPostsData;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var tag = router.query.tag;\n  var tagsArr = allPostsData.filter(function (post) {\n    if (tag) {\n      console.log(typeof post);\n      return post.tags.includes(tag);\n    } else {\n      return post;\n    }\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    className: _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.blog_container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, tag ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, __jsx(\"center\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 20\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 28\n    }\n  }, \" \", __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 33\n    }\n  }, tag), \" Related Posts\"))) : \"\", __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(_components_blogline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    tagsArr: tagsArr,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(blog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiYmxvZyIsImFsbFBvc3RzRGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInRhZyIsInF1ZXJ5IiwidGFnc0FyciIsImZpbHRlciIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwidGFncyIsImluY2x1ZGVzIiwic3R5bGVzIiwiYmxvZ19jb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBY0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEaUMsTUFFMUJDLEdBRjBCLEdBRW5CRixNQUFNLENBQUNHLEtBRlksQ0FFMUJELEdBRjBCO0FBRy9CLE1BQU1FLE9BQU8sR0FBR0wsWUFBWSxDQUFDTSxNQUFiLENBQW9CLFVBQUFDLElBQUksRUFBSTtBQUMxQyxRQUFJSixHQUFKLEVBQVE7QUFDTkssYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBT0YsSUFBbkI7QUFDSixhQUFPQSxJQUFJLENBQUNHLElBQUwsQ0FBVUMsUUFBVixDQUFtQlIsR0FBbkIsQ0FBUDtBQUNELEtBSEcsTUFJRztBQUNILGFBQU9JLElBQVA7QUFDQztBQUNGLEdBUmUsQ0FBaEI7QUFVRCxTQUNDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQVMsYUFBUyxFQUFFSyw4REFBTSxDQUFDQyxjQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUdWLEdBQUcsR0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlBLEdBQUosQ0FBTCxtQkFBUixDQUFMLENBQUosR0FBdUUsRUFGN0UsRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUUsTUFBQyw0REFBRDtBQUFVLFdBQU8sRUFBRUUsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBSEosQ0FEQSxDQUREO0FBdUJGLENBcENEOztHQUFNTixJO1VBQ1dHLHFEOzs7O0FBcUNGSCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYmxvZy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBCbG9nbGluZSBmcm9tIFwiLi4vY29tcG9uZW50cy9ibG9nbGluZVwiO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcbiAgICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEgICAgICBcbiAgICB9XG4gIH1cbn1cblxuXG5cbmNvbnN0IGJsb2cgPSAoeyBhbGxQb3N0c0RhdGEgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7dGFnfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnN0IHRhZ3NBcnIgPSBhbGxQb3N0c0RhdGEuZmlsdGVyKHBvc3QgPT4ge1xuICAgICAgaWYgKHRhZyl7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZihwb3N0KSkgXG4gICAgcmV0dXJuIHBvc3QudGFncy5pbmNsdWRlcyh0YWcpXG4gIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBwb3N0XG4gICAgICB9XG4gICAgfVxuICApO1xuICAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJsb2dfY29udGFpbmVyfT5cbiAgICAgIFxuICAgICAge3RhZyA/ICA8ZGl2PjxjZW50ZXI+PGg0PiA8dT57dGFnfTwvdT4gUmVsYXRlZCBQb3N0czwvaDQ+PC9jZW50ZXI+PC9kaXY+IDogXCJcIn1cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHsvKiB7dGFnc0Fyci5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlLCB0YWdzIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9baWRdXCIgYXM9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgICA8ZGl2Pnt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17e3BhdGhuYW1lOiAnL2Jsb2cnLCBxdWVyeTogeyBcInRhZ1wiIDogdGFnfX19IGFzID17XCIvYmxvZ1wifSBrZXk9e3RhZ30+PGE+PGJ1dHRvbj57dGFnfTwvYnV0dG9uPjwvYT48L0xpbms+XG4gICAgICAgICkpfTwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX0gKi99XG4gICAgICAgICAgPEJsb2dsaW5lIHRhZ3NBcnI9e3RhZ3NBcnJ9Lz5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYmxvZ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})