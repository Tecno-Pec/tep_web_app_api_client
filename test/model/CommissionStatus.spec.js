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
    describe('CommissionStatus', function() {
      beforeEach(function() {
        instance = TepsalesserviceApi.CommissionStatus;
      });

      it('should create an instance of CommissionStatus', function() {
        // TODO: update the code to test CommissionStatus
        expect(instance).to.be.a('object');
      });

      it('should have the property _0', function() {
        expect(instance).to.have.property('_0');
        expect(instance._0).to.be(0);
      });

      it('should have the property _1', function() {
        expect(instance).to.have.property('_1');
        expect(instance._1).to.be(1);
      });

    });
  });

}));
