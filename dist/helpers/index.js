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
    constructor({ instance, handleTokens, logout, }) {
        this.instance = instance;
        this.handleTokens = handleTokens;
        this.logout = logout;
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
    const cleanedQueryParams = Object.fromEntries(Object.entries(queryParams).filter(([_, v]) => v != null));
    Object.keys(cleanedQueryParams).forEach((key, index) => {
        if (cleanedQueryParams[key] !== undefined) {
            url += `${index === 0 ? '?' : '&'}${key}=${
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            cleanedQueryParams[key]}`;
        }
    });
    return url;
}
exports.concatenateQueryParams = concatenateQueryParams;
