export interface PspBankAccount {
    name: string;
    address: string;
    bic: string;
    clearing: string;
    iban: string;
    references: string;
    qrbill: string;
    pdf: string;
    type: 'bank_account' | 'vban';
}
