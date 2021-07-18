const checkFive = require('../checkFive.js');
const assert = require('assert');


describe("checkFive", function(){

   it("returns 'num less than 5' when num is < 5", function(){
     let output = checkFive(2);
      expect(output).toEqual('2 is less than 5.');
   });

  it("returns 'num is greater than 5' when num is > 5", function(){
     let output = checkFive(6);
      expect(output).toEqual('6 is less than 5.');
   });

 it("returns 'num is equal to 5' when num is === 5", function(){
     let output = checkFive(5);
      expect(output).toEqual('5 is equal to 5.');
   });

});