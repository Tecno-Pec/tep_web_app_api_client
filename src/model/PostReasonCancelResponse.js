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
import {ReasonCancelStatus} from './ReasonCancelStatus';

/**
 * The PostReasonCancelResponse model module.
 * @module model/PostReasonCancelResponse
 * @version v1
 */
export class PostReasonCancelResponse {
  /**
   * Constructs a new <code>PostReasonCancelResponse</code>.
   * @alias module:model/PostReasonCancelResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostReasonCancelResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostReasonCancelResponse} obj Optional instance to populate.
   * @return {module:model/PostReasonCancelResponse} The populated <code>PostReasonCancelResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostReasonCancelResponse();
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
        obj.status = ReasonCancelStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostReasonCancelResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostReasonCancelResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostReasonCancelResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostReasonCancelResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PostReasonCancelResponse.prototype.id = undefined;

/**
 * @member {String} name
 */
PostReasonCancelResponse.prototype.name = undefined;

/**
 * @member {String} description
 */
PostReasonCancelResponse.prototype.description = undefined;

/**
 * @member {String} externalCode
 */
PostReasonCancelResponse.prototype.externalCode = undefined;

/**
 * @member {module:model/ReasonCancelStatus} status
 */
PostReasonCancelResponse.prototype.status = undefined;

