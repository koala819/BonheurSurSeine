"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0";
exports.ids = ["vendor-chunks/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0/node_modules/@nextui-org/switch/dist/chunk-BB6VIVLA.mjs":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0/node_modules/@nextui-org/switch/dist/chunk-BB6VIVLA.mjs ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSwitch: () => (/* binding */ useSwitch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _nextui_org_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/system */ \"(ssr)/./node_modules/.pnpm/@nextui-org+system-rsc@2.0.11_@nextui-org+theme@2.1.17_react@18.2.0_tailwind-variants@0.1.18/node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs\");\n/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-aria/interactions */ \"(ssr)/./node_modules/.pnpm/@react-aria+interactions@3.20.0_react@18.2.0/node_modules/@react-aria/interactions/dist/import.mjs\");\n/* harmony import */ var _nextui_org_use_aria_press__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/use-aria-press */ \"(ssr)/./node_modules/.pnpm/@nextui-org+use-aria-press@2.0.1_react@18.2.0/node_modules/@nextui-org/use-aria-press/dist/index.mjs\");\n/* harmony import */ var _nextui_org_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/theme */ \"(ssr)/./node_modules/.pnpm/@nextui-org+theme@2.1.17_tailwindcss@3.3.5/node_modules/@nextui-org/theme/dist/chunk-FXXH62BP.mjs\");\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/./node_modules/.pnpm/@react-aria+utils@3.22.0_react@18.2.0/node_modules/@react-aria/utils/dist/import.mjs\");\n/* harmony import */ var _nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/shared-utils */ \"(ssr)/./node_modules/.pnpm/@nextui-org+shared-utils@2.0.4_react@18.2.0/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs\");\n/* harmony import */ var _nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/shared-utils */ \"(ssr)/./node_modules/.pnpm/@nextui-org+shared-utils@2.0.4_react@18.2.0/node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs\");\n/* harmony import */ var _nextui_org_react_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react-utils */ \"(ssr)/./node_modules/.pnpm/@nextui-org+react-utils@2.0.10_react@18.2.0/node_modules/@nextui-org/react-utils/dist/chunk-3TAVD5Y3.mjs\");\n/* harmony import */ var _react_aria_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-aria/switch */ \"(ssr)/./node_modules/.pnpm/@react-aria+switch@3.5.7_react@18.2.0/node_modules/@react-aria/switch/dist/import.mjs\");\n/* harmony import */ var _react_stately_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-stately/toggle */ \"(ssr)/./node_modules/.pnpm/@react-stately+toggle@3.7.0_react@18.2.0/node_modules/@react-stately/toggle/dist/import.mjs\");\n/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-aria/focus */ \"(ssr)/./node_modules/.pnpm/@react-aria+focus@3.15.0_react@18.2.0/node_modules/@react-aria/focus/dist/import.mjs\");\n\"use client\";\n\n// src/use-switch.ts\n\n\n\n\n\n\n\n\n\n\n\n\nfunction useSwitch(originalProps = {}) {\n  const [props, variantProps] = (0,_nextui_org_system__WEBPACK_IMPORTED_MODULE_1__.mapPropsVariants)(originalProps, _nextui_org_theme__WEBPACK_IMPORTED_MODULE_2__.toggle.variantKeys);\n  const {\n    ref,\n    as,\n    name,\n    value = \"\",\n    isReadOnly: isReadOnlyProp = false,\n    autoFocus = false,\n    startContent,\n    endContent,\n    defaultSelected,\n    isSelected: isSelectedProp,\n    children,\n    thumbIcon,\n    className,\n    classNames,\n    onChange,\n    onValueChange,\n    ...otherProps\n  } = props;\n  const Component = as || \"label\";\n  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const domRef = (0,_nextui_org_react_utils__WEBPACK_IMPORTED_MODULE_3__.useFocusableRef)(ref, inputRef);\n  const labelId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();\n  const ariaSwitchProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    const ariaLabel = otherProps[\"aria-label\"] || typeof children === \"string\" ? children : void 0;\n    return {\n      name,\n      value,\n      children,\n      autoFocus,\n      defaultSelected,\n      isSelected: isSelectedProp,\n      isDisabled: !!originalProps.isDisabled,\n      isReadOnly: isReadOnlyProp,\n      \"aria-label\": ariaLabel,\n      \"aria-labelledby\": otherProps[\"aria-labelledby\"] || labelId,\n      onChange: onValueChange\n    };\n  }, [\n    value,\n    name,\n    labelId,\n    children,\n    autoFocus,\n    isReadOnlyProp,\n    isSelectedProp,\n    defaultSelected,\n    originalProps.isDisabled,\n    otherProps[\"aria-label\"],\n    otherProps[\"aria-labelledby\"],\n    onValueChange\n  ]);\n  const state = (0,_react_stately_toggle__WEBPACK_IMPORTED_MODULE_4__.useToggleState)(ariaSwitchProps);\n  const {\n    inputProps,\n    isPressed: isPressedKeyboard,\n    isReadOnly\n  } = (0,_react_aria_switch__WEBPACK_IMPORTED_MODULE_5__.useSwitch)(ariaSwitchProps, state, inputRef);\n  const { focusProps, isFocused, isFocusVisible } = (0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_6__.useFocusRing)({ autoFocus: inputProps.autoFocus });\n  const { hoverProps, isHovered } = (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_7__.useHover)({\n    isDisabled: inputProps.disabled\n  });\n  const isInteractionDisabled = ariaSwitchProps.isDisabled || isReadOnly;\n  const [isPressed, setPressed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const { pressProps } = (0,_nextui_org_use_aria_press__WEBPACK_IMPORTED_MODULE_8__.usePress)({\n    isDisabled: isInteractionDisabled,\n    onPressStart(e) {\n      if (e.pointerType !== \"keyboard\") {\n        setPressed(true);\n      }\n    },\n    onPressEnd(e) {\n      if (e.pointerType !== \"keyboard\") {\n        setPressed(false);\n      }\n    }\n  });\n  const pressed = isInteractionDisabled ? false : isPressed || isPressedKeyboard;\n  const isSelected = inputProps.checked;\n  const isDisabled = inputProps.disabled;\n  const slots = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(\n    () => (0,_nextui_org_theme__WEBPACK_IMPORTED_MODULE_2__.toggle)({\n      ...variantProps\n    }),\n    [...Object.values(variantProps)]\n  );\n  const baseStyles = (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(classNames == null ? void 0 : classNames.base, className);\n  const getBaseProps = (props2) => {\n    return {\n      ...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_10__.mergeProps)(hoverProps, pressProps, otherProps, props2),\n      ref: domRef,\n      className: slots.base({ class: (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(baseStyles, props2 == null ? void 0 : props2.className) }),\n      \"data-disabled\": (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_11__.dataAttr)(isDisabled),\n      \"data-selected\": (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_11__.dataAttr)(isSelected),\n      \"data-readonly\": (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_11__.dataAttr)(isReadOnly),\n      \"data-focus\": (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_11__.dataAttr)(isFocused),\n      \"data-focus-visible\": (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_11__.dataAttr)(isFocusVisible),\n      \"data-hover\": (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_11__.dataAttr)(isHovered),\n      \"data-pressed\": (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_11__.dataAttr)(pressed)\n    };\n  };\n  const getWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (props2 = {}) => {\n      return {\n        ...props2,\n        \"aria-hidden\": true,\n        className: (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(slots.wrapper({ class: (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) }))\n      };\n    },\n    [slots, classNames == null ? void 0 : classNames.wrapper]\n  );\n  const getInputProps = (props2 = {}) => {\n    return {\n      ...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_10__.mergeProps)(inputProps, focusProps, props2),\n      ref: inputRef,\n      id: inputProps.id,\n      onChange: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_10__.chain)(onChange, inputProps.onChange)\n    };\n  };\n  const getThumbProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (props2 = {}) => ({\n      ...props2,\n      className: slots.thumb({ class: (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(classNames == null ? void 0 : classNames.thumb, props2 == null ? void 0 : props2.className) })\n    }),\n    [slots, classNames == null ? void 0 : classNames.thumb]\n  );\n  const getLabelProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (props2 = {}) => ({\n      ...props2,\n      id: labelId,\n      className: slots.label({ class: (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(classNames == null ? void 0 : classNames.label, props2 == null ? void 0 : props2.className) })\n    }),\n    [slots, classNames == null ? void 0 : classNames.label, isDisabled, isSelected]\n  );\n  const getThumbIconProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (props2 = {\n      includeStateProps: false\n    }) => (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_10__.mergeProps)(\n      {\n        width: \"1em\",\n        height: \"1em\",\n        className: slots.thumbIcon({ class: (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(classNames == null ? void 0 : classNames.thumbIcon) })\n      },\n      props2.includeStateProps ? {\n        isSelected\n      } : {}\n    ),\n    [slots, classNames == null ? void 0 : classNames.thumbIcon, isSelected]\n  );\n  const getStartContentProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (props2 = {}) => ({\n      width: \"1em\",\n      height: \"1em\",\n      ...props2,\n      className: slots.startContent({ class: (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(classNames == null ? void 0 : classNames.startContent, props2 == null ? void 0 : props2.className) })\n    }),\n    [slots, classNames == null ? void 0 : classNames.startContent, isSelected]\n  );\n  const getEndContentProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (props2 = {}) => ({\n      width: \"1em\",\n      height: \"1em\",\n      ...props2,\n      className: slots.endContent({ class: (0,_nextui_org_shared_utils__WEBPACK_IMPORTED_MODULE_9__.clsx)(classNames == null ? void 0 : classNames.endContent, props2 == null ? void 0 : props2.className) })\n    }),\n    [slots, classNames == null ? void 0 : classNames.endContent, isSelected]\n  );\n  return {\n    Component,\n    slots,\n    classNames,\n    domRef,\n    children,\n    thumbIcon,\n    startContent,\n    endContent,\n    isHovered,\n    isSelected,\n    isPressed: pressed,\n    isFocused,\n    isFocusVisible,\n    isDisabled,\n    getBaseProps,\n    getWrapperProps,\n    getInputProps,\n    getLabelProps,\n    getThumbProps,\n    getThumbIconProps,\n    getStartContentProps,\n    getEndContentProps\n  };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrc3dpdGNoQDIuMC4yNV9AbmV4dHVpLW9yZytzeXN0ZW1AMi4wLjE1X0BuZXh0dWktb3JnK3RoZW1lQDIuMS4xN19yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQG5leHR1aS1vcmcvc3dpdGNoL2Rpc3QvY2h1bmstQkI2VklWTEEubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUM2RDtBQUNQO0FBQ0Y7QUFDRTtBQUNYO0FBQ1c7QUFDSTtBQUNBO0FBQ1c7QUFDckM7QUFDdUI7QUFDTjtBQUNqRCxxQ0FBcUM7QUFDckMsZ0NBQWdDLG9FQUFnQixnQkFBZ0IscURBQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsbUJBQW1CLDZDQUFNO0FBQ3pCLGlCQUFpQix3RUFBZTtBQUNoQyxrQkFBa0IsNENBQUs7QUFDdkIsMEJBQTBCLDhDQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsNkRBQWtCO0FBQ3hCLFVBQVUsd0NBQXdDLEVBQUUsK0RBQVksR0FBRyxpQ0FBaUM7QUFDcEcsVUFBVSx3QkFBd0IsRUFBRSxrRUFBUTtBQUM1QztBQUNBLEdBQUc7QUFDSDtBQUNBLGtDQUFrQywrQ0FBUTtBQUMxQyxVQUFVLGFBQWEsRUFBRSxvRUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFPO0FBQ3ZCLFVBQVUseURBQU07QUFDaEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQiw4REFBSTtBQUN6QjtBQUNBO0FBQ0EsU0FBUyw4REFBVTtBQUNuQjtBQUNBLDhCQUE4QixPQUFPLDhEQUFJLDBEQUEwRDtBQUNuRyx1QkFBdUIsbUVBQVE7QUFDL0IsdUJBQXVCLG1FQUFRO0FBQy9CLHVCQUF1QixtRUFBUTtBQUMvQixvQkFBb0IsbUVBQVE7QUFDNUIsNEJBQTRCLG1FQUFRO0FBQ3BDLG9CQUFvQixtRUFBUTtBQUM1QixzQkFBc0IsbUVBQVE7QUFDOUI7QUFDQTtBQUNBLDBCQUEwQixrREFBVztBQUNyQyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhEQUFJLGlCQUFpQixPQUFPLDhEQUFJLGdHQUFnRztBQUNuSjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsU0FBUyw4REFBVTtBQUNuQjtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFLO0FBQ3JCO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVc7QUFDbkMsZ0JBQWdCO0FBQ2hCO0FBQ0EsK0JBQStCLE9BQU8sOERBQUksOEZBQThGO0FBQ3hJLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFXO0FBQ25DLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsK0JBQStCLE9BQU8sOERBQUksOEZBQThGO0FBQ3hJLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFXO0FBQ3ZDO0FBQ0E7QUFDQSxLQUFLLEtBQUssOERBQVU7QUFDcEI7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU8sOERBQUksc0RBQXNEO0FBQ3RHLE9BQU87QUFDUDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrREFBVztBQUMxQyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU8sOERBQUkscUdBQXFHO0FBQ3RKLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFXO0FBQ3hDLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTyw4REFBSSxtR0FBbUc7QUFDbEosS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zZXR1cC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AbmV4dHVpLW9yZytzd2l0Y2hAMi4wLjI1X0BuZXh0dWktb3JnK3N5c3RlbUAyLjAuMTVfQG5leHR1aS1vcmcrdGhlbWVAMi4xLjE3X3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AbmV4dHVpLW9yZy9zd2l0Y2gvZGlzdC9jaHVuay1CQjZWSVZMQS5tanM/NTVhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gc3JjL3VzZS1zd2l0Y2gudHNcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VJZCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFwUHJvcHNWYXJpYW50cyB9IGZyb20gXCJAbmV4dHVpLW9yZy9zeXN0ZW1cIjtcbmltcG9ydCB7IHVzZUhvdmVyIH0gZnJvbSBcIkByZWFjdC1hcmlhL2ludGVyYWN0aW9uc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3MgfSBmcm9tIFwiQG5leHR1aS1vcmcvdXNlLWFyaWEtcHJlc3NcIjtcbmltcG9ydCB7IHRvZ2dsZSB9IGZyb20gXCJAbmV4dHVpLW9yZy90aGVtZVwiO1xuaW1wb3J0IHsgY2hhaW4sIG1lcmdlUHJvcHMgfSBmcm9tIFwiQHJlYWN0LWFyaWEvdXRpbHNcIjtcbmltcG9ydCB7IGNsc3gsIGRhdGFBdHRyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3NoYXJlZC11dGlsc1wiO1xuaW1wb3J0IHsgdXNlRm9jdXNhYmxlUmVmIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0LXV0aWxzXCI7XG5pbXBvcnQgeyB1c2VTd2l0Y2ggYXMgdXNlUmVhY3RBcmlhU3dpdGNoIH0gZnJvbSBcIkByZWFjdC1hcmlhL3N3aXRjaFwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlU3RhdGUgfSBmcm9tIFwiQHJlYWN0LXN0YXRlbHkvdG9nZ2xlXCI7XG5pbXBvcnQgeyB1c2VGb2N1c1JpbmcgfSBmcm9tIFwiQHJlYWN0LWFyaWEvZm9jdXNcIjtcbmZ1bmN0aW9uIHVzZVN3aXRjaChvcmlnaW5hbFByb3BzID0ge30pIHtcbiAgY29uc3QgW3Byb3BzLCB2YXJpYW50UHJvcHNdID0gbWFwUHJvcHNWYXJpYW50cyhvcmlnaW5hbFByb3BzLCB0b2dnbGUudmFyaWFudEtleXMpO1xuICBjb25zdCB7XG4gICAgcmVmLFxuICAgIGFzLFxuICAgIG5hbWUsXG4gICAgdmFsdWUgPSBcIlwiLFxuICAgIGlzUmVhZE9ubHk6IGlzUmVhZE9ubHlQcm9wID0gZmFsc2UsXG4gICAgYXV0b0ZvY3VzID0gZmFsc2UsXG4gICAgc3RhcnRDb250ZW50LFxuICAgIGVuZENvbnRlbnQsXG4gICAgZGVmYXVsdFNlbGVjdGVkLFxuICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWRQcm9wLFxuICAgIGNoaWxkcmVuLFxuICAgIHRodW1iSWNvbixcbiAgICBjbGFzc05hbWUsXG4gICAgY2xhc3NOYW1lcyxcbiAgICBvbkNoYW5nZSxcbiAgICBvblZhbHVlQ2hhbmdlLFxuICAgIC4uLm90aGVyUHJvcHNcbiAgfSA9IHByb3BzO1xuICBjb25zdCBDb21wb25lbnQgPSBhcyB8fCBcImxhYmVsXCI7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkb21SZWYgPSB1c2VGb2N1c2FibGVSZWYocmVmLCBpbnB1dFJlZik7XG4gIGNvbnN0IGxhYmVsSWQgPSB1c2VJZCgpO1xuICBjb25zdCBhcmlhU3dpdGNoUHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBhcmlhTGFiZWwgPSBvdGhlclByb3BzW1wiYXJpYS1sYWJlbFwiXSB8fCB0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgPyBjaGlsZHJlbiA6IHZvaWQgMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWQsXG4gICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkUHJvcCxcbiAgICAgIGlzRGlzYWJsZWQ6ICEhb3JpZ2luYWxQcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNSZWFkT25seTogaXNSZWFkT25seVByb3AsXG4gICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogb3RoZXJQcm9wc1tcImFyaWEtbGFiZWxsZWRieVwiXSB8fCBsYWJlbElkLFxuICAgICAgb25DaGFuZ2U6IG9uVmFsdWVDaGFuZ2VcbiAgICB9O1xuICB9LCBbXG4gICAgdmFsdWUsXG4gICAgbmFtZSxcbiAgICBsYWJlbElkLFxuICAgIGNoaWxkcmVuLFxuICAgIGF1dG9Gb2N1cyxcbiAgICBpc1JlYWRPbmx5UHJvcCxcbiAgICBpc1NlbGVjdGVkUHJvcCxcbiAgICBkZWZhdWx0U2VsZWN0ZWQsXG4gICAgb3JpZ2luYWxQcm9wcy5pc0Rpc2FibGVkLFxuICAgIG90aGVyUHJvcHNbXCJhcmlhLWxhYmVsXCJdLFxuICAgIG90aGVyUHJvcHNbXCJhcmlhLWxhYmVsbGVkYnlcIl0sXG4gICAgb25WYWx1ZUNoYW5nZVxuICBdKTtcbiAgY29uc3Qgc3RhdGUgPSB1c2VUb2dnbGVTdGF0ZShhcmlhU3dpdGNoUHJvcHMpO1xuICBjb25zdCB7XG4gICAgaW5wdXRQcm9wcyxcbiAgICBpc1ByZXNzZWQ6IGlzUHJlc3NlZEtleWJvYXJkLFxuICAgIGlzUmVhZE9ubHlcbiAgfSA9IHVzZVJlYWN0QXJpYVN3aXRjaChhcmlhU3dpdGNoUHJvcHMsIHN0YXRlLCBpbnB1dFJlZik7XG4gIGNvbnN0IHsgZm9jdXNQcm9wcywgaXNGb2N1c2VkLCBpc0ZvY3VzVmlzaWJsZSB9ID0gdXNlRm9jdXNSaW5nKHsgYXV0b0ZvY3VzOiBpbnB1dFByb3BzLmF1dG9Gb2N1cyB9KTtcbiAgY29uc3QgeyBob3ZlclByb3BzLCBpc0hvdmVyZWQgfSA9IHVzZUhvdmVyKHtcbiAgICBpc0Rpc2FibGVkOiBpbnB1dFByb3BzLmRpc2FibGVkXG4gIH0pO1xuICBjb25zdCBpc0ludGVyYWN0aW9uRGlzYWJsZWQgPSBhcmlhU3dpdGNoUHJvcHMuaXNEaXNhYmxlZCB8fCBpc1JlYWRPbmx5O1xuICBjb25zdCBbaXNQcmVzc2VkLCBzZXRQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBwcmVzc1Byb3BzIH0gPSB1c2VQcmVzcyh7XG4gICAgaXNEaXNhYmxlZDogaXNJbnRlcmFjdGlvbkRpc2FibGVkLFxuICAgIG9uUHJlc3NTdGFydChlKSB7XG4gICAgICBpZiAoZS5wb2ludGVyVHlwZSAhPT0gXCJrZXlib2FyZFwiKSB7XG4gICAgICAgIHNldFByZXNzZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblByZXNzRW5kKGUpIHtcbiAgICAgIGlmIChlLnBvaW50ZXJUeXBlICE9PSBcImtleWJvYXJkXCIpIHtcbiAgICAgICAgc2V0UHJlc3NlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcHJlc3NlZCA9IGlzSW50ZXJhY3Rpb25EaXNhYmxlZCA/IGZhbHNlIDogaXNQcmVzc2VkIHx8IGlzUHJlc3NlZEtleWJvYXJkO1xuICBjb25zdCBpc1NlbGVjdGVkID0gaW5wdXRQcm9wcy5jaGVja2VkO1xuICBjb25zdCBpc0Rpc2FibGVkID0gaW5wdXRQcm9wcy5kaXNhYmxlZDtcbiAgY29uc3Qgc2xvdHMgPSB1c2VNZW1vKFxuICAgICgpID0+IHRvZ2dsZSh7XG4gICAgICAuLi52YXJpYW50UHJvcHNcbiAgICB9KSxcbiAgICBbLi4uT2JqZWN0LnZhbHVlcyh2YXJpYW50UHJvcHMpXVxuICApO1xuICBjb25zdCBiYXNlU3R5bGVzID0gY2xzeChjbGFzc05hbWVzID09IG51bGwgPyB2b2lkIDAgOiBjbGFzc05hbWVzLmJhc2UsIGNsYXNzTmFtZSk7XG4gIGNvbnN0IGdldEJhc2VQcm9wcyA9IChwcm9wczIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ubWVyZ2VQcm9wcyhob3ZlclByb3BzLCBwcmVzc1Byb3BzLCBvdGhlclByb3BzLCBwcm9wczIpLFxuICAgICAgcmVmOiBkb21SZWYsXG4gICAgICBjbGFzc05hbWU6IHNsb3RzLmJhc2UoeyBjbGFzczogY2xzeChiYXNlU3R5bGVzLCBwcm9wczIgPT0gbnVsbCA/IHZvaWQgMCA6IHByb3BzMi5jbGFzc05hbWUpIH0pLFxuICAgICAgXCJkYXRhLWRpc2FibGVkXCI6IGRhdGFBdHRyKGlzRGlzYWJsZWQpLFxuICAgICAgXCJkYXRhLXNlbGVjdGVkXCI6IGRhdGFBdHRyKGlzU2VsZWN0ZWQpLFxuICAgICAgXCJkYXRhLXJlYWRvbmx5XCI6IGRhdGFBdHRyKGlzUmVhZE9ubHkpLFxuICAgICAgXCJkYXRhLWZvY3VzXCI6IGRhdGFBdHRyKGlzRm9jdXNlZCksXG4gICAgICBcImRhdGEtZm9jdXMtdmlzaWJsZVwiOiBkYXRhQXR0cihpc0ZvY3VzVmlzaWJsZSksXG4gICAgICBcImRhdGEtaG92ZXJcIjogZGF0YUF0dHIoaXNIb3ZlcmVkKSxcbiAgICAgIFwiZGF0YS1wcmVzc2VkXCI6IGRhdGFBdHRyKHByZXNzZWQpXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgZ2V0V3JhcHBlclByb3BzID0gdXNlQ2FsbGJhY2soXG4gICAgKHByb3BzMiA9IHt9KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcm9wczIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KHNsb3RzLndyYXBwZXIoeyBjbGFzczogY2xzeChjbGFzc05hbWVzID09IG51bGwgPyB2b2lkIDAgOiBjbGFzc05hbWVzLndyYXBwZXIsIHByb3BzMiA9PSBudWxsID8gdm9pZCAwIDogcHJvcHMyLmNsYXNzTmFtZSkgfSkpXG4gICAgICB9O1xuICAgIH0sXG4gICAgW3Nsb3RzLCBjbGFzc05hbWVzID09IG51bGwgPyB2b2lkIDAgOiBjbGFzc05hbWVzLndyYXBwZXJdXG4gICk7XG4gIGNvbnN0IGdldElucHV0UHJvcHMgPSAocHJvcHMyID0ge30pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ubWVyZ2VQcm9wcyhpbnB1dFByb3BzLCBmb2N1c1Byb3BzLCBwcm9wczIpLFxuICAgICAgcmVmOiBpbnB1dFJlZixcbiAgICAgIGlkOiBpbnB1dFByb3BzLmlkLFxuICAgICAgb25DaGFuZ2U6IGNoYWluKG9uQ2hhbmdlLCBpbnB1dFByb3BzLm9uQ2hhbmdlKVxuICAgIH07XG4gIH07XG4gIGNvbnN0IGdldFRodW1iUHJvcHMgPSB1c2VDYWxsYmFjayhcbiAgICAocHJvcHMyID0ge30pID0+ICh7XG4gICAgICAuLi5wcm9wczIsXG4gICAgICBjbGFzc05hbWU6IHNsb3RzLnRodW1iKHsgY2xhc3M6IGNsc3goY2xhc3NOYW1lcyA9PSBudWxsID8gdm9pZCAwIDogY2xhc3NOYW1lcy50aHVtYiwgcHJvcHMyID09IG51bGwgPyB2b2lkIDAgOiBwcm9wczIuY2xhc3NOYW1lKSB9KVxuICAgIH0pLFxuICAgIFtzbG90cywgY2xhc3NOYW1lcyA9PSBudWxsID8gdm9pZCAwIDogY2xhc3NOYW1lcy50aHVtYl1cbiAgKTtcbiAgY29uc3QgZ2V0TGFiZWxQcm9wcyA9IHVzZUNhbGxiYWNrKFxuICAgIChwcm9wczIgPSB7fSkgPT4gKHtcbiAgICAgIC4uLnByb3BzMixcbiAgICAgIGlkOiBsYWJlbElkLFxuICAgICAgY2xhc3NOYW1lOiBzbG90cy5sYWJlbCh7IGNsYXNzOiBjbHN4KGNsYXNzTmFtZXMgPT0gbnVsbCA/IHZvaWQgMCA6IGNsYXNzTmFtZXMubGFiZWwsIHByb3BzMiA9PSBudWxsID8gdm9pZCAwIDogcHJvcHMyLmNsYXNzTmFtZSkgfSlcbiAgICB9KSxcbiAgICBbc2xvdHMsIGNsYXNzTmFtZXMgPT0gbnVsbCA/IHZvaWQgMCA6IGNsYXNzTmFtZXMubGFiZWwsIGlzRGlzYWJsZWQsIGlzU2VsZWN0ZWRdXG4gICk7XG4gIGNvbnN0IGdldFRodW1iSWNvblByb3BzID0gdXNlQ2FsbGJhY2soXG4gICAgKHByb3BzMiA9IHtcbiAgICAgIGluY2x1ZGVTdGF0ZVByb3BzOiBmYWxzZVxuICAgIH0pID0+IG1lcmdlUHJvcHMoXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBcIjFlbVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMWVtXCIsXG4gICAgICAgIGNsYXNzTmFtZTogc2xvdHMudGh1bWJJY29uKHsgY2xhc3M6IGNsc3goY2xhc3NOYW1lcyA9PSBudWxsID8gdm9pZCAwIDogY2xhc3NOYW1lcy50aHVtYkljb24pIH0pXG4gICAgICB9LFxuICAgICAgcHJvcHMyLmluY2x1ZGVTdGF0ZVByb3BzID8ge1xuICAgICAgICBpc1NlbGVjdGVkXG4gICAgICB9IDoge31cbiAgICApLFxuICAgIFtzbG90cywgY2xhc3NOYW1lcyA9PSBudWxsID8gdm9pZCAwIDogY2xhc3NOYW1lcy50aHVtYkljb24sIGlzU2VsZWN0ZWRdXG4gICk7XG4gIGNvbnN0IGdldFN0YXJ0Q29udGVudFByb3BzID0gdXNlQ2FsbGJhY2soXG4gICAgKHByb3BzMiA9IHt9KSA9PiAoe1xuICAgICAgd2lkdGg6IFwiMWVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMWVtXCIsXG4gICAgICAuLi5wcm9wczIsXG4gICAgICBjbGFzc05hbWU6IHNsb3RzLnN0YXJ0Q29udGVudCh7IGNsYXNzOiBjbHN4KGNsYXNzTmFtZXMgPT0gbnVsbCA/IHZvaWQgMCA6IGNsYXNzTmFtZXMuc3RhcnRDb250ZW50LCBwcm9wczIgPT0gbnVsbCA/IHZvaWQgMCA6IHByb3BzMi5jbGFzc05hbWUpIH0pXG4gICAgfSksXG4gICAgW3Nsb3RzLCBjbGFzc05hbWVzID09IG51bGwgPyB2b2lkIDAgOiBjbGFzc05hbWVzLnN0YXJ0Q29udGVudCwgaXNTZWxlY3RlZF1cbiAgKTtcbiAgY29uc3QgZ2V0RW5kQ29udGVudFByb3BzID0gdXNlQ2FsbGJhY2soXG4gICAgKHByb3BzMiA9IHt9KSA9PiAoe1xuICAgICAgd2lkdGg6IFwiMWVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMWVtXCIsXG4gICAgICAuLi5wcm9wczIsXG4gICAgICBjbGFzc05hbWU6IHNsb3RzLmVuZENvbnRlbnQoeyBjbGFzczogY2xzeChjbGFzc05hbWVzID09IG51bGwgPyB2b2lkIDAgOiBjbGFzc05hbWVzLmVuZENvbnRlbnQsIHByb3BzMiA9PSBudWxsID8gdm9pZCAwIDogcHJvcHMyLmNsYXNzTmFtZSkgfSlcbiAgICB9KSxcbiAgICBbc2xvdHMsIGNsYXNzTmFtZXMgPT0gbnVsbCA/IHZvaWQgMCA6IGNsYXNzTmFtZXMuZW5kQ29udGVudCwgaXNTZWxlY3RlZF1cbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBDb21wb25lbnQsXG4gICAgc2xvdHMsXG4gICAgY2xhc3NOYW1lcyxcbiAgICBkb21SZWYsXG4gICAgY2hpbGRyZW4sXG4gICAgdGh1bWJJY29uLFxuICAgIHN0YXJ0Q29udGVudCxcbiAgICBlbmRDb250ZW50LFxuICAgIGlzSG92ZXJlZCxcbiAgICBpc1NlbGVjdGVkLFxuICAgIGlzUHJlc3NlZDogcHJlc3NlZCxcbiAgICBpc0ZvY3VzZWQsXG4gICAgaXNGb2N1c1Zpc2libGUsXG4gICAgaXNEaXNhYmxlZCxcbiAgICBnZXRCYXNlUHJvcHMsXG4gICAgZ2V0V3JhcHBlclByb3BzLFxuICAgIGdldElucHV0UHJvcHMsXG4gICAgZ2V0TGFiZWxQcm9wcyxcbiAgICBnZXRUaHVtYlByb3BzLFxuICAgIGdldFRodW1iSWNvblByb3BzLFxuICAgIGdldFN0YXJ0Q29udGVudFByb3BzLFxuICAgIGdldEVuZENvbnRlbnRQcm9wc1xuICB9O1xufVxuXG5leHBvcnQge1xuICB1c2VTd2l0Y2hcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0/node_modules/@nextui-org/switch/dist/chunk-BB6VIVLA.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0/node_modules/@nextui-org/switch/dist/chunk-N4MZXI4F.mjs":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0/node_modules/@nextui-org/switch/dist/chunk-N4MZXI4F.mjs ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   switch_default: () => (/* binding */ switch_default)\n/* harmony export */ });\n/* harmony import */ var _chunk_BB6VIVLA_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-BB6VIVLA.mjs */ \"(ssr)/./node_modules/.pnpm/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0/node_modules/@nextui-org/switch/dist/chunk-BB6VIVLA.mjs\");\n/* harmony import */ var _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/visually-hidden */ \"(ssr)/./node_modules/.pnpm/@react-aria+visually-hidden@3.8.7_react@18.2.0/node_modules/@react-aria/visually-hidden/dist/import.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _nextui_org_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/system */ \"(ssr)/./node_modules/.pnpm/@nextui-org+system-rsc@2.0.11_@nextui-org+theme@2.1.17_react@18.2.0_tailwind-variants@0.1.18/node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@13.5.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/shared/react-jsx-runtime.js\");\n\"use client\";\n\n\n// src/switch.tsx\n\n\n\n\nvar Switch = (0,_nextui_org_system__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref) => {\n  const {\n    Component,\n    children,\n    startContent,\n    endContent,\n    thumbIcon,\n    getBaseProps,\n    getInputProps,\n    getWrapperProps,\n    getThumbProps,\n    getThumbIconProps,\n    getLabelProps,\n    getStartContentProps,\n    getEndContentProps\n  } = (0,_chunk_BB6VIVLA_mjs__WEBPACK_IMPORTED_MODULE_3__.useSwitch)({ ...props, ref });\n  const clonedThumbIcon = typeof thumbIcon === \"function\" ? thumbIcon(getThumbIconProps({ includeStateProps: true })) : thumbIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(thumbIcon, getThumbIconProps());\n  const clonedStartContent = startContent && (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(startContent, getStartContentProps());\n  const clonedEndContent = endContent && (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(endContent, getEndContentProps());\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Component, { ...getBaseProps(), children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_4__.VisuallyHidden, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", { ...getInputProps() }) }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"span\", { ...getWrapperProps(), children: [\n      startContent && clonedStartContent,\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", { ...getThumbProps(), children: thumbIcon && clonedThumbIcon }),\n      endContent && clonedEndContent\n    ] }),\n    children && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", { ...getLabelProps(), children })\n  ] });\n});\nSwitch.displayName = \"NextUI.Switch\";\nvar switch_default = Switch;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrc3dpdGNoQDIuMC4yNV9AbmV4dHVpLW9yZytzeXN0ZW1AMi4wLjE1X0BuZXh0dWktb3JnK3RoZW1lQDIuMS4xN19yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQG5leHR1aS1vcmcvc3dpdGNoL2Rpc3QvY2h1bmstTjRNWlhJNEYubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRzhCOztBQUU5QjtBQUM2RDtBQUN4QjtBQUNXO0FBQ0Y7QUFDOUMsYUFBYSw4REFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLDhEQUFTLEdBQUcsZUFBZTtBQUNqQywwRkFBMEYseUJBQXlCLGtCQUFrQixtREFBWTtBQUNqSiw2Q0FBNkMsbURBQVk7QUFDekQseUNBQXlDLG1EQUFZO0FBQ3JELHlCQUF5Qix1REFBSSxjQUFjO0FBQzNDLG9CQUFvQixzREFBRyxDQUFDLHVFQUFjLElBQUksMEJBQTBCLHNEQUFHLFlBQVksb0JBQW9CLEdBQUc7QUFDMUcsb0JBQW9CLHVEQUFJLFdBQVc7QUFDbkM7QUFDQSxzQkFBc0Isc0RBQUcsV0FBVyw0REFBNEQ7QUFDaEc7QUFDQSxPQUFPO0FBQ1AsZ0NBQWdDLHNEQUFHLFdBQVcsOEJBQThCO0FBQzVFLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zZXR1cC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AbmV4dHVpLW9yZytzd2l0Y2hAMi4wLjI1X0BuZXh0dWktb3JnK3N5c3RlbUAyLjAuMTVfQG5leHR1aS1vcmcrdGhlbWVAMi4xLjE3X3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AbmV4dHVpLW9yZy9zd2l0Y2gvZGlzdC9jaHVuay1ONE1aWEk0Ri5tanM/ZGMwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7XG4gIHVzZVN3aXRjaFxufSBmcm9tIFwiLi9jaHVuay1CQjZWSVZMQS5tanNcIjtcblxuLy8gc3JjL3N3aXRjaC50c3hcbmltcG9ydCB7IFZpc3VhbGx5SGlkZGVuIH0gZnJvbSBcIkByZWFjdC1hcmlhL3Zpc3VhbGx5LWhpZGRlblwiO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcIkBuZXh0dWktb3JnL3N5c3RlbVwiO1xuaW1wb3J0IHsganN4LCBqc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG52YXIgU3dpdGNoID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuLFxuICAgIHN0YXJ0Q29udGVudCxcbiAgICBlbmRDb250ZW50LFxuICAgIHRodW1iSWNvbixcbiAgICBnZXRCYXNlUHJvcHMsXG4gICAgZ2V0SW5wdXRQcm9wcyxcbiAgICBnZXRXcmFwcGVyUHJvcHMsXG4gICAgZ2V0VGh1bWJQcm9wcyxcbiAgICBnZXRUaHVtYkljb25Qcm9wcyxcbiAgICBnZXRMYWJlbFByb3BzLFxuICAgIGdldFN0YXJ0Q29udGVudFByb3BzLFxuICAgIGdldEVuZENvbnRlbnRQcm9wc1xuICB9ID0gdXNlU3dpdGNoKHsgLi4ucHJvcHMsIHJlZiB9KTtcbiAgY29uc3QgY2xvbmVkVGh1bWJJY29uID0gdHlwZW9mIHRodW1iSWNvbiA9PT0gXCJmdW5jdGlvblwiID8gdGh1bWJJY29uKGdldFRodW1iSWNvblByb3BzKHsgaW5jbHVkZVN0YXRlUHJvcHM6IHRydWUgfSkpIDogdGh1bWJJY29uICYmIGNsb25lRWxlbWVudCh0aHVtYkljb24sIGdldFRodW1iSWNvblByb3BzKCkpO1xuICBjb25zdCBjbG9uZWRTdGFydENvbnRlbnQgPSBzdGFydENvbnRlbnQgJiYgY2xvbmVFbGVtZW50KHN0YXJ0Q29udGVudCwgZ2V0U3RhcnRDb250ZW50UHJvcHMoKSk7XG4gIGNvbnN0IGNsb25lZEVuZENvbnRlbnQgPSBlbmRDb250ZW50ICYmIGNsb25lRWxlbWVudChlbmRDb250ZW50LCBnZXRFbmRDb250ZW50UHJvcHMoKSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4cyhDb21wb25lbnQsIHsgLi4uZ2V0QmFzZVByb3BzKCksIGNoaWxkcmVuOiBbXG4gICAgLyogQF9fUFVSRV9fICovIGpzeChWaXN1YWxseUhpZGRlbiwgeyBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeChcImlucHV0XCIsIHsgLi4uZ2V0SW5wdXRQcm9wcygpIH0pIH0pLFxuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwic3BhblwiLCB7IC4uLmdldFdyYXBwZXJQcm9wcygpLCBjaGlsZHJlbjogW1xuICAgICAgc3RhcnRDb250ZW50ICYmIGNsb25lZFN0YXJ0Q29udGVudCxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJzcGFuXCIsIHsgLi4uZ2V0VGh1bWJQcm9wcygpLCBjaGlsZHJlbjogdGh1bWJJY29uICYmIGNsb25lZFRodW1iSWNvbiB9KSxcbiAgICAgIGVuZENvbnRlbnQgJiYgY2xvbmVkRW5kQ29udGVudFxuICAgIF0gfSksXG4gICAgY2hpbGRyZW4gJiYgLyogQF9fUFVSRV9fICovIGpzeChcInNwYW5cIiwgeyAuLi5nZXRMYWJlbFByb3BzKCksIGNoaWxkcmVuIH0pXG4gIF0gfSk7XG59KTtcblN3aXRjaC5kaXNwbGF5TmFtZSA9IFwiTmV4dFVJLlN3aXRjaFwiO1xudmFyIHN3aXRjaF9kZWZhdWx0ID0gU3dpdGNoO1xuXG5leHBvcnQge1xuICBzd2l0Y2hfZGVmYXVsdFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@nextui-org+switch@2.0.25_@nextui-org+system@2.0.15_@nextui-org+theme@2.1.17_react-dom@18.2.0_react@18.2.0/node_modules/@nextui-org/switch/dist/chunk-N4MZXI4F.mjs\n");

/***/ })

};
;