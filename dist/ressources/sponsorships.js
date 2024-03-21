"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorshipRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class SponsorshipRessource extends _helpers_1.InstanceRessource {
    getUrl(customerRef) {
        return `${_constants_1.PUBLIC_PATH}/users/customer/${customerRef}/sponsorships/`;
    }
    async list({ customer }) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    async get({ code }) {
        try {
            const { data } = await this.instance.get(`${_constants_1.PUBLIC_PATH}/users/customer/sponsorships/${code}`);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.SponsorshipRessource = SponsorshipRessource;
