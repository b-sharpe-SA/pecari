import { InstanceRessource } from '../../helpers';
import { type RealtimeRule, type WithPagination } from '../../types';
export declare class RealtimeRulesRessource extends InstanceRessource {
    /**
     * List realtime rules with filters
     * @returns
     */
    list(): Promise<WithPagination<RealtimeRule>>;
}
