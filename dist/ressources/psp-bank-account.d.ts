import { InstanceRessource } from '../helpers';
import { PspBankAccount } from '../types';
export declare class PspBankAccountRessource extends InstanceRessource {
    /**
     * Get psp bank account by currency
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @returns
     */
    byCurrency(customer: string, currency: string): Promise<PspBankAccount>;
    /**
     * Get IBAN as PDF
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @param iban iban
     * @returns
     */
    ibanPdf(
        customer: string,
        currency: string,
        iban: string
    ): Promise<{
        pdf: string;
    }>;
    /**
     * Get employer document as PDF
     * @param customer customer reference
     * @param currency currency ISO ex: CHF
     * @param iban iban
     * @returns
     */
    employerPdf(
        customer: string,
        currency: string,
        iban: string
    ): Promise<{
        pdf: string;
    }>;
}
