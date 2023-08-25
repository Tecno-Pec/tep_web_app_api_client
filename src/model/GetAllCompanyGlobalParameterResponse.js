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

/**
 * The GetAllCompanyGlobalParameterResponse model module.
 * @module model/GetAllCompanyGlobalParameterResponse
 * @version v1
 */
export class GetAllCompanyGlobalParameterResponse {
  /**
   * Constructs a new <code>GetAllCompanyGlobalParameterResponse</code>.
   * @alias module:model/GetAllCompanyGlobalParameterResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllCompanyGlobalParameterResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllCompanyGlobalParameterResponse} obj Optional instance to populate.
   * @return {module:model/GetAllCompanyGlobalParameterResponse} The populated <code>GetAllCompanyGlobalParameterResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllCompanyGlobalParameterResponse();
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (data.hasOwnProperty('discountRuleByBudget'))
        obj.discountRuleByBudget = ApiClient.convertToType(data['discountRuleByBudget'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
GetAllCompanyGlobalParameterResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllCompanyGlobalParameterResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllCompanyGlobalParameterResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllCompanyGlobalParameterResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
GetAllCompanyGlobalParameterResponse.prototype.id = undefined;

/**
 * @member {String} name
 */
GetAllCompanyGlobalParameterResponse.prototype.name = undefined;

/**
 * @member {String} companyId
 */
GetAllCompanyGlobalParameterResponse.prototype.companyId = undefined;

/**
 * @member {Boolean} discountRuleByBudget
 */
GetAllCompanyGlobalParameterResponse.prototype.discountRuleByBudget = undefined;

