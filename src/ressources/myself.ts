import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import { Myself, UpdateMyselfPayload } from '@types';

const BASE_URL = `${PUBLIC_PATH}/users/user/myself/`;

export class MyselfRessource extends InstanceRessource {
    /**
     * Fetch myself
     * @returns
     */
    async get() {
        try {
            const { data } = await this.instance.get<Myself>(BASE_URL);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Update myself
     * @param payload
     * @returns
     */
    async update(payload: UpdateMyselfPayload) {
        try {
            const { data } = await this.instance.patch<Myself>(
                BASE_URL,
                payload
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * User wants to delete it's account
     * Can't login after this
     * Send email to customer care notifying user want to delete it's account
     * @param payload
     * @returns
     */
    async delete() {
        try {
            const { data } = await this.instance.delete(BASE_URL);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
