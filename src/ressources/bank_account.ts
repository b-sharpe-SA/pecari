import {
    concatenateQueryParams,
    handleError,
    InstanceRessource,
} from '@helpers';
import {
    type BankAccountListParameters,
    BankAccountRessourceResponse,
    WithPagination,
} from '@types';

export class BankAccountRessource extends InstanceRessource {
    private getUrl(customer: string, bankAccount?: number) {
        return `/users/customer/${customer}/bank_account/${
            bankAccount != null ? `${bankAccount}/` : ''
        }`;
    }

    /**
     * List bank accounts for specific customer
     * @param customer Customer reference
     * @returns
     */
    async list(customer: string, parameters?: BankAccountListParameters) {
        try {
            const url =
                parameters?.next ??
                concatenateQueryParams(this.getUrl(customer), parameters);

            const { data } =
                await this.instance.get<
                    WithPagination<BankAccountRessourceResponse>
                >(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }

    /**
     * Get single bank account by id
     * @param customer Customer reference
     * @param bankAccount Bank account id
     * @returns
     */
    async get(customer: string, bankAccount: number) {
        try {
            const url = this.getUrl(customer, bankAccount);

            const { data } =
                await this.instance.get<BankAccountRessourceResponse>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
