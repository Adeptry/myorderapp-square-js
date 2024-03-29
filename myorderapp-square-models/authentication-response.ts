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
import { UserEntity } from './user-entity';

/**
 * 
 * @export
 * @interface AuthenticationResponse
 */
export interface AuthenticationResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResponse
     */
    'refreshToken': string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResponse
     */
    'token': string;
    /**
     * 
     * @type {number}
     * @memberof AuthenticationResponse
     */
    'tokenExpires': number;
    /**
     * 
     * @type {UserEntity}
     * @memberof AuthenticationResponse
     */
    'user'?: UserEntity | null;
}

