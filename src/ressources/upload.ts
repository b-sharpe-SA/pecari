import { PUBLIC_PATH } from '@constants';
import { handleError, InstanceRessource } from '@helpers';

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
    async post(customer: string, file: File | FormData) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post(url, file, {
                headers:
                    file instanceof File
                        ? {
                              'Content-Type': file.type,
                              'Content-Disposition': `attachment; filename=${file.name}`,
                          }
                        : {
                              'Content-Type': 'multipart/form-data',
                          },
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
