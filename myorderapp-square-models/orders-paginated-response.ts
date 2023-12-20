/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { OrderEntity } from './order-entity';

/**
 * 
 * @export
 * @interface OrdersPaginatedResponse
 */
export interface OrdersPaginatedResponse {
    /**
     * 
     * @type {number}
     * @memberof OrdersPaginatedResponse
     */
    'count': number;
    /**
     * 
     * @type {Array<OrderEntity>}
     * @memberof OrdersPaginatedResponse
     */
    'data'?: Array<OrderEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof OrdersPaginatedResponse
     */
    'pages': number;
}

