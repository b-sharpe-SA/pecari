'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.concatenateQueryParams =
    exports.InstanceRessource =
    exports.handleError =
        void 0;
const axios_1 = require('axios');
const _types_1 = require('../types');
function handleError(error) {
    var _a;
    if (axios_1.default.isAxiosError(error)) {
        return (_a = error.response) === null || _a === void 0
            ? void 0
            : _a.data;
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
    Object.keys(queryParams).forEach((key, index) => {
        if (queryParams[key] !== undefined) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            url += `${index === 0 ? '?' : '&'}${key}=${queryParams[key]}`;
        }
    });
    return url;
}
exports.concatenateQueryParams = concatenateQueryParams;
