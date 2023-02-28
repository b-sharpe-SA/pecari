"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenateQueryParams = exports.InstanceRessource = exports.handleError = void 0;
const axios_1 = __importDefault(require("axios"));
const _types_1 = require("../types");
function handleError(error) {
    if (axios_1.default.isAxiosError(error)) {
        return error.response?.data;
    }
    return {
        code: _types_1.ErrorCodes.UNEXPECTED_ERROR,
        detail: 'Unexpected error occured',
    };
}
exports.handleError = handleError;
class InstanceRessource {
    constructor({ instance, setToken, removeToken }) {
        this.instance = instance;
        this.setToken = setToken;
        this.removeToken = removeToken;
    }
}
exports.InstanceRessource = InstanceRessource;
/**
 * Concatenate query params and url
 * @param baseUrl
 * @param queryParams
 * @returns
 */
function concatenateQueryParams(baseUrl, queryParams) {
    let url = baseUrl;
    if (queryParams == null) {
        return url;
    }
    Object.keys(queryParams).forEach((key, index) => {
        if (queryParams[key] !== undefined) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            url += `${index === 0 ? '?' : '&'}${key}=${queryParams[key]}`;
        }
    });
    return url;
}
exports.concatenateQueryParams = concatenateQueryParams;
