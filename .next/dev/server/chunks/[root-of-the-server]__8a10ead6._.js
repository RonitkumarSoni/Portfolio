module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/config/siteConfig.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_PAGES",
    ()=>ALL_PAGES,
    "DOMAIN_URL",
    ()=>DOMAIN_URL,
    "SITE_CONFIG",
    ()=>SITE_CONFIG,
    "SITE_NAP",
    ()=>SITE_NAP,
    "SITE_SLUGS",
    ()=>SITE_SLUGS,
    "externalLinks",
    ()=>externalLinks
]);
const DOMAIN_URL = "https://ronitsoni.vercel.app";
const SITE_CONFIG = {
    title: "Ronit Soni | Senior Full Stack Developer & AI Specialist",
    description: "Senior Full-Stack Engineer specializing in high-performance Next.js apps and AI-integrated solutions. Ronit Soni transforms complex requirements into scalable, pixel-perfect web experiences that drive results.",
    url: DOMAIN_URL,
    siteName: "Ronit Soni",
    keywords: [
        "Ronit Soni",
        "RonitkumarSoni",
        "Full Stack Developer",
        "MERN Stack",
        "Next.js Expert",
        "AI Engineer",
        "Software Engineer India",
        "React.js Specialist",
        "Web Developer Gujarat"
    ],
    ogImage: "https://avatars.githubusercontent.com/u/224968961?v=4",
    ogImageAlt: "Ronit Soni - Full Stack Developer Portfolio",
    logo: "https://avatars.githubusercontent.com/u/224968961?v=4",
    authors: [
        {
            name: "Ronit Soni",
            url: DOMAIN_URL
        }
    ],
    creator: "Ronit Soni",
    publisher: "Ronit Soni"
};
const SITE_NAP = {
    name: "Ronit Soni",
    googleBusinessType: "ProfessionalService",
    contact: "Ronit Soni",
    contactTitle: "Full Stack Developer",
    email: "ronitkumarsoni.cg@gmail.com",
    phone: "",
    formattedPhone: "",
    addressLink: "",
    street: "",
    city: "Kalol",
    state: "Gujarat",
    zipCode: "382721",
    openingHours: [
        {
            days: "Mon - Sat",
            hours: "9am - 8pm"
        }
    ],
    googleReviewLink: "",
    profiles: {
        linkedIn: "https://www.linkedin.com/in/ronit-sonii/",
        github: "https://github.com/RonitkumarSoni",
        leetcode: "https://leetcode.com/u/ronitkumarsoni/",
        twitter: "https://x.com/RonitXSoni"
    },
    logo: "https://avatars.githubusercontent.com/u/224968961?v=4",
    favicon: "/favicon.ico",
    images: [
        "https://avatars.githubusercontent.com/u/224968961?v=4"
    ]
};
const SITE_SLUGS = {
    home: "/",
    projects: "/projects",
    contact: "/#contact",
    about: "/#about",
    projectLinks: {
        automedics: "/projects/automedics",
        bespoke: "/projects/bespoke",
        iao: "/projects/iron-and-oak",
        hrms: "/projects/hrms",
        codingProfiles: "/coding-profiles"
    }
};
const externalLinks = {
    vetsChoice: "https://vetschoiceinsurance.com/",
    zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
    zeroCore: "https://github.com/react-zero-ui/core",
    entitled: "https://be-entitled.com/"
};
const flattenSlugs = (obj)=>{
    return Object.values(obj).flatMap((value)=>typeof value === "string" ? [
            value
        ] : flattenSlugs(value));
};
const ALL_PAGES = Object.values(SITE_SLUGS).flatMap((value)=>typeof value === "string" ? [
        value
    ] : flattenSlugs(value));
}),
"[project]/app/manifest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>manifest,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/siteConfig.ts [app-route] (ecmascript)");
;
const dynamic = "force-static";
function manifest() {
    return {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SITE_CONFIG"].title,
        short_name: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SITE_CONFIG"].siteName,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SITE_CONFIG"].description,
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/icon.png",
                sizes: "any",
                type: "image/png"
            },
            {
                src: "/apple-icon.png",
                sizes: "any",
                type: "image/png"
            }
        ]
    };
}
}),
"[project]/app/manifest--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/manifest.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/manifest+json";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "manifest";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./manifest.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/app/manifest--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"],
    "dynamic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamic"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/manifest--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/manifest.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8a10ead6._.js.map