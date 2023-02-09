"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _client_1 = require("../client");
const cactusClient = new _client_1.CactusClient('https://cactus.staging.nicewit.ch/api/v2');
function login() {
    cactusClient.login
        .token({
        email: 'm.gouin+g.thenardier@b-sharpe.com',
        password: '123456A#',
    })
        .then((data) => {
        console.log(data);
    })
        .catch((err) => {
        console.error(err);
    });
}
login();
