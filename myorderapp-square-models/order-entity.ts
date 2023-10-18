/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.5
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
     * @type {number}
     * @memberof OrderEntity
     */
    'appFeeMoneyAmount'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'closedDate'?: string | null;
    /**
     * 
     * @type {CustomerEntity}
     * @memberof OrderEntity
     */
    'customer'?: CustomerEntity | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'displayId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {Array<LineItemEntity>}
     * @memberof OrderEntity
     */
    'lineItems'?: Array<LineItemEntity> | null;
    /**
     * 
     * @type {LocationEntity}
     * @memberof OrderEntity
     */
    'location'?: LocationEntity | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'note'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderEntity
     */
    'pickupDate'?: string | null;
    /**
     * 
     * @type {FulfillmentStatusEnum}
     * @memberof OrderEntity
     */
    'squareFulfillmentStatus'?: FulfillmentStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'subtotalMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'totalDiscountMoneyAmount'?: number | null;
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
    'totalServiceChargeMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'totalTaxMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof OrderEntity
     */
    'totalTipMoneyAmount'?: number | null;
}



