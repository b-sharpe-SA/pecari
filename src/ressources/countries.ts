import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import { type Country } from 'src/types/countries';

export class CountriesRessource extends InstanceRessource {
    private getUrl() {
        return `${PUBLIC_PATH}/countries/`;
    }

    /**
     * Get country list
     * @returns
     */
    async get() {
        try {
            const url = this.getUrl();
            const { data } = await this.instance.get<Country[]>(url);
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
