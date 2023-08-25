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
    describe('FreightComposition', function() {
      beforeEach(function() {
        instance = new TepsalesserviceApi.FreightComposition();
      });

      it('should create an instance of FreightComposition', function() {
        // TODO: update the code to test FreightComposition
        expect(instance).to.be.a(TepsalesserviceApi.FreightComposition);
      });

      it('should have the property vehicleType (base name: "vehicleType")', function() {
        // TODO: update the code to test the property vehicleType
        expect(instance).to.have.property('vehicleType');
        // expect(instance.vehicleType).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
