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

/***/ "./libs/getTeams.ts":
/*!**************************!*\
  !*** ./libs/getTeams.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTeams\": function() { return /* binding */ getTeams; }\n/* harmony export */ });\n/* harmony import */ var _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar colorMap = {\n    1: {\n        darkColor: '#000000',\n        altColor: '#b40000'\n    },\n    2: {\n        darkColor: '#015095',\n        altColor: '#ED792E'\n    },\n    3: {\n        darkColor: '#89A203',\n        altColor: '#7B5804'\n    },\n    10: {\n        darkColor: '#000000',\n        altColor: '#05205B'\n    },\n    12: {\n        darkColor: '#000000',\n        altColor: '#b40000'\n    },\n    13: {\n        darkColor: '#C10D13',\n        altColor: '#B9975B'\n    },\n    14: {\n        darkColor: '#000000',\n        altColor: '#05205B'\n    },\n    21: {\n        darkColor: '#000000',\n        altColor: '#6F253D'\n    }\n};\nfunction getTeams() {\n    return _getTeams.apply(this, arguments);\n}\nfunction _getTeams() {\n    _getTeams = _asyncToGenerator(_Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var season, teams, response, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, records, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, teamRecords, _args = arguments;\n        return _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    season = _args.length > 0 && _args[0] !== void 0 ? _args[0] : '';\n                    console.log('called here');\n                    teams = [];\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://statsapi.web.nhl.com/api/v1/standings?hydrate=team\");\n                case 6:\n                    response = _ctx.sent;\n                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                    _ctx.prev = 8;\n                    _iterator = response.data.records[Symbol.iterator]();\n                case 10:\n                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                        _ctx.next = 32;\n                        break;\n                    }\n                    records = _step.value;\n                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n                    _ctx.prev = 13;\n                    for(_iterator1 = records.teamRecords[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n                        teamRecords = _step1.value;\n                        teams.push(_objectSpread({\n                            id: teamRecords.team.id,\n                            abbreviation: teamRecords.team.abbreviation,\n                            name: teamRecords.team.teamName,\n                            location: teamRecords.team.locationName,\n                            leagueRank: parseInt(teamRecords.leagueRank, 10),\n                            wins: teamRecords.leagueRecord.wins,\n                            losses: teamRecords.leagueRecord.losses,\n                            ot: teamRecords.leagueRecord.ot,\n                            points: teamRecords.points\n                        }, colorMap[teamRecords.team.id] || {\n                            darkColor: '#000000',\n                            altColor: '#FFFFFF'\n                        }));\n                    }\n                    _ctx.next = 21;\n                    break;\n                case 17:\n                    _ctx.prev = 17;\n                    _ctx.t0 = _ctx[\"catch\"](13);\n                    _didIteratorError1 = true;\n                    _iteratorError1 = _ctx.t0;\n                case 21:\n                    _ctx.prev = 21;\n                    _ctx.prev = 22;\n                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                        _iterator1.return();\n                    }\n                case 24:\n                    _ctx.prev = 24;\n                    if (!_didIteratorError1) {\n                        _ctx.next = 27;\n                        break;\n                    }\n                    throw _iteratorError1;\n                case 27:\n                    return _ctx.finish(24);\n                case 28:\n                    return _ctx.finish(21);\n                case 29:\n                    _iteratorNormalCompletion = true;\n                    _ctx.next = 10;\n                    break;\n                case 32:\n                    _ctx.next = 38;\n                    break;\n                case 34:\n                    _ctx.prev = 34;\n                    _ctx.t1 = _ctx[\"catch\"](8);\n                    _didIteratorError = true;\n                    _iteratorError = _ctx.t1;\n                case 38:\n                    _ctx.prev = 38;\n                    _ctx.prev = 39;\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                case 41:\n                    _ctx.prev = 41;\n                    if (!_didIteratorError) {\n                        _ctx.next = 44;\n                        break;\n                    }\n                    throw _iteratorError;\n                case 44:\n                    return _ctx.finish(41);\n                case 45:\n                    return _ctx.finish(38);\n                case 46:\n                    _ctx.next = 51;\n                    break;\n                case 48:\n                    _ctx.prev = 48;\n                    _ctx.t2 = _ctx[\"catch\"](3);\n                    console.log(_ctx.t2);\n                case 51:\n                    return _ctx.abrupt(\"return\", teams.sort(function(a, b) {\n                        return a.leagueRank > b.leagueRank ? 1 : -1;\n                    }));\n                case 52:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                48\n            ],\n            [\n                8,\n                34,\n                38,\n                46\n            ],\n            [\n                13,\n                17,\n                21,\n                29\n            ],\n            [\n                22,\n                ,\n                24,\n                28\n            ],\n            [\n                39,\n                ,\n                41,\n                45\n            ]\n        ]);\n    }));\n    return _getTeams.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTs0QkFDdkNDLEVBQUUsRUFBRWxCLFdBQVcsQ0FBQ2dCLFlBQVksQ0FBQ0UsRUFBRTs0QkFDL0JDLE1BQU0sRUFBRW5CLFdBQVcsQ0FBQ21CLE1BQU07MkJBQ3RCM0IsUUFBUSxDQUFDUSxXQUFXLENBQUNPLElBQUksQ0FBQ0QsRUFBRSxLQUFLLENBQUNiOzRCQUFBQSxTQUFTLEVBQUUsQ0FBUzs0QkFBRUMsUUFBUSxFQUFFLENBQVM7d0JBQUEsQ0FBQztvQkFFcEYsQ0FBQzs7Ozs7O29CQWJJLGtCQUFpQjtvQkFBakIsZUFBaUI7Ozs7eUJBQWpCLDBCQUFpQixJQUFqQixVQUFpQjt3QkFBakIsVUFBaUI7Ozs7eUJBQWpCLGtCQUFpQjs7OzswQkFBakIsZUFBaUI7Ozs7OztvQkFEbkIseUJBQWE7Ozs7Ozs7OztvQkFBYixpQkFBYTtvQkFBYixjQUFhOzs7O3lCQUFiLHlCQUFhLElBQWIsU0FBYTt3QkFBYixTQUFhOzs7O3lCQUFiLGlCQUFhOzs7OzBCQUFiLGNBQWE7Ozs7Ozs7Ozs7O29CQWlCbEJPLE9BQU8sQ0FBQ0MsR0FBRzs7aURBR05MLEtBQUssQ0FBQ3VCLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQzt3QkFBS0QsTUFBTSxDQUFOQSxDQUFDLENBQUNSLFVBQVUsR0FBR1MsQ0FBQyxDQUFDVCxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNsRSxDQUFDO1dBNUJxQmxCLFNBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9nZXRUZWFtcy50cz9jMWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgY29sb3JNYXAgPSB7XG4gIDE6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjYjQwMDAwJ30sXG4gIDI6IHtkYXJrQ29sb3I6ICcjMDE1MDk1JywgYWx0Q29sb3I6ICcjRUQ3OTJFJ30sXG4gIDM6IHtkYXJrQ29sb3I6ICcjODlBMjAzJywgYWx0Q29sb3I6ICcjN0I1ODA0J30sXG4gIDEwOiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzA1MjA1Qid9LFxuICAxMjoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyNiNDAwMDAnfSxcbiAgMTM6IHtkYXJrQ29sb3I6ICcjQzEwRDEzJywgYWx0Q29sb3I6ICcjQjk5NzVCJ30sXG4gIDE0OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzA1MjA1Qid9LFxuICAyMToge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyM2RjI1M0QnfSxcbn1cblxuZXhwb3J0IHR5cGUgVGVhbSA9IHtcbiAgaWQ6IG51bWJlclxuICBhYmJyZXZpYXRpb246IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgbG9jYXRpb246IHN0cmluZ1xuICBsZWFndWVSYW5rOiBudW1iZXJcbiAgd2luczogbnVtYmVyXG4gIGxvc3NlczogbnVtYmVyXG4gIG90OiBudW1iZXJcbiAgcG9pbnRzOiBudW1iZXJcbiAgZGFya0NvbG9yOiBzdHJpbmdcbiAgYWx0Q29sb3I6IHN0cmluZ1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZWFtcyhzZWFzb246IHN0cmluZyA9ICcnKTogUHJvbWlzZTxUZWFtW10+IHtcbiAgY29uc29sZS5sb2coJ2NhbGxlZCBoZXJlJylcbiAgY29uc3QgdGVhbXM6IFRlYW1bXSA9IFtdXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9zdGF0c2FwaS53ZWIubmhsLmNvbS9hcGkvdjEvc3RhbmRpbmdzP2h5ZHJhdGU9dGVhbWApXG5cbiAgICBmb3IgKGNvbnN0IHJlY29yZHMgb2YgcmVzcG9uc2UuZGF0YS5yZWNvcmRzKSB7XG4gICAgICBmb3IgKGNvbnN0IHRlYW1SZWNvcmRzIG9mIHJlY29yZHMudGVhbVJlY29yZHMpIHtcbiAgICAgICAgdGVhbXMucHVzaCh7XG4gICAgICAgICAgaWQ6IHRlYW1SZWNvcmRzLnRlYW0uaWQsXG4gICAgICAgICAgYWJicmV2aWF0aW9uOiB0ZWFtUmVjb3Jkcy50ZWFtLmFiYnJldmlhdGlvbixcbiAgICAgICAgICBuYW1lOiB0ZWFtUmVjb3Jkcy50ZWFtLnRlYW1OYW1lLFxuICAgICAgICAgIGxvY2F0aW9uOiB0ZWFtUmVjb3Jkcy50ZWFtLmxvY2F0aW9uTmFtZSxcbiAgICAgICAgICBsZWFndWVSYW5rOiBwYXJzZUludCh0ZWFtUmVjb3Jkcy5sZWFndWVSYW5rLCAxMCksXG4gICAgICAgICAgd2luczogdGVhbVJlY29yZHMubGVhZ3VlUmVjb3JkLndpbnMsXG4gICAgICAgICAgbG9zc2VzOiB0ZWFtUmVjb3Jkcy5sZWFndWVSZWNvcmQubG9zc2VzLFxuICAgICAgICAgIG90OiB0ZWFtUmVjb3Jkcy5sZWFndWVSZWNvcmQub3QsXG4gICAgICAgICAgcG9pbnRzOiB0ZWFtUmVjb3Jkcy5wb2ludHMsXG4gICAgICAgICAgLi4uKGNvbG9yTWFwW3RlYW1SZWNvcmRzLnRlYW0uaWRdIHx8IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjRkZGRkZGJ30pLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH1cblxuICByZXR1cm4gdGVhbXMuc29ydCgoYSwgYikgPT4gYS5sZWFndWVSYW5rID4gYi5sZWFndWVSYW5rID8gMSA6IC0xKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiY29sb3JNYXAiLCJkYXJrQ29sb3IiLCJhbHRDb2xvciIsImdldFRlYW1zIiwic2Vhc29uIiwidGVhbXMiLCJyZXNwb25zZSIsInJlY29yZHMiLCJ0ZWFtUmVjb3JkcyIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJkYXRhIiwicHVzaCIsImlkIiwidGVhbSIsImFiYnJldmlhdGlvbiIsIm5hbWUiLCJ0ZWFtTmFtZSIsImxvY2F0aW9uIiwibG9jYXRpb25OYW1lIiwibGVhZ3VlUmFuayIsInBhcnNlSW50Iiwid2lucyIsImxlYWd1ZVJlY29yZCIsImxvc3NlcyIsIm90IiwicG9pbnRzIiwic29ydCIsImEiLCJiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/getTeams.ts\n");

/***/ })

});