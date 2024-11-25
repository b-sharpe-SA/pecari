import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';

export class LogoutRessource extends InstanceRessource {
    /**
     * Invalidate current refresh token
     * @param {string} refreshToken - refresh token to invalidate
     */
    async invalidateToken({ refreshToken }: { refreshToken: string }) {
        try {
            const { data } = await this.instance.post(
                `${PUBLIC_PATH}/logout/token/`,
                { refresh: refreshToken }
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
