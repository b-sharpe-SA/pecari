"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRessource = void 0;
const _constants_1 = require("../constants");
const _helpers_1 = require("../helpers");
class MessageRessource extends _helpers_1.InstanceRessource {
    /**
     * Send message to support
     * @param payload
     * @returns
     */
    async post(payload) {
        try {
            const { data } = await this.instance.post(`${_constants_1.PUBLIC_PATH}/message/`, payload);
            return data;
        }
        catch (error) {
            throw (0, _helpers_1.handleError)(error);
        }
    }
}
exports.MessageRessource = MessageRessource;
