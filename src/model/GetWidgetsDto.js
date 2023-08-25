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
 * The GetWidgetsDto model module.
 * @module model/GetWidgetsDto
 * @version v1
 */
export class GetWidgetsDto {
  /**
   * Constructs a new <code>GetWidgetsDto</code>.
   * @alias module:model/GetWidgetsDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetWidgetsDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWidgetsDto} obj Optional instance to populate.
   * @return {module:model/GetWidgetsDto} The populated <code>GetWidgetsDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetWidgetsDto();
      if (data.hasOwnProperty('totalOrders'))
        obj.totalOrders = ApiClient.convertToType(data['totalOrders'], 'Number');
      if (data.hasOwnProperty('totalUsers'))
        obj.totalUsers = ApiClient.convertToType(data['totalUsers'], 'Number');
      if (data.hasOwnProperty('totalProducts'))
        obj.totalProducts = ApiClient.convertToType(data['totalProducts'], 'Number');
      if (data.hasOwnProperty('totalClients'))
        obj.totalClients = ApiClient.convertToType(data['totalClients'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} totalOrders
 */
GetWidgetsDto.prototype.totalOrders = undefined;

/**
 * @member {Number} totalUsers
 */
GetWidgetsDto.prototype.totalUsers = undefined;

/**
 * @member {Number} totalProducts
 */
GetWidgetsDto.prototype.totalProducts = undefined;

/**
 * @member {Number} totalClients
 */
GetWidgetsDto.prototype.totalClients = undefined;
