import { InstanceRessource } from '@helpers';
import { TokenRessource } from './token';

export class ManagementRessource extends InstanceRessource {
    token = new TokenRessource(this);
}
