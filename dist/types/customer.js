"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerNextStep = exports.TradeAmount = exports.TradeFrequency = exports.CustomerStatus = void 0;
var CustomerStatus;
(function (CustomerStatus) {
    CustomerStatus["New"] = "New";
    CustomerStatus["Completed"] = "Completed";
    CustomerStatus["Enabled"] = "Enabled";
    CustomerStatus["Disabled"] = "Disabled";
})(CustomerStatus = exports.CustomerStatus || (exports.CustomerStatus = {}));
var TradeFrequency;
(function (TradeFrequency) {
    TradeFrequency["Once"] = "ONCE";
    TradeFrequency["Weekly"] = "WEEKLY";
    TradeFrequency["Monthly"] = "MONTHLY";
    TradeFrequency["Yearly"] = "YEARLY";
})(TradeFrequency = exports.TradeFrequency || (exports.TradeFrequency = {}));
var TradeAmount;
(function (TradeAmount) {
    TradeAmount[TradeAmount["Low"] = 0] = "Low";
    TradeAmount[TradeAmount["Middle"] = 1] = "Middle";
    TradeAmount[TradeAmount["High"] = 2] = "High";
    TradeAmount[TradeAmount["VeryHigh"] = 3] = "VeryHigh";
})(TradeAmount = exports.TradeAmount || (exports.TradeAmount = {}));
var CustomerNextStep;
(function (CustomerNextStep) {
    CustomerNextStep["BaseInfo"] = "base_info_completed";
    CustomerNextStep["IdentityNotSubmitted"] = "identity-not_submitted";
    CustomerNextStep["IdentityPending"] = "identity-pending";
    CustomerNextStep["IdentityClear"] = "identity-clear";
    CustomerNextStep["IdentityError"] = "identity-error";
    CustomerNextStep["IdentityRetry"] = "identity-retry";
    CustomerNextStep["IdentityConsider"] = "identity-consider";
    CustomerNextStep["ESign"] = "esign";
    CustomerNextStep["ProofResidence"] = "proof_of_residence";
    CustomerNextStep["AdminWait"] = "admin_wait";
})(CustomerNextStep = exports.CustomerNextStep || (exports.CustomerNextStep = {}));
