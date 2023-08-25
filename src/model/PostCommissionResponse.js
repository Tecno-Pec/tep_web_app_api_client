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
import {CommissionStatus} from './CommissionStatus';

/**
 * The PostCommissionResponse model module.
 * @module model/PostCommissionResponse
 * @version v1
 */
export class PostCommissionResponse {
  /**
   * Constructs a new <code>PostCommissionResponse</code>.
   * @alias module:model/PostCommissionResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostCommissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCommissionResponse} obj Optional instance to populate.
   * @return {module:model/PostCommissionResponse} The populated <code>PostCommissionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostCommissionResponse();
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
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('productId'))
        obj.productId = ApiClient.convertToType(data['productId'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('externalCode'))
        obj.externalCode = ApiClient.convertToType(data['externalCode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = CommissionStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostCommissionResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostCommissionResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostCommissionResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostCommissionResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PostCommissionResponse.prototype.id = undefined;

/**
 * @member {String} userId
 */
PostCommissionResponse.prototype.userId = undefined;

/**
 * @member {String} productId
 */
PostCommissionResponse.prototype.productId = undefined;

/**
 * @member {Number} value
 */
PostCommissionResponse.prototype.value = undefined;

/**
 * @member {String} externalCode
 */
PostCommissionResponse.prototype.externalCode = undefined;

/**
 * @member {module:model/CommissionStatus} status
 */
PostCommissionResponse.prototype.status = undefined;

