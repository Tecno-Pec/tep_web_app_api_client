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
import {GetAllPagedProductLineResponse} from '../model/GetAllPagedProductLineResponse';
import {GetAllProductLineResponse} from '../model/GetAllProductLineResponse';
import {Operation} from '../model/Operation';
import {PostProductLineRequest} from '../model/PostProductLineRequest';
import {PostProductLineResponse} from '../model/PostProductLineResponse';
import {ProductLineStatus} from '../model/ProductLineStatus';
import {PutProductLineRequest} from '../model/PutProductLineRequest';

/**
* ProductLine service.
* @module api/ProductLineApi
* @version v1
*/
export class ProductLineApi {

    /**
    * Constructs a new ProductLineApi. 
    * @alias module:api/ProductLineApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getByIdProductLine operation.
     * @callback moduleapi/ProductLineApi~getByIdProductLineCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllProductLineResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ProductLine by id
     * @param {String} id ProductLine id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/ProductLineApi~getByIdProductLineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getByIdProductLine(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByIdProductLine");
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
      let returnType = GetAllProductLineResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/productLines/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1ProductLinesAllGet operation.
     * @callback moduleapi/ProductLineApi~tepsalesV1ProductLinesAllGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAllProductLineResponse>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All ProductLine by filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.externalCode 
     * @param {module:model/ProductLineStatus} opts.status 
     * @param {Number} opts.limit limit (default to <.>)
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/ProductLineApi~tepsalesV1ProductLinesAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1ProductLinesAllGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'name': opts['name'],'externalCode': opts['externalCode'],'status': opts['status'],'limit': opts['limit'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAllProductLineResponse];

      return this.apiClient.callApi(
        '/tepsales/v1/productLines/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1ProductLinesIdDelete operation.
     * @callback moduleapi/ProductLineApi~tepsalesV1ProductLinesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete ProductLine by Id
     * @param {String} id ProductLine id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/ProductLineApi~tepsalesV1ProductLinesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1ProductLinesIdDelete(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1ProductLinesIdDelete");
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
        '/tepsales/v1/productLines/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1ProductLinesIdPatch operation.
     * @callback moduleapi/ProductLineApi~tepsalesV1ProductLinesIdPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update part of ProductLine
     * Sample request:                    PATCH /tepsales/v1/ProductLine/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]
     * @param {Array.<module:model/Operation>} body Atributes values
     * @param {String} id ProductLine id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/ProductLineApi~tepsalesV1ProductLinesIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1ProductLinesIdPatch(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tepsalesV1ProductLinesIdPatch");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1ProductLinesIdPatch");
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
        '/tepsales/v1/productLines/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1ProductLinesIdPut operation.
     * @callback moduleapi/ProductLineApi~tepsalesV1ProductLinesIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update ProductLine
     * @param {String} id ProductLine Id
     * @param {Object} opts Optional parameters
     * @param {module:model/PutProductLineRequest} opts.body ProductLine to update
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/ProductLineApi~tepsalesV1ProductLinesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1ProductLinesIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1ProductLinesIdPut");
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
        '/tepsales/v1/productLines/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1ProductLinesPagedGet operation.
     * @callback moduleapi/ProductLineApi~tepsalesV1ProductLinesPagedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPagedProductLineResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All ProductLine by filter with pagination
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.externalCode 
     * @param {module:model/ProductLineStatus} opts.status 
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/ProductLineApi~tepsalesV1ProductLinesPagedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1ProductLinesPagedGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'name': opts['name'],'externalCode': opts['externalCode'],'status': opts['status'],'page': opts['page'],'pageSize': opts['pageSize'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllPagedProductLineResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/productLines/paged', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1ProductLinesPost operation.
     * @callback moduleapi/ProductLineApi~tepsalesV1ProductLinesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostProductLineResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create ProductLine
     * @param {Object} opts Optional parameters
     * @param {module:model/PostProductLineRequest} opts.body ProductLine to create
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/ProductLineApi~tepsalesV1ProductLinesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1ProductLinesPost(opts, callback) {
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
      let returnType = PostProductLineResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/productLines', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}