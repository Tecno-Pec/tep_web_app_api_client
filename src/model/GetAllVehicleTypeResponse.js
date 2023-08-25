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
 * The GetAllVehicleTypeResponse model module.
 * @module model/GetAllVehicleTypeResponse
 * @version v1
 */
export class GetAllVehicleTypeResponse {
  /**
   * Constructs a new <code>GetAllVehicleTypeResponse</code>.
   * @alias module:model/GetAllVehicleTypeResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllVehicleTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllVehicleTypeResponse} obj Optional instance to populate.
   * @return {module:model/GetAllVehicleTypeResponse} The populated <code>GetAllVehicleTypeResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllVehicleTypeResponse();
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
GetAllVehicleTypeResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllVehicleTypeResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllVehicleTypeResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllVehicleTypeResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
GetAllVehicleTypeResponse.prototype.id = undefined;

/**
 * @member {String} name
 */
GetAllVehicleTypeResponse.prototype.name = undefined;

/**
 * @member {Number} capacity
 */
GetAllVehicleTypeResponse.prototype.capacity = undefined;

/**
 * @member {Number} maxCapacity
 */
GetAllVehicleTypeResponse.prototype.maxCapacity = undefined;

/**
 * @member {String} externalCode
 */
GetAllVehicleTypeResponse.prototype.externalCode = undefined;

/**
 * @member {module:model/VehicleTypeStatus} status
 */
GetAllVehicleTypeResponse.prototype.status = undefined;
