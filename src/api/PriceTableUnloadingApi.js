/*
 * Tep.Sales.Service API
 * Tep.Sales.Service API
 *
 * OpenAPI spec version: v1
 * Contact: admin@tecnoepec.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {ErrorDetails} from '../model/ErrorDetails';
import {GetAllPagedPriceTableUnloadingResponse} from '../model/GetAllPagedPriceTableUnloadingResponse';
import {GetAllPriceTableUnloadingResponse} from '../model/GetAllPriceTableUnloadingResponse';
import {Operation} from '../model/Operation';
import {PostPriceTableUnloadingRequest} from '../model/PostPriceTableUnloadingRequest';
import {PostPriceTableUnloadingResponse} from '../model/PostPriceTableUnloadingResponse';
import {PriceTableUnloadingStatus} from '../model/PriceTableUnloadingStatus';
import {PutPriceTableUnloadingRequest} from '../model/PutPriceTableUnloadingRequest';

/**
* PriceTableUnloading service.
* @module api/PriceTableUnloadingApi
* @version v1
*/
export class PriceTableUnloadingApi {

    /**
    * Constructs a new PriceTableUnloadingApi. 
    * @alias module:api/PriceTableUnloadingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getByIdPriceTableUnloading operation.
     * @callback moduleapi/PriceTableUnloadingApi~getByIdPriceTableUnloadingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPriceTableUnloadingResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get PriceTableUnloading by id
     * @param {String} id PriceTableUnloading id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PriceTableUnloadingApi~getByIdPriceTableUnloadingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getByIdPriceTableUnloading(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByIdPriceTableUnloading");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllPriceTableUnloadingResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/pricetableunloading/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PricetableunloadingAllGet operation.
     * @callback moduleapi/PriceTableUnloadingApi~tepsalesV1PricetableunloadingAllGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAllPriceTableUnloadingResponse>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All PriceTableUnloading by filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.productGroupId 
     * @param {String} opts.paymentConditionId 
     * @param {module:model/PriceTableUnloadingStatus} opts.status 
     * @param {String} opts.externalCode 
     * @param {Number} opts.limit limit (default to <.>)
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PriceTableUnloadingApi~tepsalesV1PricetableunloadingAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1PricetableunloadingAllGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'productGroupId': opts['productGroupId'],'paymentConditionId': opts['paymentConditionId'],'status': opts['status'],'externalCode': opts['externalCode'],'limit': opts['limit'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAllPriceTableUnloadingResponse];

      return this.apiClient.callApi(
        '/tepsales/v1/pricetableunloading/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PricetableunloadingIdDelete operation.
     * @callback moduleapi/PriceTableUnloadingApi~tepsalesV1PricetableunloadingIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete PriceTableUnloading by Id
     * @param {String} id PriceTableUnloading id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PriceTableUnloadingApi~tepsalesV1PricetableunloadingIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PricetableunloadingIdDelete(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PricetableunloadingIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/tepsales/v1/pricetableunloading/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PricetableunloadingIdPatch operation.
     * @callback moduleapi/PriceTableUnloadingApi~tepsalesV1PricetableunloadingIdPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update part of PriceTableUnloading
     * Sample request:                    PATCH /tepsales/v1/PriceTableUnloading/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]
     * @param {Array.<module:model/Operation>} body Atributes values
     * @param {String} id PriceTableUnloading id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PriceTableUnloadingApi~tepsalesV1PricetableunloadingIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PricetableunloadingIdPatch(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tepsalesV1PricetableunloadingIdPatch");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PricetableunloadingIdPatch");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/tepsales/v1/pricetableunloading/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PricetableunloadingIdPut operation.
     * @callback moduleapi/PriceTableUnloadingApi~tepsalesV1PricetableunloadingIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update PriceTableUnloading
     * @param {String} id PriceTableUnloading Id
     * @param {Object} opts Optional parameters
     * @param {module:model/PutPriceTableUnloadingRequest} opts.body PriceTableUnloading to update
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PriceTableUnloadingApi~tepsalesV1PricetableunloadingIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PricetableunloadingIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PricetableunloadingIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/tepsales/v1/pricetableunloading/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PricetableunloadingPagedGet operation.
     * @callback moduleapi/PriceTableUnloadingApi~tepsalesV1PricetableunloadingPagedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPagedPriceTableUnloadingResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All PriceTableUnloading by filter with pagination
     * @param {Object} opts Optional parameters
     * @param {String} opts.productGroupId 
     * @param {String} opts.paymentConditionId 
     * @param {module:model/PriceTableUnloadingStatus} opts.status 
     * @param {String} opts.externalCode 
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PriceTableUnloadingApi~tepsalesV1PricetableunloadingPagedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1PricetableunloadingPagedGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'productGroupId': opts['productGroupId'],'paymentConditionId': opts['paymentConditionId'],'status': opts['status'],'externalCode': opts['externalCode'],'page': opts['page'],'pageSize': opts['pageSize'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllPagedPriceTableUnloadingResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/pricetableunloading/paged', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PricetableunloadingPost operation.
     * @callback moduleapi/PriceTableUnloadingApi~tepsalesV1PricetableunloadingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostPriceTableUnloadingResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create PriceTableUnloading
     * @param {Object} opts Optional parameters
     * @param {module:model/PostPriceTableUnloadingRequest} opts.body PriceTableUnloading to create
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PriceTableUnloadingApi~tepsalesV1PricetableunloadingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1PricetableunloadingPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostPriceTableUnloadingResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/pricetableunloading', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}