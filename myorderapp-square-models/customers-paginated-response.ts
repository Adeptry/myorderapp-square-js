/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CustomerEntity } from './customer-entity';

/**
 * 
 * @export
 * @interface CustomersPaginatedResponse
 */
export interface CustomersPaginatedResponse {
    /**
     * 
     * @type {Array<CustomerEntity>}
     * @memberof CustomersPaginatedResponse
     */
    'data'?: Array<CustomerEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomersPaginatedResponse
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof CustomersPaginatedResponse
     */
    'count': number;
}

