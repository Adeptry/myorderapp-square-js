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



/**
 * 
 * @export
 * @interface CustomerPatchBody
 */
export interface CustomerPatchBody {
    /**
     * 
     * @type {string}
     * @memberof CustomerPatchBody
     */
    'firstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerPatchBody
     */
    'lastName'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerPatchBody
     */
    'mailNotifications'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerPatchBody
     */
    'messageNotifications'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerPatchBody
     */
    'phoneNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerPatchBody
     */
    'preferredLocationId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerPatchBody
     */
    'preferredSquareCardId'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerPatchBody
     */
    'pushNotifications'?: boolean | null;
}

