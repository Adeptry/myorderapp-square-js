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



/**
 * 
 * @export
 * @interface AppConfigUpdateDto
 */
export interface AppConfigUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateDto
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateDto
     */
    'seedColor'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateDto
     */
    'fontFamily'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateDto
     */
    'shortDescription'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigUpdateDto
     */
    'useMaterial3'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateDto
     */
    'themeMode'?: AppConfigUpdateDtoThemeModeEnum;
}

export const AppConfigUpdateDtoThemeModeEnum = {
    System: 'system',
    Light: 'light',
    Dark: 'dark'
} as const;

export type AppConfigUpdateDtoThemeModeEnum = typeof AppConfigUpdateDtoThemeModeEnum[keyof typeof AppConfigUpdateDtoThemeModeEnum];


