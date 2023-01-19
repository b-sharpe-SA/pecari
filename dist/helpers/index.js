"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const axios_1 = __importDefault(require("axios"));
function handleError(error) {
    if (axios_1.default.isAxiosError(error)) {
        return error.response?.data;
    }
    return {
        code: 'UNEXPECTED_ERROR',
        detail: 'Unexpected error occured'
    };
}
exports.handleError = handleError;
