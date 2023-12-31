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
import {DiscountTypeEnum} from './DiscountTypeEnum';

/**
 * The PurchaseOrderItemModelBase model module.
 * @module model/PurchaseOrderItemModelBase
 * @version v1
 */
export class PurchaseOrderItemModelBase {
  /**
   * Constructs a new <code>PurchaseOrderItemModelBase</code>.
   * @alias module:model/PurchaseOrderItemModelBase
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PurchaseOrderItemModelBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PurchaseOrderItemModelBase} obj Optional instance to populate.
   * @return {module:model/PurchaseOrderItemModelBase} The populated <code>PurchaseOrderItemModelBase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PurchaseOrderItemModelBase();
      if (data.hasOwnProperty('productId'))
        obj.productId = ApiClient.convertToType(data['productId'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('weightTotal'))
        obj.weightTotal = ApiClient.convertToType(data['weightTotal'], 'Number');
      if (data.hasOwnProperty('unitPrice'))
        obj.unitPrice = ApiClient.convertToType(data['unitPrice'], 'Number');
      if (data.hasOwnProperty('unitPriceQtd'))
        obj.unitPriceQtd = ApiClient.convertToType(data['unitPriceQtd'], 'Number');
      if (data.hasOwnProperty('unitTotalPrice'))
        obj.unitTotalPrice = ApiClient.convertToType(data['unitTotalPrice'], 'Number');
      if (data.hasOwnProperty('percDiscountCommission'))
        obj.percDiscountCommission = ApiClient.convertToType(data['percDiscountCommission'], 'Number');
      if (data.hasOwnProperty('valueDiscount'))
        obj.valueDiscount = ApiClient.convertToType(data['valueDiscount'], 'Number');
      if (data.hasOwnProperty('percDiscount'))
        obj.percDiscount = ApiClient.convertToType(data['percDiscount'], 'Number');
      if (data.hasOwnProperty('useValueDiscount'))
        obj.useValueDiscount = ApiClient.convertToType(data['useValueDiscount'], 'Number');
      if (data.hasOwnProperty('discountType'))
        obj.discountType = DiscountTypeEnum.constructFromObject(data['discountType']);
      if (data.hasOwnProperty('discountByWeight'))
        obj.discountByWeight = ApiClient.convertToType(data['discountByWeight'], 'Number');
      if (data.hasOwnProperty('discountTotal'))
        obj.discountTotal = ApiClient.convertToType(data['discountTotal'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} productId
 */
PurchaseOrderItemModelBase.prototype.productId = undefined;

/**
 * @member {Number} quantity
 */
PurchaseOrderItemModelBase.prototype.quantity = undefined;

/**
 * @member {Number} weightTotal
 */
PurchaseOrderItemModelBase.prototype.weightTotal = undefined;

/**
 * @member {Number} unitPrice
 */
PurchaseOrderItemModelBase.prototype.unitPrice = undefined;

/**
 * @member {Number} unitPriceQtd
 */
PurchaseOrderItemModelBase.prototype.unitPriceQtd = undefined;

/**
 * @member {Number} unitTotalPrice
 */
PurchaseOrderItemModelBase.prototype.unitTotalPrice = undefined;

/**
 * @member {Number} percDiscountCommission
 */
PurchaseOrderItemModelBase.prototype.percDiscountCommission = undefined;

/**
 * @member {Number} valueDiscount
 */
PurchaseOrderItemModelBase.prototype.valueDiscount = undefined;

/**
 * @member {Number} percDiscount
 */
PurchaseOrderItemModelBase.prototype.percDiscount = undefined;

/**
 * @member {Number} useValueDiscount
 */
PurchaseOrderItemModelBase.prototype.useValueDiscount = undefined;

/**
 * @member {module:model/DiscountTypeEnum} discountType
 */
PurchaseOrderItemModelBase.prototype.discountType = undefined;

/**
 * @member {Number} discountByWeight
 */
PurchaseOrderItemModelBase.prototype.discountByWeight = undefined;

/**
 * @member {Number} discountTotal
 */
PurchaseOrderItemModelBase.prototype.discountTotal = undefined;

