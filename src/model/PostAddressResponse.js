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
import {AddressStatus} from './AddressStatus';
import {AddressTypeEnum} from './AddressTypeEnum';

/**
 * The PostAddressResponse model module.
 * @module model/PostAddressResponse
 * @version v1
 */
export class PostAddressResponse {
  /**
   * Constructs a new <code>PostAddressResponse</code>.
   * @alias module:model/PostAddressResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PostAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostAddressResponse} obj Optional instance to populate.
   * @return {module:model/PostAddressResponse} The populated <code>PostAddressResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostAddressResponse();
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
      if (data.hasOwnProperty('parentId'))
        obj.parentId = ApiClient.convertToType(data['parentId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('zipCode'))
        obj.zipCode = ApiClient.convertToType(data['zipCode'], 'String');
      if (data.hasOwnProperty('street'))
        obj.street = ApiClient.convertToType(data['street'], 'String');
      if (data.hasOwnProperty('neighborhood'))
        obj.neighborhood = ApiClient.convertToType(data['neighborhood'], 'String');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('complement'))
        obj.complement = ApiClient.convertToType(data['complement'], 'String');
      if (data.hasOwnProperty('latitude'))
        obj.latitude = ApiClient.convertToType(data['latitude'], 'Number');
      if (data.hasOwnProperty('longitude'))
        obj.longitude = ApiClient.convertToType(data['longitude'], 'Number');
      if (data.hasOwnProperty('ie'))
        obj.ie = ApiClient.convertToType(data['ie'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = AddressTypeEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('externalCode'))
        obj.externalCode = ApiClient.convertToType(data['externalCode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = AddressStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PostAddressResponse.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PostAddressResponse.prototype.updatedAt = undefined;

/**
 * @member {String} userCreated
 */
PostAddressResponse.prototype.userCreated = undefined;

/**
 * @member {String} userUpdated
 */
PostAddressResponse.prototype.userUpdated = undefined;

/**
 * @member {String} id
 */
PostAddressResponse.prototype.id = undefined;

/**
 * @member {String} parentId
 */
PostAddressResponse.prototype.parentId = undefined;

/**
 * @member {String} name
 */
PostAddressResponse.prototype.name = undefined;

/**
 * @member {String} zipCode
 */
PostAddressResponse.prototype.zipCode = undefined;

/**
 * @member {String} street
 */
PostAddressResponse.prototype.street = undefined;

/**
 * @member {String} neighborhood
 */
PostAddressResponse.prototype.neighborhood = undefined;

/**
 * @member {String} _number
 */
PostAddressResponse.prototype._number = undefined;

/**
 * @member {String} state
 */
PostAddressResponse.prototype.state = undefined;

/**
 * @member {String} city
 */
PostAddressResponse.prototype.city = undefined;

/**
 * @member {String} complement
 */
PostAddressResponse.prototype.complement = undefined;

/**
 * @member {Number} latitude
 */
PostAddressResponse.prototype.latitude = undefined;

/**
 * @member {Number} longitude
 */
PostAddressResponse.prototype.longitude = undefined;

/**
 * @member {String} ie
 */
PostAddressResponse.prototype.ie = undefined;

/**
 * @member {module:model/AddressTypeEnum} type
 */
PostAddressResponse.prototype.type = undefined;

/**
 * @member {String} externalCode
 */
PostAddressResponse.prototype.externalCode = undefined;

/**
 * @member {module:model/AddressStatus} status
 */
PostAddressResponse.prototype.status = undefined;
