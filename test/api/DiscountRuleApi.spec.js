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
    instance = new TepsalesserviceApi.DiscountRuleApi();
  });

  describe('(package)', function() {
    describe('DiscountRuleApi', function() {
      describe('getByIdDiscountRule', function() {
        it('should call getByIdDiscountRule successfully', function(done) {
          // TODO: uncomment, update parameter values for getByIdDiscountRule call and complete the assertions
          /*
          var opts = {};

          instance.getByIdDiscountRule(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllDiscountRuleResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1DiscountRulesAllGet', function() {
        it('should call tepsalesV1DiscountRulesAllGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DiscountRulesAllGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1DiscountRulesAllGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(TepsalesserviceApi.GetAllDiscountRuleResponse);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1DiscountRulesIdDelete', function() {
        it('should call tepsalesV1DiscountRulesIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DiscountRulesIdDelete call
          /*
          var opts = {};

          instance.tepsalesV1DiscountRulesIdDelete(id, opts, function(error, data, response) {
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
      describe('tepsalesV1DiscountRulesIdPatch', function() {
        it('should call tepsalesV1DiscountRulesIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DiscountRulesIdPatch call
          /*
          var opts = {};

          instance.tepsalesV1DiscountRulesIdPatch(body, id, opts, function(error, data, response) {
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
      describe('tepsalesV1DiscountRulesIdPut', function() {
        it('should call tepsalesV1DiscountRulesIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DiscountRulesIdPut call
          /*
          var opts = {};

          instance.tepsalesV1DiscountRulesIdPut(id, opts, function(error, data, response) {
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
      describe('tepsalesV1DiscountRulesPagedGet', function() {
        it('should call tepsalesV1DiscountRulesPagedGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DiscountRulesPagedGet call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1DiscountRulesPagedGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.GetAllPagedDiscountRuleResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tepsalesV1DiscountRulesPost', function() {
        it('should call tepsalesV1DiscountRulesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for tepsalesV1DiscountRulesPost call and complete the assertions
          /*
          var opts = {};

          instance.tepsalesV1DiscountRulesPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TepsalesserviceApi.PostDiscountRuleResponse);

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