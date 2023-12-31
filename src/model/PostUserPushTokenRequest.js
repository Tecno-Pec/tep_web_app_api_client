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
 * The PostUserPushTokenRequest model module.
 * @module model/PostUserPushTokenRequest
 * @version v1
 */
export class PostUserPushTokenRequest {
  /**
   * Constructs a new <code>PostUserPushTokenRequest</code>.
   * @alias module:model/PostUserPushTokenRequest
   * @class
   * @param token {String} 
   * @param deviceId {String} 
   */
  constructor(token, deviceId) {
    this.token = token;
    this.deviceId = deviceId;
  }

  /**
   * Constructs a <code>PostUserPushTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostUserPushTokenRequest} obj Optional instance to populate.
   * @return {module:model/PostUserPushTokenRequest} The populated <code>PostUserPushTokenRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostUserPushTokenRequest();
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (data.hasOwnProperty('osVersion'))
        obj.osVersion = ApiClient.convertToType(data['osVersion'], 'String');
      if (data.hasOwnProperty('deviceName'))
        obj.deviceName = ApiClient.convertToType(data['deviceName'], 'String');
      if (data.hasOwnProperty('deviceModel'))
        obj.deviceModel = ApiClient.convertToType(data['deviceModel'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} token
 */
PostUserPushTokenRequest.prototype.token = undefined;

/**
 * @member {String} deviceId
 */
PostUserPushTokenRequest.prototype.deviceId = undefined;

/**
 * @member {String} osVersion
 */
PostUserPushTokenRequest.prototype.osVersion = undefined;

/**
 * @member {String} deviceName
 */
PostUserPushTokenRequest.prototype.deviceName = undefined;

/**
 * @member {String} deviceModel
 */
PostUserPushTokenRequest.prototype.deviceModel = undefined;

