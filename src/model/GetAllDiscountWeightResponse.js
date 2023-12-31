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
 * The GetAllDiscountWeightResponse model module.
 * @module model/GetAllDiscountWeightResponse
 * @version v1
 */
export class GetAllDiscountWeightResponse {
  /**
   * Constructs a new <code>GetAllDiscountWeightResponse</code>.
   * @alias module:model/GetAllDiscountWeightResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllDiscountWeightResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllDiscountWeightResponse} obj Optional instance to populate.
   * @return {module:model/GetAllDiscountWeightResponse} The populated <code>GetAllDiscountWeightResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllDiscountWeightResponse();
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
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('percent'))
        obj.percent = ApiClient.convertToType(data['percent'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
GetAllDiscountWeightResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllDiscountWeightResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllDiscountWeightResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllDiscountWeightResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
GetAllDiscountWeightResponse.prototype.id = undefined;

/**
 * @member {Number} quantity
 */
GetAllDiscountWeightResponse.prototype.quantity = undefined;

/**
 * @member {Number} percent
 */
GetAllDiscountWeightResponse.prototype.percent = undefined;

