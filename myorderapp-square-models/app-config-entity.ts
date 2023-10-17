/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ThemeModeEnum } from './theme-mode-enum';

/**
 * 
 * @export
 * @interface AppConfigEntity
 */
export interface AppConfigEntity {
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'path'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigEntity
     */
    'enabled'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'seedColor'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'fontFamily'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigEntity
     */
    'useMaterial3'?: boolean | null;
    /**
     * 
     * @type {ThemeModeEnum}
     * @memberof AppConfigEntity
     */
    'themeMode'?: ThemeModeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'title'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'iconFileDisplayName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'iconFileFullUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'iconFileContentType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'bannerFileDisplayName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'bannerFileFullUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'bannerFileContentType'?: string | null;
}



