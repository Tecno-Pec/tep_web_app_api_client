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
import {VehicleType} from './VehicleType';

/**
 * The FreightComposition model module.
 * @module model/FreightComposition
 * @version v1
 */
export class FreightComposition {
  /**
   * Constructs a new <code>FreightComposition</code>.
   * @alias module:model/FreightComposition
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FreightComposition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FreightComposition} obj Optional instance to populate.
   * @return {module:model/FreightComposition} The populated <code>FreightComposition</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FreightComposition();
      if (data.hasOwnProperty('vehicleType'))
        obj.vehicleType = VehicleType.constructFromObject(data['vehicleType']);
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/VehicleType} vehicleType
 */
FreightComposition.prototype.vehicleType = undefined;

/**
 * @member {Number} weight
 */
FreightComposition.prototype.weight = undefined;

/**
 * @member {Number} value
 */
FreightComposition.prototype.value = undefined;
