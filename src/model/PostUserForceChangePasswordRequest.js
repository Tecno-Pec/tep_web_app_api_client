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
 * The PostUserForceChangePasswordRequest model module.
 * @module model/PostUserForceChangePasswordRequest
 * @version v1
 */
export class PostUserForceChangePasswordRequest {
  /**
   * Constructs a new <code>PostUserForceChangePasswordRequest</code>.
   * @alias module:model/PostUserForceChangePasswordRequest
   * @class
   * @param email {String} 
   * @param defaultPassword {String} 
   */
  constructor(email, defaultPassword) {
    this.email = email;
    this.defaultPassword = defaultPassword;
  }

  /**
   * Constructs a <code>PostUserForceChangePasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostUserForceChangePasswordRequest} obj Optional instance to populate.
   * @return {module:model/PostUserForceChangePasswordRequest} The populated <code>PostUserForceChangePasswordRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostUserForceChangePasswordRequest();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('defaultPassword'))
        obj.defaultPassword = ApiClient.convertToType(data['defaultPassword'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
PostUserForceChangePasswordRequest.prototype.email = undefined;

/**
 * @member {String} defaultPassword
 */
PostUserForceChangePasswordRequest.prototype.defaultPassword = undefined;
