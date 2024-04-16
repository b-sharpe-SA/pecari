import { InstanceRessource } from '../helpers';
import { type BankAccount, type Beneficiary, type CreateBankAccountPayload, type CreateBeneficiaryPayload, type ListBeneficiaryQueryParams, type WithPagination } from '../types';
export declare class BeneficiaryRessource extends InstanceRessource {
    private readonly getUrl;
    /**
     * List beneficiaries for specific customer
     * @param customer Customer reference
     * @param queryParams
     * @returns
     */
    list(customer: string, queryParams?: ListBeneficiaryQueryParams): Promise<WithPagination<Beneficiary>>;
    /**
     * Create beneficiary for specific customer
     * @param customer Customer reference
     * @param payload Beneficiary payload
     * @returns
     */
    create(customer: string, payload: CreateBeneficiaryPayload): Promise<Beneficiary>;
    upload(customer: string, reference: string, file: File | FormData): Promise<any>;
    /**
     * Delete beneficiary
     * @param customer Customer reference
     * @param reference Beneficiary reference
     * @returns
     */
    delete(customer: string, reference: string): Promise<Beneficiary>;
    /**
     * Create bank account for customer and beneficiary
     * @param customer Customer reference
     * @param reference Beneficiary reference
     * @param payload Bank account payload
     * @returns
     */
    createBankAccount(customer: string, reference: string, payload: CreateBankAccountPayload): Promise<BankAccount>;
    /**
     * Delete bank account
     * @param customer Customer reference
     * @param beneficiaryReference Beneficiary reference
     * @param bankAccountReference Bank account reference
     * @returns
     */
    deleteBankAccount(customer: string, beneficiaryReference: string, bankAccountReference: string): Promise<BankAccount>;
}
