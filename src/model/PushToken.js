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
import {DocumentVersion} from './DocumentVersion';
import {PushTokenStatus} from './PushTokenStatus';

/**
 * The PushToken model module.
 * @module model/PushToken
 * @version v1
 */
export class PushToken {
  /**
   * Constructs a new <code>PushToken</code>.
   * @alias module:model/PushToken
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PushToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushToken} obj Optional instance to populate.
   * @return {module:model/PushToken} The populated <code>PushToken</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PushToken();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = DocumentVersion.constructFromObject(data['version']);
      if (data.hasOwnProperty('companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (data.hasOwnProperty('deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('osVersion'))
        obj.osVersion = ApiClient.convertToType(data['osVersion'], 'String');
      if (data.hasOwnProperty('deviceName'))
        obj.deviceName = ApiClient.convertToType(data['deviceName'], 'String');
      if (data.hasOwnProperty('deviceModel'))
        obj.deviceModel = ApiClient.convertToType(data['deviceModel'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = PushTokenStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
PushToken.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
PushToken.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PushToken.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PushToken.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PushToken.prototype.userUpdated = undefined;

/**
 * @member {module:model/DocumentVersion} version
 */
PushToken.prototype.version = undefined;

/**
 * @member {String} companyId
 */
PushToken.prototype.companyId = undefined;

/**
 * @member {String} deviceId
 */
PushToken.prototype.deviceId = undefined;

/**
 * @member {String} token
 */
PushToken.prototype.token = undefined;

/**
 * @member {String} osVersion
 */
PushToken.prototype.osVersion = undefined;

/**
 * @member {String} deviceName
 */
PushToken.prototype.deviceName = undefined;

/**
 * @member {String} deviceModel
 */
PushToken.prototype.deviceModel = undefined;

/**
 * @member {module:model/PushTokenStatus} status
 */
PushToken.prototype.status = undefined;

