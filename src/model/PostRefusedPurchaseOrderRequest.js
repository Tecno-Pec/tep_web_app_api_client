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
 * The PostRefusedPurchaseOrderRequest model module.
 * @module model/PostRefusedPurchaseOrderRequest
 * @version v1
 */
export class PostRefusedPurchaseOrderRequest {
  /**
   * Constructs a new <code>PostRefusedPurchaseOrderRequest</code>.
   * @alias module:model/PostRefusedPurchaseOrderRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostRefusedPurchaseOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostRefusedPurchaseOrderRequest} obj Optional instance to populate.
   * @return {module:model/PostRefusedPurchaseOrderRequest} The populated <code>PostRefusedPurchaseOrderRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostRefusedPurchaseOrderRequest();
      if (data.hasOwnProperty('summary'))
        obj.summary = ApiClient.convertToType(data['summary'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} summary
 */
PostRefusedPurchaseOrderRequest.prototype.summary = undefined;
