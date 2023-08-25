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
import {Address} from './Address';
import {Client} from './Client';
import {FreightComposition} from './FreightComposition';
import {FreightType} from './FreightType';
import {PaymentCondition} from './PaymentCondition';
import {PurchaseOrderHistory} from './PurchaseOrderHistory';
import {PurchaseOrderItem} from './PurchaseOrderItem';
import {PurchaseOrderStatus} from './PurchaseOrderStatus';
import {ReasonCancel} from './ReasonCancel';
import {User} from './User';

/**
 * The GetAllPurchaseOrderResponse model module.
 * @module model/GetAllPurchaseOrderResponse
 * @version v1
 */
export class GetAllPurchaseOrderResponse {
  /**
   * Constructs a new <code>GetAllPurchaseOrderResponse</code>.
   * @alias module:model/GetAllPurchaseOrderResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllPurchaseOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllPurchaseOrderResponse} obj Optional instance to populate.
   * @return {module:model/GetAllPurchaseOrderResponse} The populated <code>GetAllPurchaseOrderResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllPurchaseOrderResponse();
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
      if (data.hasOwnProperty('freightValue'))
        obj.freightValue = ApiClient.convertToType(data['freightValue'], 'Number');
      if (data.hasOwnProperty('unloadingValue'))
        obj.unloadingValue = ApiClient.convertToType(data['unloadingValue'], 'Number');
      if (data.hasOwnProperty('freightType'))
        obj.freightType = FreightType.constructFromObject(data['freightType']);
      if (data.hasOwnProperty('valueWithoutFreight'))
        obj.valueWithoutFreight = ApiClient.convertToType(data['valueWithoutFreight'], 'Number');
      if (data.hasOwnProperty('totalValue'))
        obj.totalValue = ApiClient.convertToType(data['totalValue'], 'Number');
      if (data.hasOwnProperty('discount'))
        obj.discount = ApiClient.convertToType(data['discount'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('earthDistance'))
        obj.earthDistance = ApiClient.convertToType(data['earthDistance'], 'Number');
      if (data.hasOwnProperty('totalWeightkilograms'))
        obj.totalWeightkilograms = ApiClient.convertToType(data['totalWeightkilograms'], 'Number');
      if (data.hasOwnProperty('dueDate'))
        obj.dueDate = ApiClient.convertToType(data['dueDate'], 'Date');
      if (data.hasOwnProperty('mobileCreatedAt'))
        obj.mobileCreatedAt = ApiClient.convertToType(data['mobileCreatedAt'], 'Date');
      if (data.hasOwnProperty('isFreightFractional'))
        obj.isFreightFractional = ApiClient.convertToType(data['isFreightFractional'], 'Boolean');
      if (data.hasOwnProperty('integrationCode'))
        obj.integrationCode = ApiClient.convertToType(data['integrationCode'], 'String');
      if (data.hasOwnProperty('paymentCondition'))
        obj.paymentCondition = PaymentCondition.constructFromObject(data['paymentCondition']);
      if (data.hasOwnProperty('client'))
        obj.client = Client.constructFromObject(data['client']);
      if (data.hasOwnProperty('deliveryAddress'))
        obj.deliveryAddress = Address.constructFromObject(data['deliveryAddress']);
      if (data.hasOwnProperty('invoiceAddress'))
        obj.invoiceAddress = Address.constructFromObject(data['invoiceAddress']);
      if (data.hasOwnProperty('freightCompositions'))
        obj.freightCompositions = ApiClient.convertToType(data['freightCompositions'], [FreightComposition]);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [PurchaseOrderItem]);
      if (data.hasOwnProperty('history'))
        obj.history = ApiClient.convertToType(data['history'], [PurchaseOrderHistory]);
      if (data.hasOwnProperty('mobileCreatedUser'))
        obj.mobileCreatedUser = User.constructFromObject(data['mobileCreatedUser']);
      if (data.hasOwnProperty('reasonCancel'))
        obj.reasonCancel = ReasonCancel.constructFromObject(data['reasonCancel']);
      if (data.hasOwnProperty('status'))
        obj.status = PurchaseOrderStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
GetAllPurchaseOrderResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
GetAllPurchaseOrderResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
GetAllPurchaseOrderResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
GetAllPurchaseOrderResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
GetAllPurchaseOrderResponse.prototype.id = undefined;

/**
 * @member {Number} freightValue
 */
GetAllPurchaseOrderResponse.prototype.freightValue = undefined;

/**
 * @member {Number} unloadingValue
 */
GetAllPurchaseOrderResponse.prototype.unloadingValue = undefined;

/**
 * @member {module:model/FreightType} freightType
 */
GetAllPurchaseOrderResponse.prototype.freightType = undefined;

/**
 * @member {Number} valueWithoutFreight
 */
GetAllPurchaseOrderResponse.prototype.valueWithoutFreight = undefined;

/**
 * @member {Number} totalValue
 */
GetAllPurchaseOrderResponse.prototype.totalValue = undefined;

/**
 * @member {Number} discount
 */
GetAllPurchaseOrderResponse.prototype.discount = undefined;

/**
 * @member {Number} distance
 */
GetAllPurchaseOrderResponse.prototype.distance = undefined;

/**
 * @member {Number} earthDistance
 */
GetAllPurchaseOrderResponse.prototype.earthDistance = undefined;

/**
 * @member {Number} totalWeightkilograms
 */
GetAllPurchaseOrderResponse.prototype.totalWeightkilograms = undefined;

/**
 * @member {Date} dueDate
 */
GetAllPurchaseOrderResponse.prototype.dueDate = undefined;

/**
 * @member {Date} mobileCreatedAt
 */
GetAllPurchaseOrderResponse.prototype.mobileCreatedAt = undefined;

/**
 * @member {Boolean} isFreightFractional
 */
GetAllPurchaseOrderResponse.prototype.isFreightFractional = undefined;

/**
 * @member {String} integrationCode
 */
GetAllPurchaseOrderResponse.prototype.integrationCode = undefined;

/**
 * @member {module:model/PaymentCondition} paymentCondition
 */
GetAllPurchaseOrderResponse.prototype.paymentCondition = undefined;

/**
 * @member {module:model/Client} client
 */
GetAllPurchaseOrderResponse.prototype.client = undefined;

/**
 * @member {module:model/Address} deliveryAddress
 */
GetAllPurchaseOrderResponse.prototype.deliveryAddress = undefined;

/**
 * @member {module:model/Address} invoiceAddress
 */
GetAllPurchaseOrderResponse.prototype.invoiceAddress = undefined;

/**
 * @member {Array.<module:model/FreightComposition>} freightCompositions
 */
GetAllPurchaseOrderResponse.prototype.freightCompositions = undefined;

/**
 * @member {Array.<module:model/PurchaseOrderItem>} items
 */
GetAllPurchaseOrderResponse.prototype.items = undefined;

/**
 * @member {Array.<module:model/PurchaseOrderHistory>} history
 */
GetAllPurchaseOrderResponse.prototype.history = undefined;

/**
 * @member {module:model/User} mobileCreatedUser
 */
GetAllPurchaseOrderResponse.prototype.mobileCreatedUser = undefined;

/**
 * @member {module:model/ReasonCancel} reasonCancel
 */
GetAllPurchaseOrderResponse.prototype.reasonCancel = undefined;

/**
 * @member {module:model/PurchaseOrderStatus} status
 */
GetAllPurchaseOrderResponse.prototype.status = undefined;

