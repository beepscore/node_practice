var assert = require("assert");
var should = require("should");
var function_args = require('../function_args');

describe('function_args', function(){

  describe('#addTwo', function(){

    it('should return number incremented by 2', function() {
      var x = 3;
      var expectedResult = 5;
      var actualResult = function_args.addTwo(x);
      assert.equal(actualResult, expectedResult,
             "expected " + expectedResult + " but got " + actualResult);

      assert.equal(x, 3,
             "expected in caller scope, argument value unchanged");
    });

  });

});

