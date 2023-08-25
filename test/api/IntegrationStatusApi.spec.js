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
    instance = new TepsalesserviceApi.IntegrationStatusApi();
  });

  describe('(package)', function() {
    describe('IntegrationStatusApi', function() {
      describe('getByIdIntegrationStatus', function() {
        it('should call getByIdIntegrationStatus successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdIntegrationStatus call and complete the assertions
          /*
          var opts = {};

          instance.getByIdIntegrationStatus(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllIntegrationStatusResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1IntegrationStatusAllGet', function() {
        it('should call tepsalesV1IntegrationStatusAllGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1IntegrationStatusAllGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1IntegrationStatusAllGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(TepsalesserviceApi.GetAllIntegrationStatusResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1IntegrationStatusIdDelete', function() {
        it('should call tepsalesV1IntegrationStatusIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1IntegrationStatusIdDelete call
          /*
          var opts = {};

          instance.tepsalesV1IntegrationStatusIdDelete(id, opts, function(error, data, response) {
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
      describe('tepsalesV1IntegrationStatusIdPatch', function() {
        it('should call tepsalesV1IntegrationStatusIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1IntegrationStatusIdPatch call
          /*
          var opts = {};

          instance.tepsalesV1IntegrationStatusIdPatch(body, id, opts, function(error, data, response) {
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
      describe('tepsalesV1IntegrationStatusIdPut', function() {
        it('should call tepsalesV1IntegrationStatusIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1IntegrationStatusIdPut call
          /*
          var opts = {};

          instance.tepsalesV1IntegrationStatusIdPut(id, opts, function(error, data, response) {
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
      describe('tepsalesV1IntegrationStatusPagedGet', function() {
        it('should call tepsalesV1IntegrationStatusPagedGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1IntegrationStatusPagedGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1IntegrationStatusPagedGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllPagedIntegrationStatusResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1IntegrationStatusPost', function() {
        it('should call tepsalesV1IntegrationStatusPost successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1IntegrationStatusPost call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1IntegrationStatusPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.PostIntegrationStatusResponse);

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
