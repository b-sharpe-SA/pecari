import { InstanceRessource } from '../../helpers';
import { TokenRessource } from './token';
import { UsersRessource } from './users';
import { CustomersRessource } from './customers';
import { BeneficiariesRessource } from './beneficiaries';
import { RealtimeRulesRessource } from './realtime-rules';
export declare class ManagementRessource extends InstanceRessource {
    token: TokenRessource;
    users: UsersRessource;
    customers: CustomersRessource;
    beneficiaries: BeneficiariesRessource;
    realtimeRules: RealtimeRulesRessource;
}
