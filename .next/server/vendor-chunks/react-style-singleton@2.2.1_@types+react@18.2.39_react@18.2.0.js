"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0";
exports.ids = ["vendor-chunks/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/component.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/component.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styleSingleton = void 0;\nvar hook_1 = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/hook.js\");\n/**\n * create a Component to add styles on demand\n * - styles are added when first instance is mounted\n * - styles are removed when the last instance is unmounted\n * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior\n */\nvar styleSingleton = function () {\n    var useStyle = (0, hook_1.styleHookSingleton)();\n    var Sheet = function (_a) {\n        var styles = _a.styles, dynamic = _a.dynamic;\n        useStyle(styles, dynamic);\n        return null;\n    };\n    return Sheet;\n};\nexports.styleSingleton = styleSingleton;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3Qtc3R5bGUtc2luZ2xldG9uQDIuMi4xX0B0eXBlcytyZWFjdEAxOC4yLjM5X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L2NvbXBvbmVudC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIsYUFBYSxtQkFBTyxDQUFDLDRKQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zZXR1cC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1zdHlsZS1zaW5nbGV0b25AMi4yLjFfQHR5cGVzK3JlYWN0QDE4LjIuMzlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczUvY29tcG9uZW50LmpzP2YwOWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0eWxlU2luZ2xldG9uID0gdm9pZCAwO1xudmFyIGhvb2tfMSA9IHJlcXVpcmUoXCIuL2hvb2tcIik7XG4vKipcbiAqIGNyZWF0ZSBhIENvbXBvbmVudCB0byBhZGQgc3R5bGVzIG9uIGRlbWFuZFxuICogLSBzdHlsZXMgYXJlIGFkZGVkIHdoZW4gZmlyc3QgaW5zdGFuY2UgaXMgbW91bnRlZFxuICogLSBzdHlsZXMgYXJlIHJlbW92ZWQgd2hlbiB0aGUgbGFzdCBpbnN0YW5jZSBpcyB1bm1vdW50ZWRcbiAqIC0gY2hhbmdpbmcgc3R5bGVzIGluIHJ1bnRpbWUgZG9lcyBub3RoaW5nIHVubGVzcyBkeW5hbWljIGlzIHNldC4gQnV0IHdpdGggbXVsdGlwbGUgY29tcG9uZW50cyB0aGF0IGNhbiBsZWFkIHRvIHRoZSB1bmRlZmluZWQgYmVoYXZpb3JcbiAqL1xudmFyIHN0eWxlU2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VTdHlsZSA9ICgwLCBob29rXzEuc3R5bGVIb29rU2luZ2xldG9uKSgpO1xuICAgIHZhciBTaGVldCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc3R5bGVzID0gX2Euc3R5bGVzLCBkeW5hbWljID0gX2EuZHluYW1pYztcbiAgICAgICAgdXNlU3R5bGUoc3R5bGVzLCBkeW5hbWljKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gU2hlZXQ7XG59O1xuZXhwb3J0cy5zdHlsZVNpbmdsZXRvbiA9IHN0eWxlU2luZ2xldG9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/hook.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/hook.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styleHookSingleton = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs\");\nvar React = tslib_1.__importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar singleton_1 = __webpack_require__(/*! ./singleton */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/singleton.js\");\n/**\n * creates a hook to control style singleton\n * @see {@link styleSingleton} for a safer component version\n * @example\n * ```tsx\n * const useStyle = styleHookSingleton();\n * ///\n * useStyle('body { overflow: hidden}');\n */\nvar styleHookSingleton = function () {\n    var sheet = (0, singleton_1.stylesheetSingleton)();\n    return function (styles, isDynamic) {\n        React.useEffect(function () {\n            sheet.add(styles);\n            return function () {\n                sheet.remove();\n            };\n        }, [styles && isDynamic]);\n    };\n};\nexports.styleHookSingleton = styleHookSingleton;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3Qtc3R5bGUtc2luZ2xldG9uQDIuMi4xX0B0eXBlcytyZWFjdEAxOC4yLjM5X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L2hvb2suanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMEJBQTBCO0FBQzFCLGNBQWMsbUJBQU8sQ0FBQyxzRkFBTztBQUM3QixpQ0FBaUMsbUJBQU8sQ0FBQyxxS0FBTztBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQyxzS0FBYTtBQUN2QztBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMEJBQTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNldHVwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LXN0eWxlLXNpbmdsZXRvbkAyLjIuMV9AdHlwZXMrcmVhY3RAMTguMi4zOV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzNS9ob29rLmpzPzExMzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0eWxlSG9va1NpbmdsZXRvbiA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFJlYWN0ID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBzaW5nbGV0b25fMSA9IHJlcXVpcmUoXCIuL3NpbmdsZXRvblwiKTtcbi8qKlxuICogY3JlYXRlcyBhIGhvb2sgdG8gY29udHJvbCBzdHlsZSBzaW5nbGV0b25cbiAqIEBzZWUge0BsaW5rIHN0eWxlU2luZ2xldG9ufSBmb3IgYSBzYWZlciBjb21wb25lbnQgdmVyc2lvblxuICogQGV4YW1wbGVcbiAqIGBgYHRzeFxuICogY29uc3QgdXNlU3R5bGUgPSBzdHlsZUhvb2tTaW5nbGV0b24oKTtcbiAqIC8vL1xuICogdXNlU3R5bGUoJ2JvZHkgeyBvdmVyZmxvdzogaGlkZGVufScpO1xuICovXG52YXIgc3R5bGVIb29rU2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGVldCA9ICgwLCBzaW5nbGV0b25fMS5zdHlsZXNoZWV0U2luZ2xldG9uKSgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3R5bGVzLCBpc0R5bmFtaWMpIHtcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNoZWV0LmFkZChzdHlsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzaGVldC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtzdHlsZXMgJiYgaXNEeW5hbWljXSk7XG4gICAgfTtcbn07XG5leHBvcnRzLnN0eWxlSG9va1NpbmdsZXRvbiA9IHN0eWxlSG9va1NpbmdsZXRvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/hook.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/index.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;\nvar component_1 = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/component.js\");\nObject.defineProperty(exports, \"styleSingleton\", ({ enumerable: true, get: function () { return component_1.styleSingleton; } }));\nvar singleton_1 = __webpack_require__(/*! ./singleton */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/singleton.js\");\nObject.defineProperty(exports, \"stylesheetSingleton\", ({ enumerable: true, get: function () { return singleton_1.stylesheetSingleton; } }));\nvar hook_1 = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/hook.js\");\nObject.defineProperty(exports, \"styleHookSingleton\", ({ enumerable: true, get: function () { return hook_1.styleHookSingleton; } }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3Qtc3R5bGUtc2luZ2xldG9uQDIuMi4xX0B0eXBlcytyZWFjdEAxOC4yLjM5X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBCQUEwQixHQUFHLDJCQUEyQixHQUFHLHNCQUFzQjtBQUNqRixrQkFBa0IsbUJBQU8sQ0FBQyxzS0FBYTtBQUN2QyxrREFBaUQsRUFBRSxxQ0FBcUMsc0NBQXNDLEVBQUM7QUFDL0gsa0JBQWtCLG1CQUFPLENBQUMsc0tBQWE7QUFDdkMsdURBQXNELEVBQUUscUNBQXFDLDJDQUEyQyxFQUFDO0FBQ3pJLGFBQWEsbUJBQU8sQ0FBQyw0SkFBUTtBQUM3QixzREFBcUQsRUFBRSxxQ0FBcUMscUNBQXFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2V0dXAvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3Qtc3R5bGUtc2luZ2xldG9uQDIuMi4xX0B0eXBlcytyZWFjdEAxOC4yLjM5X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L2luZGV4LmpzP2ViZmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0eWxlSG9va1NpbmdsZXRvbiA9IGV4cG9ydHMuc3R5bGVzaGVldFNpbmdsZXRvbiA9IGV4cG9ydHMuc3R5bGVTaW5nbGV0b24gPSB2b2lkIDA7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHlsZVNpbmdsZXRvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9uZW50XzEuc3R5bGVTaW5nbGV0b247IH0gfSk7XG52YXIgc2luZ2xldG9uXzEgPSByZXF1aXJlKFwiLi9zaW5nbGV0b25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHlsZXNoZWV0U2luZ2xldG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzaW5nbGV0b25fMS5zdHlsZXNoZWV0U2luZ2xldG9uOyB9IH0pO1xudmFyIGhvb2tfMSA9IHJlcXVpcmUoXCIuL2hvb2tcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHlsZUhvb2tTaW5nbGV0b25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhvb2tfMS5zdHlsZUhvb2tTaW5nbGV0b247IH0gfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/singleton.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/singleton.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stylesheetSingleton = void 0;\nvar get_nonce_1 = __webpack_require__(/*! get-nonce */ \"(ssr)/./node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es5/index.js\");\nfunction makeStyleTag() {\n    if (!document)\n        return null;\n    var tag = document.createElement('style');\n    tag.type = 'text/css';\n    var nonce = (0, get_nonce_1.getNonce)();\n    if (nonce) {\n        tag.setAttribute('nonce', nonce);\n    }\n    return tag;\n}\nfunction injectStyles(tag, css) {\n    // @ts-ignore\n    if (tag.styleSheet) {\n        // @ts-ignore\n        tag.styleSheet.cssText = css;\n    }\n    else {\n        tag.appendChild(document.createTextNode(css));\n    }\n}\nfunction insertStyleTag(tag) {\n    var head = document.head || document.getElementsByTagName('head')[0];\n    head.appendChild(tag);\n}\nvar stylesheetSingleton = function () {\n    var counter = 0;\n    var stylesheet = null;\n    return {\n        add: function (style) {\n            if (counter == 0) {\n                if ((stylesheet = makeStyleTag())) {\n                    injectStyles(stylesheet, style);\n                    insertStyleTag(stylesheet);\n                }\n            }\n            counter++;\n        },\n        remove: function () {\n            counter--;\n            if (!counter && stylesheet) {\n                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);\n                stylesheet = null;\n            }\n        },\n    };\n};\nexports.stylesheetSingleton = stylesheetSingleton;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3Qtc3R5bGUtc2luZ2xldG9uQDIuMi4xX0B0eXBlcytyZWFjdEAxOC4yLjM5X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L3NpbmdsZXRvbi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkI7QUFDM0Isa0JBQWtCLG1CQUFPLENBQUMsc0dBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2V0dXAvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3Qtc3R5bGUtc2luZ2xldG9uQDIuMi4xX0B0eXBlcytyZWFjdEAxOC4yLjM5X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXM1L3NpbmdsZXRvbi5qcz83YWNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdHlsZXNoZWV0U2luZ2xldG9uID0gdm9pZCAwO1xudmFyIGdldF9ub25jZV8xID0gcmVxdWlyZShcImdldC1ub25jZVwiKTtcbmZ1bmN0aW9uIG1ha2VTdHlsZVRhZygpIHtcbiAgICBpZiAoIWRvY3VtZW50KVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgdmFyIG5vbmNlID0gKDAsIGdldF9ub25jZV8xLmdldE5vbmNlKSgpO1xuICAgIGlmIChub25jZSkge1xuICAgICAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhZztcbn1cbmZ1bmN0aW9uIGluamVjdFN0eWxlcyh0YWcsIGNzcykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodGFnLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0YWcuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydFN0eWxlVGFnKHRhZykge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbn1cbnZhciBzdHlsZXNoZWV0U2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgc3R5bGVzaGVldCA9IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHN0eWxlc2hlZXQgPSBtYWtlU3R5bGVUYWcoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5qZWN0U3R5bGVzKHN0eWxlc2hlZXQsIHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3R5bGVUYWcoc3R5bGVzaGVldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgIGlmICghY291bnRlciAmJiBzdHlsZXNoZWV0KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5wYXJlbnROb2RlICYmIHN0eWxlc2hlZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZXNoZWV0KTtcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuc3R5bGVzaGVldFNpbmdsZXRvbiA9IHN0eWxlc2hlZXRTaW5nbGV0b247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.39_react@18.2.0/node_modules/react-style-singleton/dist/es5/singleton.js\n");

/***/ })

};
;