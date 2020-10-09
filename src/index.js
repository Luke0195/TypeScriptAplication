"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get('/', function (request, response) {
    return response.json({ message: 'Texto' });
});
app.listen(3331, function () {
    console.log('O servidor está rodando na porta http://localhost:3331');
});
