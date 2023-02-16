import { InstanceRessource } from '../helpers';
import { Sponsorship, WithPagination } from '../types';
export declare class SponsorshipRessource extends InstanceRessource {
    private getUrl;
    list({ customer }: {
        customer: string;
    }): Promise<WithPagination<Sponsorship>>;
}
