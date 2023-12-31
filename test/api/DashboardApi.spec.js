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

  beforeEach(function() {
    instance = new TepsalesserviceApi.DashboardApi();
  });

  describe('(package)', function() {
    describe('DashboardApi', function() {
      describe('tepsalesV1DashboardPurchaseorderbysalesmanGet', function() {
        it('should call tepsalesV1DashboardPurchaseorderbysalesmanGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DashboardPurchaseorderbysalesmanGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1DashboardPurchaseorderbysalesmanGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GroupPurchaseOrderDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1DashboardPurchaseorderfavoriteproductsGet', function() {
        it('should call tepsalesV1DashboardPurchaseorderfavoriteproductsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DashboardPurchaseorderfavoriteproductsGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1DashboardPurchaseorderfavoriteproductsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GroupPurchaseOrderDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1DashboardPurchaseorderlastsixmonthsGet', function() {
        it('should call tepsalesV1DashboardPurchaseorderlastsixmonthsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DashboardPurchaseorderlastsixmonthsGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1DashboardPurchaseorderlastsixmonthsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GroupPurchaseOrderDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1DashboardPurchaseorderstatusGet', function() {
        it('should call tepsalesV1DashboardPurchaseorderstatusGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DashboardPurchaseorderstatusGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1DashboardPurchaseorderstatusGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GroupPurchaseOrderDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1DashboardWidgetsGet', function() {
        it('should call tepsalesV1DashboardWidgetsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DashboardWidgetsGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1DashboardWidgetsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetWidgetsDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
