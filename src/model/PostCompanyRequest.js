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
 * The PostCompanyRequest model module.
 * @module model/PostCompanyRequest
 * @version v1
 */
export class PostCompanyRequest {
  /**
   * Constructs a new <code>PostCompanyRequest</code>.
   * @alias module:model/PostCompanyRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostCompanyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCompanyRequest} obj Optional instance to populate.
   * @return {module:model/PostCompanyRequest} The populated <code>PostCompanyRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostCompanyRequest();
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
PostCompanyRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostCompanyRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostCompanyRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostCompanyRequest.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PostCompanyRequest.prototype.id = undefined;

/**
 * @member {String} name
 */
PostCompanyRequest.prototype.name = undefined;

/**
 * @member {String} document
 */
PostCompanyRequest.prototype.document = undefined;

