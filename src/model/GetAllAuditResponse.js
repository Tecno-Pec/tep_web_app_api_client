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
import {ActionType} from './ActionType';

/**
 * The GetAllAuditResponse model module.
 * @module model/GetAllAuditResponse
 * @version v1
 */
export class GetAllAuditResponse {
  /**
   * Constructs a new <code>GetAllAuditResponse</code>.
   * @alias module:model/GetAllAuditResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllAuditResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllAuditResponse} obj Optional instance to populate.
   * @return {module:model/GetAllAuditResponse} The populated <code>GetAllAuditResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllAuditResponse();
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('parentId'))
        obj.parentId = ApiClient.convertToType(data['parentId'], 'String');
      if (data.hasOwnProperty('entity'))
        obj.entity = ApiClient.convertToType(data['entity'], 'String');
      if (data.hasOwnProperty('action'))
        obj.action = ActionType.constructFromObject(data['action']);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
GetAllAuditResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllAuditResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllAuditResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllAuditResponse.prototype.userUpdated = undefined;

/**
 * @member {String} parentId
 */
GetAllAuditResponse.prototype.parentId = undefined;

/**
 * @member {String} entity
 */
GetAllAuditResponse.prototype.entity = undefined;

/**
 * @member {module:model/ActionType} action
 */
GetAllAuditResponse.prototype.action = undefined;

/**
 * @member {String} data
 */
GetAllAuditResponse.prototype.data = undefined;

/**
 * @member {String} id
 */
GetAllAuditResponse.prototype.id = undefined;

