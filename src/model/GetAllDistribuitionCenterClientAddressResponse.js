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
import {DistribuitionCenterClientAddressStatus} from './DistribuitionCenterClientAddressStatus';

/**
 * The GetAllDistribuitionCenterClientAddressResponse model module.
 * @module model/GetAllDistribuitionCenterClientAddressResponse
 * @version v1
 */
export class GetAllDistribuitionCenterClientAddressResponse {
  /**
   * Constructs a new <code>GetAllDistribuitionCenterClientAddressResponse</code>.
   * @alias module:model/GetAllDistribuitionCenterClientAddressResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllDistribuitionCenterClientAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllDistribuitionCenterClientAddressResponse} obj Optional instance to populate.
   * @return {module:model/GetAllDistribuitionCenterClientAddressResponse} The populated <code>GetAllDistribuitionCenterClientAddressResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllDistribuitionCenterClientAddressResponse();
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
      if (data.hasOwnProperty('distribuitionCenterId'))
        obj.distribuitionCenterId = ApiClient.convertToType(data['distribuitionCenterId'], 'String');
      if (data.hasOwnProperty('addressId'))
        obj.addressId = ApiClient.convertToType(data['addressId'], 'String');
      if (data.hasOwnProperty('earthDistance'))
        obj.earthDistance = ApiClient.convertToType(data['earthDistance'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('externalCode'))
        obj.externalCode = ApiClient.convertToType(data['externalCode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = DistribuitionCenterClientAddressStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.id = undefined;

/**
 * @member {String} distribuitionCenterId
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.distribuitionCenterId = undefined;

/**
 * @member {String} addressId
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.addressId = undefined;

/**
 * @member {Number} earthDistance
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.earthDistance = undefined;

/**
 * @member {Number} distance
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.distance = undefined;

/**
 * @member {String} externalCode
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.externalCode = undefined;

/**
 * @member {module:model/DistribuitionCenterClientAddressStatus} status
 */
GetAllDistribuitionCenterClientAddressResponse.prototype.status = undefined;

