import { InstanceRessource } from '@helpers';
import { TokenRessource } from './token';
import { UsersRessource } from './users';
import { CustomersRessource } from './customers';
import { BeneficiariesRessource } from './beneficiaries';
import { RealtimeRulesRessource } from './realtime-rules';
import { BanksRessource } from './banks';

export class ManagementRessource extends InstanceRessource {
    token = new TokenRessource(this);

    users = new UsersRessource(this);

    customers = new CustomersRessource(this);

    beneficiaries = new BeneficiariesRessource(this);

    realtimeRules = new RealtimeRulesRessource(this);

    banks = new BanksRessource(this);
}
