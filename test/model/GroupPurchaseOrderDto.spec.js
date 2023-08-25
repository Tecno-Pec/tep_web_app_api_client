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
    describe('GroupPurchaseOrderDto', function() {
      beforeEach(function() {
        instance = new TepsalesserviceApi.GroupPurchaseOrderDto();
      });

      it('should create an instance of GroupPurchaseOrderDto', function() {
        // TODO: update the code to test GroupPurchaseOrderDto
        expect(instance).to.be.a(TepsalesserviceApi.GroupPurchaseOrderDto);
      });

      it('should have the property totalInProgress (base name: "totalInProgress")', function() {
        // TODO: update the code to test the property totalInProgress
        expect(instance).to.have.property('totalInProgress');
        // expect(instance.totalInProgress).to.be(expectedValueLiteral);
      });

      it('should have the property totalWaitingForApproved (base name: "totalWaitingForApproved")', function() {
        // TODO: update the code to test the property totalWaitingForApproved
        expect(instance).to.have.property('totalWaitingForApproved');
        // expect(instance.totalWaitingForApproved).to.be(expectedValueLiteral);
      });

      it('should have the property totalApproved (base name: "totalApproved")', function() {
        // TODO: update the code to test the property totalApproved
        expect(instance).to.have.property('totalApproved');
        // expect(instance.totalApproved).to.be(expectedValueLiteral);
      });

      it('should have the property totalRefused (base name: "totalRefused")', function() {
        // TODO: update the code to test the property totalRefused
        expect(instance).to.have.property('totalRefused');
        // expect(instance.totalRefused).to.be(expectedValueLiteral);
      });

      it('should have the property totalCanceled (base name: "totalCanceled")', function() {
        // TODO: update the code to test the property totalCanceled
        expect(instance).to.have.property('totalCanceled');
        // expect(instance.totalCanceled).to.be(expectedValueLiteral);
      });

      it('should have the property totalExpired (base name: "totalExpired")', function() {
        // TODO: update the code to test the property totalExpired
        expect(instance).to.have.property('totalExpired');
        // expect(instance.totalExpired).to.be(expectedValueLiteral);
      });

    });
  });

}));