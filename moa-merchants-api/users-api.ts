/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.1
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
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserMe: async (xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * @summary Get your User
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserMe: async (xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * @summary Update your User
         * @param {UserUpdateDto} userUpdateDto 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUserMe: async (userUpdateDto: UserUpdateDto, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userUpdateDto' is not null or undefined
            assertParamExists('patchUserMe', 'userUpdateDto', userUpdateDto)
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

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
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
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUserMe(xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserMe(xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get your User
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserMe(xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserMe(xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update your User
         * @param {UserUpdateDto} userUpdateDto 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchUserMe(userUpdateDto: UserUpdateDto, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchUserMe(userUpdateDto, xCustomLang, options);
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
         * @param {UsersApiDeleteUserMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserMe(requestParameters: UsersApiDeleteUserMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.deleteUserMe(requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get your User
         * @param {UsersApiGetUserMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserMe(requestParameters: UsersApiGetUserMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.getUserMe(requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update your User
         * @param {UsersApiPatchUserMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchUserMe(requestParameters: UsersApiPatchUserMeRequest, options?: AxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.patchUserMe(requestParameters.userUpdateDto, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteUserMe operation in UsersApi.
 * @export
 * @interface UsersApiDeleteUserMeRequest
 */
export interface UsersApiDeleteUserMeRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiDeleteUserMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getUserMe operation in UsersApi.
 * @export
 * @interface UsersApiGetUserMeRequest
 */
export interface UsersApiGetUserMeRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiGetUserMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for patchUserMe operation in UsersApi.
 * @export
 * @interface UsersApiPatchUserMeRequest
 */
export interface UsersApiPatchUserMeRequest {
    /**
     * 
     * @type {UserUpdateDto}
     * @memberof UsersApiPatchUserMe
     */
    readonly userUpdateDto: UserUpdateDto

    /**
     * 
     * @type {string}
     * @memberof UsersApiPatchUserMe
     */
    readonly xCustomLang?: string
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
     * @param {UsersApiDeleteUserMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteUserMe(requestParameters: UsersApiDeleteUserMeRequest = {}, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).deleteUserMe(requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get your User
     * @param {UsersApiGetUserMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserMe(requestParameters: UsersApiGetUserMeRequest = {}, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUserMe(requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update your User
     * @param {UsersApiPatchUserMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public patchUserMe(requestParameters: UsersApiPatchUserMeRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).patchUserMe(requestParameters.userUpdateDto, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }
}

