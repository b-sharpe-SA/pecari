import { handleError, InstanceRessource } from '@helpers';
import { type Message } from '@types';

export class MessageRessource extends InstanceRessource {
    /**
     * Send message to support
     * @param payload
     * @returns
     */
    async post(payload: Message) {
        try {
            const { data } = await this.instance.post<Message>(
                'message/',
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
