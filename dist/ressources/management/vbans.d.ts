import { InstanceRessource } from '../../helpers';
import { type Vban, type WithPagination, type ListVbansQueryParams, type VbanDocument } from '../../types';
export declare class VbanRessource extends InstanceRessource {
    private getUrl;
    /**
     * List vbans for a customer
     * @param reference customer reference
     * @returns
     */
    list(reference: string, queryParams: ListVbansQueryParams): Promise<WithPagination<Vban>>;
    /**
     * Get a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    get(reference: string, id: string): Promise<Vban>;
    /**
     * Create a vban for a customer
     * @param reference customer reference
     * @returns
     */
    create(reference: string): Promise<Vban>;
    /**
     * Enable a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    enable(reference: string, id: string): Promise<Vban>;
    /**
     * Disable a vban for a customer by id
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    disable(reference: string, id: string): Promise<Vban>;
    /**
     * Get the iban pdf for a vban
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    ibanPdf(reference: string, id: string): Promise<VbanDocument>;
    /**
     * Get the employer pdf for a vban
     * @param reference customer reference
     * @param id vban id
     * @returns
     */
    employerPdf(reference: string, id: string): Promise<VbanDocument>;
}
