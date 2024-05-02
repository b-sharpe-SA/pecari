import { InstanceRessource } from '../../helpers';
import { TokenRessource } from './token';
import { UsersRessource } from './users';
import { CustomersRessource } from './customers';
import { BeneficiariesRessource } from './beneficiaries';
import { RealtimeRulesRessource } from './realtime-rules';
import { BanksRessource } from './banks';
import { TicketsRessource } from './tickets';
export declare class ManagementRessource extends InstanceRessource {
    token: TokenRessource;
    users: UsersRessource;
    customers: CustomersRessource;
    beneficiaries: BeneficiariesRessource;
    realtimeRules: RealtimeRulesRessource;
    banks: BanksRessource;
    tickets: TicketsRessource;
}
