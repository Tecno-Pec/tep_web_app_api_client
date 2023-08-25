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
 * The ProductEspecification model module.
 * @module model/ProductEspecification
 * @version v1
 */
export class ProductEspecification {
  /**
   * Constructs a new <code>ProductEspecification</code>.
   * @alias module:model/ProductEspecification
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProductEspecification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductEspecification} obj Optional instance to populate.
   * @return {module:model/ProductEspecification} The populated <code>ProductEspecification</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductEspecification();
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} key
 */
ProductEspecification.prototype.key = undefined;

/**
 * @member {String} value
 */
ProductEspecification.prototype.value = undefined;
