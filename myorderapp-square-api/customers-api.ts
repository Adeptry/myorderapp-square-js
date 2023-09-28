/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.5
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
import { AppInstallPostBody } from '../myorderapp-square-models';
// @ts-ignore
import { CustomerEntity } from '../myorderapp-square-models';
// @ts-ignore
import { CustomerPatchBody } from '../myorderapp-square-models';
// @ts-ignore
import { CustomersPaginatedResponse } from '../myorderapp-square-models';
// @ts-ignore
import { ErrorResponse } from '../myorderapp-square-models';
/**
 * CustomersApi - axios parameter creator
 * @export
 */
export const CustomersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get current Customer
         * @param {string} merchantIdOrPath 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {boolean} [preferredSquareCard] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerMe: async (merchantIdOrPath: string, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, preferredSquareCard?: boolean, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('getCustomerMe', 'merchantIdOrPath', merchantIdOrPath)
            const localVarPath = `/v2/customers/me`;
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

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (merchant !== undefined) {
                localVarQueryParameter['merchant'] = merchant;
            }

            if (currentOrder !== undefined) {
                localVarQueryParameter['currentOrder'] = currentOrder;
            }

            if (preferredLocation !== undefined) {
                localVarQueryParameter['preferredLocation'] = preferredLocation;
            }

            if (preferredSquareCard !== undefined) {
                localVarQueryParameter['preferredSquareCard'] = preferredSquareCard;
            }

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
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
         * @summary Get my Customers
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManyCustomers: async (page?: number, limit?: number, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/customers`;
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

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (merchant !== undefined) {
                localVarQueryParameter['merchant'] = merchant;
            }

            if (currentOrder !== undefined) {
                localVarQueryParameter['currentOrder'] = currentOrder;
            }

            if (preferredLocation !== undefined) {
                localVarQueryParameter['preferredLocation'] = preferredLocation;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
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
         * @summary Update your Customer
         * @param {string} merchantIdOrPath 
         * @param {CustomerPatchBody} customerPatchBody 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {boolean} [preferredSquareCard] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCustomerMe: async (merchantIdOrPath: string, customerPatchBody: CustomerPatchBody, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, preferredSquareCard?: boolean, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('patchCustomerMe', 'merchantIdOrPath', merchantIdOrPath)
            // verify required parameter 'customerPatchBody' is not null or undefined
            assertParamExists('patchCustomerMe', 'customerPatchBody', customerPatchBody)
            const localVarPath = `/v2/customers/me`;
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

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (merchant !== undefined) {
                localVarQueryParameter['merchant'] = merchant;
            }

            if (currentOrder !== undefined) {
                localVarQueryParameter['currentOrder'] = currentOrder;
            }

            if (preferredLocation !== undefined) {
                localVarQueryParameter['preferredLocation'] = preferredLocation;
            }

            if (preferredSquareCard !== undefined) {
                localVarQueryParameter['preferredSquareCard'] = preferredSquareCard;
            }

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(customerPatchBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Customer for current User
         * @param {string} merchantIdOrPath 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCustomerMe: async (merchantIdOrPath: string, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('postCustomerMe', 'merchantIdOrPath', merchantIdOrPath)
            const localVarPath = `/v2/customers/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (merchant !== undefined) {
                localVarQueryParameter['merchant'] = merchant;
            }

            if (currentOrder !== undefined) {
                localVarQueryParameter['currentOrder'] = currentOrder;
            }

            if (preferredLocation !== undefined) {
                localVarQueryParameter['preferredLocation'] = preferredLocation;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
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
         * @summary Create or update Customer App Install
         * @param {string} merchantIdOrPath 
         * @param {AppInstallPostBody} appInstallPostBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAppInstallMe: async (merchantIdOrPath: string, appInstallPostBody: AppInstallPostBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('updateAppInstallMe', 'merchantIdOrPath', merchantIdOrPath)
            // verify required parameter 'appInstallPostBody' is not null or undefined
            assertParamExists('updateAppInstallMe', 'appInstallPostBody', appInstallPostBody)
            const localVarPath = `/v2/customers/me/app-install`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(appInstallPostBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomersApi - functional programming interface
 * @export
 */
export const CustomersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get current Customer
         * @param {string} merchantIdOrPath 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {boolean} [preferredSquareCard] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomerMe(merchantIdOrPath: string, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, preferredSquareCard?: boolean, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerMe(merchantIdOrPath, user, merchant, currentOrder, preferredLocation, preferredSquareCard, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get my Customers
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getManyCustomers(page?: number, limit?: number, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomersPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getManyCustomers(page, limit, user, merchant, currentOrder, preferredLocation, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update your Customer
         * @param {string} merchantIdOrPath 
         * @param {CustomerPatchBody} customerPatchBody 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {boolean} [preferredSquareCard] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchCustomerMe(merchantIdOrPath: string, customerPatchBody: CustomerPatchBody, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, preferredSquareCard?: boolean, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchCustomerMe(merchantIdOrPath, customerPatchBody, user, merchant, currentOrder, preferredLocation, preferredSquareCard, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create Customer for current User
         * @param {string} merchantIdOrPath 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCustomerMe(merchantIdOrPath: string, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCustomerMe(merchantIdOrPath, user, merchant, currentOrder, preferredLocation, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create or update Customer App Install
         * @param {string} merchantIdOrPath 
         * @param {AppInstallPostBody} appInstallPostBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAppInstallMe(merchantIdOrPath: string, appInstallPostBody: AppInstallPostBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAppInstallMe(merchantIdOrPath, appInstallPostBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomersApi - factory interface
 * @export
 */
export const CustomersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomersApiFp(configuration)
    return {
        /**
         * 
         * @summary Get current Customer
         * @param {CustomersApiGetCustomerMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerMe(requestParameters: CustomersApiGetCustomerMeRequest, options?: AxiosRequestConfig): AxiosPromise<CustomerEntity> {
            return localVarFp.getCustomerMe(requestParameters.merchantIdOrPath, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.preferredSquareCard, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get my Customers
         * @param {CustomersApiGetManyCustomersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManyCustomers(requestParameters: CustomersApiGetManyCustomersRequest = {}, options?: AxiosRequestConfig): AxiosPromise<CustomersPaginatedResponse> {
            return localVarFp.getManyCustomers(requestParameters.page, requestParameters.limit, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update your Customer
         * @param {CustomersApiPatchCustomerMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCustomerMe(requestParameters: CustomersApiPatchCustomerMeRequest, options?: AxiosRequestConfig): AxiosPromise<CustomerEntity> {
            return localVarFp.patchCustomerMe(requestParameters.merchantIdOrPath, requestParameters.customerPatchBody, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.preferredSquareCard, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Customer for current User
         * @param {CustomersApiPostCustomerMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCustomerMe(requestParameters: CustomersApiPostCustomerMeRequest, options?: AxiosRequestConfig): AxiosPromise<CustomerEntity> {
            return localVarFp.postCustomerMe(requestParameters.merchantIdOrPath, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create or update Customer App Install
         * @param {CustomersApiUpdateAppInstallMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAppInstallMe(requestParameters: CustomersApiUpdateAppInstallMeRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateAppInstallMe(requestParameters.merchantIdOrPath, requestParameters.appInstallPostBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCustomerMe operation in CustomersApi.
 * @export
 * @interface CustomersApiGetCustomerMeRequest
 */
export interface CustomersApiGetCustomerMeRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomersApiGetCustomerMe
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetCustomerMe
     */
    readonly user?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetCustomerMe
     */
    readonly merchant?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetCustomerMe
     */
    readonly currentOrder?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetCustomerMe
     */
    readonly preferredLocation?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetCustomerMe
     */
    readonly preferredSquareCard?: boolean

    /**
     * 
     * @type {string}
     * @memberof CustomersApiGetCustomerMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getManyCustomers operation in CustomersApi.
 * @export
 * @interface CustomersApiGetManyCustomersRequest
 */
export interface CustomersApiGetManyCustomersRequest {
    /**
     * 
     * @type {number}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly limit?: number

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly user?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly merchant?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly currentOrder?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly preferredLocation?: boolean

    /**
     * 
     * @type {string}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for patchCustomerMe operation in CustomersApi.
 * @export
 * @interface CustomersApiPatchCustomerMeRequest
 */
export interface CustomersApiPatchCustomerMeRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomersApiPatchCustomerMe
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {CustomerPatchBody}
     * @memberof CustomersApiPatchCustomerMe
     */
    readonly customerPatchBody: CustomerPatchBody

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPatchCustomerMe
     */
    readonly user?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPatchCustomerMe
     */
    readonly merchant?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPatchCustomerMe
     */
    readonly currentOrder?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPatchCustomerMe
     */
    readonly preferredLocation?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPatchCustomerMe
     */
    readonly preferredSquareCard?: boolean

    /**
     * 
     * @type {string}
     * @memberof CustomersApiPatchCustomerMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postCustomerMe operation in CustomersApi.
 * @export
 * @interface CustomersApiPostCustomerMeRequest
 */
export interface CustomersApiPostCustomerMeRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomersApiPostCustomerMe
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPostCustomerMe
     */
    readonly user?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPostCustomerMe
     */
    readonly merchant?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPostCustomerMe
     */
    readonly currentOrder?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiPostCustomerMe
     */
    readonly preferredLocation?: boolean

    /**
     * 
     * @type {string}
     * @memberof CustomersApiPostCustomerMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for updateAppInstallMe operation in CustomersApi.
 * @export
 * @interface CustomersApiUpdateAppInstallMeRequest
 */
export interface CustomersApiUpdateAppInstallMeRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomersApiUpdateAppInstallMe
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {AppInstallPostBody}
     * @memberof CustomersApiUpdateAppInstallMe
     */
    readonly appInstallPostBody: AppInstallPostBody

    /**
     * 
     * @type {string}
     * @memberof CustomersApiUpdateAppInstallMe
     */
    readonly xCustomLang?: string
}

/**
 * CustomersApi - object-oriented interface
 * @export
 * @class CustomersApi
 * @extends {BaseAPI}
 */
export class CustomersApi extends BaseAPI {
    /**
     * 
     * @summary Get current Customer
     * @param {CustomersApiGetCustomerMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getCustomerMe(requestParameters: CustomersApiGetCustomerMeRequest, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).getCustomerMe(requestParameters.merchantIdOrPath, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.preferredSquareCard, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get my Customers
     * @param {CustomersApiGetManyCustomersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getManyCustomers(requestParameters: CustomersApiGetManyCustomersRequest = {}, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).getManyCustomers(requestParameters.page, requestParameters.limit, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update your Customer
     * @param {CustomersApiPatchCustomerMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public patchCustomerMe(requestParameters: CustomersApiPatchCustomerMeRequest, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).patchCustomerMe(requestParameters.merchantIdOrPath, requestParameters.customerPatchBody, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.preferredSquareCard, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Customer for current User
     * @param {CustomersApiPostCustomerMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public postCustomerMe(requestParameters: CustomersApiPostCustomerMeRequest, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).postCustomerMe(requestParameters.merchantIdOrPath, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create or update Customer App Install
     * @param {CustomersApiUpdateAppInstallMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public updateAppInstallMe(requestParameters: CustomersApiUpdateAppInstallMeRequest, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).updateAppInstallMe(requestParameters.merchantIdOrPath, requestParameters.appInstallPostBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }
}

