"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/clients/[id]",{

/***/ "./pages/clients/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/clients/[id]/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ClientsProjectsPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(router.query);\n    function loadProjectHandler() {\n        router.push({\n            pathname: \"clients/[id]/[clientProjectId]\",\n            query: {\n                id: \"max\",\n                client\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"The projects for given client\"\n            }, void 0, false, {\n                fileName: \"/Users/ajinkyadhomne/Documents/projects/reactjs/my-first-app/pages/clients/[id]/index.js\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: loadProjectHandler,\n                children: \"Load Project A\"\n            }, void 0, false, {\n                fileName: \"/Users/ajinkyadhomne/Documents/projects/reactjs/my-first-app/pages/clients/[id]/index.js\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ajinkyadhomne/Documents/projects/reactjs/my-first-app/pages/clients/[id]/index.js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, this);\n}\n_s(ClientsProjectsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ClientsProjectsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientsProjectsPage);\nvar _c;\n$RefreshReg$(_c, \"ClientsProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jbGllbnRzL1tpZF0vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxTQUFTQzs7SUFDUixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEJHLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csS0FBSztJQUV4QixTQUFTQztRQUNSSixPQUFPSyxJQUFJLENBQUM7WUFDWEMsVUFBVTtZQUNESCxPQUFPO2dCQUFFSSxJQUFJO2dCQUFPQztZQUFNO1FBQ3BDO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQ0M7OzBCQUNBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBU1I7MEJBQW9COzs7Ozs7Ozs7Ozs7QUFHeEM7R0FqQlNMOztRQUNPRCxrREFBU0E7OztLQURoQkM7QUFtQlQsK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jbGllbnRzL1tpZF0vaW5kZXguanM/ZTE1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZnVuY3Rpb24gQ2xpZW50c1Byb2plY3RzUGFnZSgpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XG5cblx0ZnVuY3Rpb24gbG9hZFByb2plY3RIYW5kbGVyKCkge1xuXHRcdHJvdXRlci5wdXNoKHtcblx0XHRcdHBhdGhuYW1lOiBcImNsaWVudHMvW2lkXS9bY2xpZW50UHJvamVjdElkXVwiLFxuICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IFwibWF4XCIsIGNsaWVudH1cblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5UaGUgcHJvamVjdHMgZm9yIGdpdmVuIGNsaWVudDwvaDE+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2xvYWRQcm9qZWN0SGFuZGxlcn0+TG9hZCBQcm9qZWN0IEE8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50c1Byb2plY3RzUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDbGllbnRzUHJvamVjdHNQYWdlIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwibG9hZFByb2plY3RIYW5kbGVyIiwicHVzaCIsInBhdGhuYW1lIiwiaWQiLCJjbGllbnQiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/clients/[id]/index.js\n"));

/***/ })

});