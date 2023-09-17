/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AppConfig } from './app-config';
// May contain unused imports in some cases
// @ts-ignore
import { FileEntity } from './file-entity';
// May contain unused imports in some cases
// @ts-ignore
import { MerchantAppStoreStatusEnum } from './merchant-app-store-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import { MerchantTierEnum } from './merchant-tier-enum';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * 
 * @export
 * @interface Merchant
 */
export interface Merchant {
    /**
     * 
     * @type {MerchantAppStoreStatusEnum}
     * @memberof Merchant
     */
    'androidStatus'?: MerchantAppStoreStatusEnum;
    /**
     * 
     * @type {FileEntity}
     * @memberof Merchant
     */
    'androidZipFile'?: FileEntity | null;
    /**
     * 
     * @type {AppConfig}
     * @memberof Merchant
     */
    'appConfig'?: AppConfig | null;
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'catalogId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'id'?: string | null;
    /**
     * 
     * @type {MerchantAppStoreStatusEnum}
     * @memberof Merchant
     */
    'iosStatus'?: MerchantAppStoreStatusEnum;
    /**
     * 
     * @type {FileEntity}
     * @memberof Merchant
     */
    'iosZipFile'?: FileEntity | null;
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'squareId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'stripeId'?: string | null;
    /**
     * 
     * @type {MerchantTierEnum}
     * @memberof Merchant
     */
    'tier'?: MerchantTierEnum;
    /**
     * 
     * @type {User}
     * @memberof Merchant
     */
    'user'?: User | null;
}



