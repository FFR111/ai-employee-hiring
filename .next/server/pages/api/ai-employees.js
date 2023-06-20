"use strict";
(() => {
var exports = {};
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 8641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// pages/api/ai-employees/index.js
const aiEmployees = [
    {
        id: 1,
        name: "AI Developer 1",
        industry: "Software Development"
    },
    {
        id: 2,
        name: "AI Project Manager 1",
        industry: "Management"
    }
];
function handler(req, res) {
    res.status(200).json(aiEmployees);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8641));
module.exports = __webpack_exports__;

})();