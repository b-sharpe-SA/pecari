"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerNextStep = exports.CustomerStatus = void 0;
var CustomerStatus;
(function (CustomerStatus) {
    CustomerStatus["New"] = "New";
    CustomerStatus["Completed"] = "Completed";
    CustomerStatus["Enabled"] = "Enabled";
    CustomerStatus["Disabled"] = "Disabled";
})(CustomerStatus || (exports.CustomerStatus = CustomerStatus = {}));
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
})(CustomerNextStep || (exports.CustomerNextStep = CustomerNextStep = {}));
