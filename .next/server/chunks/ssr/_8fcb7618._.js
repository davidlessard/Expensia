module.exports = {

"[project]/constants/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ITEMS": (()=>ITEMS),
    "TEST_ACCESS_TOKEN": (()=>TEST_ACCESS_TOKEN),
    "TEST_USER_ID": (()=>TEST_USER_ID),
    "sidebarLinks": (()=>sidebarLinks),
    "topCategoryStyles": (()=>topCategoryStyles),
    "transactionCategoryStyles": (()=>transactionCategoryStyles)
});
const sidebarLinks = [
    {
        imgURL: "/icons/home.svg",
        route: "/",
        label: "Home"
    },
    {
        imgURL: "/icons/dollar-circle.svg",
        route: "/my-banks",
        label: "My Banks"
    },
    {
        imgURL: "/icons/transaction.svg",
        route: "/transaction-history",
        label: "Transaction History"
    },
    {
        imgURL: "/icons/money-send.svg",
        route: "/payment-transfer",
        label: "Transfer Funds"
    }
];
const TEST_USER_ID = "6627ed3d00267aa6fa3e";
const TEST_ACCESS_TOKEN = "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";
const ITEMS = [
    {
        id: "6624c02e00367128945e",
        accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
        itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
        userId: "6627ed3d00267aa6fa3e",
        accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ"
    },
    {
        id: "6627f07b00348f242ea9",
        accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
        itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        userId: "6627ed3d00267aa6fa3e",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9"
    }
];
const topCategoryStyles = {
    "Food and Drink": {
        bg: "bg-blue-25",
        circleBg: "bg-blue-100",
        text: {
            main: "text-blue-900",
            count: "text-blue-700"
        },
        progress: {
            bg: "bg-blue-100",
            indicator: "bg-blue-700"
        },
        icon: "/icons/monitor.svg"
    },
    Travel: {
        bg: "bg-success-25",
        circleBg: "bg-success-100",
        text: {
            main: "text-success-900",
            count: "text-success-700"
        },
        progress: {
            bg: "bg-success-100",
            indicator: "bg-success-700"
        },
        icon: "/icons/coins.svg"
    },
    default: {
        bg: "bg-pink-25",
        circleBg: "bg-pink-100",
        text: {
            main: "text-pink-900",
            count: "text-pink-700"
        },
        progress: {
            bg: "bg-pink-100",
            indicator: "bg-pink-700"
        },
        icon: "/icons/shopping-bag.svg"
    }
};
const transactionCategoryStyles = {
    "Food and Drink": {
        borderColor: "border-pink-600",
        backgroundColor: "bg-pink-500",
        textColor: "text-pink-700",
        chipBackgroundColor: "bg-inherit"
    },
    Payment: {
        borderColor: "border-success-600",
        backgroundColor: "bg-green-600",
        textColor: "text-success-700",
        chipBackgroundColor: "bg-inherit"
    },
    "Bank Fees": {
        borderColor: "border-success-600",
        backgroundColor: "bg-green-600",
        textColor: "text-success-700",
        chipBackgroundColor: "bg-inherit"
    },
    Transfer: {
        borderColor: "border-red-700",
        backgroundColor: "bg-red-700",
        textColor: "text-red-700",
        chipBackgroundColor: "bg-inherit"
    },
    Processing: {
        borderColor: "border-[#F2F4F7]",
        backgroundColor: "bg-gray-500",
        textColor: "text-[#344054]",
        chipBackgroundColor: "bg-[#F2F4F7]"
    },
    Success: {
        borderColor: "border-[#12B76A]",
        backgroundColor: "bg-[#12B76A]",
        textColor: "text-[#027A48]",
        chipBackgroundColor: "bg-[#ECFDF3]"
    },
    default: {
        borderColor: "",
        backgroundColor: "bg-blue-500",
        textColor: "text-blue-700",
        chipBackgroundColor: "bg-inherit"
    }
};
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable no-prototype-builtins */ __turbopack_context__.s({
    "cn": (()=>cn),
    "countTransactionCategories": (()=>countTransactionCategories),
    "decryptId": (()=>decryptId),
    "encryptId": (()=>encryptId),
    "extractCustomerIdFromUrl": (()=>extractCustomerIdFromUrl),
    "formUrlQuery": (()=>formUrlQuery),
    "formatAmount": (()=>formatAmount),
    "formatDateTime": (()=>formatDateTime),
    "getAccountTypeColors": (()=>getAccountTypeColors),
    "getTransactionStatus": (()=>getTransactionStatus),
    "parseStringify": (()=>parseStringify),
    "removeSpecialCharacters": (()=>removeSpecialCharacters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/query-string/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const formatDateTime = (dateString)=>{
    const dateTimeOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };
    const dateDayOptions = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    };
    const dateOptions = {
        month: "short",
        year: "numeric",
        day: "numeric"
    };
    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };
    const formattedDateTime = new Date(dateString).toLocaleString("en-US", dateTimeOptions);
    const formattedDateDay = new Date(dateString).toLocaleString("en-US", dateDayOptions);
    const formattedDate = new Date(dateString).toLocaleString("en-US", dateOptions);
    const formattedTime = new Date(dateString).toLocaleString("en-US", timeOptions);
    return {
        dateTime: formattedDateTime,
        dateDay: formattedDateDay,
        dateOnly: formattedDate,
        timeOnly: formattedTime
    };
};
function formatAmount(amount) {
    const formatter = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        minimumFractionDigits: 2
    });
    return formatter.format(amount);
}
const parseStringify = (value)=>JSON.parse(JSON.stringify(value));
const removeSpecialCharacters = (value)=>{
    return value.replace(/[^\w\s]/gi, "");
};
function formUrlQuery({ params, key, value }) {
    const currentUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parse(params);
    currentUrl[key] = value;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stringifyUrl({
        url: window.location.pathname,
        query: currentUrl
    }, {
        skipNull: true
    });
}
function getAccountTypeColors(type) {
    switch(type){
        case "depository":
            return {
                bg: "bg-blue-25",
                lightBg: "bg-blue-100",
                title: "text-blue-900",
                subText: "text-blue-700"
            };
        case "credit":
            return {
                bg: "bg-success-25",
                lightBg: "bg-success-100",
                title: "text-success-900",
                subText: "text-success-700"
            };
        default:
            return {
                bg: "bg-green-25",
                lightBg: "bg-green-100",
                title: "text-green-900",
                subText: "text-green-700"
            };
    }
}
function countTransactionCategories(transactions) {
    const categoryCounts = {};
    let totalCount = 0;
    // Iterate over each transaction
    transactions && transactions.forEach((transaction)=>{
        // Extract the category from the transaction
        const category = transaction.category;
        // If the category exists in the categoryCounts object, increment its count
        if (categoryCounts.hasOwnProperty(category)) {
            categoryCounts[category]++;
        } else {
            // Otherwise, initialize the count to 1
            categoryCounts[category] = 1;
        }
        // Increment total count
        totalCount++;
    });
    // Convert the categoryCounts object to an array of objects
    const aggregatedCategories = Object.keys(categoryCounts).map((category)=>({
            name: category,
            count: categoryCounts[category],
            totalCount
        }));
    // Sort the aggregatedCategories array by count in descending order
    aggregatedCategories.sort((a, b)=>b.count - a.count);
    return aggregatedCategories;
}
function extractCustomerIdFromUrl(url) {
    // Split the URL string by '/'
    const parts = url.split("/");
    // Extract the last part, which represents the customer ID
    const customerId = parts[parts.length - 1];
    return customerId;
}
function encryptId(id) {
    return btoa(id);
}
function decryptId(id) {
    return atob(id);
}
const getTransactionStatus = (date)=>{
    const today = new Date();
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(today.getDate() - 2);
    return date > twoDaysAgo ? "Processing" : "Success";
};
}}),
"[project]/components/Sidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sidebar = ({ user })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col gap-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "mb-12 cursor-pointer flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icons/logo.svg",
                                width: 34,
                                height: 34,
                                alt: "Budget Tracker",
                                className: "size-[24px] max-xl:size-14"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 16,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "sidebar-logo",
                                children: "Budget Tracker"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 23,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarLinks"].map((item)=>{
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.route,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("sidebar-link", {
                                "bg-bank-gradient": isActive
                            }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative size-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.imgURL,
                                        alt: item.label,
                                        fill: true,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])({
                                            'brightness-[3] invert-[0]': isActive
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 33,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('sidebar-label', {
                                        "!text-white": isActive
                                    }),
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this);
                    }),
                    "USER"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            "FOOTER"
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Sidebar;
}}),

};

//# sourceMappingURL=_8fcb7618._.js.map