"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router
    .get('/status', function (request, response) {
    response.send({ status: 'Running', timestamp: new Date() });
});
exports.default = router;
