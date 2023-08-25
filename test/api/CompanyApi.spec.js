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
    instance = new TepsalesserviceApi.CompanyApi();
  });

  describe('(package)', function() {
    describe('CompanyApi', function() {
      describe('getByIdCompany', function() {
        it('should call getByIdCompany successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdCompany call and complete the assertions
          /*
          var opts = {};

          instance.getByIdCompany(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllCompanyResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1CompaniesAllGet', function() {
        it('should call tepsalesV1CompaniesAllGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CompaniesAllGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1CompaniesAllGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(TepsalesserviceApi.GetAllCompanyResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1CompaniesIdDelete', function() {
        it('should call tepsalesV1CompaniesIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CompaniesIdDelete call
          /*
          var opts = {};

          instance.tepsalesV1CompaniesIdDelete(id, opts, function(error, data, response) {
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
      describe('tepsalesV1CompaniesIdPatch', function() {
        it('should call tepsalesV1CompaniesIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CompaniesIdPatch call
          /*
          var opts = {};

          instance.tepsalesV1CompaniesIdPatch(body, id, opts, function(error, data, response) {
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
      describe('tepsalesV1CompaniesIdPut', function() {
        it('should call tepsalesV1CompaniesIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CompaniesIdPut call
          /*
          var opts = {};

          instance.tepsalesV1CompaniesIdPut(id, opts, function(error, data, response) {
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
      describe('tepsalesV1CompaniesPagedGet', function() {
        it('should call tepsalesV1CompaniesPagedGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CompaniesPagedGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1CompaniesPagedGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllPagedCompanyResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1CompaniesPost', function() {
        it('should call tepsalesV1CompaniesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1CompaniesPost call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1CompaniesPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.PostCompanyResponse);

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