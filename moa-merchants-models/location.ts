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
import { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import { BusinessHoursPeriod } from './business-hours-period';

/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'id'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    'moaOrdinal'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    'moaEnabled'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    'isMain': boolean;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    'latitude'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    'longitude'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'phoneNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'status'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'timezone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'country'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'languageCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'currency'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'businessName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'websiteUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'businessEmail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'twitterUsername'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'instagramUsername'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'facebookUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'logoUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'posBackgroundUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'mcc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    'fullFormatLogoUrl'?: string | null;
    /**
     * 
     * @type {Array<BusinessHoursPeriod>}
     * @memberof Location
     */
    'businessHours'?: Array<BusinessHoursPeriod> | null;
    /**
     * 
     * @type {Address}
     * @memberof Location
     */
    'address'?: Address | null;
}

