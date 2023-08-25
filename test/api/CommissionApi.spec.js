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
    instance = new TepsalesserviceApi.CommissionApi();
  });

  describe('(package)', function() {
    describe('CommissionApi', function() {
      describe('getByIdCommission', function() {
        it('should call getByIdCommission successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdCommission call and complete the assertions
          /*
          var opts = {};

          instance.getByIdCommission(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllCommissionResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1CommissionsAllGet', function() {
        it('should call tepsalesV1CommissionsAllGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CommissionsAllGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1CommissionsAllGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(TepsalesserviceApi.GetAllCommissionResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1CommissionsIdDelete', function() {
        it('should call tepsalesV1CommissionsIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CommissionsIdDelete call
          /*
          var opts = {};

          instance.tepsalesV1CommissionsIdDelete(id, opts, function(error, data, response) {
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
      describe('tepsalesV1CommissionsIdPatch', function() {
        it('should call tepsalesV1CommissionsIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CommissionsIdPatch call
          /*
          var opts = {};

          instance.tepsalesV1CommissionsIdPatch(body, id, opts, function(error, data, response) {
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
      describe('tepsalesV1CommissionsIdPut', function() {
        it('should call tepsalesV1CommissionsIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CommissionsIdPut call
          /*
          var opts = {};

          instance.tepsalesV1CommissionsIdPut(id, opts, function(error, data, response) {
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
      describe('tepsalesV1CommissionsPagedGet', function() {
        it('should call tepsalesV1CommissionsPagedGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CommissionsPagedGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1CommissionsPagedGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllPagedCommissionResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1CommissionsPost', function() {
        it('should call tepsalesV1CommissionsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CommissionsPost call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1CommissionsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.PostCommissionResponse);

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
