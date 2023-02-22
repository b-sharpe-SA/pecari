'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.TicketRessource = void 0;
const _helpers_1 = require('../helpers');
class TicketRessource extends _helpers_1.InstanceRessource {
    getUrl(customerRef, ticketRef) {
        return `users/customer/${customerRef}/ticket/${
            ticketRef !== null && ticketRef !== void 0 ? ticketRef : ''
        }`;
    }
    /**
     * List tickets for customer
     * @param payload
     * @param payload.limit Limit tickets, default to 5
     * @param payload.canceled Returns not canceled or canceled tickets, default to false
     * @param payload.customer Customer reference
     * @param payload.next url for next request. If provided it will fetch this url
     * @returns
     */
    list({ limit = 5, canceled = false, customer, next }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url =
                    next !== null && next !== void 0
                        ? next
                        : (0, _helpers_1.concatenateQueryParams)(
                              this.getUrl(customer),
                              {
                                  limit,
                                  canceled,
                              }
                          );
                const { data } = yield this.instance.get(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Create ticket for specific customer
     * @param customer Customer reference
     * @param payload Payload for ticket
     * @returns
     */
    create(customer, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.getUrl(customer);
                const { data } = yield this.instance.post(url, payload);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
    /**
     * Delete ticket for specific customer
     * @param customer Customer reference
     * @param reference Ticket reference
     * @returns
     */
    delete(customer, reference) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.getUrl(customer, reference);
                const { data } = yield this.instance.delete(url);
                return data;
            } catch (error) {
                throw (0, _helpers_1.handleError)(error);
            }
        });
    }
}
exports.TicketRessource = TicketRessource;
