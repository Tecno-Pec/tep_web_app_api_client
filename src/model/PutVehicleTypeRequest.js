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
import {VehicleTypeStatus} from './VehicleTypeStatus';

/**
 * The PutVehicleTypeRequest model module.
 * @module model/PutVehicleTypeRequest
 * @version v1
 */
export class PutVehicleTypeRequest {
  /**
   * Constructs a new <code>PutVehicleTypeRequest</code>.
   * @alias module:model/PutVehicleTypeRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PutVehicleTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutVehicleTypeRequest} obj Optional instance to populate.
   * @return {module:model/PutVehicleTypeRequest} The populated <code>PutVehicleTypeRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PutVehicleTypeRequest();
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
      if (data.hasOwnProperty('capacity'))
        obj.capacity = ApiClient.convertToType(data['capacity'], 'Number');
      if (data.hasOwnProperty('maxCapacity'))
        obj.maxCapacity = ApiClient.convertToType(data['maxCapacity'], 'Number');
      if (data.hasOwnProperty('externalCode'))
        obj.externalCode = ApiClient.convertToType(data['externalCode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = VehicleTypeStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PutVehicleTypeRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PutVehicleTypeRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PutVehicleTypeRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PutVehicleTypeRequest.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PutVehicleTypeRequest.prototype.id = undefined;

/**
 * @member {String} name
 */
PutVehicleTypeRequest.prototype.name = undefined;

/**
 * @member {Number} capacity
 */
PutVehicleTypeRequest.prototype.capacity = undefined;

/**
 * @member {Number} maxCapacity
 */
PutVehicleTypeRequest.prototype.maxCapacity = undefined;

/**
 * @member {String} externalCode
 */
PutVehicleTypeRequest.prototype.externalCode = undefined;

/**
 * @member {module:model/VehicleTypeStatus} status
 */
PutVehicleTypeRequest.prototype.status = undefined;

