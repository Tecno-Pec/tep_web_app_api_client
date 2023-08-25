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
 * The GetAllIntegrationConfigRequest model module.
 * @module model/GetAllIntegrationConfigRequest
 * @version v1
 */
export class GetAllIntegrationConfigRequest {
  /**
   * Constructs a new <code>GetAllIntegrationConfigRequest</code>.
   * @alias module:model/GetAllIntegrationConfigRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetAllIntegrationConfigRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllIntegrationConfigRequest} obj Optional instance to populate.
   * @return {module:model/GetAllIntegrationConfigRequest} The populated <code>GetAllIntegrationConfigRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAllIntegrationConfigRequest();
    }
    return obj;
  }
}