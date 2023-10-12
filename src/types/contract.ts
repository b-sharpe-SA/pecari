export interface Contract {
    pdf_unsigned: string;
    pdf_unsigned_fingerprint: string;
}

export interface SignContractResponse {
    email: string;
    url: string;
}

export interface SignContractPayload {
    otp_code?: string;
    skip?: boolean;
}
