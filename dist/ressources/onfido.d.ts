import { InstanceRessource } from '../helpers';
import { type OnfidoSession } from '../types';
export declare class OnfidoRessource extends InstanceRessource {
    /**
     * Get the user onfido SDK token and applicant ID.
     * @param isWeb add ?source=web to url if isWeb === true
     * @returns
     */
    getTokens(isWeb: boolean): Promise<OnfidoSession>;
}
