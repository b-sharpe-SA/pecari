import { InstanceRessource } from '../helpers';
import { type BankAccountListParameters, BankAccountRessourceResponse, WithPagination } from '../types';
export declare class BankAccountRessource extends InstanceRessource {
    private getUrl;
    /**
     * List bank accounts for specific customer
     * @param customer Customer reference
     * @returns
     */
    list(customer: string, parameters?: BankAccountListParameters): Promise<WithPagination<BankAccountRessourceResponse>>;
    /**
     * Get single bank account by id
     * @param customer Customer reference
     * @param bankAccount Bank account id
     * @returns
     */
    get(customer: string, bankAccount: number): Promise<BankAccountRessourceResponse>;
}
