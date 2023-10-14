/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.0
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
 * @interface SquareListCardsResponse
 */
export interface SquareListCardsResponse {
    /**
     * 
     * @type {Array<SquareCard>}
     * @memberof SquareListCardsResponse
     */
    'cards'?: Array<SquareCard> | null;
    /**
     * 
     * @type {string}
     * @memberof SquareListCardsResponse
     */
    'cursor'?: string | null;
    /**
     * 
     * @type {Array<SquareError>}
     * @memberof SquareListCardsResponse
     */
    'errors'?: Array<SquareError> | null;
}

