/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const FulfillmentStatusEnum = {
    Proposed: 'PROPOSED',
    Reserved: 'RESERVED',
    Prepared: 'PREPARED',
    Completed: 'COMPLETED',
    Canceled: 'CANCELED',
    Failed: 'FAILED'
} as const;

export type FulfillmentStatusEnum = typeof FulfillmentStatusEnum[keyof typeof FulfillmentStatusEnum];



