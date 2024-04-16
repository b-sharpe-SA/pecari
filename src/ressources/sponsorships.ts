import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import { Sponsorship, SponsorshipInfoByCode, WithPagination } from '@types';

export class SponsorshipRessource extends InstanceRessource {
    private getUrl(customerRef: string) {
        return `${PUBLIC_PATH}/users/customer/${customerRef}/sponsorships/`;
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

    async get({ code }: { code: string }) {
        try {
            const { data } = await this.instance.get<SponsorshipInfoByCode>(
                `${PUBLIC_PATH}/users/customer/sponsorships/${code}`
            );
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
