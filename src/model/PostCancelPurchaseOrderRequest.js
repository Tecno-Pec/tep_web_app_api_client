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
 * The PostCancelPurchaseOrderRequest model module.
 * @module model/PostCancelPurchaseOrderRequest
 * @version v1
 */
export class PostCancelPurchaseOrderRequest {
  /**
   * Constructs a new <code>PostCancelPurchaseOrderRequest</code>.
   * @alias module:model/PostCancelPurchaseOrderRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostCancelPurchaseOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCancelPurchaseOrderRequest} obj Optional instance to populate.
   * @return {module:model/PostCancelPurchaseOrderRequest} The populated <code>PostCancelPurchaseOrderRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostCancelPurchaseOrderRequest();
      if (data.hasOwnProperty('reasonCancelId'))
        obj.reasonCancelId = ApiClient.convertToType(data['reasonCancelId'], 'String');
      if (data.hasOwnProperty('summary'))
        obj.summary = ApiClient.convertToType(data['summary'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} reasonCancelId
 */
PostCancelPurchaseOrderRequest.prototype.reasonCancelId = undefined;

/**
 * @member {String} summary
 */
PostCancelPurchaseOrderRequest.prototype.summary = undefined;
