"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/global.css */ \"./css/global.css\");\n/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_logos_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logos.svg */ \"./assets/logos.svg\");\n/* harmony import */ var _libs_getTeams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/getTeams */ \"./libs/getTeams.ts\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps, teams = param.teams;\n    console.log(teams);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps, teams), void 0, false, {\n                fileName: \"/Volumes/Extras/websites/nhl-stats/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: _assets_logos_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].content\n                }\n            }, void 0, false, {\n                fileName: \"/Volumes/Extras/websites/nhl-stats/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = MyApp;\nMyApp.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(_Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var Component, ctx, teams, pageProps;\n        return _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    Component = param.Component, ctx = param.ctx;\n                    _ctx.next = 3;\n                    return (0,_libs_getTeams__WEBPACK_IMPORTED_MODULE_4__.getTeams)();\n                case 3:\n                    teams = _ctx.sent;\n                    pageProps = {};\n                    if (!Component.getInitialProps) {\n                        _ctx.next = 9;\n                        break;\n                    }\n                    _ctx.next = 8;\n                    return Component.getInitialProps(ctx);\n                case 8:\n                    pageProps = _ctx.sent;\n                case 9:\n                    return _ctx.abrupt(\"return\", {\n                        pageProps: pageProps,\n                        teams: teams\n                    });\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n})();\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsUUFBUSxDQUFDRSxLQUFLLENBQUMsS0FBK0IsRUFBRSxDQUFDO1FBQWhDQyxTQUFTLEdBQVgsS0FBK0IsQ0FBN0JBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUErQixDQUFsQkEsU0FBUyxFQUFFQyxLQUFLLEdBQTdCLEtBQStCLENBQVBBLEtBQUs7SUFDekRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBQ2pCLE1BQU07O3dGQUVERixTQUFTLG9CQUFLQyxTQUFTLEVBQU1DLEtBQUs7Ozs7O3dGQUNsQ0csQ0FBRztnQkFBQ0MsdUJBQXVCLEVBQUUsQ0FBQ0M7b0JBQUFBLE1BQU0sRUFBRVYsaUVBQWE7Z0JBQUEsQ0FBQzs7Ozs7Ozs7QUFHM0QsQ0FBQztLQVJ1QkUsS0FBSztBQVU3QkEsS0FBSyxDQUFDVSxlQUFlOytLQUFHLFFBQVEsZ0JBQXNCLENBQUM7WUFBdEJULFNBQVMsRUFBRVUsR0FBRyxFQUN2Q1IsS0FBSyxFQUNQRCxTQUFTOzs7O29CQUZrQkQsU0FBUyxTQUFUQSxTQUFTLEVBQUVVLEdBQUcsU0FBSEEsR0FBRzs7MkJBQ3pCWix3REFBUTs7b0JBQXRCSSxLQUFLO29CQUNQRCxTQUFTLEdBQUcsQ0FBQyxDQUFDO3lCQUNkRCxTQUFTLENBQUNTLGVBQWU7Ozs7OzJCQUNUVCxTQUFTLENBQUNTLGVBQWUsQ0FBQ0MsR0FBRzs7b0JBQS9DVCxTQUFTOztpREFFSixDQUFDO3dCQUFDQSxTQUFTLEVBQVRBLFNBQVM7d0JBQUVDLEtBQUssRUFBTEEsS0FBSztvQkFBQyxDQUFDOzs7Ozs7SUFDN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL2dsb2JhbC5jc3MnXG5pbXBvcnQgbG9nb3MgZnJvbSAnLi4vYXNzZXRzL2xvZ29zLnN2ZydcbmltcG9ydCB7IGdldFRlYW1zIH0gZnJvbSAnLi4vbGlicy9nZXRUZWFtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHRlYW1zIH0pIHtcbiAgY29uc29sZS5sb2codGVhbXMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gey4uLnRlYW1zfSAvPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbG9nb3MuY29udGVudH19PjwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcbiAgY29uc3QgdGVhbXMgPSBhd2FpdCBnZXRUZWFtcygpXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gIH1cbiAgcmV0dXJuIHsgcGFnZVByb3BzLCB0ZWFtcyB9O1xufTtcbiJdLCJuYW1lcyI6WyJsb2dvcyIsImdldFRlYW1zIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0ZWFtcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});