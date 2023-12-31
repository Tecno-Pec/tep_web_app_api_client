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
import {ProductLineStatus} from './ProductLineStatus';

/**
 * The GetAllProductLineResponse model module.
 * @module model/GetAllProductLineResponse
 * @version v1
 */
export class GetAllProductLineResponse {
  /**
   * Constructs a new <code>GetAllProductLineResponse</code>.
   * @alias module:model/GetAllProductLineResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllProductLineResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllProductLineResponse} obj Optional instance to populate.
   * @return {module:model/GetAllProductLineResponse} The populated <code>GetAllProductLineResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllProductLineResponse();
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
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('externalCode'))
        obj.externalCode = ApiClient.convertToType(data['externalCode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ProductLineStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
GetAllProductLineResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllProductLineResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllProductLineResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllProductLineResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
GetAllProductLineResponse.prototype.id = undefined;

/**
 * @member {String} name
 */
GetAllProductLineResponse.prototype.name = undefined;

/**
 * @member {String} description
 */
GetAllProductLineResponse.prototype.description = undefined;

/**
 * @member {String} externalCode
 */
GetAllProductLineResponse.prototype.externalCode = undefined;

/**
 * @member {module:model/ProductLineStatus} status
 */
GetAllProductLineResponse.prototype.status = undefined;

