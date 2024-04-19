"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class UploadRessource extends _helpers_1.InstanceRessource {
    getUrl(customer) {
        return `${_constants_1.PUBLIC_PATH}/users/customer/${customer}/upload/`;
    }
    /**
     * Upload document
     * @param customer Customer reference
     * @param file File | FormData
     * @returns
     */
    async post(customer, file, type) {
        try {
            const url = this.getUrl(customer);
            let formData;
            const headers = {
                'Content-Type': 'multipart/form-data',
            };
            if (file instanceof File) {
                formData = new FormData();
                formData.append('file', file);
                formData.append('type', type);
            }
            else {
                formData = file;
                formData.append('type', type);
            }
            const { data } = await this.instance.post(url, formData, { headers });
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.UploadRessource = UploadRessource;
