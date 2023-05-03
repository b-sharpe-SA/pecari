import { InstanceRessource } from '../helpers';
import { MobileFile } from 'src/types/upload';
export declare class UploadRessource extends InstanceRessource {
    private getUrl;
    /**
     * Upload document
     * @param customer Customer reference
     * @param file File | MobileFile
     * @returns
     */
    post(customer: string, file: File | MobileFile): Promise<any>;
}
