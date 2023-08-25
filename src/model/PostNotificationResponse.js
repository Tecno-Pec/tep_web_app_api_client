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
import {NotificationChannel} from './NotificationChannel';
import {NotificationType} from './NotificationType';
import {User} from './User';

/**
 * The PostNotificationResponse model module.
 * @module model/PostNotificationResponse
 * @version v1
 */
export class PostNotificationResponse {
  /**
   * Constructs a new <code>PostNotificationResponse</code>.
   * @alias module:model/PostNotificationResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostNotificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostNotificationResponse} obj Optional instance to populate.
   * @return {module:model/PostNotificationResponse} The populated <code>PostNotificationResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostNotificationResponse();
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('userCreated'))
        obj.userCreated = ApiClient.convertToType(data['userCreated'], 'String');
      if (data.hasOwnProperty('userUpdated'))
        obj.userUpdated = ApiClient.convertToType(data['userUpdated'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = NotificationType.constructFromObject(data['type']);
      if (data.hasOwnProperty('channels'))
        obj.channels = ApiClient.convertToType(data['channels'], [NotificationChannel]);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], {'String': 'String'});
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostNotificationResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostNotificationResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostNotificationResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostNotificationResponse.prototype.userUpdated = undefined;

/**
 * @member {String} message
 */
PostNotificationResponse.prototype.message = undefined;

/**
 * @member {module:model/NotificationType} type
 */
PostNotificationResponse.prototype.type = undefined;

/**
 * @member {Array.<module:model/NotificationChannel>} channels
 */
PostNotificationResponse.prototype.channels = undefined;

/**
 * @member {Object.<String, String>} attributes
 */
PostNotificationResponse.prototype.attributes = undefined;

/**
 * @member {module:model/User} user
 */
PostNotificationResponse.prototype.user = undefined;

/**
 * @member {String} id
 */
PostNotificationResponse.prototype.id = undefined;

