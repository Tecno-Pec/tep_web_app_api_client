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
    instance = new TepsalesserviceApi.AddressApi();
  });

  describe('(package)', function() {
    describe('AddressApi', function() {
      describe('getByIdAddress', function() {
        it('should call getByIdAddress successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdAddress call and complete the assertions
          /*
          var opts = {};

          instance.getByIdAddress(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllAddressResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1AddressesAllGet', function() {
        it('should call tepsalesV1AddressesAllGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1AddressesAllGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1AddressesAllGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(TepsalesserviceApi.GetAllAddressResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1AddressesIdDelete', function() {
        it('should call tepsalesV1AddressesIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1AddressesIdDelete call
          /*
          var opts = {};

          instance.tepsalesV1AddressesIdDelete(id, opts, function(error, data, response) {
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
      describe('tepsalesV1AddressesIdPatch', function() {
        it('should call tepsalesV1AddressesIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1AddressesIdPatch call
          /*
          var opts = {};

          instance.tepsalesV1AddressesIdPatch(body, id, opts, function(error, data, response) {
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
      describe('tepsalesV1AddressesIdPut', function() {
        it('should call tepsalesV1AddressesIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1AddressesIdPut call
          /*
          var opts = {};

          instance.tepsalesV1AddressesIdPut(id, opts, function(error, data, response) {
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
      describe('tepsalesV1AddressesPagedGet', function() {
        it('should call tepsalesV1AddressesPagedGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1AddressesPagedGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1AddressesPagedGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllPagedAddressResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1AddressesPost', function() {
        it('should call tepsalesV1AddressesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1AddressesPost call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1AddressesPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.PostAddressResponse);

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
