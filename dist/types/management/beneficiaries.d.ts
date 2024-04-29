import { type Beneficiary } from '../beneficiary';
import { type AdminRestrictedCustomer } from './customers';
export interface AdminRestrictedBeneficiary extends Omit<Beneficiary, 'customer'> {
    customer: AdminRestrictedCustomer;
    last_update_time: string;
    bank_display: string;
}
export type ListBeneficiariesOrderingOptions = 'first_name' | 'last_name' | 'company_name' | 'customer__id' | 'customer__reference';
export interface ListBeneficiariesQueryParams extends Record<string, any> {
    limit?: number;
    offset?: number;
    ordering?: ListBeneficiariesOrderingOptions;
    search?: string;
}
