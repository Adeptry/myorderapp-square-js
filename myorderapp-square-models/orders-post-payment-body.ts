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
import { FulfillmentRecipientInput } from './fulfillment-recipient-input';

/**
 * 
 * @export
 * @interface OrdersPostPaymentBody
 */
export interface OrdersPostPaymentBody {
    /**
     * If not provided, prepare ASAP, else will validate it\'s within business hours and schedule. Represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrdersPostPaymentBody
     */
    'pickupDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrdersPostPaymentBody
     */
    'paymentSquareId': string;
    /**
     * 
     * @type {string}
     * @memberof OrdersPostPaymentBody
     */
    'note'?: string | null;
    /**
     * Should be generated on checkout screen presentation.
     * @type {string}
     * @memberof OrdersPostPaymentBody
     */
    'idempotencyKey': string;
    /**
     * 
     * @type {number}
     * @memberof OrdersPostPaymentBody
     */
    'orderTipMoney': number;
    /**
     * 
     * @type {FulfillmentRecipientInput}
     * @memberof OrdersPostPaymentBody
     */
    'recipient'?: FulfillmentRecipientInput | null;
}

