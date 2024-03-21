import { InstanceRessource } from '../helpers';
import { type Sponsorship, type SponsorshipInfoByCode, type WithPagination } from '../types';
export declare class SponsorshipRessource extends InstanceRessource {
    private getUrl;
    list({ customer }: {
        customer: string;
    }): Promise<WithPagination<Sponsorship>>;
    get({ code }: {
        code: string;
    }): Promise<SponsorshipInfoByCode>;
}
