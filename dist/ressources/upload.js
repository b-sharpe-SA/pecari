'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UploadRessource = void 0;
const _helpers_1 = require('../helpers');
class UploadRessource extends _helpers_1.InstanceRessource {
    getUrl(customer) {
        return `users/customer/${customer}/upload/`;
    }
    /**
     * Upload document
     * @param customer Customer reference
     * @param file File | MobileFile
     * @returns
     */
    async post(customer, file) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post(url, file, {
                headers: {
                    'Content-Type': file.type,
                    'Content-Disposition': `attachment; filename=${file.name}`,
                },
            });
            return data;
        } catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.UploadRessource = UploadRessource;
