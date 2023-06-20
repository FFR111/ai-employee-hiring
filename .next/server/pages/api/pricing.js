"use strict";
(() => {
var exports = {};
exports.id = 452;
exports.ids = [452];
exports.modules = {

/***/ 9624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// pages/api/pricing/index.js
const pricingData = [
    {
        id: 1,
        industry: "Software Development",
        pricing: [
            {
                role: "AI Developer",
                price: 5000
            },
            {
                role: "AI QA",
                price: 4000
            }, 
        ]
    },
    {
        id: 2,
        industry: "Management",
        pricing: [
            {
                role: "AI Project Manager",
                price: 6000
            }, 
        ]
    }
];
function handler(req, res) {
    res.status(200).json(pricingData);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9624));
module.exports = __webpack_exports__;

})();