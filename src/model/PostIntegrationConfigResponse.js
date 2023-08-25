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
import {DatabaseCollector} from './DatabaseCollector';

/**
 * The PostIntegrationConfigResponse model module.
 * @module model/PostIntegrationConfigResponse
 * @version v1
 */
export class PostIntegrationConfigResponse {
  /**
   * Constructs a new <code>PostIntegrationConfigResponse</code>.
   * @alias module:model/PostIntegrationConfigResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostIntegrationConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostIntegrationConfigResponse} obj Optional instance to populate.
   * @return {module:model/PostIntegrationConfigResponse} The populated <code>PostIntegrationConfigResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostIntegrationConfigResponse();
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
      if (data.hasOwnProperty('timerQueriesCollector'))
        obj.timerQueriesCollector = ApiClient.convertToType(data['timerQueriesCollector'], 'Number');
      if (data.hasOwnProperty('databaseCollector'))
        obj.databaseCollector = DatabaseCollector.constructFromObject(data['databaseCollector']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostIntegrationConfigResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostIntegrationConfigResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostIntegrationConfigResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostIntegrationConfigResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PostIntegrationConfigResponse.prototype.id = undefined;

/**
 * @member {Number} timerQueriesCollector
 */
PostIntegrationConfigResponse.prototype.timerQueriesCollector = undefined;

/**
 * @member {module:model/DatabaseCollector} databaseCollector
 */
PostIntegrationConfigResponse.prototype.databaseCollector = undefined;

