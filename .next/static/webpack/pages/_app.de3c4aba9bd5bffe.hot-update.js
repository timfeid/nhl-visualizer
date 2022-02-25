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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTeams\": function() { return /* binding */ getTeams; }\n/* harmony export */ });\n/* harmony import */ var _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar colorMap = {\n    1: {\n        darkColor: '#000000',\n        altColor: '#b40000'\n    },\n    2: {\n        darkColor: '#015095',\n        altColor: '#ED792E'\n    },\n    3: {\n        darkColor: '#89A203',\n        altColor: '#7B5804'\n    },\n    5: {\n        darkColor: '#000000',\n        altColor: '#FFB71B'\n    },\n    6: {\n        darkColor: '#000000',\n        altColor: '#FFB71B'\n    },\n    10: {\n        darkColor: '#000000',\n        altColor: '#05205B'\n    },\n    12: {\n        darkColor: '#000000',\n        altColor: '#b40000'\n    },\n    13: {\n        darkColor: '#000000',\n        altColor: '#B9975B'\n    },\n    14: {\n        darkColor: '#000000',\n        altColor: '#05205B'\n    },\n    15: {\n        darkColor: '#000000',\n        altColor: '#A30F24'\n    },\n    18: {\n        darkColor: '#000000',\n        altColor: '#FFB71B'\n    },\n    19: {\n        darkColor: '#000000',\n        altColor: '#013087'\n    },\n    20: {\n        darkColor: '#000000',\n        altColor: '#C8112E'\n    },\n    21: {\n        darkColor: '#000000',\n        altColor: '#6F253D'\n    },\n    22: {\n        darkColor: '#000000',\n        altColor: '#FC4C07'\n    },\n    24: {\n        darkColor: '#000000',\n        altColor: '#B9975B'\n    },\n    25: {\n        darkColor: '#000000',\n        altColor: '#035D3D'\n    },\n    30: {\n        darkColor: '#000000',\n        altColor: '#144734'\n    },\n    54: {\n        darkColor: '#000000',\n        altColor: '#B9975B'\n    }\n};\nfunction getTeams() {\n    return _getTeams.apply(this, arguments);\n}\nfunction _getTeams() {\n    _getTeams = _asyncToGenerator(_Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var season, teams, response, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, records, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, teamRecords, _args = arguments;\n        return _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    season = _args.length > 0 && _args[0] !== void 0 ? _args[0] : '';\n                    console.log('called here');\n                    teams = [];\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://statsapi.web.nhl.com/api/v1/standings?hydrate=team\");\n                case 6:\n                    response = _ctx.sent;\n                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                    _ctx.prev = 8;\n                    _iterator = response.data.records[Symbol.iterator]();\n                case 10:\n                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                        _ctx.next = 32;\n                        break;\n                    }\n                    records = _step.value;\n                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n                    _ctx.prev = 13;\n                    for(_iterator1 = records.teamRecords[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n                        teamRecords = _step1.value;\n                        teams.push(_objectSpread({\n                            id: teamRecords.team.id,\n                            abbreviation: teamRecords.team.abbreviation,\n                            name: teamRecords.team.teamName,\n                            location: teamRecords.team.locationName,\n                            leagueRank: parseInt(teamRecords.leagueRank, 10),\n                            wins: teamRecords.leagueRecord.wins,\n                            losses: teamRecords.leagueRecord.losses,\n                            ot: teamRecords.leagueRecord.ot,\n                            points: teamRecords.points\n                        }, colorMap[teamRecords.team.id] || {\n                            darkColor: '#000000',\n                            altColor: '#FFFFFF'\n                        }));\n                    }\n                    _ctx.next = 21;\n                    break;\n                case 17:\n                    _ctx.prev = 17;\n                    _ctx.t0 = _ctx[\"catch\"](13);\n                    _didIteratorError1 = true;\n                    _iteratorError1 = _ctx.t0;\n                case 21:\n                    _ctx.prev = 21;\n                    _ctx.prev = 22;\n                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                        _iterator1.return();\n                    }\n                case 24:\n                    _ctx.prev = 24;\n                    if (!_didIteratorError1) {\n                        _ctx.next = 27;\n                        break;\n                    }\n                    throw _iteratorError1;\n                case 27:\n                    return _ctx.finish(24);\n                case 28:\n                    return _ctx.finish(21);\n                case 29:\n                    _iteratorNormalCompletion = true;\n                    _ctx.next = 10;\n                    break;\n                case 32:\n                    _ctx.next = 38;\n                    break;\n                case 34:\n                    _ctx.prev = 34;\n                    _ctx.t1 = _ctx[\"catch\"](8);\n                    _didIteratorError = true;\n                    _iteratorError = _ctx.t1;\n                case 38:\n                    _ctx.prev = 38;\n                    _ctx.prev = 39;\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                case 41:\n                    _ctx.prev = 41;\n                    if (!_didIteratorError) {\n                        _ctx.next = 44;\n                        break;\n                    }\n                    throw _iteratorError;\n                case 44:\n                    return _ctx.finish(41);\n                case 45:\n                    return _ctx.finish(38);\n                case 46:\n                    _ctx.next = 51;\n                    break;\n                case 48:\n                    _ctx.prev = 48;\n                    _ctx.t2 = _ctx[\"catch\"](3);\n                    console.log(_ctx.t2);\n                case 51:\n                    return _ctx.abrupt(\"return\", teams.sort(function(a, b) {\n                        return a.leagueRank > b.leagueRank ? 1 : -1;\n                    }));\n                case 52:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                48\n            ],\n            [\n                8,\n                34,\n                38,\n                46\n            ],\n            [\n                13,\n                17,\n                21,\n                29\n            ],\n            [\n                22,\n                ,\n                24,\n                28\n            ],\n            [\n                39,\n                ,\n                41,\n                45\n            ]\n        ]);\n    }));\n    return _getTeams.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzJCQUN0QjNCLFFBQVEsQ0FBQ1EsV0FBVyxDQUFDTyxJQUFJLENBQUNELEVBQUUsS0FBSyxDQUFDYjs0QkFBQUEsU0FBUyxFQUFFLENBQVM7NEJBQUVDLFFBQVEsRUFBRSxDQUFTO3dCQUFBLENBQUM7b0JBRXBGLENBQUM7Ozs7OztvQkFiSSxrQkFBaUI7b0JBQWpCLGVBQWlCOzs7O3lCQUFqQiwwQkFBaUIsSUFBakIsVUFBaUI7d0JBQWpCLFVBQWlCOzs7O3lCQUFqQixrQkFBaUI7Ozs7MEJBQWpCLGVBQWlCOzs7Ozs7b0JBRG5CLHlCQUFhOzs7Ozs7Ozs7b0JBQWIsaUJBQWE7b0JBQWIsY0FBYTs7Ozt5QkFBYix5QkFBYSxJQUFiLFNBQWE7d0JBQWIsU0FBYTs7Ozt5QkFBYixpQkFBYTs7OzswQkFBYixjQUFhOzs7Ozs7Ozs7OztvQkFpQmxCTyxPQUFPLENBQUNDLEdBQUc7O2lEQUdOTCxLQUFLLENBQUN1QixJQUFJLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLENBQUM7d0JBQUtELE1BQU0sQ0FBTkEsQ0FBQyxDQUFDUixVQUFVLEdBQUdTLENBQUMsQ0FBQ1QsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDbEUsQ0FBQztXQTVCcUJsQixTQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvZ2V0VGVhbXMudHM/YzFhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGNvbG9yTWFwID0ge1xuICAxOiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnI2I0MDAwMCd9LFxuICAyOiB7ZGFya0NvbG9yOiAnIzAxNTA5NScsIGFsdENvbG9yOiAnI0VENzkyRSd9LFxuICAzOiB7ZGFya0NvbG9yOiAnIzg5QTIwMycsIGFsdENvbG9yOiAnIzdCNTgwNCd9LFxuICA1OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnI0ZGQjcxQid9LFxuICA2OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnI0ZGQjcxQid9LFxuICAxMDoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyMwNTIwNUInfSxcbiAgMTI6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjYjQwMDAwJ30sXG4gIDEzOiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnI0I5OTc1Qid9LFxuICAxNDoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyMwNTIwNUInfSxcbiAgMTU6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQTMwRjI0J30sXG4gIDE4OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnI0ZGQjcxQid9LFxuICAxOToge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyMwMTMwODcnfSxcbiAgMjA6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQzgxMTJFJ30sXG4gIDIxOiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzZGMjUzRCd9LFxuICAyMjoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyNGQzRDMDcnfSxcbiAgMjQ6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQjk5NzVCJ30sXG4gIDI1OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzAzNUQzRCd9LFxuICAzMDoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyMxNDQ3MzQnfSxcbiAgNTQ6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQjk5NzVCJ30sXG59XG5cbmV4cG9ydCB0eXBlIFRlYW0gPSB7XG4gIGlkOiBudW1iZXJcbiAgYWJicmV2aWF0aW9uOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGxvY2F0aW9uOiBzdHJpbmdcbiAgbGVhZ3VlUmFuazogbnVtYmVyXG4gIHdpbnM6IG51bWJlclxuICBsb3NzZXM6IG51bWJlclxuICBvdDogbnVtYmVyXG4gIHBvaW50czogbnVtYmVyXG4gIGRhcmtDb2xvcjogc3RyaW5nXG4gIGFsdENvbG9yOiBzdHJpbmdcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVhbXMoc2Vhc29uOiBzdHJpbmcgPSAnJyk6IFByb21pc2U8VGVhbVtdPiB7XG4gIGNvbnNvbGUubG9nKCdjYWxsZWQgaGVyZScpXG4gIGNvbnN0IHRlYW1zOiBUZWFtW10gPSBbXVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vc3RhdHNhcGkud2ViLm5obC5jb20vYXBpL3YxL3N0YW5kaW5ncz9oeWRyYXRlPXRlYW1gKVxuXG4gICAgZm9yIChjb25zdCByZWNvcmRzIG9mIHJlc3BvbnNlLmRhdGEucmVjb3Jkcykge1xuICAgICAgZm9yIChjb25zdCB0ZWFtUmVjb3JkcyBvZiByZWNvcmRzLnRlYW1SZWNvcmRzKSB7XG4gICAgICAgIHRlYW1zLnB1c2goe1xuICAgICAgICAgIGlkOiB0ZWFtUmVjb3Jkcy50ZWFtLmlkLFxuICAgICAgICAgIGFiYnJldmlhdGlvbjogdGVhbVJlY29yZHMudGVhbS5hYmJyZXZpYXRpb24sXG4gICAgICAgICAgbmFtZTogdGVhbVJlY29yZHMudGVhbS50ZWFtTmFtZSxcbiAgICAgICAgICBsb2NhdGlvbjogdGVhbVJlY29yZHMudGVhbS5sb2NhdGlvbk5hbWUsXG4gICAgICAgICAgbGVhZ3VlUmFuazogcGFyc2VJbnQodGVhbVJlY29yZHMubGVhZ3VlUmFuaywgMTApLFxuICAgICAgICAgIHdpbnM6IHRlYW1SZWNvcmRzLmxlYWd1ZVJlY29yZC53aW5zLFxuICAgICAgICAgIGxvc3NlczogdGVhbVJlY29yZHMubGVhZ3VlUmVjb3JkLmxvc3NlcyxcbiAgICAgICAgICBvdDogdGVhbVJlY29yZHMubGVhZ3VlUmVjb3JkLm90LFxuICAgICAgICAgIHBvaW50czogdGVhbVJlY29yZHMucG9pbnRzLFxuICAgICAgICAgIC4uLihjb2xvck1hcFt0ZWFtUmVjb3Jkcy50ZWFtLmlkXSB8fCB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnI0ZGRkZGRid9KSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG5cbiAgcmV0dXJuIHRlYW1zLnNvcnQoKGEsIGIpID0+IGEubGVhZ3VlUmFuayA+IGIubGVhZ3VlUmFuayA/IDEgOiAtMSlcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImNvbG9yTWFwIiwiZGFya0NvbG9yIiwiYWx0Q29sb3IiLCJnZXRUZWFtcyIsInNlYXNvbiIsInRlYW1zIiwicmVzcG9uc2UiLCJyZWNvcmRzIiwidGVhbVJlY29yZHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiZGF0YSIsInB1c2giLCJpZCIsInRlYW0iLCJhYmJyZXZpYXRpb24iLCJuYW1lIiwidGVhbU5hbWUiLCJsb2NhdGlvbiIsImxvY2F0aW9uTmFtZSIsImxlYWd1ZVJhbmsiLCJwYXJzZUludCIsIndpbnMiLCJsZWFndWVSZWNvcmQiLCJsb3NzZXMiLCJvdCIsInBvaW50cyIsInNvcnQiLCJhIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/getTeams.ts\n");

/***/ })

});