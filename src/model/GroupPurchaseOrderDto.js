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
 * The GroupPurchaseOrderDto model module.
 * @module model/GroupPurchaseOrderDto
 * @version v1
 */
export class GroupPurchaseOrderDto {
  /**
   * Constructs a new <code>GroupPurchaseOrderDto</code>.
   * @alias module:model/GroupPurchaseOrderDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GroupPurchaseOrderDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupPurchaseOrderDto} obj Optional instance to populate.
   * @return {module:model/GroupPurchaseOrderDto} The populated <code>GroupPurchaseOrderDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GroupPurchaseOrderDto();
      if (data.hasOwnProperty('totalInProgress'))
        obj.totalInProgress = ApiClient.convertToType(data['totalInProgress'], 'Number');
      if (data.hasOwnProperty('totalWaitingForApproved'))
        obj.totalWaitingForApproved = ApiClient.convertToType(data['totalWaitingForApproved'], 'Number');
      if (data.hasOwnProperty('totalApproved'))
        obj.totalApproved = ApiClient.convertToType(data['totalApproved'], 'Number');
      if (data.hasOwnProperty('totalRefused'))
        obj.totalRefused = ApiClient.convertToType(data['totalRefused'], 'Number');
      if (data.hasOwnProperty('totalCanceled'))
        obj.totalCanceled = ApiClient.convertToType(data['totalCanceled'], 'Number');
      if (data.hasOwnProperty('totalExpired'))
        obj.totalExpired = ApiClient.convertToType(data['totalExpired'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} totalInProgress
 */
GroupPurchaseOrderDto.prototype.totalInProgress = undefined;

/**
 * @member {Number} totalWaitingForApproved
 */
GroupPurchaseOrderDto.prototype.totalWaitingForApproved = undefined;

/**
 * @member {Number} totalApproved
 */
GroupPurchaseOrderDto.prototype.totalApproved = undefined;

/**
 * @member {Number} totalRefused
 */
GroupPurchaseOrderDto.prototype.totalRefused = undefined;

/**
 * @member {Number} totalCanceled
 */
GroupPurchaseOrderDto.prototype.totalCanceled = undefined;

/**
 * @member {Number} totalExpired
 */
GroupPurchaseOrderDto.prototype.totalExpired = undefined;

