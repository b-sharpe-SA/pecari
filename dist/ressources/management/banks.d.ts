import { InstanceRessource } from '../../helpers';
import { type AdminRestrictedPspBank, type WithPagination } from '../../types';
export declare class BanksRessource extends InstanceRessource {
    /**
     * List realtime rules with filters
     * @returns
     */
    list(): Promise<WithPagination<AdminRestrictedPspBank>>;
}
