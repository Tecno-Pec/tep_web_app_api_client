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
 * Enum class PushTokenStatus.
 * @enum {Number}
 * @readonly
 */
const PushTokenStatus = {
  /**
   * value: 0
   * @const
   */
  _0: 0,

  /**
   * value: 1
   * @const
   */
  _1: 1,

  /**
   * Returns a <code>PushTokenStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/PushTokenStatus} The enum <code>PushTokenStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {PushTokenStatus};