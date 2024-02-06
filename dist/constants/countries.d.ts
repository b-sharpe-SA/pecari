export interface ICountryItem {
    name: string;
    alpha3: string;
    alpha2: string;
    region: string;
    subregion: string;
    supported_identity_report: boolean;
}
export declare const countryList: ICountryItem[];
