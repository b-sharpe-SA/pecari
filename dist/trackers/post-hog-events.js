"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHogEvents = void 0;
var PostHogEvents;
(function (PostHogEvents) {
    PostHogEvents["StartedBasicSignup"] = "started_basic_signup";
    PostHogEvents["CompletedBasicSignup"] = "completed_basic_signup";
    PostHogEvents["ViewedSimulator"] = "viewed_simulator";
    PostHogEvents["ViewedAlertList"] = "viewed_alert_list";
    PostHogEvents["CreatedPair"] = "created_pair";
    PostHogEvents["StartedNewAlert"] = "started_new_alert";
    PostHogEvents["CompletedNewAlert"] = "completed_new_alert";
    PostHogEvents["UpdatedAlert"] = "updated_alert";
    PostHogEvents["DeletedAlert"] = "deleted_alert";
    PostHogEvents["DeletedPair"] = "deleted_pair";
    PostHogEvents["DeletedOperation"] = "deleted_operation";
    PostHogEvents["LoggedIn"] = "logged_in";
    PostHogEvents["LoggedOut"] = "logged_out";
    PostHogEvents["ViewedProfile"] = "viewed_profile";
    PostHogEvents["RequestedHelp"] = "requested_help";
    PostHogEvents["StartedConfirmPhone"] = "started_confirm_phone";
    PostHogEvents["CompletedConfirmPhone"] = "completed_confirm_phone";
    PostHogEvents["StartedConfirmEmail"] = "started_confirm_email";
    PostHogEvents["CompletedConfirmEmail"] = "completed_confirm_email";
    PostHogEvents["StartedConfirmIdentity"] = "started_confirm_identity";
    PostHogEvents["SubmittedConfirmIdentity"] = "submitted_confirm_identity";
    PostHogEvents["CompletedConfirmIdentity"] = "completed_confirm_identity";
    PostHogEvents["StartedConfirmResidency"] = "started_confirm_residency";
    PostHogEvents["SubmittedConfirmResidency"] = "submitted_confirm_residency";
    PostHogEvents["CompletedConfirmResidency"] = "completed_confirm_residency";
    PostHogEvents["StartedConfirmFundorigin"] = "started_confirm_fundorigin";
    PostHogEvents["CompletedConfirmFundorigin"] = "completed_confirm_fundorigin";
    PostHogEvents["StartedContractSignature"] = "started_contract_signature";
    PostHogEvents["CompletedContactSignature"] = "completed_contact_signature";
    PostHogEvents["ViewedOperationList"] = "viewed_operation_list";
    PostHogEvents["ViewedOperationEntry"] = "viewed_operation_entry";
    PostHogEvents["StartedNewOperation"] = "started_new_operation";
    PostHogEvents["CompletedNewOperation"] = "completed_new_operation";
    PostHogEvents["UpdatedOperation"] = "updated_operation";
    PostHogEvents["ViewedBeneficiaryList"] = "viewed_beneficiary_list";
    PostHogEvents["StartedNewBeneficiary"] = "started_new_beneficiary";
    PostHogEvents["CompletedNewBeneficiary"] = "completed_new_beneficiary";
    PostHogEvents["UpdatedBeneficiary"] = "updated_beneficiary";
    PostHogEvents["ViewedIban"] = "viewed_iban";
    PostHogEvents["DownloadedIban"] = "downloaded_iban";
    PostHogEvents["ViewedEmployerDocument"] = "viewed_employer_document";
    PostHogEvents["DownloadedEmployerDocument"] = "downloaded_employer_document";
    PostHogEvents["ViewedInvitationList"] = "viewed_invitation_list";
    PostHogEvents["StartedInvitation"] = "started_invitation";
    PostHogEvents["CompletedInvitation"] = "completed_invitation";
    PostHogEvents["ViewedPspUpdatedModal"] = "viewed_psp_updated_modal";
})(PostHogEvents = exports.PostHogEvents || (exports.PostHogEvents = {}));
