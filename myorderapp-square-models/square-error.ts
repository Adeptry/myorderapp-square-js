/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SquareError
 */
export interface SquareError {
    /**
     * Indicates the specific error that occurred during a request to a Square API.
     * @type {string}
     * @memberof SquareError
     */
    'category'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SquareError
     */
    'code'?: string | null;
    /**
     * A human-readable description of the error for debugging purposes.
     * @type {string}
     * @memberof SquareError
     */
    'detail'?: string | null;
    /**
     * The name of the field provided in the original request (if any) that the error pertains to.
     * @type {string}
     * @memberof SquareError
     */
    'field'?: string | null;
}

