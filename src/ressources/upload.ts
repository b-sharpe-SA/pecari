import { handleError, InstanceRessource } from '@helpers';

export class UploadRessource extends InstanceRessource {
    private getUrl(customer: string) {
        return `users/customer/${customer}/upload/`;
    }

    /**
     * Upload document
     * @param customer Customer reference
     * @param file File
     * @returns
     */
    async post(customer: string, file: File) {
        try {
            const url = this.getUrl(customer);
            const { data } = await this.instance.post(url, file, {
                headers: {
                    'Content-Type': file.type,
                    'Content-Disposition': `attachment; filename=${file.name}`,
                },
            });
            return data;
        } catch (error) {
            throw handleError(error);
        }
    }
}
