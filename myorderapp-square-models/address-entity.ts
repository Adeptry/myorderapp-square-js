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
 * @interface AddressEntity
 */
export interface AddressEntity {
    /**
     * The first line of the address.
     * @type {string}
     * @memberof AddressEntity
     */
    'addressLine1'?: string | null;
    /**
     * The second line of the address, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    'addressLine2'?: string | null;
    /**
     * The third line of the address, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    'addressLine3'?: string | null;
    /**
     * A civil entity within the address\'s country. In the US, this is the state.
     * @type {string}
     * @memberof AddressEntity
     */
    'administrativeDistrictLevel1'?: string | null;
    /**
     * A civil entity within the address\'s `administrative_district_level_1`. In the US, this is the county.
     * @type {string}
     * @memberof AddressEntity
     */
    'administrativeDistrictLevel2'?: string | null;
    /**
     * A civil entity within the address\'s `administrative_district_level_2`, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    'administrativeDistrictLevel3'?: string | null;
    /**
     * Indicates the country associated with another entity, such as a business. Values are in ISO 3166-1-alpha-2 format.
     * @type {string}
     * @memberof AddressEntity
     */
    'country'?: string | null;
    /**
     * Optional first name when it\'s representing recipient.
     * @type {string}
     * @memberof AddressEntity
     */
    'firstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressEntity
     */
    'id'?: string | null;
    /**
     * Optional last name when it\'s representing recipient.
     * @type {string}
     * @memberof AddressEntity
     */
    'lastName'?: string | null;
    /**
     * The city or town of the address.
     * @type {string}
     * @memberof AddressEntity
     */
    'locality'?: string | null;
    /**
     * The address\'s postal code.
     * @type {string}
     * @memberof AddressEntity
     */
    'postalCode'?: string | null;
    /**
     * A civil region within the address\'s `locality`, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    'sublocality'?: string | null;
    /**
     * A civil region within the address\'s `sublocality`, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    'sublocality2'?: string | null;
    /**
     * A civil region within the address\'s `sublocality_2`, if any.
     * @type {string}
     * @memberof AddressEntity
     */
    'sublocality3'?: string | null;
}

