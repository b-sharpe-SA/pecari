import { InstanceRessource } from '../helpers';
export declare class UploadRessource extends InstanceRessource {
    private getUrl;
    /**
     * Upload document
     * @param customer Customer reference
     * @param file File
     * @returns
     */
    post(customer: string, file: File): Promise<any>;
}
