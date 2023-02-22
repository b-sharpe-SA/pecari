import { InstanceRessource } from '../helpers';
export declare class MapboxRessource extends InstanceRessource {
    /**
     * Get mapbox token
     * @returns
     */
    get(): Promise<{
        token: string;
    }>;
}
