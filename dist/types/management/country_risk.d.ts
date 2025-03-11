export interface ListCountryRiskQueryParams extends Record<string, any> {
    code_iso?: string;
    country_name?: string;
    limit?: number;
    offset?: number;
    risk?: CountryRiskLevel;
}
export type CountryRiskLevel = 'low' | 'increased' | 'high';
export interface CountryRisk {
    id: number;
    code_iso: string;
    country_name: string;
    corruption_perceptions_index: number;
    basel_aml_index: string;
    know_your_country_score: string;
    risk: CountryRiskLevel;
}
export interface CreateCountryRiskPayload extends Omit<CountryRisk, 'id'> {
}
export interface UpdateCountryRiskPayload extends Partial<CreateCountryRiskPayload> {
}
