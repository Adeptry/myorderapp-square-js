/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.8
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
import { AppConfig } from '../moa-merchants-models';
// @ts-ignore
import { AppConfigUpdateDto } from '../moa-merchants-models';
// @ts-ignore
import { NestError } from '../moa-merchants-models';
/**
 * ConfigsApi - axios parameter creator
 * @export
 */
export const ConfigsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create your Config
         * @param {AppConfigUpdateDto} appConfigUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfig: async (appConfigUpdateDto: AppConfigUpdateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appConfigUpdateDto' is not null or undefined
            assertParamExists('createConfig', 'appConfigUpdateDto', appConfigUpdateDto)
            const localVarPath = `/v2/app-config/me`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(appConfigUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get your Config
         * @param {string} [merchantId] 
         * @param {GetConfigActingAsEnum} [actingAs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfig: async (merchantId?: string, actingAs?: GetConfigActingAsEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/app-config/me`;
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

            if (actingAs !== undefined) {
                localVarQueryParameter['actingAs'] = actingAs;
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
         * @summary Get Config for Merchant ID
         * @param {string} merchantId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigForMerchant: async (merchantId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantId' is not null or undefined
            assertParamExists('getConfigForMerchant', 'merchantId', merchantId)
            const localVarPath = `/v2/app-config`;
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
         * @summary Update your Config
         * @param {AppConfigUpdateDto} appConfigUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfig: async (appConfigUpdateDto: AppConfigUpdateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appConfigUpdateDto' is not null or undefined
            assertParamExists('updateConfig', 'appConfigUpdateDto', appConfigUpdateDto)
            const localVarPath = `/v2/app-config/me`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(appConfigUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Upload icon
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadIcon: async (file?: File, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/app-config/me/icon/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConfigsApi - functional programming interface
 * @export
 */
export const ConfigsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConfigsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create your Config
         * @param {AppConfigUpdateDto} appConfigUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConfig(appConfigUpdateDto: AppConfigUpdateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConfig(appConfigUpdateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get your Config
         * @param {string} [merchantId] 
         * @param {GetConfigActingAsEnum} [actingAs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfig(merchantId?: string, actingAs?: GetConfigActingAsEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfig(merchantId, actingAs, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Config for Merchant ID
         * @param {string} merchantId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfigForMerchant(merchantId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfigForMerchant(merchantId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update your Config
         * @param {AppConfigUpdateDto} appConfigUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfig(appConfigUpdateDto: AppConfigUpdateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfig(appConfigUpdateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Upload icon
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadIcon(file?: File, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadIcon(file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConfigsApi - factory interface
 * @export
 */
export const ConfigsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConfigsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create your Config
         * @param {ConfigsApiCreateConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConfig(requestParameters: ConfigsApiCreateConfigRequest, options?: AxiosRequestConfig): AxiosPromise<AppConfig> {
            return localVarFp.createConfig(requestParameters.appConfigUpdateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get your Config
         * @param {ConfigsApiGetConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfig(requestParameters: ConfigsApiGetConfigRequest = {}, options?: AxiosRequestConfig): AxiosPromise<AppConfig> {
            return localVarFp.getConfig(requestParameters.merchantId, requestParameters.actingAs, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Config for Merchant ID
         * @param {ConfigsApiGetConfigForMerchantRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfigForMerchant(requestParameters: ConfigsApiGetConfigForMerchantRequest, options?: AxiosRequestConfig): AxiosPromise<AppConfig> {
            return localVarFp.getConfigForMerchant(requestParameters.merchantId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update your Config
         * @param {ConfigsApiUpdateConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfig(requestParameters: ConfigsApiUpdateConfigRequest, options?: AxiosRequestConfig): AxiosPromise<AppConfig> {
            return localVarFp.updateConfig(requestParameters.appConfigUpdateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Upload icon
         * @param {ConfigsApiUploadIconRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadIcon(requestParameters: ConfigsApiUploadIconRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.uploadIcon(requestParameters.file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createConfig operation in ConfigsApi.
 * @export
 * @interface ConfigsApiCreateConfigRequest
 */
export interface ConfigsApiCreateConfigRequest {
    /**
     * 
     * @type {AppConfigUpdateDto}
     * @memberof ConfigsApiCreateConfig
     */
    readonly appConfigUpdateDto: AppConfigUpdateDto
}

/**
 * Request parameters for getConfig operation in ConfigsApi.
 * @export
 * @interface ConfigsApiGetConfigRequest
 */
export interface ConfigsApiGetConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof ConfigsApiGetConfig
     */
    readonly merchantId?: string

    /**
     * 
     * @type {'merchant' | 'customer'}
     * @memberof ConfigsApiGetConfig
     */
    readonly actingAs?: GetConfigActingAsEnum
}

/**
 * Request parameters for getConfigForMerchant operation in ConfigsApi.
 * @export
 * @interface ConfigsApiGetConfigForMerchantRequest
 */
export interface ConfigsApiGetConfigForMerchantRequest {
    /**
     * 
     * @type {string}
     * @memberof ConfigsApiGetConfigForMerchant
     */
    readonly merchantId: string
}

/**
 * Request parameters for updateConfig operation in ConfigsApi.
 * @export
 * @interface ConfigsApiUpdateConfigRequest
 */
export interface ConfigsApiUpdateConfigRequest {
    /**
     * 
     * @type {AppConfigUpdateDto}
     * @memberof ConfigsApiUpdateConfig
     */
    readonly appConfigUpdateDto: AppConfigUpdateDto
}

/**
 * Request parameters for uploadIcon operation in ConfigsApi.
 * @export
 * @interface ConfigsApiUploadIconRequest
 */
export interface ConfigsApiUploadIconRequest {
    /**
     * 
     * @type {File}
     * @memberof ConfigsApiUploadIcon
     */
    readonly file?: File
}

/**
 * ConfigsApi - object-oriented interface
 * @export
 * @class ConfigsApi
 * @extends {BaseAPI}
 */
export class ConfigsApi extends BaseAPI {
    /**
     * 
     * @summary Create your Config
     * @param {ConfigsApiCreateConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigsApi
     */
    public createConfig(requestParameters: ConfigsApiCreateConfigRequest, options?: AxiosRequestConfig) {
        return ConfigsApiFp(this.configuration).createConfig(requestParameters.appConfigUpdateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get your Config
     * @param {ConfigsApiGetConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigsApi
     */
    public getConfig(requestParameters: ConfigsApiGetConfigRequest = {}, options?: AxiosRequestConfig) {
        return ConfigsApiFp(this.configuration).getConfig(requestParameters.merchantId, requestParameters.actingAs, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Config for Merchant ID
     * @param {ConfigsApiGetConfigForMerchantRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigsApi
     */
    public getConfigForMerchant(requestParameters: ConfigsApiGetConfigForMerchantRequest, options?: AxiosRequestConfig) {
        return ConfigsApiFp(this.configuration).getConfigForMerchant(requestParameters.merchantId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update your Config
     * @param {ConfigsApiUpdateConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigsApi
     */
    public updateConfig(requestParameters: ConfigsApiUpdateConfigRequest, options?: AxiosRequestConfig) {
        return ConfigsApiFp(this.configuration).updateConfig(requestParameters.appConfigUpdateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Upload icon
     * @param {ConfigsApiUploadIconRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigsApi
     */
    public uploadIcon(requestParameters: ConfigsApiUploadIconRequest = {}, options?: AxiosRequestConfig) {
        return ConfigsApiFp(this.configuration).uploadIcon(requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetConfigActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetConfigActingAsEnum = typeof GetConfigActingAsEnum[keyof typeof GetConfigActingAsEnum];
