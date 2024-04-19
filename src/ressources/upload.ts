import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';
import { type DocumentType } from '@types';

export class UploadRessource extends InstanceRessource {
    private getUrl(customer: string) {
        return `${PUBLIC_PATH}/users/customer/${customer}/upload/`;
    }

    /**
     * Upload document
     * @param customer Customer reference
     * @param file File | FormData
     * @returns
     */
    async post(customer: string, file: File | FormData, type: DocumentType) {
        try {
            const url = this.getUrl(customer);
            let formData: FormData;
            const headers = {
                'Content-Type': 'multipart/form-data',
            };

            if (file instanceof File) {
                formData = new FormData();
                formData.append('file', file);
                formData.append('type', type.toString());
            } else {
                formData = file;
                formData.append('type', type.toString());
            }

            const { data } = await this.instance.post(url, formData, {
                headers,
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
