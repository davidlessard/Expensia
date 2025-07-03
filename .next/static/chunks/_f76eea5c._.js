(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/AnimatedCounter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
;
;
const AnimatedCounter = ({ amount })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            duration: 1,
            separator: " ",
            decimals: 2,
            decimal: ",",
            suffix: " $",
            end: amount
        }, void 0, false, {
            fileName: "[project]/components/AnimatedCounter.tsx",
            lineNumber: 7,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AnimatedCounter.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = AnimatedCounter;
const __TURBOPACK__default__export__ = AnimatedCounter;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/DoughnutChart.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TotalBalanceBox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnimatedCounter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoughnutChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DoughnutChart.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "total-balance",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "total-balance-chart",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoughnutChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    accounts: accounts
                }, void 0, false, {
                    fileName: "[project]/components/TotalBalanceBox.tsx",
                    lineNumber: 15,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TotalBalanceBox.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "header-2",
                        children: [
                            "Bank Accounts : ",
                            totalBanks
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TotalBalanceBox.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "total-balance-label",
                                children: "Total Current Balance"
                            }, void 0, false, {
                                fileName: "[project]/components/TotalBalanceBox.tsx",
                                lineNumber: 23,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "total-balance-amount flex-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    amount: totalCurrentBalance
                                }, void 0, false, {
                                    fileName: "[project]/components/TotalBalanceBox.tsx",
                                    lineNumber: 27,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/TotalBalanceBox.tsx",
                                lineNumber: 26,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TotalBalanceBox.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TotalBalanceBox.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TotalBalanceBox.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_c = TotalBalanceBox;
const __TURBOPACK__default__export__ = TotalBalanceBox;
var _c;
__turbopack_context__.k.register(_c, "TotalBalanceBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/countup.js/dist/countUp.umd.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
!function(t, i) {
    ("TURBOPACK compile-time truthy", 1) ? i(exports) : ("TURBOPACK unreachable", undefined);
}(this, function(t) {
    "use strict";
    var i = function() {
        return i = Object.assign || function(t) {
            for(var i, n = 1, s = arguments.length; n < s; n++)for(var e in i = arguments[n])Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
            return t;
        }, i.apply(this, arguments);
    }, n = function() {
        function t(t, n, s) {
            var e = this;
            this.endVal = n, this.options = s, this.version = "2.9.0", this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1
            }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(t) {
                e.startTime || (e.startTime = t);
                var i = t - e.startTime;
                e.remaining = e.duration - i, e.useEasing ? e.countDown ? e.frameVal = e.startVal - e.easingFn(i, 0, e.startVal - e.endVal, e.duration) : e.frameVal = e.easingFn(i, e.startVal, e.endVal - e.startVal, e.duration) : e.frameVal = e.startVal + (e.endVal - e.startVal) * (i / e.duration);
                var n = e.countDown ? e.frameVal < e.endVal : e.frameVal > e.endVal;
                e.frameVal = n ? e.endVal : e.frameVal, e.frameVal = Number(e.frameVal.toFixed(e.options.decimalPlaces)), e.printValue(e.frameVal), i < e.duration ? e.rAF = requestAnimationFrame(e.count) : null !== e.finalEndVal ? e.update(e.finalEndVal) : e.options.onCompleteCallback && e.options.onCompleteCallback();
            }, this.formatNumber = function(t) {
                var i, n, s, a, o = t < 0 ? "-" : "";
                i = Math.abs(t).toFixed(e.options.decimalPlaces);
                var r = (i += "").split(".");
                if (n = r[0], s = r.length > 1 ? e.options.decimal + r[1] : "", e.options.useGrouping) {
                    a = "";
                    for(var l = 3, u = 0, h = 0, p = n.length; h < p; ++h)e.options.useIndianSeparators && 4 === h && (l = 2, u = 1), 0 !== h && u % l == 0 && (a = e.options.separator + a), u++, a = n[p - h - 1] + a;
                    n = a;
                }
                return e.options.numerals && e.options.numerals.length && (n = n.replace(/[0-9]/g, function(t) {
                    return e.options.numerals[+t];
                }), s = s.replace(/[0-9]/g, function(t) {
                    return e.options.numerals[+t];
                })), o + e.options.prefix + n + s + e.options.suffix;
            }, this.easeOutExpo = function(t, i, n, s) {
                return n * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i;
            }, this.options = i(i({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = "string" == typeof t ? document.getElementById(t) : t, n = null == n ? this.parse(this.el.innerHTML) : n, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                return e.handleScroll(e);
            }), window.onscroll = function() {
                window.onScrollFns.forEach(function(t) {
                    return t();
                });
            }, this.handleScroll(this)));
        }
        return t.prototype.handleScroll = function(t) {
            if (t && window && !t.once) {
                var i = window.innerHeight + window.scrollY, n = t.el.getBoundingClientRect(), s = n.top + window.pageYOffset, e = n.top + n.height + window.pageYOffset;
                e < i && e > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function() {
                    return t.start();
                }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > e || s > i) && !t.paused && t.reset();
            }
        }, t.prototype.determineDirectionAndSmartEasing = function() {
            var t = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > t;
            var i = t - this.startVal;
            if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
                this.finalEndVal = t;
                var n = this.countDown ? 1 : -1;
                this.endVal = t + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
            } else this.endVal = t, this.finalEndVal = null;
            null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
        }, t.prototype.start = function(t) {
            this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
        }, t.prototype.pauseResume = function() {
            this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
        }, t.prototype.reset = function() {
            cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
        }, t.prototype.update = function(t) {
            cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
        }, t.prototype.printValue = function(t) {
            var i;
            if (this.el) {
                var n = this.formattingFn(t);
                if (null === (i = this.options.plugin) || void 0 === i ? void 0 : i.render) this.options.plugin.render(this.el, n);
                else if ("INPUT" === this.el.tagName) this.el.value = n;
                else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
            }
        }, t.prototype.ensureNumber = function(t) {
            return "number" == typeof t && !isNaN(t);
        }, t.prototype.validateValue = function(t) {
            var i = Number(t);
            return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(t), null);
        }, t.prototype.resetDuration = function() {
            this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
        }, t.prototype.parse = function(t) {
            var i = function(t) {
                return t.replace(/([.,'  ])/g, "\\$1");
            }, n = i(this.options.separator), s = i(this.options.decimal), e = t.replace(new RegExp(n, "g"), "").replace(new RegExp(s, "g"), ".");
            return parseFloat(e);
        }, t;
    }();
    t.CountUp = n;
});
}}),
"[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var countup_js = __turbopack_context__.r("[project]/node_modules/countup.js/dist/countUp.umd.js [app-client] (ecmascript)");
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/**
 * Silence SSR Warnings.
 * Borrowed from Formik v2.1.1, Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */ var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Create a stable reference to a callback which is updated after each render is committed.
 * Typed version borrowed from Formik v2.2.1. Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */ function useEventCallback(fn) {
    var ref = React.useRef(fn);
    // we copy a ref to the callback scoped to the current state/props on each render
    useIsomorphicLayoutEffect({
        "useEventCallback.useIsomorphicLayoutEffect": function() {
            ref.current = fn;
        }
    }["useEventCallback.useIsomorphicLayoutEffect"]);
    return React.useCallback({
        "useEventCallback.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return ref.current.apply(void 0, args);
        }
    }["useEventCallback.useCallback"], []);
}
var createCountUpInstance = function createCountUpInstance(el, props) {
    var decimal = props.decimal, decimals = props.decimals, duration = props.duration, easingFn = props.easingFn, end = props.end, formattingFn = props.formattingFn, numerals = props.numerals, prefix = props.prefix, separator = props.separator, start = props.start, suffix = props.suffix, useEasing = props.useEasing, useGrouping = props.useGrouping, useIndianSeparators = props.useIndianSeparators, enableScrollSpy = props.enableScrollSpy, scrollSpyDelay = props.scrollSpyDelay, scrollSpyOnce = props.scrollSpyOnce, plugin = props.plugin;
    return new countup_js.CountUp(el, end, {
        startVal: start,
        duration: duration,
        decimal: decimal,
        decimalPlaces: decimals,
        easingFn: easingFn,
        formattingFn: formattingFn,
        numerals: numerals,
        separator: separator,
        prefix: prefix,
        suffix: suffix,
        plugin: plugin,
        useEasing: useEasing,
        useIndianSeparators: useIndianSeparators,
        useGrouping: useGrouping,
        enableScrollSpy: enableScrollSpy,
        scrollSpyDelay: scrollSpyDelay,
        scrollSpyOnce: scrollSpyOnce
    });
};
var _excluded$1 = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate"
];
var DEFAULTS = {
    decimal: '.',
    separator: ',',
    delay: null,
    prefix: '',
    suffix: '',
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: true,
    enableReinitialize: true,
    useEasing: true,
    useGrouping: true,
    useIndianSeparators: false
};
var useCountUp = function useCountUp(props) {
    var filteredProps = Object.fromEntries(Object.entries(props).filter(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
        return value !== undefined;
    }));
    var _useMemo = React.useMemo({
        "useCountUp.useMemo[_useMemo]": function() {
            return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
        }
    }["useCountUp.useMemo[_useMemo]"], [
        props
    ]), ref = _useMemo.ref, startOnMount = _useMemo.startOnMount, enableReinitialize = _useMemo.enableReinitialize, delay = _useMemo.delay, onEnd = _useMemo.onEnd, onStart = _useMemo.onStart, onPauseResume = _useMemo.onPauseResume, onReset = _useMemo.onReset, onUpdate = _useMemo.onUpdate, instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
    var countUpRef = React.useRef();
    var timerRef = React.useRef();
    var isInitializedRef = React.useRef(false);
    var createInstance = useEventCallback({
        "useCountUp.useEventCallback[createInstance]": function() {
            return createCountUpInstance(typeof ref === 'string' ? ref : ref.current, instanceProps);
        }
    }["useCountUp.useEventCallback[createInstance]"]);
    var getCountUp = useEventCallback({
        "useCountUp.useEventCallback[getCountUp]": function(recreate) {
            var countUp = countUpRef.current;
            if (countUp && !recreate) {
                return countUp;
            }
            var newCountUp = createInstance();
            countUpRef.current = newCountUp;
            return newCountUp;
        }
    }["useCountUp.useEventCallback[getCountUp]"]);
    var start = useEventCallback({
        "useCountUp.useEventCallback[start]": function() {
            var run = function run() {
                return getCountUp(true).start({
                    "useCountUp.useEventCallback[start].run": function() {
                        onEnd === null || onEnd === void 0 || onEnd({
                            pauseResume: pauseResume,
                            reset: reset,
                            start: restart,
                            update: update
                        });
                    }
                }["useCountUp.useEventCallback[start].run"]);
            };
            if (delay && delay > 0) {
                timerRef.current = setTimeout(run, delay * 1000);
            } else {
                run();
            }
            onStart === null || onStart === void 0 || onStart({
                pauseResume: pauseResume,
                reset: reset,
                update: update
            });
        }
    }["useCountUp.useEventCallback[start]"]);
    var pauseResume = useEventCallback({
        "useCountUp.useEventCallback[pauseResume]": function() {
            getCountUp().pauseResume();
            onPauseResume === null || onPauseResume === void 0 || onPauseResume({
                reset: reset,
                start: restart,
                update: update
            });
        }
    }["useCountUp.useEventCallback[pauseResume]"]);
    var reset = useEventCallback({
        "useCountUp.useEventCallback[reset]": function() {
            // Quick fix for https://github.com/glennreyes/react-countup/issues/736 - should be investigated
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (getCountUp().el) {
                timerRef.current && clearTimeout(timerRef.current);
                getCountUp().reset();
                onReset === null || onReset === void 0 || onReset({
                    pauseResume: pauseResume,
                    start: restart,
                    update: update
                });
            }
        }
    }["useCountUp.useEventCallback[reset]"]);
    var update = useEventCallback({
        "useCountUp.useEventCallback[update]": function(newEnd) {
            getCountUp().update(newEnd);
            onUpdate === null || onUpdate === void 0 || onUpdate({
                pauseResume: pauseResume,
                reset: reset,
                start: restart
            });
        }
    }["useCountUp.useEventCallback[update]"]);
    var restart = useEventCallback({
        "useCountUp.useEventCallback[restart]": function() {
            reset();
            start();
        }
    }["useCountUp.useEventCallback[restart]"]);
    var maybeInitialize = useEventCallback({
        "useCountUp.useEventCallback[maybeInitialize]": function(shouldReset) {
            if (startOnMount) {
                if (shouldReset) {
                    reset();
                }
                start();
            }
        }
    }["useCountUp.useEventCallback[maybeInitialize]"]);
    React.useEffect({
        "useCountUp.useEffect": function() {
            if (!isInitializedRef.current) {
                isInitializedRef.current = true;
                maybeInitialize();
            } else if (enableReinitialize) {
                maybeInitialize(true);
            }
        }
    }["useCountUp.useEffect"], [
        enableReinitialize,
        isInitializedRef,
        maybeInitialize,
        delay,
        props.start,
        props.suffix,
        props.prefix,
        props.duration,
        props.separator,
        props.decimals,
        props.decimal,
        props.formattingFn
    ]);
    React.useEffect({
        "useCountUp.useEffect": function() {
            return ({
                "useCountUp.useEffect": function() {
                    reset();
                }
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        reset
    ]);
    return {
        start: restart,
        pauseResume: pauseResume,
        reset: reset,
        update: update,
        getCountUp: getCountUp
    };
};
var _excluded = [
    "className",
    "redraw",
    "containerProps",
    "children",
    "style"
];
var CountUp = function CountUp(props) {
    var className = props.className, redraw = props.redraw, containerProps = props.containerProps, children = props.children, style = props.style, useCountUpProps = _objectWithoutProperties(props, _excluded);
    var containerRef = React.useRef(null);
    var isInitializedRef = React.useRef(false);
    var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
        ref: containerRef,
        startOnMount: typeof children !== 'function' || props.delay === 0,
        // component manually restarts
        enableReinitialize: false
    })), start = _useCountUp.start, reset = _useCountUp.reset, updateCountUp = _useCountUp.update, pauseResume = _useCountUp.pauseResume, getCountUp = _useCountUp.getCountUp;
    var restart = useEventCallback({
        "CountUp.useEventCallback[restart]": function() {
            start();
        }
    }["CountUp.useEventCallback[restart]"]);
    var update = useEventCallback({
        "CountUp.useEventCallback[update]": function(end) {
            if (!props.preserveValue) {
                reset();
            }
            updateCountUp(end);
        }
    }["CountUp.useEventCallback[update]"]);
    var initializeOnMount = useEventCallback({
        "CountUp.useEventCallback[initializeOnMount]": function() {
            if (typeof props.children === 'function') {
                // Warn when user didn't use containerRef at all
                if (!(containerRef.current instanceof Element)) {
                    console.error("Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an Element, eg. <span ref={containerRef} />.");
                    return;
                }
            }
            // unlike the hook, the CountUp component initializes on mount
            getCountUp();
        }
    }["CountUp.useEventCallback[initializeOnMount]"]);
    React.useEffect({
        "CountUp.useEffect": function() {
            initializeOnMount();
        }
    }["CountUp.useEffect"], [
        initializeOnMount
    ]);
    React.useEffect({
        "CountUp.useEffect": function() {
            if (isInitializedRef.current) {
                update(props.end);
            }
        }
    }["CountUp.useEffect"], [
        props.end,
        update
    ]);
    var redrawDependencies = redraw && props;
    // if props.redraw, call this effect on every props change
    React.useEffect({
        "CountUp.useEffect": function() {
            if (redraw && isInitializedRef.current) {
                restart();
            }
        }
    }["CountUp.useEffect"], [
        restart,
        redraw,
        redrawDependencies
    ]);
    // if not props.redraw, call this effect only when certain props are changed
    React.useEffect({
        "CountUp.useEffect": function() {
            if (!redraw && isInitializedRef.current) {
                restart();
            }
        }
    }["CountUp.useEffect"], [
        restart,
        redraw,
        props.start,
        props.suffix,
        props.prefix,
        props.duration,
        props.separator,
        props.decimals,
        props.decimal,
        props.className,
        props.formattingFn
    ]);
    React.useEffect({
        "CountUp.useEffect": function() {
            isInitializedRef.current = true;
        }
    }["CountUp.useEffect"], []);
    if (typeof children === 'function') {
        // TypeScript forces functional components to return JSX.Element | null.
        return children({
            countUpRef: containerRef,
            start: start,
            reset: reset,
            update: updateCountUp,
            pauseResume: pauseResume,
            getCountUp: getCountUp
        });
    }
    return /*#__PURE__*/ React.createElement("span", _extends({
        className: className,
        ref: containerRef,
        style: style
    }, containerProps), typeof props.start !== 'undefined' ? getCountUp().formattingFn(props.start) : '');
};
exports.default = CountUp;
exports.useCountUp = useCountUp;
}}),
}]);

//# sourceMappingURL=_f76eea5c._.js.map