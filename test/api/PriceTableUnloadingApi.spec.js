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
    instance = new TepsalesserviceApi.PriceTableUnloadingApi();
  });

  describe('(package)', function() {
    describe('PriceTableUnloadingApi', function() {
      describe('getByIdPriceTableUnloading', function() {
        it('should call getByIdPriceTableUnloading successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdPriceTableUnloading call and complete the assertions
          /*
          var opts = {};

          instance.getByIdPriceTableUnloading(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllPriceTableUnloadingResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1PricetableunloadingAllGet', function() {
        it('should call tepsalesV1PricetableunloadingAllGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1PricetableunloadingAllGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1PricetableunloadingAllGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(TepsalesserviceApi.GetAllPriceTableUnloadingResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1PricetableunloadingIdDelete', function() {
        it('should call tepsalesV1PricetableunloadingIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1PricetableunloadingIdDelete call
          /*
          var opts = {};

          instance.tepsalesV1PricetableunloadingIdDelete(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1PricetableunloadingIdPatch', function() {
        it('should call tepsalesV1PricetableunloadingIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1PricetableunloadingIdPatch call
          /*
          var opts = {};

          instance.tepsalesV1PricetableunloadingIdPatch(body, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1PricetableunloadingIdPut', function() {
        it('should call tepsalesV1PricetableunloadingIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1PricetableunloadingIdPut call
          /*
          var opts = {};

          instance.tepsalesV1PricetableunloadingIdPut(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1PricetableunloadingPagedGet', function() {
        it('should call tepsalesV1PricetableunloadingPagedGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1PricetableunloadingPagedGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1PricetableunloadingPagedGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllPagedPriceTableUnloadingResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1PricetableunloadingPost', function() {
        it('should call tepsalesV1PricetableunloadingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1PricetableunloadingPost call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1PricetableunloadingPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.PostPriceTableUnloadingResponse);

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