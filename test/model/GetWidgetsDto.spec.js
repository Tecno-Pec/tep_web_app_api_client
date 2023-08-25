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
    describe('GetWidgetsDto', function() {
      beforeEach(function() {
        instance = new TepsalesserviceApi.GetWidgetsDto();
      });

      it('should create an instance of GetWidgetsDto', function() {
        // TODO: update the code to test GetWidgetsDto
        expect(instance).to.be.a(TepsalesserviceApi.GetWidgetsDto);
      });

      it('should have the property totalOrders (base name: "totalOrders")', function() {
        // TODO: update the code to test the property totalOrders
        expect(instance).to.have.property('totalOrders');
        // expect(instance.totalOrders).to.be(expectedValueLiteral);
      });

      it('should have the property totalUsers (base name: "totalUsers")', function() {
        // TODO: update the code to test the property totalUsers
        expect(instance).to.have.property('totalUsers');
        // expect(instance.totalUsers).to.be(expectedValueLiteral);
      });

      it('should have the property totalProducts (base name: "totalProducts")', function() {
        // TODO: update the code to test the property totalProducts
        expect(instance).to.have.property('totalProducts');
        // expect(instance.totalProducts).to.be(expectedValueLiteral);
      });

      it('should have the property totalClients (base name: "totalClients")', function() {
        // TODO: update the code to test the property totalClients
        expect(instance).to.have.property('totalClients');
        // expect(instance.totalClients).to.be(expectedValueLiteral);
      });

    });
  });

}));
