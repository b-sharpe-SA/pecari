import { InstanceRessource } from '@helpers';
import { TokenRessource } from './token';
import { UsersRessource } from './users';
import { CustomersRessource } from './customers';
import { BeneficiariesRessource } from './beneficiaries';
import { RealtimeRulesRessource } from './realtime-rules';
import { BanksRessource } from './banks';
import { TicketsRessource } from './tickets';
import { PasswordRessource } from './password';
import { TermsOfUseRessource } from './terms-of-use';
import { VbanRessource } from './vbans';

export class ManagementRessource extends InstanceRessource {
    token = new TokenRessource(this);

    users = new UsersRessource(this);

    customers = new CustomersRessource(this);

    beneficiaries = new BeneficiariesRessource(this);

    realtimeRules = new RealtimeRulesRessource(this);

    banks = new BanksRessource(this);

    tickets = new TicketsRessource(this);

    password = new PasswordRessource(this);

    termsOfUse = new TermsOfUseRessource(this);

    vbans = new VbanRessource(this);
}
