/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { FileEntity } from './file-entity';
// May contain unused imports in some cases
// @ts-ignore
import { ThemeModeEnum } from './theme-mode-enum';

/**
 * 
 * @export
 * @interface AppConfig
 */
export interface AppConfig {
    /**
     * 
     * @type {string}
     * @memberof AppConfig
     */
    'blockingMessage'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfig
     */
    'fontFamily'?: string | null;
    /**
     * 
     * @type {FileEntity}
     * @memberof AppConfig
     */
    'iconFile'?: FileEntity | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfig
     */
    'message'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfig
     */
    'minimumVersion'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfig
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfig
     */
    'seedColor'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfig
     */
    'showsAds'?: boolean | null;
    /**
     * 
     * @type {ThemeModeEnum}
     * @memberof AppConfig
     */
    'themeMode'?: ThemeModeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfig
     */
    'useMaterial3'?: boolean | null;
}



