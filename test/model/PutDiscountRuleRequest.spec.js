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
    describe('PutDiscountRuleRequest', function() {
      beforeEach(function() {
        instance = new TepsalesserviceApi.PutDiscountRuleRequest();
      });

      it('should create an instance of PutDiscountRuleRequest', function() {
        // TODO: update the code to test PutDiscountRuleRequest
        expect(instance).to.be.a(TepsalesserviceApi.PutDiscountRuleRequest);
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

      it('should have the property discountWeightType (base name: "discountWeightType")', function() {
        // TODO: update the code to test the property discountWeightType
        expect(instance).to.have.property('discountWeightType');
        // expect(instance.discountWeightType).to.be(expectedValueLiteral);
      });

      it('should have the property minQuantity (base name: "minQuantity")', function() {
        // TODO: update the code to test the property minQuantity
        expect(instance).to.have.property('minQuantity');
        // expect(instance.minQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property discountType (base name: "discountType")', function() {
        // TODO: update the code to test the property discountType
        expect(instance).to.have.property('discountType');
        // expect(instance.discountType).to.be(expectedValueLiteral);
      });

      it('should have the property referenceType (base name: "referenceType")', function() {
        // TODO: update the code to test the property referenceType
        expect(instance).to.have.property('referenceType');
        // expect(instance.referenceType).to.be(expectedValueLiteral);
      });

      it('should have the property referenceId (base name: "referenceId")', function() {
        // TODO: update the code to test the property referenceId
        expect(instance).to.have.property('referenceId');
        // expect(instance.referenceId).to.be(expectedValueLiteral);
      });

      it('should have the property discount (base name: "discount")', function() {
        // TODO: update the code to test the property discount
        expect(instance).to.have.property('discount');
        // expect(instance.discount).to.be(expectedValueLiteral);
      });

      it('should have the property externalCode (base name: "externalCode")', function() {
        // TODO: update the code to test the property externalCode
        expect(instance).to.have.property('externalCode');
        // expect(instance.externalCode).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));