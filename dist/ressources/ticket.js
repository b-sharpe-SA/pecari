"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class TicketRessource extends _helpers_1.InstanceRessource {
    getUrl(customerRef, ticketRef) {
        return `${_constants_1.PUBLIC_PATH}/users/customer/${customerRef}/ticket/${ticketRef ?? ''}`;
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
    async list({ limit = 5, offset = 0, canceled = false, customer, next, }) {
        try {
            const url = next ??
                (0, _helpers_1.concatenateQueryParams)(this.getUrl(customer), {
                    limit,
                    canceled,
                    offset,
                });
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get ticket for specific customer
     * @param customer Customer reference
     * @param reference Ticket reference
     * @returns
     */
    async get(customer, reference) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Create ticket for specific customer
     * @param customer Customer reference
     * @param payload Payload for ticket
     * @returns
     */
    async create(customer, payload) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post(url, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Delete ticket for specific customer
     * @param customer Customer reference
     * @param reference Ticket reference
     * @returns
     */
    async delete(customer, reference) {
        try {
            const url = this.getUrl(customer, reference);
            const { data } = await this.instance.delete(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Upload document for specific ticket
     * @param customer Customer reference
     * @param reference Reference for ticket
     * @param file File
     * @returns
     */
    async uploadDocument(customer, reference, file) {
        try {
            const url = `${this.getUrl(customer, reference)}/upload/`;
            const { data } = await this.instance.post(url, file, {
                headers: {
                    'Content-Type': file.type,
                    'Content-Disposition': `attachment; filename=${file.name}`,
                },
            });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.TicketRessource = TicketRessource;
