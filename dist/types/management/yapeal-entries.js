"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapealEntryStatus = exports.EntrySense = void 0;
var EntrySense;
(function (EntrySense) {
    EntrySense[EntrySense["INCOMING"] = 1] = "INCOMING";
    EntrySense[EntrySense["OUTGOING"] = 2] = "OUTGOING";
})(EntrySense || (exports.EntrySense = EntrySense = {}));
var YapealEntryStatus;
(function (YapealEntryStatus) {
    YapealEntryStatus["ACCEPTED_INCOMING"] = "accp";
    YapealEntryStatus["ACCEPTED_OUTGOING"] = "actc";
    YapealEntryStatus["PENDING"] = "pdng";
    YapealEntryStatus["REJECTED"] = "rjct";
    YapealEntryStatus["BOOKED"] = "book";
    YapealEntryStatus["CANCELLED"] = "canc";
})(YapealEntryStatus || (exports.YapealEntryStatus = YapealEntryStatus = {}));
