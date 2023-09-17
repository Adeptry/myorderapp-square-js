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
import { NestError } from '../moa-merchants-models';
// @ts-ignore
import { User } from '../moa-merchants-models';
// @ts-ignore
import { UserUpdateDto } from '../moa-merchants-models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete your User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCurrentUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
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
         * @summary Get your User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/users/me`;
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
         * @summary Update your User
         * @param {UserUpdateDto} userUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCurrentUser: async (userUpdateDto: UserUpdateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userUpdateDto' is not null or undefined
            assertParamExists('patchCurrentUser', 'userUpdateDto', userUpdateDto)
            const localVarPath = `/v2/users/me`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(userUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete your User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCurrentUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCurrentUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get your User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update your User
         * @param {UserUpdateDto} userUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchCurrentUser(userUpdateDto: UserUpdateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchCurrentUser(userUpdateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete your User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCurrentUser(options?: AxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.deleteCurrentUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get your User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser(options?: AxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.getCurrentUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update your User
         * @param {UsersApiPatchCurrentUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchCurrentUser(requestParameters: UsersApiPatchCurrentUserRequest, options?: AxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.patchCurrentUser(requestParameters.userUpdateDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for patchCurrentUser operation in UsersApi.
 * @export
 * @interface UsersApiPatchCurrentUserRequest
 */
export interface UsersApiPatchCurrentUserRequest {
    /**
     * 
     * @type {UserUpdateDto}
     * @memberof UsersApiPatchCurrentUser
     */
    readonly userUpdateDto: UserUpdateDto
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary Delete your User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteCurrentUser(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).deleteCurrentUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get your User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getCurrentUser(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getCurrentUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update your User
     * @param {UsersApiPatchCurrentUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public patchCurrentUser(requestParameters: UsersApiPatchCurrentUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).patchCurrentUser(requestParameters.userUpdateDto, options).then((request) => request(this.axios, this.basePath));
    }
}

