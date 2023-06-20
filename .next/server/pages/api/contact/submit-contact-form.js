"use strict";
(() => {
var exports = {};
exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 7494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'yup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Import validation library

// Define validation schema
const schema = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'yup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().shape({
    name: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'yup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().min(2).max(50).required(),
    email: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'yup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().email().required(),
    message: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'yup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().min(10).max(1000).required()
});
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            // Validate the form data
            await schema.validate(req.body);
            // Process the form submission (e.g., send an email, store in a database, etc.)
            // ...
            // Send a successful response
            res.status(200).json({
                message: "Form submitted successfully!"
            });
        } catch (error) {
            // Handle validation errors
            res.status(400).json({
                message: error.message
            });
        }
    } else {
        // Only accept POST requests
        res.status(405).json({
            message: "Method not allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7494));
module.exports = __webpack_exports__;

})();