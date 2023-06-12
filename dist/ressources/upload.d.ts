import { InstanceRessource } from '../helpers';
export declare class UploadRessource extends InstanceRessource {
    private getUrl;
    /**
     * Upload document
     * @param customer Customer reference
     * @param file File | FormData
     * @returns
     */
    post(customer: string, file: File | FormData): Promise<any>;
}
