/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Category } from '../moa-merchants-models';
// @ts-ignore
import { CategoryPaginatedResponse } from '../moa-merchants-models';
// @ts-ignore
import { CategoryUpdateAllDto } from '../moa-merchants-models';
// @ts-ignore
import { CategoryUpdateDto } from '../moa-merchants-models';
// @ts-ignore
import { Item } from '../moa-merchants-models';
// @ts-ignore
import { ItemPaginatedResponse } from '../moa-merchants-models';
// @ts-ignore
import { ItemUpdateAllDto } from '../moa-merchants-models';
// @ts-ignore
import { ItemUpdateDto } from '../moa-merchants-models';
// @ts-ignore
import { NestError } from '../moa-merchants-models';
/**
 * CatalogsApi - axios parameter creator
 * @export
 */
export const CatalogsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get your Categories with Items, Variations, and ModifierLists
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [locationId] 
         * @param {boolean} [items] 
         * @param {boolean} [variations] 
         * @param {boolean} [modifierLists] 
         * @param {'merchant' | 'customer'} [actingAs] 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalog: async (page?: number, limit?: number, locationId?: string, items?: boolean, variations?: boolean, modifierLists?: boolean, actingAs?: 'merchant' | 'customer', merchantId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/catalog/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (locationId !== undefined) {
                localVarQueryParameter['locationId'] = locationId;
            }

            if (items !== undefined) {
                localVarQueryParameter['items'] = items;
            }

            if (variations !== undefined) {
                localVarQueryParameter['variations'] = variations;
            }

            if (modifierLists !== undefined) {
                localVarQueryParameter['modifierLists'] = modifierLists;
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
         * @summary Get Item with ID
         * @param {string} id 
         * @param {string} [locationId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItem: async (id: string, locationId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getItem', 'id', id)
            const localVarPath = `/v2/items/{id}`
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

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (locationId !== undefined) {
                localVarQueryParameter['locationId'] = locationId;
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
         * @summary Get Items in Category
         * @param {string} id 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [locationId] 
         * @param {'merchant' | 'customer'} [actingAs] 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItems: async (id: string, page?: number, limit?: number, locationId?: string, actingAs?: 'merchant' | 'customer', merchantId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getItems', 'id', id)
            const localVarPath = `/v2/categories/{id}/items`
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

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (locationId !== undefined) {
                localVarQueryParameter['locationId'] = locationId;
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
         * @summary Update multiple Categories
         * @param {Array<CategoryUpdateAllDto>} categoryUpdateAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCategories: async (categoryUpdateAllDto: Array<CategoryUpdateAllDto>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryUpdateAllDto' is not null or undefined
            assertParamExists('updateCategories', 'categoryUpdateAllDto', categoryUpdateAllDto)
            const localVarPath = `/v2/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(categoryUpdateAllDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a Category
         * @param {string} id 
         * @param {CategoryUpdateDto} categoryUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCategory: async (id: string, categoryUpdateDto: CategoryUpdateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateCategory', 'id', id)
            // verify required parameter 'categoryUpdateDto' is not null or undefined
            assertParamExists('updateCategory', 'categoryUpdateDto', categoryUpdateDto)
            const localVarPath = `/v2/categories/{id}`
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

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(categoryUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an Item
         * @param {string} id 
         * @param {ItemUpdateDto} itemUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem: async (id: string, itemUpdateDto: ItemUpdateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateItem', 'id', id)
            // verify required parameter 'itemUpdateDto' is not null or undefined
            assertParamExists('updateItem', 'itemUpdateDto', itemUpdateDto)
            const localVarPath = `/v2/items/{id}`
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

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(itemUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update multiple Items
         * @param {Array<ItemUpdateAllDto>} itemUpdateAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItems: async (itemUpdateAllDto: Array<ItemUpdateAllDto>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemUpdateAllDto' is not null or undefined
            assertParamExists('updateItems', 'itemUpdateAllDto', itemUpdateAllDto)
            const localVarPath = `/v2/items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(itemUpdateAllDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CatalogsApi - functional programming interface
 * @export
 */
export const CatalogsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CatalogsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get your Categories with Items, Variations, and ModifierLists
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [locationId] 
         * @param {boolean} [items] 
         * @param {boolean} [variations] 
         * @param {boolean} [modifierLists] 
         * @param {'merchant' | 'customer'} [actingAs] 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCatalog(page?: number, limit?: number, locationId?: string, items?: boolean, variations?: boolean, modifierLists?: boolean, actingAs?: 'merchant' | 'customer', merchantId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCatalog(page, limit, locationId, items, variations, modifierLists, actingAs, merchantId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Item with ID
         * @param {string} id 
         * @param {string} [locationId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItem(id: string, locationId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItem(id, locationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Items in Category
         * @param {string} id 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [locationId] 
         * @param {'merchant' | 'customer'} [actingAs] 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItems(id: string, page?: number, limit?: number, locationId?: string, actingAs?: 'merchant' | 'customer', merchantId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItems(id, page, limit, locationId, actingAs, merchantId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update multiple Categories
         * @param {Array<CategoryUpdateAllDto>} categoryUpdateAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCategories(categoryUpdateAllDto: Array<CategoryUpdateAllDto>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Category>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCategories(categoryUpdateAllDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a Category
         * @param {string} id 
         * @param {CategoryUpdateDto} categoryUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCategory(id: string, categoryUpdateDto: CategoryUpdateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCategory(id, categoryUpdateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update an Item
         * @param {string} id 
         * @param {ItemUpdateDto} itemUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateItem(id: string, itemUpdateDto: ItemUpdateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateItem(id, itemUpdateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update multiple Items
         * @param {Array<ItemUpdateAllDto>} itemUpdateAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateItems(itemUpdateAllDto: Array<ItemUpdateAllDto>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Item>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateItems(itemUpdateAllDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CatalogsApi - factory interface
 * @export
 */
export const CatalogsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CatalogsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get your Categories with Items, Variations, and ModifierLists
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [locationId] 
         * @param {boolean} [items] 
         * @param {boolean} [variations] 
         * @param {boolean} [modifierLists] 
         * @param {'merchant' | 'customer'} [actingAs] 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalog(page?: number, limit?: number, locationId?: string, items?: boolean, variations?: boolean, modifierLists?: boolean, actingAs?: 'merchant' | 'customer', merchantId?: string, options?: any): AxiosPromise<CategoryPaginatedResponse> {
            return localVarFp.getCatalog(page, limit, locationId, items, variations, modifierLists, actingAs, merchantId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Item with ID
         * @param {string} id 
         * @param {string} [locationId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItem(id: string, locationId?: string, options?: any): AxiosPromise<Item> {
            return localVarFp.getItem(id, locationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Items in Category
         * @param {string} id 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [locationId] 
         * @param {'merchant' | 'customer'} [actingAs] 
         * @param {string} [merchantId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItems(id: string, page?: number, limit?: number, locationId?: string, actingAs?: 'merchant' | 'customer', merchantId?: string, options?: any): AxiosPromise<ItemPaginatedResponse> {
            return localVarFp.getItems(id, page, limit, locationId, actingAs, merchantId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update multiple Categories
         * @param {Array<CategoryUpdateAllDto>} categoryUpdateAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCategories(categoryUpdateAllDto: Array<CategoryUpdateAllDto>, options?: any): AxiosPromise<Array<Category>> {
            return localVarFp.updateCategories(categoryUpdateAllDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Category
         * @param {string} id 
         * @param {CategoryUpdateDto} categoryUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCategory(id: string, categoryUpdateDto: CategoryUpdateDto, options?: any): AxiosPromise<Category> {
            return localVarFp.updateCategory(id, categoryUpdateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an Item
         * @param {string} id 
         * @param {ItemUpdateDto} itemUpdateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem(id: string, itemUpdateDto: ItemUpdateDto, options?: any): AxiosPromise<Item> {
            return localVarFp.updateItem(id, itemUpdateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update multiple Items
         * @param {Array<ItemUpdateAllDto>} itemUpdateAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItems(itemUpdateAllDto: Array<ItemUpdateAllDto>, options?: any): AxiosPromise<Array<Item>> {
            return localVarFp.updateItems(itemUpdateAllDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCatalog operation in CatalogsApi.
 * @export
 * @interface CatalogsApiGetCatalogRequest
 */
export interface CatalogsApiGetCatalogRequest {
    /**
     * 
     * @type {number}
     * @memberof CatalogsApiGetCatalog
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof CatalogsApiGetCatalog
     */
    readonly limit?: number

    /**
     * 
     * @type {string}
     * @memberof CatalogsApiGetCatalog
     */
    readonly locationId?: string

    /**
     * 
     * @type {boolean}
     * @memberof CatalogsApiGetCatalog
     */
    readonly items?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CatalogsApiGetCatalog
     */
    readonly variations?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CatalogsApiGetCatalog
     */
    readonly modifierLists?: boolean

    /**
     * 
     * @type {'merchant' | 'customer'}
     * @memberof CatalogsApiGetCatalog
     */
    readonly actingAs?: 'merchant' | 'customer'

    /**
     * 
     * @type {string}
     * @memberof CatalogsApiGetCatalog
     */
    readonly merchantId?: string
}

/**
 * Request parameters for getItem operation in CatalogsApi.
 * @export
 * @interface CatalogsApiGetItemRequest
 */
export interface CatalogsApiGetItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CatalogsApiGetItem
     */
    readonly id: string

    /**
     * 
     * @type {string}
     * @memberof CatalogsApiGetItem
     */
    readonly locationId?: string
}

/**
 * Request parameters for getItems operation in CatalogsApi.
 * @export
 * @interface CatalogsApiGetItemsRequest
 */
export interface CatalogsApiGetItemsRequest {
    /**
     * 
     * @type {string}
     * @memberof CatalogsApiGetItems
     */
    readonly id: string

    /**
     * 
     * @type {number}
     * @memberof CatalogsApiGetItems
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof CatalogsApiGetItems
     */
    readonly limit?: number

    /**
     * 
     * @type {string}
     * @memberof CatalogsApiGetItems
     */
    readonly locationId?: string

    /**
     * 
     * @type {'merchant' | 'customer'}
     * @memberof CatalogsApiGetItems
     */
    readonly actingAs?: 'merchant' | 'customer'

    /**
     * 
     * @type {string}
     * @memberof CatalogsApiGetItems
     */
    readonly merchantId?: string
}

/**
 * Request parameters for updateCategories operation in CatalogsApi.
 * @export
 * @interface CatalogsApiUpdateCategoriesRequest
 */
export interface CatalogsApiUpdateCategoriesRequest {
    /**
     * 
     * @type {Array<CategoryUpdateAllDto>}
     * @memberof CatalogsApiUpdateCategories
     */
    readonly categoryUpdateAllDto: Array<CategoryUpdateAllDto>
}

/**
 * Request parameters for updateCategory operation in CatalogsApi.
 * @export
 * @interface CatalogsApiUpdateCategoryRequest
 */
export interface CatalogsApiUpdateCategoryRequest {
    /**
     * 
     * @type {string}
     * @memberof CatalogsApiUpdateCategory
     */
    readonly id: string

    /**
     * 
     * @type {CategoryUpdateDto}
     * @memberof CatalogsApiUpdateCategory
     */
    readonly categoryUpdateDto: CategoryUpdateDto
}

/**
 * Request parameters for updateItem operation in CatalogsApi.
 * @export
 * @interface CatalogsApiUpdateItemRequest
 */
export interface CatalogsApiUpdateItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CatalogsApiUpdateItem
     */
    readonly id: string

    /**
     * 
     * @type {ItemUpdateDto}
     * @memberof CatalogsApiUpdateItem
     */
    readonly itemUpdateDto: ItemUpdateDto
}

/**
 * Request parameters for updateItems operation in CatalogsApi.
 * @export
 * @interface CatalogsApiUpdateItemsRequest
 */
export interface CatalogsApiUpdateItemsRequest {
    /**
     * 
     * @type {Array<ItemUpdateAllDto>}
     * @memberof CatalogsApiUpdateItems
     */
    readonly itemUpdateAllDto: Array<ItemUpdateAllDto>
}

/**
 * CatalogsApi - object-oriented interface
 * @export
 * @class CatalogsApi
 * @extends {BaseAPI}
 */
export class CatalogsApi extends BaseAPI {
    /**
     * 
     * @summary Get your Categories with Items, Variations, and ModifierLists
     * @param {CatalogsApiGetCatalogRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApi
     */
    public getCatalog(requestParameters: CatalogsApiGetCatalogRequest = {}, options?: AxiosRequestConfig) {
        return CatalogsApiFp(this.configuration).getCatalog(requestParameters.page, requestParameters.limit, requestParameters.locationId, requestParameters.items, requestParameters.variations, requestParameters.modifierLists, requestParameters.actingAs, requestParameters.merchantId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Item with ID
     * @param {CatalogsApiGetItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApi
     */
    public getItem(requestParameters: CatalogsApiGetItemRequest, options?: AxiosRequestConfig) {
        return CatalogsApiFp(this.configuration).getItem(requestParameters.id, requestParameters.locationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Items in Category
     * @param {CatalogsApiGetItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApi
     */
    public getItems(requestParameters: CatalogsApiGetItemsRequest, options?: AxiosRequestConfig) {
        return CatalogsApiFp(this.configuration).getItems(requestParameters.id, requestParameters.page, requestParameters.limit, requestParameters.locationId, requestParameters.actingAs, requestParameters.merchantId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update multiple Categories
     * @param {CatalogsApiUpdateCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApi
     */
    public updateCategories(requestParameters: CatalogsApiUpdateCategoriesRequest, options?: AxiosRequestConfig) {
        return CatalogsApiFp(this.configuration).updateCategories(requestParameters.categoryUpdateAllDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a Category
     * @param {CatalogsApiUpdateCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApi
     */
    public updateCategory(requestParameters: CatalogsApiUpdateCategoryRequest, options?: AxiosRequestConfig) {
        return CatalogsApiFp(this.configuration).updateCategory(requestParameters.id, requestParameters.categoryUpdateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an Item
     * @param {CatalogsApiUpdateItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApi
     */
    public updateItem(requestParameters: CatalogsApiUpdateItemRequest, options?: AxiosRequestConfig) {
        return CatalogsApiFp(this.configuration).updateItem(requestParameters.id, requestParameters.itemUpdateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update multiple Items
     * @param {CatalogsApiUpdateItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApi
     */
    public updateItems(requestParameters: CatalogsApiUpdateItemsRequest, options?: AxiosRequestConfig) {
        return CatalogsApiFp(this.configuration).updateItems(requestParameters.itemUpdateAllDto, options).then((request) => request(this.axios, this.basePath));
    }
}