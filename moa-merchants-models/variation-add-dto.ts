/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface VariationAddDto
 */
export interface VariationAddDto {
    /**
     * 
     * @type {string}
     * @memberof VariationAddDto
     */
    'id': string;
    /**
     * 
     * @type {number}
     * @memberof VariationAddDto
     */
    'quantity': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof VariationAddDto
     */
    'modifierIds'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof VariationAddDto
     */
    'note'?: string | null;
}

