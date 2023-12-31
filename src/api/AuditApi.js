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
import {ActionType} from '../model/ActionType';
import {ErrorDetails} from '../model/ErrorDetails';
import {GetAllPagedAuditResponse} from '../model/GetAllPagedAuditResponse';

/**
* Audit service.
* @module api/AuditApi
* @version v1
*/
export class AuditApi {

    /**
    * Constructs a new AuditApi. 
    * @alias module:api/AuditApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the tepsalesV1AuditsGet operation.
     * @callback moduleapi/AuditApi~tepsalesV1AuditsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllPagedAuditResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Audit by filter with pagination
     * @param {Object} opts Optional parameters
     * @param {String} opts.parentId 
     * @param {String} opts.entity 
     * @param {module:model/ActionType} opts.action 
     * @param {Date} opts.startDate 
     * @param {Date} opts.endDate 
     * @param {String} opts.userCreated 
     * @param {String} opts.userUpdated 
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.sort Sorting atributes, sample: id.desc,name.asc (default to <.>)
     * @param {String} opts.xApiKey Your Api Key
     * @param {String} opts.xCsrfToken CSRF Protection (default to <.>)
     * @param {module:api/AuditApi~tepsalesV1AuditsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tepsalesV1AuditsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'parentId': opts['parentId'],'entity': opts['entity'],'action': opts['action'],'startDate': opts['startDate'],'endDate': opts['endDate'],'userCreated': opts['userCreated'],'userUpdated': opts['userUpdated'],'page': opts['page'],'pageSize': opts['pageSize'],'sort': opts['sort']
      };
      let headerParams = {
        'x-api-key': opts['xApiKey'],'x-csrf-token': opts['xCsrfToken']
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAllPagedAuditResponse;

      return this.apiClient.callApi(
        '/tepsales/v1/audits', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}