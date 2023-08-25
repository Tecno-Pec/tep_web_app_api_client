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
import {GetAllCompanyGlobalParameterResponse} from '../model/GetAllCompanyGlobalParameterResponse';
import {GetAllPagedCompanyGlobalParameterResponse} from '../model/GetAllPagedCompanyGlobalParameterResponse';
import {Operation} from '../model/Operation';
import {PostCompanyGlobalParameterRequest} from '../model/PostCompanyGlobalParameterRequest';
import {PostCompanyGlobalParameterResponse} from '../model/PostCompanyGlobalParameterResponse';
import {PutCompanyGlobalParameterRequest} from '../model/PutCompanyGlobalParameterRequest';

/**
* CompanyGlobalParameter service.
* @module api/CompanyGlobalParameterApi
* @version v1
*/
export class CompanyGlobalParameterApi {

    /**
    * Constructs a new CompanyGlobalParameterApi. 
    * @alias module:api/CompanyGlobalParameterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getByIdCompanyGlobalParameter operation.
     * @callback moduleapi/CompanyGlobalParameterApi~getByIdCompanyGlobalParameterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllCompanyGlobalParameterResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get CompanyGlobalParameter by id
     * @param {String} id CompanyGlobalParameter id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/CompanyGlobalParameterApi~getByIdCompanyGlobalParameterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getByIdCompanyGlobalParameter(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByIdCompanyGlobalParameter");
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
      let returnType = GetAllCompanyGlobalParameterResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/companyglobalparameters/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1CompanyglobalparametersAllGet operation.
     * @callback moduleapi/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersAllGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAllCompanyGlobalParameterResponse>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All CompanyGlobalParameter by filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {Number} opts.limit limit (default to <.>)
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1CompanyglobalparametersAllGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'name': opts['name'],'limit': opts['limit'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAllCompanyGlobalParameterResponse];

      return this.apiClient.callApi(
        '/tepsales/v1/companyglobalparameters/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1CompanyglobalparametersIdDelete operation.
     * @callback moduleapi/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete CompanyGlobalParameter by Id
     * @param {String} id CompanyGlobalParameter id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1CompanyglobalparametersIdDelete(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1CompanyglobalparametersIdDelete");
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
        '/tepsales/v1/companyglobalparameters/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1CompanyglobalparametersIdPatch operation.
     * @callback moduleapi/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersIdPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update part of CompanyGlobalParameter
     * Sample request:                    PATCH /tepsales/v1/CompanyGlobalParameter/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]
     * @param {Array.<module:model/Operation>} body Atributes values
     * @param {String} id CompanyGlobalParameter id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1CompanyglobalparametersIdPatch(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tepsalesV1CompanyglobalparametersIdPatch");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1CompanyglobalparametersIdPatch");
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
        '/tepsales/v1/companyglobalparameters/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1CompanyglobalparametersIdPut operation.
     * @callback moduleapi/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update CompanyGlobalParameter
     * @param {String} id CompanyGlobalParameter Id
     * @param {Object} opts Optional parameters
     * @param {module:model/PutCompanyGlobalParameterRequest} opts.body CompanyGlobalParameter to update
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1CompanyglobalparametersIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1CompanyglobalparametersIdPut");
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
        '/tepsales/v1/companyglobalparameters/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1CompanyglobalparametersPagedGet operation.
     * @callback moduleapi/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersPagedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPagedCompanyGlobalParameterResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All CompanyGlobalParameter by filter with pagination
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersPagedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1CompanyglobalparametersPagedGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'name': opts['name'],'page': opts['page'],'pageSize': opts['pageSize'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllPagedCompanyGlobalParameterResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/companyglobalparameters/paged', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1CompanyglobalparametersPost operation.
     * @callback moduleapi/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCompanyGlobalParameterResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create CompanyGlobalParameter
     * @param {Object} opts Optional parameters
     * @param {module:model/PostCompanyGlobalParameterRequest} opts.body CompanyGlobalParameter to create
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/CompanyGlobalParameterApi~tepsalesV1CompanyglobalparametersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1CompanyglobalparametersPost(opts, callback) {
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
      let returnType = PostCompanyGlobalParameterResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/companyglobalparameters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}