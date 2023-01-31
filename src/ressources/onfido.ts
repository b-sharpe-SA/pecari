import { handleError, InstanceRessource } from '@helpers';
import { OnfidoSession } from '@types';

const BASE_URL = 'users/user/onfido/';

export class OnfidoRessource extends InstanceRessource {
    /**
     * Get the user onfido SDK token and applicant ID.
     * @param isWeb add ?source=web to url if isWeb === true
     * @returns
     */
    async getTokens(isWeb: boolean) {
        try {
            const { data } = await this.instance.post<OnfidoSession>(
                `${BASE_URL}${isWeb ? '?source=web' : ''}`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
