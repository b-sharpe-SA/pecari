import { handleError, InstanceRessource } from '@helpers';
import { Sponsorship, WithPagination } from '@types';

export class SponsorshipRessource extends InstanceRessource {
    private getUrl(customerRef: string) {
        return `users/customer/${customerRef}/sponsorships/`;
    }

    async list({ customer }: { customer: string }) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.get<
                WithPagination<Sponsorship>
            >(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
