/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OrdersVariationLineItemInput
 */
export interface OrdersVariationLineItemInput {
    /**
     * 
     * @type {string}
     * @memberof OrdersVariationLineItemInput
     */
    'id': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrdersVariationLineItemInput
     */
    'modifierIds'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof OrdersVariationLineItemInput
     */
    'note'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrdersVariationLineItemInput
     */
    'quantity': number;
}

