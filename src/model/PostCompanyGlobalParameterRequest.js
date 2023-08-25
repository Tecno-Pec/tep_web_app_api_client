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
 * The PostCompanyGlobalParameterRequest model module.
 * @module model/PostCompanyGlobalParameterRequest
 * @version v1
 */
export class PostCompanyGlobalParameterRequest {
  /**
   * Constructs a new <code>PostCompanyGlobalParameterRequest</code>.
   * @alias module:model/PostCompanyGlobalParameterRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostCompanyGlobalParameterRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCompanyGlobalParameterRequest} obj Optional instance to populate.
   * @return {module:model/PostCompanyGlobalParameterRequest} The populated <code>PostCompanyGlobalParameterRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostCompanyGlobalParameterRequest();
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
PostCompanyGlobalParameterRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostCompanyGlobalParameterRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostCompanyGlobalParameterRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostCompanyGlobalParameterRequest.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PostCompanyGlobalParameterRequest.prototype.id = undefined;

/**
 * @member {String} name
 */
PostCompanyGlobalParameterRequest.prototype.name = undefined;

/**
 * @member {String} companyId
 */
PostCompanyGlobalParameterRequest.prototype.companyId = undefined;

/**
 * @member {Boolean} discountRuleByBudget
 */
PostCompanyGlobalParameterRequest.prototype.discountRuleByBudget = undefined;

