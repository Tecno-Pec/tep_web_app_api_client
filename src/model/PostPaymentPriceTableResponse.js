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
import {PaymentPriceTableStatus} from './PaymentPriceTableStatus';

/**
 * The PostPaymentPriceTableResponse model module.
 * @module model/PostPaymentPriceTableResponse
 * @version v1
 */
export class PostPaymentPriceTableResponse {
  /**
   * Constructs a new <code>PostPaymentPriceTableResponse</code>.
   * @alias module:model/PostPaymentPriceTableResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostPaymentPriceTableResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostPaymentPriceTableResponse} obj Optional instance to populate.
   * @return {module:model/PostPaymentPriceTableResponse} The populated <code>PostPaymentPriceTableResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostPaymentPriceTableResponse();
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
      if (data.hasOwnProperty('paymentConditionId'))
        obj.paymentConditionId = ApiClient.convertToType(data['paymentConditionId'], 'String');
      if (data.hasOwnProperty('priceTableId'))
        obj.priceTableId = ApiClient.convertToType(data['priceTableId'], 'String');
      if (data.hasOwnProperty('externalCode'))
        obj.externalCode = ApiClient.convertToType(data['externalCode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = PaymentPriceTableStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostPaymentPriceTableResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostPaymentPriceTableResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostPaymentPriceTableResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostPaymentPriceTableResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PostPaymentPriceTableResponse.prototype.id = undefined;

/**
 * @member {String} paymentConditionId
 */
PostPaymentPriceTableResponse.prototype.paymentConditionId = undefined;

/**
 * @member {String} priceTableId
 */
PostPaymentPriceTableResponse.prototype.priceTableId = undefined;

/**
 * @member {String} externalCode
 */
PostPaymentPriceTableResponse.prototype.externalCode = undefined;

/**
 * @member {module:model/PaymentPriceTableStatus} status
 */
PostPaymentPriceTableResponse.prototype.status = undefined;

