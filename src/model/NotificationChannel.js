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
 * Enum class NotificationChannel.
 * @enum {Number}
 * @readonly
 */
const NotificationChannel = {
  /**
   * value: 1
   * @const
   */
  _1: 1,

  /**
   * value: 2
   * @const
   */
  _2: 2,

  /**
   * value: 3
   * @const
   */
  _3: 3,

  /**
   * Returns a <code>NotificationChannel</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/NotificationChannel} The enum <code>NotificationChannel</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {NotificationChannel};