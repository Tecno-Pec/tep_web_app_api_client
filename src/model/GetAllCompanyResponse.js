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
 * The GetAllCompanyResponse model module.
 * @module model/GetAllCompanyResponse
 * @version v1
 */
export class GetAllCompanyResponse {
  /**
   * Constructs a new <code>GetAllCompanyResponse</code>.
   * @alias module:model/GetAllCompanyResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllCompanyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllCompanyResponse} obj Optional instance to populate.
   * @return {module:model/GetAllCompanyResponse} The populated <code>GetAllCompanyResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllCompanyResponse();
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
      if (data.hasOwnProperty('document'))
        obj.document = ApiClient.convertToType(data['document'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
GetAllCompanyResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllCompanyResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllCompanyResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllCompanyResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
GetAllCompanyResponse.prototype.id = undefined;

/**
 * @member {String} name
 */
GetAllCompanyResponse.prototype.name = undefined;

/**
 * @member {String} document
 */
GetAllCompanyResponse.prototype.document = undefined;

