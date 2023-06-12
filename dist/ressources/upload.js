"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadRessource = void 0;
const _helpers_1 = require("../helpers");
class UploadRessource extends _helpers_1.InstanceRessource {
    getUrl(customer) {
        return `users/customer/${customer}/upload/`;
    }
    /**
     * Upload document
     * @param customer Customer reference
     * @param file File | FormData
     * @returns
     */
    async post(customer, file) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post(url, file, {
                headers: file instanceof File ? {
                    'Content-Type': file.type,
                    'Content-Disposition': `attachment; filename=${file.name}`,
                } : {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.UploadRessource = UploadRessource;
