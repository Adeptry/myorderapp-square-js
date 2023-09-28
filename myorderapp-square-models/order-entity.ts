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
import { CustomerEntity } from './customer-entity';
// May contain unused imports in some cases
// @ts-ignore
import { FulfillmentStatusEnum } from './fulfillment-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import { LineItemEntity } from './line-item-entity';
// May contain unused imports in some cases
// @ts-ignore
import { LocationEntity } from './location-entity';

/**
 * 
 * @export
 * @interface OrderEntity
 */
export interface OrderEntity {
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {CustomerEntity}
     * @memberof OrderEntity
     */
    'customer'?: CustomerEntity | null;
    /**
     * 
     * @type {LocationEntity}
     * @memberof OrderEntity
     */
    'location'?: LocationEntity | null;
    /**
     * 
     * @type {Array<LineItemEntity>}
     * @memberof OrderEntity
     */
    'lineItems'?: Array<LineItemEntity> | null;
    /**
     * 
     * @type {FulfillmentStatusEnum}
     * @memberof OrderEntity
     */
    'squareFulfillmentStatus'?: FulfillmentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'closedDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'pickupDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'currency'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'totalMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'totalMoneyTaxAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'totalMoneyDiscountAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'totalMoneyTipAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'totalMoneyServiceChargeAmount'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'displayId'?: string | null;
}



