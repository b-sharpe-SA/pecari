import { InstanceRessource } from '../helpers';
import { AppCheck } from 'src/types/app-compatibility';
export declare class AppCompatibilityResource extends InstanceRessource {
    /**
     * Get informations about latest mobile app version
     * @returns AppCheck
     */
    get(): Promise<AppCheck>;
}
