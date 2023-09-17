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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Location } from '../moa-merchants-models';
// @ts-ignore
import { LocationPaginatedResponse } from '../moa-merchants-models';
// @ts-ignore
import { LocationUpdateAllDto } from '../moa-merchants-models';
// @ts-ignore
import { LocationUpdateDto } from '../moa-merchants-models';
// @ts-ignore
import { NestError } from '../moa-merchants-models';
/**
 * LocationsApi - axios parameter creator
 * @export
 */
export const LocationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a Location with ID
         * @param {string} id 
         * @param {GetLocationActingAsEnum} actingAs 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocation: async (id: string, actingAs: GetLocationActingAsEnum, merchantId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getLocation', 'id', id)
            // verify required parameter 'actingAs' is not null or undefined
            assertParamExists('getLocation', 'actingAs', actingAs)
            const localVarPath = `/v2/locations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (actingAs !== undefined) {
                localVarQueryParameter['actingAs'] = actingAs;
            }

            if (merchantId !== undefined) {
                localVarQueryParameter['merchantId'] = merchantId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Locations for Merchant
         * @param {string} merchantId 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocations: async (merchantId: string, page?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantId' is not null or undefined
            assertParamExists('getLocations', 'merchantId', merchantId)
            const localVarPath = `/v2/locations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (merchantId !== undefined) {
                localVarQueryParameter['merchantId'] = merchantId;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all your Locations
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {GetMyLocationsActingAsEnum} [actingAs] 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyLocations: async (page?: number, limit?: number, actingAs?: GetMyLocationsActingAsEnum, merchantId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/locations/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (actingAs !== undefined) {
                localVarQueryParameter['actingAs'] = actingAs;
            }

            if (merchantId !== undefined) {
                localVarQueryParameter['merchantId'] = merchantId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a Location
         * @param {string} id 
         * @param {LocationUpdateDto} locationUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLocation: async (id: string, locationUpdateDto: LocationUpdateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateLocation', 'id', id)
            // verify required parameter 'locationUpdateDto' is not null or undefined
            assertParamExists('updateLocation', 'locationUpdateDto', locationUpdateDto)
            const localVarPath = `/v2/locations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(locationUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Locations
         * @param {Array<LocationUpdateAllDto>} locationUpdateAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLocations: async (locationUpdateAllDto: Array<LocationUpdateAllDto>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationUpdateAllDto' is not null or undefined
            assertParamExists('updateLocations', 'locationUpdateAllDto', locationUpdateAllDto)
            const localVarPath = `/v2/locations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(locationUpdateAllDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LocationsApi - functional programming interface
 * @export
 */
export const LocationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LocationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a Location with ID
         * @param {string} id 
         * @param {GetLocationActingAsEnum} actingAs 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocation(id: string, actingAs: GetLocationActingAsEnum, merchantId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Location>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLocation(id, actingAs, merchantId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Locations for Merchant
         * @param {string} merchantId 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocations(merchantId: string, page?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLocations(merchantId, page, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all your Locations
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {GetMyLocationsActingAsEnum} [actingAs] 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMyLocations(page?: number, limit?: number, actingAs?: GetMyLocationsActingAsEnum, merchantId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMyLocations(page, limit, actingAs, merchantId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a Location
         * @param {string} id 
         * @param {LocationUpdateDto} locationUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLocation(id: string, locationUpdateDto: LocationUpdateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Location>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLocation(id, locationUpdateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Locations
         * @param {Array<LocationUpdateAllDto>} locationUpdateAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLocations(locationUpdateAllDto: Array<LocationUpdateAllDto>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Location>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLocations(locationUpdateAllDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LocationsApi - factory interface
 * @export
 */
export const LocationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LocationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a Location with ID
         * @param {LocationsApiGetLocationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocation(requestParameters: LocationsApiGetLocationRequest, options?: AxiosRequestConfig): AxiosPromise<Location> {
            return localVarFp.getLocation(requestParameters.id, requestParameters.actingAs, requestParameters.merchantId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Locations for Merchant
         * @param {LocationsApiGetLocationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocations(requestParameters: LocationsApiGetLocationsRequest, options?: AxiosRequestConfig): AxiosPromise<LocationPaginatedResponse> {
            return localVarFp.getLocations(requestParameters.merchantId, requestParameters.page, requestParameters.limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all your Locations
         * @param {LocationsApiGetMyLocationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyLocations(requestParameters: LocationsApiGetMyLocationsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<LocationPaginatedResponse> {
            return localVarFp.getMyLocations(requestParameters.page, requestParameters.limit, requestParameters.actingAs, requestParameters.merchantId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Location
         * @param {LocationsApiUpdateLocationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLocation(requestParameters: LocationsApiUpdateLocationRequest, options?: AxiosRequestConfig): AxiosPromise<Location> {
            return localVarFp.updateLocation(requestParameters.id, requestParameters.locationUpdateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Locations
         * @param {LocationsApiUpdateLocationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLocations(requestParameters: LocationsApiUpdateLocationsRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Location>> {
            return localVarFp.updateLocations(requestParameters.locationUpdateAllDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getLocation operation in LocationsApi.
 * @export
 * @interface LocationsApiGetLocationRequest
 */
export interface LocationsApiGetLocationRequest {
    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocation
     */
    readonly id: string

    /**
     * 
     * @type {'merchant' | 'customer'}
     * @memberof LocationsApiGetLocation
     */
    readonly actingAs: GetLocationActingAsEnum

    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocation
     */
    readonly merchantId?: string
}

/**
 * Request parameters for getLocations operation in LocationsApi.
 * @export
 * @interface LocationsApiGetLocationsRequest
 */
export interface LocationsApiGetLocationsRequest {
    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocations
     */
    readonly merchantId: string

    /**
     * 
     * @type {number}
     * @memberof LocationsApiGetLocations
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof LocationsApiGetLocations
     */
    readonly limit?: number
}

/**
 * Request parameters for getMyLocations operation in LocationsApi.
 * @export
 * @interface LocationsApiGetMyLocationsRequest
 */
export interface LocationsApiGetMyLocationsRequest {
    /**
     * 
     * @type {number}
     * @memberof LocationsApiGetMyLocations
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof LocationsApiGetMyLocations
     */
    readonly limit?: number

    /**
     * 
     * @type {'merchant' | 'customer'}
     * @memberof LocationsApiGetMyLocations
     */
    readonly actingAs?: GetMyLocationsActingAsEnum

    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetMyLocations
     */
    readonly merchantId?: string
}

/**
 * Request parameters for updateLocation operation in LocationsApi.
 * @export
 * @interface LocationsApiUpdateLocationRequest
 */
export interface LocationsApiUpdateLocationRequest {
    /**
     * 
     * @type {string}
     * @memberof LocationsApiUpdateLocation
     */
    readonly id: string

    /**
     * 
     * @type {LocationUpdateDto}
     * @memberof LocationsApiUpdateLocation
     */
    readonly locationUpdateDto: LocationUpdateDto
}

/**
 * Request parameters for updateLocations operation in LocationsApi.
 * @export
 * @interface LocationsApiUpdateLocationsRequest
 */
export interface LocationsApiUpdateLocationsRequest {
    /**
     * 
     * @type {Array<LocationUpdateAllDto>}
     * @memberof LocationsApiUpdateLocations
     */
    readonly locationUpdateAllDto: Array<LocationUpdateAllDto>
}

/**
 * LocationsApi - object-oriented interface
 * @export
 * @class LocationsApi
 * @extends {BaseAPI}
 */
export class LocationsApi extends BaseAPI {
    /**
     * 
     * @summary Get a Location with ID
     * @param {LocationsApiGetLocationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public getLocation(requestParameters: LocationsApiGetLocationRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).getLocation(requestParameters.id, requestParameters.actingAs, requestParameters.merchantId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Locations for Merchant
     * @param {LocationsApiGetLocationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public getLocations(requestParameters: LocationsApiGetLocationsRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).getLocations(requestParameters.merchantId, requestParameters.page, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all your Locations
     * @param {LocationsApiGetMyLocationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public getMyLocations(requestParameters: LocationsApiGetMyLocationsRequest = {}, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).getMyLocations(requestParameters.page, requestParameters.limit, requestParameters.actingAs, requestParameters.merchantId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a Location
     * @param {LocationsApiUpdateLocationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public updateLocation(requestParameters: LocationsApiUpdateLocationRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).updateLocation(requestParameters.id, requestParameters.locationUpdateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Locations
     * @param {LocationsApiUpdateLocationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public updateLocations(requestParameters: LocationsApiUpdateLocationsRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).updateLocations(requestParameters.locationUpdateAllDto, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetLocationActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetLocationActingAsEnum = typeof GetLocationActingAsEnum[keyof typeof GetLocationActingAsEnum];
/**
 * @export
 */
export const GetMyLocationsActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetMyLocationsActingAsEnum = typeof GetMyLocationsActingAsEnum[keyof typeof GetMyLocationsActingAsEnum];
