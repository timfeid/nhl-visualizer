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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTeams\": function() { return /* binding */ getTeams; }\n/* harmony export */ });\n/* harmony import */ var _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar colorMap = {\n    1: {\n        darkColor: '#000000',\n        altColor: '#b40000'\n    },\n    2: {\n        darkColor: '#015095',\n        altColor: '#ED792E'\n    },\n    3: {\n        darkColor: '#89A203',\n        altColor: '#7B5804'\n    },\n    4: {\n        darkColor: '#000000',\n        altColor: '#FA4616'\n    },\n    5: {\n        darkColor: '#000000',\n        altColor: '#FFB71B'\n    },\n    6: {\n        darkColor: '#000000',\n        altColor: '#FFB71B'\n    },\n    7: {\n        darkColor: '#000000',\n        altColor: '#013087'\n    },\n    8: {\n        darkColor: '#000000',\n        altColor: '#A6192E'\n    },\n    9: {\n        darkColor: '#000000',\n        altColor: '#B9975B'\n    },\n    10: {\n        darkColor: '#000000',\n        altColor: '#05205B'\n    },\n    12: {\n        darkColor: '#000000',\n        altColor: '#b40000'\n    },\n    13: {\n        darkColor: '#000000',\n        altColor: '#B9975B'\n    },\n    14: {\n        darkColor: '#000000',\n        altColor: '#05205B'\n    },\n    15: {\n        darkColor: '#000000',\n        altColor: '#A30F24'\n    },\n    16: {\n        darkColor: '#000000',\n        altColor: '#CC8A00'\n    },\n    17: {\n        darkColor: '#000000',\n        altColor: '#C8112E'\n    },\n    18: {\n        darkColor: '#000000',\n        altColor: '#FFB71B'\n    },\n    19: {\n        darkColor: '#000000',\n        altColor: '#013087'\n    },\n    20: {\n        darkColor: '#000000',\n        altColor: '#C8112E'\n    },\n    21: {\n        darkColor: '#000000',\n        altColor: '#6F253D'\n    },\n    22: {\n        darkColor: '#000000',\n        altColor: '#FC4C07'\n    },\n    23: {\n        darkColor: '#000000',\n        altColor: '#081C2C'\n    },\n    24: {\n        darkColor: '#000000',\n        altColor: '#B9975B'\n    },\n    25: {\n        darkColor: '#000000',\n        altColor: '#035D3D'\n    },\n    28: {\n        darkColor: '#000000',\n        altColor: '#006272'\n    },\n    29: {\n        darkColor: '#000000',\n        altColor: '#C8112E'\n    },\n    30: {\n        darkColor: '#000000',\n        altColor: '#144734'\n    },\n    52: {\n        darkColor: '#000000',\n        altColor: '#53565A'\n    },\n    53: {\n        darkColor: '#000000',\n        altColor: '#6F253D'\n    },\n    54: {\n        darkColor: '#000000',\n        altColor: '#B9975B'\n    },\n    55: {\n        darkColor: '#000000',\n        altColor: '#6CA3B8'\n    }\n};\nvar imageMap = {\n    1: 'https://besthqwallpapers.com/Uploads/20-4-2021/164761/nico-hischier-new-jersey-devils-nhl-swiss-hockey-player-red-stone-background.jpg',\n    2: '',\n    3: 'https://wallpapercave.com/wp/wp10038910.jpg',\n    4: '',\n    5: 'https://wallpapercave.com/wp/wp2518887.jpg',\n    6: 'https://wallpapercave.com/wp/XpQI7dc.jpg',\n    7: '',\n    8: '',\n    9: '',\n    10: 'https://wallpapercave.com/wp/wp9055978.jpg',\n    12: 'https://wallpapercave.com/wp/wp4177827.jpg',\n    13: 'https://wallpapercave.com/wp/wp8612863.jpg',\n    14: 'https://wallpapercave.com/wp/wp4103987.jpg',\n    15: 'https://wallpapercave.com/wp/wp4097514.jpg',\n    16: '',\n    17: '',\n    18: 'https://wallpapercave.com/wp/wp4114398.jpg',\n    19: 'https://wallpapercave.com/wp/fN9NuIt.jpg',\n    20: 'https://wallpapercave.com/wp/wp4106353.jpg',\n    21: 'https://wallpapercave.com/wp/wp1964063.jpg',\n    22: 'https://wallpapercave.com/wp/wp4118794.jpg',\n    23: 'https://wallpapercave.com/wp/wp4114366.jpg',\n    24: 'https://wallpapercave.com/wp/wp2720704.png',\n    25: 'https://wallpapercave.com/wp/wp1881831.jpg',\n    26: 'https://wallpapercave.com/wp/bbxFx3c.jpg',\n    28: '',\n    29: 'https://wallpapercave.com/dwp2x/hlLCcV5.jpg',\n    30: 'https://wallpapercave.com/wp/wc1794948.jpg',\n    52: '',\n    53: '',\n    54: 'https://wallpapercave.com/wp/wp2488963.jpg',\n    55: ''\n};\nfunction getTeams() {\n    return _getTeams.apply(this, arguments);\n}\nfunction _getTeams() {\n    _getTeams = _asyncToGenerator(_Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var season, teams, response, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, records, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, teamRecords, _args = arguments;\n        return _Volumes_Extras_websites_nhl_stats_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    season = _args.length > 0 && _args[0] !== void 0 ? _args[0] : '';\n                    console.log('called here');\n                    teams = [];\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://statsapi.web.nhl.com/api/v1/standings?hydrate=team\");\n                case 6:\n                    response = _ctx.sent;\n                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                    _ctx.prev = 8;\n                    _iterator = response.data.records[Symbol.iterator]();\n                case 10:\n                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                        _ctx.next = 32;\n                        break;\n                    }\n                    records = _step.value;\n                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n                    _ctx.prev = 13;\n                    for(_iterator1 = records.teamRecords[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n                        teamRecords = _step1.value;\n                        teams.push(_objectSpread({\n                            id: teamRecords.team.id,\n                            abbreviation: teamRecords.team.abbreviation,\n                            name: teamRecords.team.teamName,\n                            location: teamRecords.team.locationName,\n                            leagueRank: parseInt(teamRecords.leagueRank, 10),\n                            wins: teamRecords.leagueRecord.wins,\n                            losses: teamRecords.leagueRecord.losses,\n                            ot: teamRecords.leagueRecord.ot,\n                            points: teamRecords.points,\n                            image: imageMap[teamRecords.team.id] || ''\n                        }, colorMap[teamRecords.team.id] || {\n                            darkColor: '#000000',\n                            altColor: '#FFFFFF'\n                        }));\n                    }\n                    _ctx.next = 21;\n                    break;\n                case 17:\n                    _ctx.prev = 17;\n                    _ctx.t0 = _ctx[\"catch\"](13);\n                    _didIteratorError1 = true;\n                    _iteratorError1 = _ctx.t0;\n                case 21:\n                    _ctx.prev = 21;\n                    _ctx.prev = 22;\n                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                        _iterator1.return();\n                    }\n                case 24:\n                    _ctx.prev = 24;\n                    if (!_didIteratorError1) {\n                        _ctx.next = 27;\n                        break;\n                    }\n                    throw _iteratorError1;\n                case 27:\n                    return _ctx.finish(24);\n                case 28:\n                    return _ctx.finish(21);\n                case 29:\n                    _iteratorNormalCompletion = true;\n                    _ctx.next = 10;\n                    break;\n                case 32:\n                    _ctx.next = 38;\n                    break;\n                case 34:\n                    _ctx.prev = 34;\n                    _ctx.t1 = _ctx[\"catch\"](8);\n                    _didIteratorError = true;\n                    _iteratorError = _ctx.t1;\n                case 38:\n                    _ctx.prev = 38;\n                    _ctx.prev = 39;\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                case 41:\n                    _ctx.prev = 41;\n                    if (!_didIteratorError) {\n                        _ctx.next = 44;\n                        break;\n                    }\n                    throw _iteratorError;\n                case 44:\n                    return _ctx.finish(41);\n                case 45:\n                    return _ctx.finish(38);\n                case 46:\n                    _ctx.next = 51;\n                    break;\n                case 48:\n                    _ctx.prev = 48;\n                    _ctx.t2 = _ctx[\"catch\"](3);\n                    console.log(_ctx.t2);\n                case 51:\n                    return _ctx.abrupt(\"return\", teams.sort(function(a, b) {\n                        return a.leagueRank > b.leagueRank ? 1 : -1;\n                    }));\n                case 52:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                48\n            ],\n            [\n                8,\n                34,\n                38,\n                46\n            ],\n            [\n                13,\n                17,\n                21,\n                29\n            ],\n            [\n                22,\n                ,\n                24,\n                28\n            ],\n            [\n                39,\n                ,\n                41,\n                45\n            ]\n        ]);\n    }));\n    return _getTeams.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2dldFRlYW1zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO0FBQ2hCLEtBQUMsRUFBRSxDQUFDQztRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDOUMsS0FBQyxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUM5QyxLQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQzlDLEtBQUMsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDOUMsS0FBQyxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUM5QyxLQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQzlDLEtBQUMsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDOUMsS0FBQyxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUM5QyxLQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQzlDLE1BQUUsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDL0MsTUFBRSxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUMvQyxNQUFFLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQy9DLE1BQUUsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDL0MsTUFBRSxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUMvQyxNQUFFLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQy9DLE1BQUUsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDL0MsTUFBRSxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUMvQyxNQUFFLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQy9DLE1BQUUsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDL0MsTUFBRSxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUMvQyxNQUFFLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQy9DLE1BQUUsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDL0MsTUFBRSxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUMvQyxNQUFFLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQy9DLE1BQUUsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDL0MsTUFBRSxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUMvQyxNQUFFLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQy9DLE1BQUUsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDL0MsTUFBRSxFQUFFLENBQUNEO1FBQUFBLFNBQVMsRUFBRSxDQUFTO1FBQUVDLFFBQVEsRUFBRSxDQUFTO0lBQUEsQ0FBQztBQUMvQyxNQUFFLEVBQUUsQ0FBQ0Q7UUFBQUEsU0FBUyxFQUFFLENBQVM7UUFBRUMsUUFBUSxFQUFFLENBQVM7SUFBQSxDQUFDO0FBQy9DLE1BQUUsRUFBRSxDQUFDRDtRQUFBQSxTQUFTLEVBQUUsQ0FBUztRQUFFQyxRQUFRLEVBQUUsQ0FBUztJQUFBLENBQUM7QUFDakQsQ0FBQztBQUVELEdBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUM7QUFDaEIsS0FBQyxFQUFFLENBQXdJO0FBQzNJLEtBQUMsRUFBRSxDQUFFO0FBQ0wsS0FBQyxFQUFFLENBQTZDO0FBQ2hELEtBQUMsRUFBRSxDQUFFO0FBQ0wsS0FBQyxFQUFFLENBQTRDO0FBQy9DLEtBQUMsRUFBRSxDQUEwQztBQUM3QyxLQUFDLEVBQUUsQ0FBRTtBQUNMLEtBQUMsRUFBRSxDQUFFO0FBQ0wsS0FBQyxFQUFFLENBQUU7QUFDTCxNQUFFLEVBQUUs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Q0FBQzs7Ozs7O29CQWRJLGtCQUFpQjtvQkFBakIsZUFBaUI7Ozs7eUJBQWpCLDBCQUFpQixJQUFqQixVQUFpQjt3QkFBakIsVUFBaUI7Ozs7eUJBQWpCLGtCQUFpQjs7OzswQkFBakIsZUFBaUI7Ozs7OztvQkFEbkIseUJBQWE7Ozs7Ozs7OztvQkFBYixpQkFBYTtvQkFBYixjQUFhOzs7O3lCQUFiLHlCQUFhLElBQWIsU0FBYTt3QkFBYixTQUFhOzs7O3lCQUFiLGlCQUFhOzs7OzBCQUFiLGNBQWE7Ozs7Ozs7Ozs7O29CQWtCbEJRLE9BQU8sQ0FBQ0MsR0FBRzs7aURBR05MLEtBQUssQ0FBQ3dCLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQzt3QkFBS0QsTUFBTSxDQUFOQSxDQUFDLENBQUNULFVBQVUsR0FBR1UsQ0FBQyxDQUFDVixVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNsRSxDQUFDO1dBN0JxQmxCLFNBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9nZXRUZWFtcy50cz9jMWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgY29sb3JNYXAgPSB7XG4gIDE6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjYjQwMDAwJ30sXG4gIDI6IHtkYXJrQ29sb3I6ICcjMDE1MDk1JywgYWx0Q29sb3I6ICcjRUQ3OTJFJ30sXG4gIDM6IHtkYXJrQ29sb3I6ICcjODlBMjAzJywgYWx0Q29sb3I6ICcjN0I1ODA0J30sXG4gIDQ6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjRkE0NjE2J30sXG4gIDU6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjRkZCNzFCJ30sXG4gIDY6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjRkZCNzFCJ30sXG4gIDc6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjMDEzMDg3J30sXG4gIDg6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQTYxOTJFJ30sXG4gIDk6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQjk5NzVCJ30sXG4gIDEwOiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzA1MjA1Qid9LFxuICAxMjoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyNiNDAwMDAnfSxcbiAgMTM6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQjk5NzVCJ30sXG4gIDE0OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzA1MjA1Qid9LFxuICAxNToge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyNBMzBGMjQnfSxcbiAgMTY6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQ0M4QTAwJ30sXG4gIDE3OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnI0M4MTEyRSd9LFxuICAxODoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyNGRkI3MUInfSxcbiAgMTk6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjMDEzMDg3J30sXG4gIDIwOiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnI0M4MTEyRSd9LFxuICAyMToge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyM2RjI1M0QnfSxcbiAgMjI6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjRkM0QzA3J30sXG4gIDIzOiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzA4MUMyQyd9LFxuICAyNDoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyNCOTk3NUInfSxcbiAgMjU6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjMDM1RDNEJ30sXG4gIDI4OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzAwNjI3Mid9LFxuICAyOToge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyNDODExMkUnfSxcbiAgMzA6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjMTQ0NzM0J30sXG4gIDUyOiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzUzNTY1QSd9LFxuICA1Mzoge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyM2RjI1M0QnfSxcbiAgNTQ6IHtkYXJrQ29sb3I6ICcjMDAwMDAwJywgYWx0Q29sb3I6ICcjQjk5NzVCJ30sXG4gIDU1OiB7ZGFya0NvbG9yOiAnIzAwMDAwMCcsIGFsdENvbG9yOiAnIzZDQTNCOCd9LFxufVxuXG5jb25zdCBpbWFnZU1hcCA9IHtcbiAgMTogJ2h0dHBzOi8vYmVzdGhxd2FsbHBhcGVycy5jb20vVXBsb2Fkcy8yMC00LTIwMjEvMTY0NzYxL25pY28taGlzY2hpZXItbmV3LWplcnNleS1kZXZpbHMtbmhsLXN3aXNzLWhvY2tleS1wbGF5ZXItcmVkLXN0b25lLWJhY2tncm91bmQuanBnJyxcbiAgMjogJycsXG4gIDM6ICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMTAwMzg5MTAuanBnJyxcbiAgNDogJycsXG4gIDU6ICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMjUxODg4Ny5qcGcnLFxuICA2OiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC9YcFFJN2RjLmpwZycsXG4gIDc6ICcnLFxuICA4OiAnJyxcbiAgOTogJycsXG4gIDEwOiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDkwNTU5NzguanBnJyxcbiAgMTI6ICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwNDE3NzgyNy5qcGcnLFxuICAxMzogJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3A4NjEyODYzLmpwZycsXG4gIDE0OiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDQxMDM5ODcuanBnJyxcbiAgMTU6ICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwNDA5NzUxNC5qcGcnLFxuICAxNjogJycsXG4gIDE3OiAnJyxcbiAgMTg6ICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwNDExNDM5OC5qcGcnLFxuICAxOTogJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3AvZk45TnVJdC5qcGcnLFxuICAyMDogJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3A0MTA2MzUzLmpwZycsXG4gIDIxOiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDE5NjQwNjMuanBnJyxcbiAgMjI6ICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwNDExODc5NC5qcGcnLFxuICAyMzogJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3A0MTE0MzY2LmpwZycsXG4gIDI0OiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDI3MjA3MDQucG5nJyxcbiAgMjU6ICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMTg4MTgzMS5qcGcnLFxuICAyNjogJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3AvYmJ4RngzYy5qcGcnLFxuICAyODogJycsXG4gIDI5OiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS9kd3AyeC9obExDY1Y1LmpwZycsXG4gIDMwOiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93YzE3OTQ5NDguanBnJyxcbiAgNTI6ICcnLFxuICA1MzogJycsXG4gIDU0OiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDI0ODg5NjMuanBnJyxcbiAgNTU6ICcnLFxufVxuXG5leHBvcnQgdHlwZSBUZWFtID0ge1xuICBpZDogbnVtYmVyXG4gIGFiYnJldmlhdGlvbjogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBsb2NhdGlvbjogc3RyaW5nXG4gIGxlYWd1ZVJhbms6IG51bWJlclxuICB3aW5zOiBudW1iZXJcbiAgbG9zc2VzOiBudW1iZXJcbiAgb3Q6IG51bWJlclxuICBwb2ludHM6IG51bWJlclxuICBkYXJrQ29sb3I6IHN0cmluZ1xuICBhbHRDb2xvcjogc3RyaW5nXG4gIGltYWdlOiBzdHJpbmdcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVhbXMoc2Vhc29uOiBzdHJpbmcgPSAnJyk6IFByb21pc2U8VGVhbVtdPiB7XG4gIGNvbnNvbGUubG9nKCdjYWxsZWQgaGVyZScpXG4gIGNvbnN0IHRlYW1zOiBUZWFtW10gPSBbXVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vc3RhdHNhcGkud2ViLm5obC5jb20vYXBpL3YxL3N0YW5kaW5ncz9oeWRyYXRlPXRlYW1gKVxuXG4gICAgZm9yIChjb25zdCByZWNvcmRzIG9mIHJlc3BvbnNlLmRhdGEucmVjb3Jkcykge1xuICAgICAgZm9yIChjb25zdCB0ZWFtUmVjb3JkcyBvZiByZWNvcmRzLnRlYW1SZWNvcmRzKSB7XG4gICAgICAgIHRlYW1zLnB1c2goe1xuICAgICAgICAgIGlkOiB0ZWFtUmVjb3Jkcy50ZWFtLmlkLFxuICAgICAgICAgIGFiYnJldmlhdGlvbjogdGVhbVJlY29yZHMudGVhbS5hYmJyZXZpYXRpb24sXG4gICAgICAgICAgbmFtZTogdGVhbVJlY29yZHMudGVhbS50ZWFtTmFtZSxcbiAgICAgICAgICBsb2NhdGlvbjogdGVhbVJlY29yZHMudGVhbS5sb2NhdGlvbk5hbWUsXG4gICAgICAgICAgbGVhZ3VlUmFuazogcGFyc2VJbnQodGVhbVJlY29yZHMubGVhZ3VlUmFuaywgMTApLFxuICAgICAgICAgIHdpbnM6IHRlYW1SZWNvcmRzLmxlYWd1ZVJlY29yZC53aW5zLFxuICAgICAgICAgIGxvc3NlczogdGVhbVJlY29yZHMubGVhZ3VlUmVjb3JkLmxvc3NlcyxcbiAgICAgICAgICBvdDogdGVhbVJlY29yZHMubGVhZ3VlUmVjb3JkLm90LFxuICAgICAgICAgIHBvaW50czogdGVhbVJlY29yZHMucG9pbnRzLFxuICAgICAgICAgIGltYWdlOiBpbWFnZU1hcFt0ZWFtUmVjb3Jkcy50ZWFtLmlkXSB8fCAnJyxcbiAgICAgICAgICAuLi4oY29sb3JNYXBbdGVhbVJlY29yZHMudGVhbS5pZF0gfHwge2RhcmtDb2xvcjogJyMwMDAwMDAnLCBhbHRDb2xvcjogJyNGRkZGRkYnfSksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfVxuXG4gIHJldHVybiB0ZWFtcy5zb3J0KChhLCBiKSA9PiBhLmxlYWd1ZVJhbmsgPiBiLmxlYWd1ZVJhbmsgPyAxIDogLTEpXG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjb2xvck1hcCIsImRhcmtDb2xvciIsImFsdENvbG9yIiwiaW1hZ2VNYXAiLCJnZXRUZWFtcyIsInNlYXNvbiIsInRlYW1zIiwicmVzcG9uc2UiLCJyZWNvcmRzIiwidGVhbVJlY29yZHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiZGF0YSIsInB1c2giLCJpZCIsInRlYW0iLCJhYmJyZXZpYXRpb24iLCJuYW1lIiwidGVhbU5hbWUiLCJsb2NhdGlvbiIsImxvY2F0aW9uTmFtZSIsImxlYWd1ZVJhbmsiLCJwYXJzZUludCIsIndpbnMiLCJsZWFndWVSZWNvcmQiLCJsb3NzZXMiLCJvdCIsInBvaW50cyIsImltYWdlIiwic29ydCIsImEiLCJiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/getTeams.ts\n");

/***/ })

});