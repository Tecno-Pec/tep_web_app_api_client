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
    instance = new TepsalesserviceApi.ClientApi();
  });

  describe('(package)', function() {
    describe('ClientApi', function() {
      describe('getByIdClient', function() {
        it('should call getByIdClient successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdClient call and complete the assertions
          /*
          var opts = {};

          instance.getByIdClient(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllClientResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1ClientsAllGet', function() {
        it('should call tepsalesV1ClientsAllGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1ClientsAllGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1ClientsAllGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(TepsalesserviceApi.GetAllClientResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1ClientsIdDelete', function() {
        it('should call tepsalesV1ClientsIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1ClientsIdDelete call
          /*
          var opts = {};

          instance.tepsalesV1ClientsIdDelete(id, opts, function(error, data, response) {
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
      describe('tepsalesV1ClientsIdPatch', function() {
        it('should call tepsalesV1ClientsIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1ClientsIdPatch call
          /*
          var opts = {};

          instance.tepsalesV1ClientsIdPatch(body, id, opts, function(error, data, response) {
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
      describe('tepsalesV1ClientsIdPut', function() {
        it('should call tepsalesV1ClientsIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1ClientsIdPut call
          /*
          var opts = {};

          instance.tepsalesV1ClientsIdPut(id, opts, function(error, data, response) {
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
      describe('tepsalesV1ClientsPagedGet', function() {
        it('should call tepsalesV1ClientsPagedGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1ClientsPagedGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1ClientsPagedGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllPagedClientResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1ClientsPost', function() {
        it('should call tepsalesV1ClientsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1ClientsPost call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1ClientsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.PostClientResponse);

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
