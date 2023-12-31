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
import {GetAllPagedPurchaseOrderResponse} from '../model/GetAllPagedPurchaseOrderResponse';
import {GetAllPurchaseOrderResponse} from '../model/GetAllPurchaseOrderResponse';
import {Operation} from '../model/Operation';
import {PostCancelPurchaseOrderRequest} from '../model/PostCancelPurchaseOrderRequest';
import {PostPurchaseOrderRequest} from '../model/PostPurchaseOrderRequest';
import {PostPurchaseOrderResponse} from '../model/PostPurchaseOrderResponse';
import {PostRefusedPurchaseOrderRequest} from '../model/PostRefusedPurchaseOrderRequest';
import {PurchaseOrderStatus} from '../model/PurchaseOrderStatus';
import {PutPurchaseOrderRequest} from '../model/PutPurchaseOrderRequest';

/**
* PurchaseOrder service.
* @module api/PurchaseOrderApi
* @version v1
*/
export class PurchaseOrderApi {

    /**
    * Constructs a new PurchaseOrderApi. 
    * @alias module:api/PurchaseOrderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getByIdPurchaseOrder operation.
     * @callback moduleapi/PurchaseOrderApi~getByIdPurchaseOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPurchaseOrderResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get PurchaseOrder by id
     * @param {String} id PurchaseOrder id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~getByIdPurchaseOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getByIdPurchaseOrder(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getByIdPurchaseOrder");
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
      let returnType = GetAllPurchaseOrderResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/purchaseorders/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersAllGet operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersAllGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAllPurchaseOrderResponse>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All PurchaseOrder by filter
     * @param {Object} opts Optional parameters
     * @param {module:model/PurchaseOrderStatus} opts.status 
     * @param {String} opts.clientName 
     * @param {String} opts.clientDocument 
     * @param {String} opts.clientId 
     * @param {Number} opts.dateRange 
     * @param {String} opts.userCreatedId 
     * @param {Number} opts.limit limit (default to <.>)
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1PurchaseordersAllGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'status': opts['status'],'clientName': opts['clientName'],'clientDocument': opts['clientDocument'],'clientId': opts['clientId'],'dateRange': opts['dateRange'],'userCreatedId': opts['userCreatedId'],'limit': opts['limit'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAllPurchaseOrderResponse];

      return this.apiClient.callApi(
        '/tepsales/v1/purchaseorders/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersIdApprovePost operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersIdApprovePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve PurchaseOrder
     * @param {String} id PurchaseOrder Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersIdApprovePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PurchaseordersIdApprovePost(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PurchaseordersIdApprovePost");
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
        '/tepsales/v1/purchaseorders/{id}/approve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersIdCancelPost operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel PurchaseOrder
     * @param {String} id PurchaseOrder Id
     * @param {Object} opts Optional parameters
     * @param {module:model/PostCancelPurchaseOrderRequest} opts.body PostCancelPurchaseOrderRequest
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PurchaseordersIdCancelPost(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PurchaseordersIdCancelPost");
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
        '/tepsales/v1/purchaseorders/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersIdDelete operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete PurchaseOrder by Id
     * @param {String} id PurchaseOrder id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PurchaseordersIdDelete(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PurchaseordersIdDelete");
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
        '/tepsales/v1/purchaseorders/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersIdPatch operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersIdPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update part of PurchaseOrder
     * Sample request:                    PATCH /tepsales/v1/PurchaseOrder/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]
     * @param {Array.<module:model/Operation>} body Atributes values
     * @param {String} id PurchaseOrder id
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PurchaseordersIdPatch(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tepsalesV1PurchaseordersIdPatch");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PurchaseordersIdPatch");
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
        '/tepsales/v1/purchaseorders/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersIdPut operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update PurchaseOrder
     * @param {String} id PurchaseOrder Id
     * @param {Object} opts Optional parameters
     * @param {module:model/PutPurchaseOrderRequest} opts.body PurchaseOrder to update
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PurchaseordersIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PurchaseordersIdPut");
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
        '/tepsales/v1/purchaseorders/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersIdRefusedPost operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersIdRefusedPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refused PurchaseOrder
     * @param {String} id PurchaseOrder Id
     * @param {Object} opts Optional parameters
     * @param {module:model/PostRefusedPurchaseOrderRequest} opts.body Post Refused PurchaseOrderRequest
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersIdRefusedPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PurchaseordersIdRefusedPost(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PurchaseordersIdRefusedPost");
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
        '/tepsales/v1/purchaseorders/{id}/refused', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersIdSendtoapprovePost operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersIdSendtoapprovePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * SendToApprove PurchaseOrder
     * @param {String} id PurchaseOrder Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.areaManagerCode Area Manager Code
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersIdSendtoapprovePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tepsalesV1PurchaseordersIdSendtoapprovePost(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tepsalesV1PurchaseordersIdSendtoapprovePost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'areaManagerCode': opts['areaManagerCode']
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
        '/tepsales/v1/purchaseorders/{id}/sendtoapprove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersPagedGet operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersPagedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPagedPurchaseOrderResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All PurchaseOrder by filter with pagination
     * @param {Object} opts Optional parameters
     * @param {module:model/PurchaseOrderStatus} opts.status 
     * @param {String} opts.clientName 
     * @param {String} opts.clientDocument 
     * @param {String} opts.clientId 
     * @param {Number} opts.dateRange 
     * @param {String} opts.userCreatedId 
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersPagedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1PurchaseordersPagedGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'status': opts['status'],'clientName': opts['clientName'],'clientDocument': opts['clientDocument'],'clientId': opts['clientId'],'dateRange': opts['dateRange'],'userCreatedId': opts['userCreatedId'],'page': opts['page'],'pageSize': opts['pageSize'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllPagedPurchaseOrderResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/purchaseorders/paged', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tepsalesV1PurchaseordersPost operation.
     * @callback moduleapi/PurchaseOrderApi~tepsalesV1PurchaseordersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostPurchaseOrderResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create PurchaseOrder
     * @param {Object} opts Optional parameters
     * @param {module:model/PostPurchaseOrderRequest} opts.body PurchaseOrder to create
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/PurchaseOrderApi~tepsalesV1PurchaseordersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1PurchaseordersPost(opts, callback) {
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
      let returnType = PostPurchaseOrderResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/purchaseorders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}