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
import { AuthAppleLoginDto } from '../moa-merchants-models';
// @ts-ignore
import { AuthEmailLoginDto } from '../moa-merchants-models';
// @ts-ignore
import { AuthForgotPasswordDto } from '../moa-merchants-models';
// @ts-ignore
import { AuthGoogleLoginDto } from '../moa-merchants-models';
// @ts-ignore
import { AuthRegisterLoginDto } from '../moa-merchants-models';
// @ts-ignore
import { AuthResetPasswordDto } from '../moa-merchants-models';
// @ts-ignore
import { AuthUpdateDto } from '../moa-merchants-models';
// @ts-ignore
import { LoginResponseType } from '../moa-merchants-models';
// @ts-ignore
import { User } from '../moa-merchants-models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get current Auth
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        currentAuth: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/auth/me`;
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
         * @summary Forgot password
         * @param {AuthForgotPasswordDto} authForgotPasswordDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPassword: async (authForgotPasswordDto: AuthForgotPasswordDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authForgotPasswordDto' is not null or undefined
            assertParamExists('forgotPassword', 'authForgotPasswordDto', authForgotPasswordDto)
            const localVarPath = `/v2/auth/forgot/password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authForgotPasswordDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get access token
         * @param {AuthEmailLoginDto} authEmailLoginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (authEmailLoginDto: AuthEmailLoginDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authEmailLoginDto' is not null or undefined
            assertParamExists('login', 'authEmailLoginDto', authEmailLoginDto)
            const localVarPath = `/v2/auth/email/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authEmailLoginDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Apple login
         * @param {AuthAppleLoginDto} authAppleLoginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginApple: async (authAppleLoginDto: AuthAppleLoginDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authAppleLoginDto' is not null or undefined
            assertParamExists('loginApple', 'authAppleLoginDto', authAppleLoginDto)
            const localVarPath = `/v2/auth/apple/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authAppleLoginDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Google login
         * @param {AuthGoogleLoginDto} authGoogleLoginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginGoogle: async (authGoogleLoginDto: AuthGoogleLoginDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authGoogleLoginDto' is not null or undefined
            assertParamExists('loginGoogle', 'authGoogleLoginDto', authGoogleLoginDto)
            const localVarPath = `/v2/auth/google/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authGoogleLoginDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/auth/logout`;
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
         * @summary Refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshToken: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/auth/refresh`;
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
         * @summary Create User and Authorize
         * @param {AuthRegisterLoginDto} authRegisterLoginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (authRegisterLoginDto: AuthRegisterLoginDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authRegisterLoginDto' is not null or undefined
            assertParamExists('register', 'authRegisterLoginDto', authRegisterLoginDto)
            const localVarPath = `/v2/auth/email/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authRegisterLoginDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Reset password
         * @param {AuthResetPasswordDto} authResetPasswordDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPassword: async (authResetPasswordDto: AuthResetPasswordDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authResetPasswordDto' is not null or undefined
            assertParamExists('resetPassword', 'authResetPasswordDto', authResetPasswordDto)
            const localVarPath = `/v2/auth/reset/password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authResetPasswordDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update password
         * @param {AuthUpdateDto} authUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCurrentAuth: async (authUpdateDto: AuthUpdateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authUpdateDto' is not null or undefined
            assertParamExists('updateCurrentAuth', 'authUpdateDto', authUpdateDto)
            const localVarPath = `/v2/auth/me`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(authUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get current Auth
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async currentAuth(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.currentAuth(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Forgot password
         * @param {AuthForgotPasswordDto} authForgotPasswordDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forgotPassword(authForgotPasswordDto: AuthForgotPasswordDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forgotPassword(authForgotPasswordDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get access token
         * @param {AuthEmailLoginDto} authEmailLoginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(authEmailLoginDto: AuthEmailLoginDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(authEmailLoginDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Apple login
         * @param {AuthAppleLoginDto} authAppleLoginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginApple(authAppleLoginDto: AuthAppleLoginDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginApple(authAppleLoginDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Google login
         * @param {AuthGoogleLoginDto} authGoogleLoginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginGoogle(authGoogleLoginDto: AuthGoogleLoginDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginGoogle(authGoogleLoginDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshToken(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshToken(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create User and Authorize
         * @param {AuthRegisterLoginDto} authRegisterLoginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(authRegisterLoginDto: AuthRegisterLoginDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(authRegisterLoginDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Reset password
         * @param {AuthResetPasswordDto} authResetPasswordDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetPassword(authResetPasswordDto: AuthResetPasswordDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetPassword(authResetPasswordDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update password
         * @param {AuthUpdateDto} authUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCurrentAuth(authUpdateDto: AuthUpdateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCurrentAuth(authUpdateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @summary Get current Auth
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        currentAuth(options?: AxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.currentAuth(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Forgot password
         * @param {AuthApiForgotPasswordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPassword(requestParameters: AuthApiForgotPasswordRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.forgotPassword(requestParameters.authForgotPasswordDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get access token
         * @param {AuthApiLoginRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(requestParameters: AuthApiLoginRequest, options?: AxiosRequestConfig): AxiosPromise<LoginResponseType> {
            return localVarFp.login(requestParameters.authEmailLoginDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Apple login
         * @param {AuthApiLoginAppleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginApple(requestParameters: AuthApiLoginAppleRequest, options?: AxiosRequestConfig): AxiosPromise<LoginResponseType> {
            return localVarFp.loginApple(requestParameters.authAppleLoginDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Google login
         * @param {AuthApiLoginGoogleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginGoogle(requestParameters: AuthApiLoginGoogleRequest, options?: AxiosRequestConfig): AxiosPromise<LoginResponseType> {
            return localVarFp.loginGoogle(requestParameters.authGoogleLoginDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshToken(options?: AxiosRequestConfig): AxiosPromise<LoginResponseType> {
            return localVarFp.refreshToken(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create User and Authorize
         * @param {AuthApiRegisterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(requestParameters: AuthApiRegisterRequest, options?: AxiosRequestConfig): AxiosPromise<LoginResponseType> {
            return localVarFp.register(requestParameters.authRegisterLoginDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reset password
         * @param {AuthApiResetPasswordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPassword(requestParameters: AuthApiResetPasswordRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resetPassword(requestParameters.authResetPasswordDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update password
         * @param {AuthApiUpdateCurrentAuthRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCurrentAuth(requestParameters: AuthApiUpdateCurrentAuthRequest, options?: AxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.updateCurrentAuth(requestParameters.authUpdateDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for forgotPassword operation in AuthApi.
 * @export
 * @interface AuthApiForgotPasswordRequest
 */
export interface AuthApiForgotPasswordRequest {
    /**
     * 
     * @type {AuthForgotPasswordDto}
     * @memberof AuthApiForgotPassword
     */
    readonly authForgotPasswordDto: AuthForgotPasswordDto
}

/**
 * Request parameters for login operation in AuthApi.
 * @export
 * @interface AuthApiLoginRequest
 */
export interface AuthApiLoginRequest {
    /**
     * 
     * @type {AuthEmailLoginDto}
     * @memberof AuthApiLogin
     */
    readonly authEmailLoginDto: AuthEmailLoginDto
}

/**
 * Request parameters for loginApple operation in AuthApi.
 * @export
 * @interface AuthApiLoginAppleRequest
 */
export interface AuthApiLoginAppleRequest {
    /**
     * 
     * @type {AuthAppleLoginDto}
     * @memberof AuthApiLoginApple
     */
    readonly authAppleLoginDto: AuthAppleLoginDto
}

/**
 * Request parameters for loginGoogle operation in AuthApi.
 * @export
 * @interface AuthApiLoginGoogleRequest
 */
export interface AuthApiLoginGoogleRequest {
    /**
     * 
     * @type {AuthGoogleLoginDto}
     * @memberof AuthApiLoginGoogle
     */
    readonly authGoogleLoginDto: AuthGoogleLoginDto
}

/**
 * Request parameters for register operation in AuthApi.
 * @export
 * @interface AuthApiRegisterRequest
 */
export interface AuthApiRegisterRequest {
    /**
     * 
     * @type {AuthRegisterLoginDto}
     * @memberof AuthApiRegister
     */
    readonly authRegisterLoginDto: AuthRegisterLoginDto
}

/**
 * Request parameters for resetPassword operation in AuthApi.
 * @export
 * @interface AuthApiResetPasswordRequest
 */
export interface AuthApiResetPasswordRequest {
    /**
     * 
     * @type {AuthResetPasswordDto}
     * @memberof AuthApiResetPassword
     */
    readonly authResetPasswordDto: AuthResetPasswordDto
}

/**
 * Request parameters for updateCurrentAuth operation in AuthApi.
 * @export
 * @interface AuthApiUpdateCurrentAuthRequest
 */
export interface AuthApiUpdateCurrentAuthRequest {
    /**
     * 
     * @type {AuthUpdateDto}
     * @memberof AuthApiUpdateCurrentAuth
     */
    readonly authUpdateDto: AuthUpdateDto
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary Get current Auth
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public currentAuth(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).currentAuth(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Forgot password
     * @param {AuthApiForgotPasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public forgotPassword(requestParameters: AuthApiForgotPasswordRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).forgotPassword(requestParameters.authForgotPasswordDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get access token
     * @param {AuthApiLoginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public login(requestParameters: AuthApiLoginRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).login(requestParameters.authEmailLoginDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Apple login
     * @param {AuthApiLoginAppleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public loginApple(requestParameters: AuthApiLoginAppleRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).loginApple(requestParameters.authAppleLoginDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Google login
     * @param {AuthApiLoginGoogleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public loginGoogle(requestParameters: AuthApiLoginGoogleRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).loginGoogle(requestParameters.authGoogleLoginDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public logout(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).logout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Refresh token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public refreshToken(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).refreshToken(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create User and Authorize
     * @param {AuthApiRegisterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public register(requestParameters: AuthApiRegisterRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).register(requestParameters.authRegisterLoginDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Reset password
     * @param {AuthApiResetPasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public resetPassword(requestParameters: AuthApiResetPasswordRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).resetPassword(requestParameters.authResetPasswordDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update password
     * @param {AuthApiUpdateCurrentAuthRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public updateCurrentAuth(requestParameters: AuthApiUpdateCurrentAuthRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).updateCurrentAuth(requestParameters.authUpdateDto, options).then((request) => request(this.axios, this.basePath));
    }
}

