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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TepsalesserviceApi);
  }
}(this, function(expect, TepsalesserviceApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PutPurchaseOrderRequest', function() {
      beforeEach(function() {
        instance = new TepsalesserviceApi.PutPurchaseOrderRequest();
      });

      it('should create an instance of PutPurchaseOrderRequest', function() {
        // TODO: update the code to test PutPurchaseOrderRequest
        expect(instance).to.be.a(TepsalesserviceApi.PutPurchaseOrderRequest);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property userCreated (base name: "userCreated")', function() {
        // TODO: update the code to test the property userCreated
        expect(instance).to.have.property('userCreated');
        // expect(instance.userCreated).to.be(expectedValueLiteral);
      });

      it('should have the property userUpdated (base name: "userUpdated")', function() {
        // TODO: update the code to test the property userUpdated
        expect(instance).to.have.property('userUpdated');
        // expect(instance.userUpdated).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property freightValue (base name: "freightValue")', function() {
        // TODO: update the code to test the property freightValue
        expect(instance).to.have.property('freightValue');
        // expect(instance.freightValue).to.be(expectedValueLiteral);
      });

      it('should have the property unloadingValue (base name: "unloadingValue")', function() {
        // TODO: update the code to test the property unloadingValue
        expect(instance).to.have.property('unloadingValue');
        // expect(instance.unloadingValue).to.be(expectedValueLiteral);
      });

      it('should have the property freightType (base name: "freightType")', function() {
        // TODO: update the code to test the property freightType
        expect(instance).to.have.property('freightType');
        // expect(instance.freightType).to.be(expectedValueLiteral);
      });

      it('should have the property valueWithoutFreight (base name: "valueWithoutFreight")', function() {
        // TODO: update the code to test the property valueWithoutFreight
        expect(instance).to.have.property('valueWithoutFreight');
        // expect(instance.valueWithoutFreight).to.be(expectedValueLiteral);
      });

      it('should have the property totalValue (base name: "totalValue")', function() {
        // TODO: update the code to test the property totalValue
        expect(instance).to.have.property('totalValue');
        // expect(instance.totalValue).to.be(expectedValueLiteral);
      });

      it('should have the property discount (base name: "discount")', function() {
        // TODO: update the code to test the property discount
        expect(instance).to.have.property('discount');
        // expect(instance.discount).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property earthDistance (base name: "earthDistance")', function() {
        // TODO: update the code to test the property earthDistance
        expect(instance).to.have.property('earthDistance');
        // expect(instance.earthDistance).to.be(expectedValueLiteral);
      });

      it('should have the property totalWeightkilograms (base name: "totalWeightkilograms")', function() {
        // TODO: update the code to test the property totalWeightkilograms
        expect(instance).to.have.property('totalWeightkilograms');
        // expect(instance.totalWeightkilograms).to.be(expectedValueLiteral);
      });

      it('should have the property dueDate (base name: "dueDate")', function() {
        // TODO: update the code to test the property dueDate
        expect(instance).to.have.property('dueDate');
        // expect(instance.dueDate).to.be(expectedValueLiteral);
      });

      it('should have the property mobileCreatedAt (base name: "mobileCreatedAt")', function() {
        // TODO: update the code to test the property mobileCreatedAt
        expect(instance).to.have.property('mobileCreatedAt');
        // expect(instance.mobileCreatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property isFreightFractional (base name: "isFreightFractional")', function() {
        // TODO: update the code to test the property isFreightFractional
        expect(instance).to.have.property('isFreightFractional');
        // expect(instance.isFreightFractional).to.be(expectedValueLiteral);
      });

      it('should have the property integrationCode (base name: "integrationCode")', function() {
        // TODO: update the code to test the property integrationCode
        expect(instance).to.have.property('integrationCode');
        // expect(instance.integrationCode).to.be(expectedValueLiteral);
      });

      it('should have the property paymentConditionId (base name: "paymentConditionId")', function() {
        // TODO: update the code to test the property paymentConditionId
        expect(instance).to.have.property('paymentConditionId');
        // expect(instance.paymentConditionId).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "clientId")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryAddressId (base name: "deliveryAddressId")', function() {
        // TODO: update the code to test the property deliveryAddressId
        expect(instance).to.have.property('deliveryAddressId');
        // expect(instance.deliveryAddressId).to.be(expectedValueLiteral);
      });

      it('should have the property invoiceAddressId (base name: "invoiceAddressId")', function() {
        // TODO: update the code to test the property invoiceAddressId
        expect(instance).to.have.property('invoiceAddressId');
        // expect(instance.invoiceAddressId).to.be(expectedValueLiteral);
      });

      it('should have the property items (base name: "items")', function() {
        // TODO: update the code to test the property items
        expect(instance).to.have.property('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });

      it('should have the property freightCompositions (base name: "freightCompositions")', function() {
        // TODO: update the code to test the property freightCompositions
        expect(instance).to.have.property('freightCompositions');
        // expect(instance.freightCompositions).to.be(expectedValueLiteral);
      });

      it('should have the property mobileCreatedUserId (base name: "mobileCreatedUserId")', function() {
        // TODO: update the code to test the property mobileCreatedUserId
        expect(instance).to.have.property('mobileCreatedUserId');
        // expect(instance.mobileCreatedUserId).to.be(expectedValueLiteral);
      });

      it('should have the property paymentPriceTableId (base name: "paymentPriceTableId")', function() {
        // TODO: update the code to test the property paymentPriceTableId
        expect(instance).to.have.property('paymentPriceTableId');
        // expect(instance.paymentPriceTableId).to.be(expectedValueLiteral);
      });

      it('should have the property distribuitionCenterId (base name: "distribuitionCenterId")', function() {
        // TODO: update the code to test the property distribuitionCenterId
        expect(instance).to.have.property('distribuitionCenterId');
        // expect(instance.distribuitionCenterId).to.be(expectedValueLiteral);
      });

      it('should have the property distribuitionCenterClientAddressId (base name: "distribuitionCenterClientAddressId")', function() {
        // TODO: update the code to test the property distribuitionCenterClientAddressId
        expect(instance).to.have.property('distribuitionCenterClientAddressId');
        // expect(instance.distribuitionCenterClientAddressId).to.be(expectedValueLiteral);
      });

    });
  });

}));
