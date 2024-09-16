import { InstanceRessource } from '../helpers';
import { type Country } from 'src/types/countries';
export declare class CountriesRessource extends InstanceRessource {
    private getUrl;
    /**
     * Get country list
     * @returns
     */
    get(): Promise<Country[]>;
}
