"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenateQueryParams = exports.InstanceRessource = exports.handleError = void 0;
const axios_1 = __importDefault(require("axios"));
const query_string_1 = __importDefault(require("query-string"));
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
    constructor({ instance, handleTokens, logout }) {
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
    if (queryParams == null) {
        return baseUrl;
    }
    const cleanedQueryParams = Object.fromEntries(Object.entries(queryParams).filter(([_, v]) => v != null));
    return query_string_1.default.stringifyUrl({ url: baseUrl, query: cleanedQueryParams });
}
exports.concatenateQueryParams = concatenateQueryParams;
