"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VbanRessource = void 0;
const _constants_1 = require("../../constants");
const _helpers_1 = require("../../helpers");
const BASE_URL = `${_constants_1.MANAGEMENT_PATH}/customers/`;
class VbanRessource extends _helpers_1.InstanceRessource {
    getUrl(customerReference, vbanId) {
        return `${BASE_URL}${customerReference}/vban/${vbanId != null ? `${vbanId}/` : ''}`;
    }
    /**
     * List vbans for a customer
     * @param reference customer reference
     * @returns
     */
    async list(reference, queryParams) {
        try {
            const url = (0, _helpers_1.concatenateQueryParams)(this.getUrl(reference), queryParams ?? {});
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async get(reference, id) {
        try {
            const url = this.getUrl(reference, id);
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Create a vban for a customer
     * @param reference customer reference
     * @returns
     */
    async create(reference) {
        try {
            const url = this.getUrl(reference);
            const { data } = await this.instance.post(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Enable a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async enable(reference, id) {
        try {
            const url = `${this.getUrl(reference, id)}enable/`;
            const { data } = await this.instance.patch(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Disable a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async disable(reference, id) {
        try {
            const url = `${this.getUrl(reference, id)}disable/`;
            const { data } = await this.instance.patch(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get the iban pdf for a vban
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async ibanPdf(reference, id) {
        try {
            const url = `${this.getUrl(reference, id)}iban_pdf/`;
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
    /**
     * Get the employer pdf for a vban
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    async employerPdf(reference, id) {
        try {
            const url = `${this.getUrl(reference, id)}employer_pdf/`;
            const { data } = await this.instance.get(url);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.VbanRessource = VbanRessource;
