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
import { FileEntity } from './file-entity';

/**
 * 
 * @export
 * @interface AuthUpdateDto
 */
export interface AuthUpdateDto {
    /**
     * 
     * @type {FileEntity}
     * @memberof AuthUpdateDto
     */
    'photo': FileEntity;
    /**
     * 
     * @type {string}
     * @memberof AuthUpdateDto
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof AuthUpdateDto
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof AuthUpdateDto
     */
    'password': string;
    /**
     * 
     * @type {string}
     * @memberof AuthUpdateDto
     */
    'oldPassword': string;
    /**
     * 
     * @type {object}
     * @memberof AuthUpdateDto
     */
    'phoneNumber': object;
}

