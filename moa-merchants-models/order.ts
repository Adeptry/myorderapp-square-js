/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Customer } from './customer';
// May contain unused imports in some cases
// @ts-ignore
import { LineItem } from './line-item';
// May contain unused imports in some cases
// @ts-ignore
import { Location } from './location';

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'id'?: string | null;
    /**
     * 
     * @type {Customer}
     * @memberof Order
     */
    'customer'?: Customer | null;
    /**
     * 
     * @type {Location}
     * @memberof Order
     */
    'location'?: Location | null;
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof Order
     */
    'lineItems'?: Array<LineItem> | null;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'closedAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'currency'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'moneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'moneyTaxAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'moneyDiscountAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'moneyTipAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'moneyServiceChargeAmount'?: number | null;
}

