/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.13
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
 * @interface CategoryEntity
 */
export interface CategoryEntity {
    /**
     * 
     * @type {string}
     * @memberof CategoryEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {Array<ItemEntity>}
     * @memberof CategoryEntity
     */
    'items'?: Array<ItemEntity> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CategoryEntity
     */
    'moaEnabled'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CategoryEntity
     */
    'moaOrdinal'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CategoryEntity
     */
    'name'?: string | null;
}

