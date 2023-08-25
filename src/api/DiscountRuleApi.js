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
import {DiscountRuleStatus} from '../model/DiscountRuleStatus';
import {DiscountTypeEnum} from '../model/DiscountTypeEnum';
import {DiscountWeightTypeEnum} from '../model/DiscountWeightTypeEnum';
import {ErrorDetails} from '../model/ErrorDetails';
import {GetAllDiscountRuleResponse} from '../model/GetAllDiscountRuleResponse';
import {GetAllPagedDiscountRuleResponse} from '../model/GetAllPagedDiscountRuleResponse';
import {Operation} from '../model/Operation';
import {PostDiscountRuleRequest} from '../model/PostDiscountRuleRequest';
import {PostDiscountRuleResponse} from '../model/PostDiscountRuleResponse';
import {PutDiscountRuleRequest} from '../model/PutDiscountRuleRequest';
import {ReferenceTypeEnum} from '../model/ReferenceTypeEnum';

/**
* DiscountRule service.
* @module api/DiscountRuleApi
* @version v1
*/
export class DiscountRuleApi {

    /**
    * Constructs a new DiscountRuleApi. 
    * @alias module:api/DiscountRuleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getByIdDiscountRule operation.
     * @callback moduleapi/DiscountRuleApi~getByIdDiscountRuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllDiscountRuleResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get DiscountRule by id
     * @param {String} id DiscountRule id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/DiscountRuleApi~getByIdDiscountRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getByIdDiscountRule(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByIdDiscountRule");
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
      let returnType = GetAllDiscountRuleResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/discountRules/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1DiscountRulesAllGet operation.
     * @callback moduleapi/DiscountRuleApi~tepsalesV1DiscountRulesAllGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAllDiscountRuleResponse>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All DiscountRule by filter
     * @param {Object} opts Optional parameters
     * @param {module:model/DiscountWeightTypeEnum} opts.discountWeightType 
     * @param {module:model/DiscountTypeEnum} opts.discountType 
     * @param {module:model/ReferenceTypeEnum} opts.referenceType 
     * @param {String} opts.referenceId 
     * @param {String} opts.externalCode 
     * @param {module:model/DiscountRuleStatus} opts.status 
     * @param {Number} opts.limit limit (default to <.>)
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/DiscountRuleApi~tepsalesV1DiscountRulesAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1DiscountRulesAllGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'discountWeightType': opts['discountWeightType'],'discountType': opts['discountType'],'referenceType': opts['referenceType'],'referenceId': opts['referenceId'],'externalCode': opts['externalCode'],'status': opts['status'],'limit': opts['limit'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAllDiscountRuleResponse];

      return this.apiClient.callApi(
        '/tepsales/v1/discountRules/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1DiscountRulesIdDelete operation.
     * @callback moduleapi/DiscountRuleApi~tepsalesV1DiscountRulesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete DiscountRule by Id
     * @param {String} id DiscountRule id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/DiscountRuleApi~tepsalesV1DiscountRulesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1DiscountRulesIdDelete(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1DiscountRulesIdDelete");
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
        '/tepsales/v1/discountRules/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1DiscountRulesIdPatch operation.
     * @callback moduleapi/DiscountRuleApi~tepsalesV1DiscountRulesIdPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update part of DiscountRule
     * Sample request:                    PATCH /tepsales/v1/DiscountRule/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]
     * @param {Array.<module:model/Operation>} body Atributes values
     * @param {String} id DiscountRule id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/DiscountRuleApi~tepsalesV1DiscountRulesIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1DiscountRulesIdPatch(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tepsalesV1DiscountRulesIdPatch");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1DiscountRulesIdPatch");
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
        '/tepsales/v1/discountRules/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1DiscountRulesIdPut operation.
     * @callback moduleapi/DiscountRuleApi~tepsalesV1DiscountRulesIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update DiscountRule
     * @param {String} id DiscountRule Id
     * @param {Object} opts Optional parameters
     * @param {module:model/PutDiscountRuleRequest} opts.body DiscountRule to update
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/DiscountRuleApi~tepsalesV1DiscountRulesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1DiscountRulesIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1DiscountRulesIdPut");
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
        '/tepsales/v1/discountRules/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1DiscountRulesPagedGet operation.
     * @callback moduleapi/DiscountRuleApi~tepsalesV1DiscountRulesPagedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPagedDiscountRuleResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All DiscountRule by filter with pagination
     * @param {Object} opts Optional parameters
     * @param {module:model/DiscountWeightTypeEnum} opts.discountWeightType 
     * @param {module:model/DiscountTypeEnum} opts.discountType 
     * @param {module:model/ReferenceTypeEnum} opts.referenceType 
     * @param {String} opts.referenceId 
     * @param {String} opts.externalCode 
     * @param {module:model/DiscountRuleStatus} opts.status 
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/DiscountRuleApi~tepsalesV1DiscountRulesPagedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1DiscountRulesPagedGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'discountWeightType': opts['discountWeightType'],'discountType': opts['discountType'],'referenceType': opts['referenceType'],'referenceId': opts['referenceId'],'externalCode': opts['externalCode'],'status': opts['status'],'page': opts['page'],'pageSize': opts['pageSize'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllPagedDiscountRuleResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/discountRules/paged', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1DiscountRulesPost operation.
     * @callback moduleapi/DiscountRuleApi~tepsalesV1DiscountRulesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostDiscountRuleResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create DiscountRule
     * @param {Object} opts Optional parameters
     * @param {module:model/PostDiscountRuleRequest} opts.body DiscountRule to create
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/DiscountRuleApi~tepsalesV1DiscountRulesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1DiscountRulesPost(opts, callback) {
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
      let returnType = PostDiscountRuleResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/discountRules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}