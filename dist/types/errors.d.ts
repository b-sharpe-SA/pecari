export declare enum ErrorCodes {
    AUTH_TOKEN_EXPIRED = "AUTH_TOKEN_EXPIRED",
    AUTH_ADVANCED_REQUIRED = "AUTH_ADVANCED_REQUIRED",
    AUTH_ALREADY_ADVANCED = "AUTH_ALREADY_ADVANCED",
    AUTH_INVALID_CREDENTIALS = "AUTH_INVALID_CREDENTIALS",
    AUTH_INVALID_OTP = "AUTH_INVALID_OTP",
    AUTH_TOO_MANY_ATTEMPTS = "AUTH_TOO_MANY_ATTEMPTS",
    AUTH_ALREADY_LOGGED_IN = "AUTH_ALREADY_LOGGED_IN",
    RES_ALREADY_EXISTS = "RES_ALREADY_EXISTS",
    RES_FIELD = "RES_FIELD",
    RES_NONFIELD = "RES_NONFIELD",
    RES_CURRENCY_PAIR = "RES_CURRENCY_PAIR",
    RES_ACCESS = "RES_ACCESS",
    ACT_CUSTOMER_DOCUMENT_FILE_TYPE = "ACT_CUSTOMER_DOCUMENT_FILE_TYPE",
    ACT_CUSTOMER_DOCUMENT_MAX_SIZE = "ACT_CUSTOMER_DOCUMENT_MAX_SIZE",
    ACT_CUSTOMER_DOCUMENT_MAX_PER_REQUEST = "ACT_CUSTOMER_DOCUMENT_MAX_PER_REQUEST",
    ACT_CUSTOMER_DOCUMENT_INVALID_DATA = "ACT_CUSTOMER_DOCUMENT_INVALID_DATA",
    ACT_REALTIME_AVAILABLE = "ACT_REALTIME_AVAILABLE",
    ACT_REALTIME_NOT_ALLOWED = "ACT_REALTIME_NOT_ALLOWED",
    ACT_REALTIME_PRICE_EXPIRED = "ACT_REALTIME_PRICE_EXPIRED",
    ACT_REALTIME_PRICE_NOT_VALID = "ACT_REALTIME_PRICE_NOT_VALID",
    ACT_TICKET_CANCEL = "ACT_TICKET_CANCEL",
    ACT_TICKET_QRBILL = "ACT_TICKET_QRBILL",
    UNEXPECTED_ERROR = "UNEXPECTED_ERROR"
}
export interface CactusError extends Record<string, any> {
    code: ErrorCodes;
    detail: string | string[];
}
