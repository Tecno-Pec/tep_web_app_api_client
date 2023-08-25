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
import {OperationType} from './OperationType';

/**
 * The Operation model module.
 * @module model/Operation
 * @version v1
 */
export class Operation {
  /**
   * Constructs a new <code>Operation</code>.
   * @alias module:model/Operation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Operation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Operation} obj Optional instance to populate.
   * @return {module:model/Operation} The populated <code>Operation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Operation();
      if (data.hasOwnProperty('operationType'))
        obj.operationType = OperationType.constructFromObject(data['operationType']);
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
      if (data.hasOwnProperty('op'))
        obj.op = ApiClient.convertToType(data['op'], 'String');
      if (data.hasOwnProperty('from'))
        obj.from = ApiClient.convertToType(data['from'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], Object);
    }
    return obj;
  }
}

/**
 * @member {module:model/OperationType} operationType
 */
Operation.prototype.operationType = undefined;

/**
 * @member {String} path
 */
Operation.prototype.path = undefined;

/**
 * @member {String} op
 */
Operation.prototype.op = undefined;

/**
 * @member {String} from
 */
Operation.prototype.from = undefined;

/**
 * @member {Object} value
 */
Operation.prototype.value = undefined;

