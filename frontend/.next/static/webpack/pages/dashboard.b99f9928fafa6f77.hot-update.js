"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images */ \"./assets/images/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./utils/index.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_FlowContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/FlowContext */ \"./context/FlowContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const { setActive , active  } = (0,_context_FlowContext__WEBPACK_IMPORTED_MODULE_6__.useFlow)();\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleRoute = (item, routePath)=>{\n        setActive(item);\n        route.push(routePath);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lg:w-[20%] lg:inline-block hidden w-[0%] min-h-screen bg-Black pt-[24px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-[9px] px-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _assets_images__WEBPACK_IMPORTED_MODULE_3__.logo,\n                        alt: \"logo\",\n                        className: \"w-[44px] h-[44px] object-contain\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\BR\\\\Documents\\\\Tokenplay\\\\frontend\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-[24px] text-[#fff] font-bold\",\n                        children: \"Tp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\BR\\\\Documents\\\\Tokenplay\\\\frontend\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\BR\\\\Documents\\\\Tokenplay\\\\frontend\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-[14px] items-center py-[54px]\",\n                children: _utils__WEBPACK_IMPORTED_MODULE_4__.SidebarTab.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>handleRoute(item.active, item.route),\n                        className: \"\".concat(active === item.active && \"bg-Shade/White/40 \", \" w-full px-[24px] py-[12px] flex items-center space-x-[12px] cursor-pointer\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icons, {\n                                color: \"white\",\n                                fontSize: 20,\n                                // color={active === item.active ? \"#30F2A1\" : \"#98A2B3\"}\n                                className: \"\".concat(active === item.active ? \"text-Accent\" : \"text-Grey\", \" h-[20px] w-[20px] object-contain\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BR\\\\Documents\\\\Tokenplay\\\\frontend\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat(active === item.active ? \"text-[#fff]\" : \"text-Grey\"),\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BR\\\\Documents\\\\Tokenplay\\\\frontend\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, i, true, {\n                        fileName: \"C:\\\\Users\\\\BR\\\\Documents\\\\Tokenplay\\\\frontend\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BR\\\\Documents\\\\Tokenplay\\\\frontend\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\BR\\\\Documents\\\\Tokenplay\\\\frontend\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"u4ove+hSAQvY960pO7mt26Rfqt8=\", false, function() {\n    return [\n        _context_FlowContext__WEBPACK_IMPORTED_MODULE_6__.useFlow,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNTO0FBQ0E7QUFDRjtBQUNFO0FBQ1M7QUFFakQsTUFBTU8sVUFBVSxJQUFNOztJQUNwQixNQUFNLEVBQUVDLFVBQVMsRUFBRUMsT0FBTSxFQUFFLEdBQUdILDZEQUFPQTtJQUNyQyxNQUFNSSxRQUFRTCxzREFBU0E7SUFFdkIsTUFBTU0sY0FBYyxDQUFDQyxNQUFNQyxZQUFjO1FBQ3ZDTCxVQUFVSTtRQUNWRixNQUFNSSxJQUFJLENBQUNEO0lBQ2I7SUFDQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2hCLG1EQUFLQTt3QkFDSmlCLEtBQUtkLGdEQUFJQTt3QkFDVGUsS0FBSTt3QkFDSkYsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBb0M7Ozs7Ozs7Ozs7OzswQkFHcEQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaWixrREFBYyxDQUFDLENBQUNRLE1BQU1TLGtCQUNyQiw4REFBQ047d0JBQ0NPLFNBQVMsSUFBTVgsWUFBWUMsS0FBS0gsTUFBTSxFQUFFRyxLQUFLRixLQUFLO3dCQUVsRE0sV0FBVyxHQUVWLE9BRENQLFdBQVdHLEtBQUtILE1BQU0sSUFBSSxzQkFDM0I7OzBDQUVELDhEQUFDRyxLQUFLVyxLQUFLO2dDQUNUQyxPQUFNO2dDQUNOQyxVQUFVO2dDQUNWLHlEQUF5RDtnQ0FDekRULFdBQVcsR0FFVixPQURDUCxXQUFXRyxLQUFLSCxNQUFNLEdBQUcsZ0JBQWdCLFdBQVcsRUFDckQ7Ozs7OzswQ0FFSCw4REFBQ2lCO2dDQUNDVixXQUFXLEdBRVYsT0FEQ1AsV0FBV0csS0FBS0gsTUFBTSxHQUFHLGdCQUFnQixXQUFXOzBDQUdyREcsS0FBS2UsSUFBSTs7Ozs7Ozt1QkFsQlBOOzs7Ozs7Ozs7Ozs7Ozs7O0FBeUJqQjtHQWhETWQ7O1FBQzBCRCx5REFBT0E7UUFDdkJELGtEQUFTQTs7O0tBRm5CRTtBQWtETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanN4PzRjYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBsb2dvIH0gZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXNcIjtcclxuaW1wb3J0IHsgU2lkZWJhclRhYiB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRmxvdyB9IGZyb20gXCIuLi9jb250ZXh0L0Zsb3dDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0QWN0aXZlLCBhY3RpdmUgfSA9IHVzZUZsb3coKTtcclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSb3V0ZSA9IChpdGVtLCByb3V0ZVBhdGgpID0+IHtcclxuICAgIHNldEFjdGl2ZShpdGVtKTtcclxuICAgIHJvdXRlLnB1c2gocm91dGVQYXRoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctWzIwJV0gbGc6aW5saW5lLWJsb2NrIGhpZGRlbiB3LVswJV0gbWluLWgtc2NyZWVuIGJnLUJsYWNrIHB0LVsyNHB4XVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtWzlweF0gIHB4LVsyNHB4XVwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtsb2dvfVxyXG4gICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0NHB4XSBoLVs0NHB4XSBvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI2ZmZl0gZm9udC1ib2xkXCI+VHA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LVsxNHB4XSBpdGVtcy1jZW50ZXIgcHktWzU0cHhdXCI+XHJcbiAgICAgICAge1NpZGViYXJUYWIubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJvdXRlKGl0ZW0uYWN0aXZlLCBpdGVtLnJvdXRlKX1cclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgIGFjdGl2ZSA9PT0gaXRlbS5hY3RpdmUgJiYgXCJiZy1TaGFkZS9XaGl0ZS80MCBcIlxyXG4gICAgICAgICAgICB9IHctZnVsbCBweC1bMjRweF0gcHktWzEycHhdIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtWzEycHhdIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGl0ZW0uaWNvbnNcclxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICBmb250U2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgLy8gY29sb3I9e2FjdGl2ZSA9PT0gaXRlbS5hY3RpdmUgPyBcIiMzMEYyQTFcIiA6IFwiIzk4QTJCM1wifVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPT09IGl0ZW0uYWN0aXZlID8gXCJ0ZXh0LUFjY2VudFwiIDogXCJ0ZXh0LUdyZXlcIlxyXG4gICAgICAgICAgICAgIH0gaC1bMjBweF0gdy1bMjBweF0gb2JqZWN0LWNvbnRhaW5gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPT09IGl0ZW0uYWN0aXZlID8gXCJ0ZXh0LVsjZmZmXVwiIDogXCJ0ZXh0LUdyZXlcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJsb2dvIiwiU2lkZWJhclRhYiIsInVzZVJvdXRlciIsInVzZUZsb3ciLCJTaWRlYmFyIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwicm91dGUiLCJoYW5kbGVSb3V0ZSIsIml0ZW0iLCJyb3V0ZVBhdGgiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaDMiLCJtYXAiLCJpIiwib25DbGljayIsImljb25zIiwiY29sb3IiLCJmb250U2l6ZSIsInNwYW4iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.jsx\n"));

/***/ })

});