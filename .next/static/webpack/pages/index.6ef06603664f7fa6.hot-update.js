"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var exa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exa-js */ \"./node_modules/exa-js/dist/index.mjs\");\n/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env.js */ \"./src/env.js\");\n/* harmony import */ var _utils_helpers_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/helpers.jsx */ \"./src/utils/helpers.jsx\");\n\nvar _s = $RefreshSig$();\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)();\n\n\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedText, setSelectedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [popupPosition, setPopupPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const exaApiKey = _env_js__WEBPACK_IMPORTED_MODULE_3__.env.NEXT_PUBLIC_EXA_API_KEY;\n    const exa = new exa_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](exaApiKey);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchText() {\n            try {\n                const response = await fetch(\"/text.txt\"); // Access the text file from the public directory\n                const data = await response.text();\n                setText(data);\n            } catch (error) {\n                console.error(\"Error fetching text:\", error);\n            }\n        }\n        fetchText();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleHighlightedText = ()=>{\n            const selection = window.getSelection();\n            const popup = document.getElementById(\"pop-up\");\n            if (selection && !selection.isCollapsed) {\n                const selectedText = selection.toString().trim();\n                setSelectedText(selectedText);\n                popup.classList.add(\"active\");\n            } else {\n                popup.classList.remove(\"active\");\n            }\n        };\n        document.addEventListener(\"mouseup\", handleHighlightedText);\n        return ()=>{\n            document.removeEventListener(\"mouseup\", handleHighlightedText);\n        };\n    }, []);\n    (async ()=>{\n        console.log(selectedText, \":\", await (0,_utils_helpers_jsx__WEBPACK_IMPORTED_MODULE_4__.decideSearchType)(selectedText));\n    })();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Highlight text for more info: \",\n                    selectedText\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kheachang/Documents/annotate/src/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"pop-up\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: selectedText\n                }, void 0, false, {\n                    fileName: \"/Users/kheachang/Documents/annotate/src/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kheachang/Documents/annotate/src/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/kheachang/Documents/annotate/src/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/kheachang/Documents/annotate/src/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            \" \"\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5o9UQt1D9fF/cFNXIQ83+Z+f/0A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQUEsK0VBQXdCO0FBQ29CO0FBQ25CO0FBRU87QUFDdUI7QUFFeEMsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNPLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztRQUFFVyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNoRSxNQUFNQyxZQUFZWCx3Q0FBR0EsQ0FBQ1ksdUJBQXVCO0lBQzdDLE1BQU1DLE1BQU0sSUFBSWQsOENBQUdBLENBQUNZO0lBR3BCZCxnREFBU0EsQ0FBQztRQUNSLGVBQWVpQjtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGNBQWMsaURBQWlEO2dCQUM1RixNQUFNQyxPQUFPLE1BQU1GLFNBQVNaLElBQUk7Z0JBQ2hDQyxRQUFRYTtZQUNWLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEM7UUFDRjtRQUVBSjtJQUNGLEdBQUcsRUFBRTtJQUVMakIsZ0RBQVNBLENBQUM7UUFDUixNQUFNdUIsd0JBQXdCO1lBQzVCLE1BQU1DLFlBQVlDLE9BQU9DLFlBQVk7WUFDckMsTUFBTUMsUUFBUUMsU0FBU0MsY0FBYyxDQUFDO1lBQ3RDLElBQUlMLGFBQWEsQ0FBQ0EsVUFBVU0sV0FBVyxFQUFFO2dCQUN2QyxNQUFNdEIsZUFBZWdCLFVBQVVPLFFBQVEsR0FBR0MsSUFBSTtnQkFDOUN2QixnQkFBZ0JEO2dCQUNoQm1CLE1BQU1NLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQ3RCLE9BQU87Z0JBQ0xQLE1BQU1NLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1lBQ3pCO1FBQ0Y7UUFDQVAsU0FBU1EsZ0JBQWdCLENBQUMsV0FBV2I7UUFDckMsT0FBTztZQUNMSyxTQUFTUyxtQkFBbUIsQ0FBQyxXQUFXZDtRQUMxQztJQUNGLEdBQUcsRUFBRTtJQUNKO1FBQ0NELFFBQVFnQixHQUFHLENBQUM5QixjQUFjLEtBQUssTUFBTUosb0VBQWdCQSxDQUFDSTtJQUN4RDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQytCOztvQkFBRztvQkFBK0IvQjs7Ozs7OzswQkFDbkMsOERBQUNnQztnQkFBSUMsSUFBRzswQkFDTiw0RUFBQ0M7OEJBQUdsQzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNtQzs7Ozs7MEJBQ0QsOERBQUNEOzBCQUFHcEM7Ozs7OztZQUFTOzs7QUFHbkI7R0FyRHdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRXhhIGZyb20gJ2V4YS1qcyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwifi91dGlscy9hcGlcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gXCIuLi9lbnYuanNcIjtcbmltcG9ydCB7IGRlY2lkZVNlYXJjaFR5cGUgfSBmcm9tIFwifi91dGlscy9oZWxwZXJzLmpzeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWxlY3RlZFRleHQsIHNldFNlbGVjdGVkVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwb3B1cFBvc2l0aW9uLCBzZXRQb3B1cFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgZXhhQXBpS2V5ID0gZW52Lk5FWFRfUFVCTElDX0VYQV9BUElfS0VZO1xuICBjb25zdCBleGEgPSBuZXcgRXhhKGV4YUFwaUtleSk7XG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZXh0KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3RleHQudHh0Jyk7IC8vIEFjY2VzcyB0aGUgdGV4dCBmaWxlIGZyb20gdGhlIHB1YmxpYyBkaXJlY3RvcnlcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgc2V0VGV4dChkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRleHQ6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoVGV4dCgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVIaWdobGlnaHRlZFRleHQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAnKTtcbiAgICAgIGlmIChzZWxlY3Rpb24gJiYgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKS50cmltKCk7XG4gICAgICAgIHNldFNlbGVjdGVkVGV4dChzZWxlY3RlZFRleHQpO1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZUhpZ2hsaWdodGVkVGV4dCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVIaWdobGlnaHRlZFRleHQpO1xuICAgIH1cbiAgfSwgW10pO1xuICAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVGV4dCwgJzonLCBhd2FpdCBkZWNpZGVTZWFyY2hUeXBlKHNlbGVjdGVkVGV4dCkpO1xuICB9KSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5IaWdobGlnaHQgdGV4dCBmb3IgbW9yZSBpbmZvOiB7c2VsZWN0ZWRUZXh0fTwvaDE+XG4gICAgICA8ZGl2IGlkPVwicG9wLXVwXCI+XG4gICAgICAgIDxwPntzZWxlY3RlZFRleHR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxwPnt0ZXh0fTwvcD4gey8qIFJlbmRlciB0aGUgdGV4dCBmaWxlIGNvbnRlbnQgKi99XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkV4YSIsImVudiIsImRlY2lkZVNlYXJjaFR5cGUiLCJIb21lIiwidGV4dCIsInNldFRleHQiLCJzZWxlY3RlZFRleHQiLCJzZXRTZWxlY3RlZFRleHQiLCJwb3B1cFBvc2l0aW9uIiwic2V0UG9wdXBQb3NpdGlvbiIsIngiLCJ5IiwiZXhhQXBpS2V5IiwiTkVYVF9QVUJMSUNfRVhBX0FQSV9LRVkiLCJleGEiLCJmZXRjaFRleHQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUhpZ2hsaWdodGVkVGV4dCIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInBvcHVwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlzQ29sbGFwc2VkIiwidG9TdHJpbmciLCJ0cmltIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2ciLCJoMSIsImRpdiIsImlkIiwicCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});