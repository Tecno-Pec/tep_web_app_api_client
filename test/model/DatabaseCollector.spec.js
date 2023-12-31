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
    describe('DatabaseCollector', function() {
      beforeEach(function() {
        instance = new TepsalesserviceApi.DatabaseCollector();
      });

      it('should create an instance of DatabaseCollector', function() {
        // TODO: update the code to test DatabaseCollector
        expect(instance).to.be.a(TepsalesserviceApi.DatabaseCollector);
      });

      it('should have the property outPutFolder (base name: "outPutFolder")', function() {
        // TODO: update the code to test the property outPutFolder
        expect(instance).to.have.property('outPutFolder');
        // expect(instance.outPutFolder).to.be(expectedValueLiteral);
      });

      it('should have the property connection (base name: "connection")', function() {
        // TODO: update the code to test the property connection
        expect(instance).to.have.property('connection');
        // expect(instance.connection).to.be(expectedValueLiteral);
      });

      it('should have the property queries (base name: "queries")', function() {
        // TODO: update the code to test the property queries
        expect(instance).to.have.property('queries');
        // expect(instance.queries).to.be(expectedValueLiteral);
      });

    });
  });

}));
