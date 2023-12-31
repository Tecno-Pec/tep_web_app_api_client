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
import {GetAllAddressResponse} from './GetAllAddressResponse';

/**
 * The PostDistribuitionCenterResponse model module.
 * @module model/PostDistribuitionCenterResponse
 * @version v1
 */
export class PostDistribuitionCenterResponse {
  /**
   * Constructs a new <code>PostDistribuitionCenterResponse</code>.
   * @alias module:model/PostDistribuitionCenterResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostDistribuitionCenterResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostDistribuitionCenterResponse} obj Optional instance to populate.
   * @return {module:model/PostDistribuitionCenterResponse} The populated <code>PostDistribuitionCenterResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostDistribuitionCenterResponse();
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
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('ie'))
        obj.ie = ApiClient.convertToType(data['ie'], 'String');
      if (data.hasOwnProperty('externalCode'))
        obj.externalCode = ApiClient.convertToType(data['externalCode'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = GetAllAddressResponse.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostDistribuitionCenterResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostDistribuitionCenterResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostDistribuitionCenterResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostDistribuitionCenterResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PostDistribuitionCenterResponse.prototype.id = undefined;

/**
 * @member {String} name
 */
PostDistribuitionCenterResponse.prototype.name = undefined;

/**
 * @member {String} document
 */
PostDistribuitionCenterResponse.prototype.document = undefined;

/**
 * @member {String} phone
 */
PostDistribuitionCenterResponse.prototype.phone = undefined;

/**
 * @member {String} email
 */
PostDistribuitionCenterResponse.prototype.email = undefined;

/**
 * @member {String} ie
 */
PostDistribuitionCenterResponse.prototype.ie = undefined;

/**
 * @member {String} externalCode
 */
PostDistribuitionCenterResponse.prototype.externalCode = undefined;

/**
 * @member {module:model/GetAllAddressResponse} address
 */
PostDistribuitionCenterResponse.prototype.address = undefined;

