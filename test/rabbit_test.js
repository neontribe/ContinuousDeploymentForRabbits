var expect = require('chai').expect;
var Rabbit = require('../app/rabbit.js');


describe('A Rabbit', function(){

  it('should be productive when invoked as a constructor', function(){
    var rabbit = new Rabbit();
    expect(rabbit).to.be.an.instanceOf(Rabbit);
  });

  it('should have a "pics" property containing an array', function(){
    var rabbit = new Rabbit();
    expect(rabbit.pics).to.be.an.instanceOf(Array);
    expect(rabbit.pics).to.have.length.above(0);
  });

  it('should have a "sounds" property containing an array', function(){
    var rabbit = new Rabbit();
    expect(rabbit.sounds).to.be.an.instanceOf(Array);
    expect(rabbit.sounds).to.have.length.above(0);
  });

});
