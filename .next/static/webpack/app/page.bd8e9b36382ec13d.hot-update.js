"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSearch = ()=>{\n        if (query.trim()) {\n            router.push(\"/searchresults?query=\".concat(encodeURIComponent(query)));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://files.oaiusercontent.com/file-jlm26BqD3kUVDl5BwieGKBsS?se=2024-09-28T21%3A39%3A42Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6b0bbef3-2169-41cc-bd5b-a2e8bdef444a.webp&sig=9ZihXBxzBGgswS2qO5aRpaRQEzSxo5kv8CbuGeo6c2w%3D\",\n                alt: \"Logo\",\n                className: \"w-32 h-32 mb-8\"\n            }, void 0, false, {\n                fileName: \"/Users/jeevakrishnasamy/Desktop/steelhacks/web-embedder-complete/app/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-white text-4xl font-bold mb-4\",\n                children: \"Generative Any Search\"\n            }, void 0, false, {\n                fileName: \"/Users/jeevakrishnasamy/Desktop/steelhacks/web-embedder-complete/app/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: query,\n                        onChange: (e)=>setQuery(e.target.value),\n                        placeholder: \"Enter search term\",\n                        className: \"w-full p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeevakrishnasamy/Desktop/steelhacks/web-embedder-complete/app/page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSearch,\n                        className: \"w-full bg-white text-blue-500 p-4 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition-colors\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeevakrishnasamy/Desktop/steelhacks/web-embedder-complete/app/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeevakrishnasamy/Desktop/steelhacks/web-embedder-complete/app/page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeevakrishnasamy/Desktop/steelhacks/web-embedder-complete/app/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"YREd1Gubt9mS8i9ptJJbYyaQLew=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWlDO0FBQ1c7QUFHN0IsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNSyxTQUFTSiwwREFBU0E7SUFFeEIsTUFBTUssZUFBZTtRQUNuQixJQUFJSCxNQUFNSSxJQUFJLElBQUk7WUFDaEJGLE9BQU9HLElBQUksQ0FBQyx3QkFBa0QsT0FBMUJDLG1CQUFtQk47UUFDekQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlDLEtBQUk7Z0JBQW9TQyxLQUFJO2dCQUFPSCxXQUFVOzs7Ozs7MEJBQ2xVLDhEQUFDSTtnQkFBR0osV0FBVTswQkFBcUM7Ozs7OzswQkFDbkQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQ0NDLE1BQUs7d0JBQ0xDLE9BQU9mO3dCQUNQZ0IsVUFBVSxDQUFDQyxJQUFNaEIsU0FBU2dCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDeENJLGFBQVk7d0JBQ1pYLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ1k7d0JBQ0NDLFNBQVNsQjt3QkFDVEssV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0EvQndCVDs7UUFFUEQsc0RBQVNBOzs7S0FGRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmIChxdWVyeS50cmltKCkpIHtcbiAgICAgIHJvdXRlci5wdXNoKGAvc2VhcmNocmVzdWx0cz9xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLXRlYWwtNDAwIHRleHQtY2VudGVyXCI+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmlsZXMub2FpdXNlcmNvbnRlbnQuY29tL2ZpbGUtamxtMjZCcUQza1VWRGw1QndpZUdLQnNTP3NlPTIwMjQtMDktMjhUMjElM0EzOSUzQTQyWiZzcD1yJnN2PTIwMjQtMDgtMDQmc3I9YiZyc2NjPW1heC1hZ2UlM0Q2MDQ4MDAlMkMlMjBpbW11dGFibGUlMkMlMjBwcml2YXRlJnJzY2Q9YXR0YWNobWVudCUzQiUyMGZpbGVuYW1lJTNENmIwYmJlZjMtMjE2OS00MWNjLWJkNWItYTJlOGJkZWY0NDRhLndlYnAmc2lnPTlaaWhYQnh6Qkdnc3dTMnFPNWFScGFSUUV6U3hvNWt2OENidUdlbzZjMnclM0RcIiBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPVwidy0zMiBoLTMyIG1iLThcIiAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5HZW5lcmF0aXZlIEFueSBTZWFyY2g8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHNlYXJjaCB0ZXJtXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00IHJvdW5kZWQtbGcgc2hhZG93LWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBtYi00XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgdGV4dC1ibHVlLTUwMCBwLTQgcm91bmRlZC1sZyBmb250LXNlbWlib2xkIHNoYWRvdy1sZyBob3ZlcjpiZy1ibHVlLTEwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgID5cbiAgICAgICAgICBTZWFyY2hcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhvbWUiLCJxdWVyeSIsInNldFF1ZXJ5Iiwicm91dGVyIiwiaGFuZGxlU2VhcmNoIiwidHJpbSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});