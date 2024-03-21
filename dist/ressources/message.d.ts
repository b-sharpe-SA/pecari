import { InstanceRessource } from '../helpers';
import { type Message } from '../types';
export declare class MessageRessource extends InstanceRessource {
    /**
     * Send message to support
     * @param payload
     * @returns
     */
    post(payload: Message): Promise<Message>;
}
