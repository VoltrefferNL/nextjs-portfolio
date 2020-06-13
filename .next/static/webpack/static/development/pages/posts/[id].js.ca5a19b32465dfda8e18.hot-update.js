webpackHotUpdate("static/development/pages/posts/[id].js",{

/***/ "./components/Menu/Navbar.js":
/*!***********************************!*\
  !*** ./components/Menu/Navbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/Menu/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/Menu */ \"./data/Menu.js\");\n/* harmony import */ var _MobileMenuLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileMenuLayout */ \"./components/Menu/MobileMenuLayout.js\");\nvar _jsxFileName = \"/home/niels/Desktop/new-port/components/Menu/Navbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction Navbar() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      activeHam = _useState2[0],\n      setHamburger = _useState2[1];\n\n  var mobileMenu;\n\n  if (showMenu) {\n    mobileMenu = __jsx(\"div\", {\n      className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu_white,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 16\n      }\n    }, __jsx(_MobileMenuLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 3\n      }\n    }));\n  }\n\n  return __jsx(\"header\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header_Wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.div_top_hypers,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo_left,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, \"NdV\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }), __jsx(\"ul\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ul_top_hypers,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, _data_Menu__WEBPACK_IMPORTED_MODULE_3__[\"menuLinks\"].map(function (_ref) {\n    var path = _ref.path,\n        name = _ref.name;\n    return __jsx(\"li\", {\n      key: name,\n      className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hoverMenuLink,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      href: path,\n      as: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }\n    }, name)));\n  }))), __jsx(\"div\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu_right,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 8\n    }\n  }, __jsx(\"span\", {\n    onClick: function onClick() {\n      setShowMenu(!showMenu);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 43\n    }\n  }, __jsx(\"i\", {\n    className: \"fa fa-bars\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 8\n    }\n  }))), __jsx(\"div\", {\n    className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blur,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 8\n    }\n  }, mobileMenu));\n}\n\n_s(Navbar, \"8KbaHTXZZN76o30/Ckx1U4t3uG8=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUvTmF2YmFyLmpzP2MwMDciXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwiYWN0aXZlSGFtIiwic2V0SGFtYnVyZ2VyIiwibW9iaWxlTWVudSIsInN0eWxlcyIsIm1lbnVfd2hpdGUiLCJoZWFkZXJfV3JhcHBlciIsImRpdl90b3BfaHlwZXJzIiwibG9nb19sZWZ0IiwidWxfdG9wX2h5cGVycyIsIm1lbnVMaW5rcyIsIm1hcCIsInBhdGgiLCJuYW1lIiwiaG92ZXJNZW51TGluayIsIm1lbnVfcmlnaHQiLCJibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsS0FBRCxDQUR0QjtBQUFBLE1BQ1hDLFFBRFc7QUFBQSxNQUNEQyxXQURDOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxLQUFELENBRnhCO0FBQUEsTUFFWEcsU0FGVztBQUFBLE1BRUFDLFlBRkE7O0FBSWxCLE1BQUlDLFVBQUo7O0FBQ0EsTUFBSUosUUFBSixFQUFhO0FBQ1hJLGNBQVUsR0FBRztBQUFLLGVBQVMsRUFBRUMseURBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNiLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURhLENBQWI7QUFHRDs7QUFFRCxTQUVFO0FBQVEsYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxjQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUVGLHlEQUFNLENBQUNHLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgseURBQU0sQ0FBQ0ksU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSSxhQUFTLEVBQUVKLHlEQUFNLENBQUNLLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUUMsb0RBQVMsQ0FBQ0MsR0FBVixDQUFjO0FBQUEsUUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsUUFBUUMsSUFBUixRQUFRQSxJQUFSO0FBQUEsV0FDcEI7QUFBSSxTQUFHLEVBQUVBLElBQVQ7QUFBZSxlQUFTLEVBQUVULHlEQUFNLENBQUNVLGFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRixJQUFaO0FBQWtCLFFBQUUsRUFBRUEsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUMsSUFBSixDQURGLENBREYsQ0FEb0I7QUFBQSxHQUFkLENBRFIsQ0FIRixDQURBLEVBZUs7QUFBSyxhQUFTLEVBQUVULHlEQUFNLENBQUNXLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUM7QUFBTSxXQUFPLEVBQUUsbUJBQU07QUFBQ2YsaUJBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFBdUIsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNuQztBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbUMsQ0FBbkMsQ0FmTCxFQW1CSztBQUFLLGFBQVMsRUFBRUsseURBQU0sQ0FBQ1ksSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBYixVQURBLENBbkJMLENBRkY7QUE0QlU7O0dBdkNETixNOztLQUFBQSxNO0FBd0NNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtZW51TGlua3MgfSBmcm9tIFwiLi4vLi4vZGF0YS9NZW51XCJcbmltcG9ydCBNb2JpbGVNZW51TGF5b3V0IGZyb20gXCIuL01vYmlsZU1lbnVMYXlvdXRcIjtcblxuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG5jb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IFthY3RpdmVIYW0sIHNldEhhbWJ1cmdlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxubGV0IG1vYmlsZU1lbnVcbmlmIChzaG93TWVudSl7XG4gIG1vYmlsZU1lbnUgPSA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVfd2hpdGV9PlxuICA8TW9iaWxlTWVudUxheW91dCAvPlxuICAgIDwvZGl2PiBcbn1cblxucmV0dXJuIChcbiAgXG4gIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX1dyYXBwZXJ9PlxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdl90b3BfaHlwZXJzfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29fbGVmdH0+TmRWPC9kaXY+XG4gICAgPGRpdj48L2Rpdj5cbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudWxfdG9wX2h5cGVyc30+XG4gICAgICAgICAgIHttZW51TGlua3MubWFwKCh7cGF0aCwgbmFtZX0pID0+IChcbiAgICAgIDxsaSBrZXk9e25hbWV9IGNsYXNzTmFtZT17c3R5bGVzLmhvdmVyTWVudUxpbmt9PlxuICAgICAgICA8TGluayBocmVmPXtwYXRofSBhcz17cGF0aH0+XG4gICAgICAgICAgPGE+e25hbWV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuXG4gICAgICkpfSBcbiAgICAgIDwvdWw+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51X3JpZ2h0fT48c3BhbiBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd01lbnUoIXNob3dNZW51KX19PlxuICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+ICAgICAgICBcbiAgICAgICA8L3NwYW4+PC9kaXY+XG4gICAgICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibHVyfT4gXG4gICAgICB7bW9iaWxlTWVudX1cbiAgICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbiAgKVxuICBcblxuICAgICAgICAgfVxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu/Navbar.js\n");

/***/ }),

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/create-react-class/factory.js":
false,

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
false,

/***/ "./node_modules/fbjs/lib/emptyObject.js":
false,

/***/ "./node_modules/fbjs/lib/invariant.js":
false,

/***/ "./node_modules/fbjs/lib/warning.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types/factory.js":
false,

/***/ "./node_modules/react-hamburgers/dist/hamburger.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/KeyEscapeUtils.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/PooledClass.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/React.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactBaseClasses.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactChildren.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactComponentTreeHook.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactCurrentOwner.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactDOMFactories.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactElement.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactElementSymbol.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactElementValidator.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactNoopUpdateQueue.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactPropTypeLocationNames.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactPropTypes.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactVersion.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/canDefineProperty.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/checkReactTypeSpec.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/createClass.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/getIteratorFn.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/lowPriorityWarning.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/onlyChild.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/reactProdInvariant.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/traverseAllChildren.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/react.js":
false

})