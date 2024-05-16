"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketStatus = void 0;
var TicketStatus;
(function (TicketStatus) {
    TicketStatus[TicketStatus["Treated"] = 0] = "Treated";
    TicketStatus[TicketStatus["Pending"] = 1] = "Pending";
    TicketStatus[TicketStatus["Canceled"] = 2] = "Canceled";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));
