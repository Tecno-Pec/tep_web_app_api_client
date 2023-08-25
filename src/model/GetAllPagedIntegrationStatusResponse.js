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
import {ApiClient} from '../ApiClient';
import {GetAllIntegrationStatusResponse} from './GetAllIntegrationStatusResponse';

/**
 * The GetAllPagedIntegrationStatusResponse model module.
 * @module model/GetAllPagedIntegrationStatusResponse
 * @version v1
 */
export class GetAllPagedIntegrationStatusResponse {
  /**
   * Constructs a new <code>GetAllPagedIntegrationStatusResponse</code>.
   * @alias module:model/GetAllPagedIntegrationStatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllPagedIntegrationStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllPagedIntegrationStatusResponse} obj Optional instance to populate.
   * @return {module:model/GetAllPagedIntegrationStatusResponse} The populated <code>GetAllPagedIntegrationStatusResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllPagedIntegrationStatusResponse();
      if (data.hasOwnProperty('currentPage'))
        obj.currentPage = ApiClient.convertToType(data['currentPage'], 'Number');
      if (data.hasOwnProperty('pageCount'))
        obj.pageCount = ApiClient.convertToType(data['pageCount'], 'Number');
      if (data.hasOwnProperty('pageSize'))
        obj.pageSize = ApiClient.convertToType(data['pageSize'], 'Number');
      if (data.hasOwnProperty('rowCount'))
        obj.rowCount = ApiClient.convertToType(data['rowCount'], 'Number');
      if (data.hasOwnProperty('firstRowOnPage'))
        obj.firstRowOnPage = ApiClient.convertToType(data['firstRowOnPage'], 'Number');
      if (data.hasOwnProperty('lastRowOnPage'))
        obj.lastRowOnPage = ApiClient.convertToType(data['lastRowOnPage'], 'Number');
      if (data.hasOwnProperty('results'))
        obj.results = ApiClient.convertToType(data['results'], [GetAllIntegrationStatusResponse]);
    }
    return obj;
  }
}

/**
 * @member {Number} currentPage
 */
GetAllPagedIntegrationStatusResponse.prototype.currentPage = undefined;

/**
 * @member {Number} pageCount
 */
GetAllPagedIntegrationStatusResponse.prototype.pageCount = undefined;

/**
 * @member {Number} pageSize
 */
GetAllPagedIntegrationStatusResponse.prototype.pageSize = undefined;

/**
 * @member {Number} rowCount
 */
GetAllPagedIntegrationStatusResponse.prototype.rowCount = undefined;

/**
 * @member {Number} firstRowOnPage
 */
GetAllPagedIntegrationStatusResponse.prototype.firstRowOnPage = undefined;

/**
 * @member {Number} lastRowOnPage
 */
GetAllPagedIntegrationStatusResponse.prototype.lastRowOnPage = undefined;

/**
 * @member {Array.<module:model/GetAllIntegrationStatusResponse>} results
 */
GetAllPagedIntegrationStatusResponse.prototype.results = undefined;

