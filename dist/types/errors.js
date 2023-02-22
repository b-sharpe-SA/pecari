'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ErrorCodes = void 0;
var ErrorCodes;
(function (ErrorCodes) {
    // Authentification / OTP
    ErrorCodes['AUTH_TOKEN_EXPIRED'] = 'AUTH_TOKEN_EXPIRED';
    ErrorCodes['AUTH_ADVANCED_REQUIRED'] = 'AUTH_ADVANCED_REQUIRED';
    ErrorCodes['AUTH_ALREADY_ADVANCED'] = 'AUTH_ALREADY_ADVANCED';
    ErrorCodes['AUTH_INVALID_CREDENTIALS'] = 'AUTH_INVALID_CREDENTIALS';
    ErrorCodes['AUTH_INVALID_OTP'] = 'AUTH_INVALID_OTP';
    ErrorCodes['AUTH_TOO_MANY_ATTEMPTS'] = 'AUTH_TOO_MANY_ATTEMPTS';
    ErrorCodes['AUTH_ALREADY_LOGGED_IN'] = 'AUTH_ALREADY_LOGGED_IN';
    // Resources
    ErrorCodes['RES_ALREADY_EXISTS'] = 'RES_ALREADY_EXISTS';
    ErrorCodes['RES_FIELD'] = 'RES_FIELD';
    ErrorCodes['RES_NONFIELD'] = 'RES_NONFIELD';
    ErrorCodes['RES_CURRENCY_PAIR'] = 'RES_CURRENCY_PAIR';
    ErrorCodes['RES_ACCESS'] = 'RES_ACCESS';
    // Actions
    ErrorCodes['ACT_CUSTOMER_DOCUMENT_FILE_TYPE'] =
        'ACT_CUSTOMER_DOCUMENT_FILE_TYPE';
    ErrorCodes['ACT_CUSTOMER_DOCUMENT_MAX_SIZE'] =
        'ACT_CUSTOMER_DOCUMENT_MAX_SIZE';
    ErrorCodes['ACT_CUSTOMER_DOCUMENT_MAX_PER_REQUEST'] =
        'ACT_CUSTOMER_DOCUMENT_MAX_PER_REQUEST';
    ErrorCodes['ACT_CUSTOMER_DOCUMENT_INVALID_DATA'] =
        'ACT_CUSTOMER_DOCUMENT_INVALID_DATA';
    ErrorCodes['ACT_REALTIME_AVAILABLE'] = 'ACT_REALTIME_AVAILABLE';
    ErrorCodes['ACT_REALTIME_NOT_ALLOWED'] = 'ACT_REALTIME_NOT_ALLOWED';
    ErrorCodes['ACT_REALTIME_PRICE_EXPIRED'] = 'ACT_REALTIME_PRICE_EXPIRED';
    ErrorCodes['ACT_REALTIME_PRICE_NOT_VALID'] = 'ACT_REALTIME_PRICE_NOT_VALID';
    ErrorCodes['ACT_TICKET_CANCEL'] = 'ACT_TICKET_CANCEL';
    ErrorCodes['ACT_TICKET_QRBILL'] = 'ACT_TICKET_QRBILL';
    // Unexpected
    ErrorCodes['UNEXPECTED_ERROR'] = 'UNEXPECTED_ERROR';
})((ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {})));
