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
import { SquareCard } from './square-card';
// May contain unused imports in some cases
// @ts-ignore
import { SquareError } from './square-error';

/**
 * 
 * @export
 * @interface SquareDisableCardResponse
 */
export interface SquareDisableCardResponse {
    /**
     * 
     * @type {Array<SquareError>}
     * @memberof SquareDisableCardResponse
     */
    'errors'?: Array<SquareError> | null;
    /**
     * 
     * @type {SquareCard}
     * @memberof SquareDisableCardResponse
     */
    'card'?: SquareCard | null;
}

