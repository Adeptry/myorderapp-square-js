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
 * @interface UserEntity
 */
export interface UserEntity {
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'firstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'fullName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'language'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'lastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'phoneNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'provider'?: ProviderEnum;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    'socialId'?: string | null;
}

export const ProviderEnum = {
    Email: 'email',
    Facebook: 'facebook',
    Google: 'google',
    Twitter: 'twitter',
    Apple: 'apple'
} as const;

export type ProviderEnum = typeof ProviderEnum[keyof typeof ProviderEnum];


