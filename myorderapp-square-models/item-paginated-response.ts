/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ItemEntity } from './item-entity';

/**
 * 
 * @export
 * @interface ItemPaginatedResponse
 */
export interface ItemPaginatedResponse {
    /**
     * 
     * @type {Array<ItemEntity>}
     * @memberof ItemPaginatedResponse
     */
    'data'?: Array<ItemEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof ItemPaginatedResponse
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof ItemPaginatedResponse
     */
    'count': number;
}

