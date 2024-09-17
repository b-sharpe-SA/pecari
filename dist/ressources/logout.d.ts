import { InstanceRessource } from '../helpers';
export declare class LogoutRessource extends InstanceRessource {
    /**
     * Invalidate current refresh token
     * @param {string} refreshToken - refresh token to invalidate
     */
    invalidateSession({ refreshToken }: {
        refreshToken: string;
    }): Promise<any>;
}
