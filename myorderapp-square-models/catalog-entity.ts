/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CategoryEntity } from './category-entity';

/**
 * 
 * @export
 * @interface CatalogEntity
 */
export interface CatalogEntity {
    /**
     * 
     * @type {Array<CategoryEntity>}
     * @memberof CatalogEntity
     */
    'categories'?: Array<CategoryEntity> | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogEntity
     */
    'merchantId'?: string | null;
}

