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
    describe('PurchaseOrderItem', function() {
      beforeEach(function() {
        instance = new TepsalesserviceApi.PurchaseOrderItem();
      });

      it('should create an instance of PurchaseOrderItem', function() {
        // TODO: update the code to test PurchaseOrderItem
        expect(instance).to.be.a(TepsalesserviceApi.PurchaseOrderItem);
      });

      it('should have the property product (base name: "product")', function() {
        // TODO: update the code to test the property product
        expect(instance).to.have.property('product');
        // expect(instance.product).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property weightTotal (base name: "weightTotal")', function() {
        // TODO: update the code to test the property weightTotal
        expect(instance).to.have.property('weightTotal');
        // expect(instance.weightTotal).to.be(expectedValueLiteral);
      });

      it('should have the property unitPrice (base name: "unitPrice")', function() {
        // TODO: update the code to test the property unitPrice
        expect(instance).to.have.property('unitPrice');
        // expect(instance.unitPrice).to.be(expectedValueLiteral);
      });

      it('should have the property unitPriceQtd (base name: "unitPriceQtd")', function() {
        // TODO: update the code to test the property unitPriceQtd
        expect(instance).to.have.property('unitPriceQtd');
        // expect(instance.unitPriceQtd).to.be(expectedValueLiteral);
      });

      it('should have the property unitTotalPrice (base name: "unitTotalPrice")', function() {
        // TODO: update the code to test the property unitTotalPrice
        expect(instance).to.have.property('unitTotalPrice');
        // expect(instance.unitTotalPrice).to.be(expectedValueLiteral);
      });

      it('should have the property percDiscountCommission (base name: "percDiscountCommission")', function() {
        // TODO: update the code to test the property percDiscountCommission
        expect(instance).to.have.property('percDiscountCommission');
        // expect(instance.percDiscountCommission).to.be(expectedValueLiteral);
      });

      it('should have the property valueDiscount (base name: "valueDiscount")', function() {
        // TODO: update the code to test the property valueDiscount
        expect(instance).to.have.property('valueDiscount');
        // expect(instance.valueDiscount).to.be(expectedValueLiteral);
      });

      it('should have the property percDiscount (base name: "percDiscount")', function() {
        // TODO: update the code to test the property percDiscount
        expect(instance).to.have.property('percDiscount');
        // expect(instance.percDiscount).to.be(expectedValueLiteral);
      });

      it('should have the property useValueDiscount (base name: "useValueDiscount")', function() {
        // TODO: update the code to test the property useValueDiscount
        expect(instance).to.have.property('useValueDiscount');
        // expect(instance.useValueDiscount).to.be(expectedValueLiteral);
      });

      it('should have the property discountType (base name: "discountType")', function() {
        // TODO: update the code to test the property discountType
        expect(instance).to.have.property('discountType');
        // expect(instance.discountType).to.be(expectedValueLiteral);
      });

      it('should have the property discountByWeight (base name: "discountByWeight")', function() {
        // TODO: update the code to test the property discountByWeight
        expect(instance).to.have.property('discountByWeight');
        // expect(instance.discountByWeight).to.be(expectedValueLiteral);
      });

      it('should have the property discountTotal (base name: "discountTotal")', function() {
        // TODO: update the code to test the property discountTotal
        expect(instance).to.have.property('discountTotal');
        // expect(instance.discountTotal).to.be(expectedValueLiteral);
      });

    });
  });

}));
