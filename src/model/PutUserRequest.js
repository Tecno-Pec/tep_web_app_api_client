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
import {UserStatus} from './UserStatus';

/**
 * The PutUserRequest model module.
 * @module model/PutUserRequest
 * @version v1
 */
export class PutUserRequest {
  /**
   * Constructs a new <code>PutUserRequest</code>.
   * @alias module:model/PutUserRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PutUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutUserRequest} obj Optional instance to populate.
   * @return {module:model/PutUserRequest} The populated <code>PutUserRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PutUserRequest();
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
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('documentId'))
        obj.documentId = ApiClient.convertToType(data['documentId'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('isActive'))
        obj.isActive = ApiClient.convertToType(data['isActive'], 'Boolean');
      if (data.hasOwnProperty('isAdmin'))
        obj.isAdmin = ApiClient.convertToType(data['isAdmin'], 'Boolean');
      if (data.hasOwnProperty('isSuperAdmin'))
        obj.isSuperAdmin = ApiClient.convertToType(data['isSuperAdmin'], 'Boolean');
      if (data.hasOwnProperty('isSalesman'))
        obj.isSalesman = ApiClient.convertToType(data['isSalesman'], 'Boolean');
      if (data.hasOwnProperty('isIntegration'))
        obj.isIntegration = ApiClient.convertToType(data['isIntegration'], 'Boolean');
      if (data.hasOwnProperty('isRegionManager'))
        obj.isRegionManager = ApiClient.convertToType(data['isRegionManager'], 'Boolean');
      if (data.hasOwnProperty('externalCode'))
        obj.externalCode = ApiClient.convertToType(data['externalCode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = UserStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PutUserRequest.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PutUserRequest.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PutUserRequest.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PutUserRequest.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PutUserRequest.prototype.id = undefined;

/**
 * @member {String} name
 */
PutUserRequest.prototype.name = undefined;

/**
 * @member {String} documentId
 */
PutUserRequest.prototype.documentId = undefined;

/**
 * @member {String} phone
 */
PutUserRequest.prototype.phone = undefined;

/**
 * @member {String} email
 */
PutUserRequest.prototype.email = undefined;

/**
 * @member {Boolean} isActive
 */
PutUserRequest.prototype.isActive = undefined;

/**
 * @member {Boolean} isAdmin
 */
PutUserRequest.prototype.isAdmin = undefined;

/**
 * @member {Boolean} isSuperAdmin
 */
PutUserRequest.prototype.isSuperAdmin = undefined;

/**
 * @member {Boolean} isSalesman
 */
PutUserRequest.prototype.isSalesman = undefined;

/**
 * @member {Boolean} isIntegration
 */
PutUserRequest.prototype.isIntegration = undefined;

/**
 * @member {Boolean} isRegionManager
 */
PutUserRequest.prototype.isRegionManager = undefined;

/**
 * @member {String} externalCode
 */
PutUserRequest.prototype.externalCode = undefined;

/**
 * @member {module:model/UserStatus} status
 */
PutUserRequest.prototype.status = undefined;

