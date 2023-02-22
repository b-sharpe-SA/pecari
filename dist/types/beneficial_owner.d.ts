import { Address, Title } from '.';
export interface BeneficialOwner extends Address {
    id: number;
    title: Title;
    first_name: string;
    last_name: string;
    birth_date: string;
    birth_place: string;
    personal_email: string;
    nationality: string;
    customer: string;
}
export type CreateBeneficialOwnerPayload = Partial<Omit<BeneficialOwner, 'id' | 'customer'>>;
export type UpdateBeneficialOwnerPayload = Partial<Omit<BeneficialOwner, 'id' | 'customer'>>;
