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


// May contain unused imports in some cases
// @ts-ignore
import { AddressEntity } from './address-entity';
// May contain unused imports in some cases
// @ts-ignore
import { BusinessHoursPeriodEntity } from './business-hours-period-entity';

/**
 * 
 * @export
 * @interface LocationEntity
 */
export interface LocationEntity {
    /**
     * 
     * @type {AddressEntity}
     * @memberof LocationEntity
     */
    'address'?: AddressEntity | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'businessEmail'?: string | null;
    /**
     * 
     * @type {Array<BusinessHoursPeriodEntity>}
     * @memberof LocationEntity
     */
    'businessHours'?: Array<BusinessHoursPeriodEntity> | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'businessName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'country'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'currency'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'facebookUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'fullFormatLogoUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'instagramUsername'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationEntity
     */
    'isMain': boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'languageCode'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationEntity
     */
    'latitude'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'logoUrl'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LocationEntity
     */
    'longitude'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'mcc'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LocationEntity
     */
    'moaEnabled'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof LocationEntity
     */
    'moaOrdinal'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'phoneNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'posBackgroundUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'squareId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'status'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'timezone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'twitterUsername'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationEntity
     */
    'websiteUrl'?: string | null;
}

