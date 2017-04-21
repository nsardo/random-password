
import { chai } from 'meteor/practicalmeteor:chai'; 

import { generateRandomPassword } from "meteor/nsardo:random-password";


let should = chai.should();

describe( 'Password Generation', function() {

  it( 'generates a password of length 5', function(){
    let pw = generateRandomPassword( 5 );
    chai.assert.equal(pw.length, 5, 'length is 5');
  });

  it( 'generates a password of length 8', function(){
    let pw = generateRandomPassword( 8 );
    pw.should.have.lengthOf( 8 );
  });

  it( 'should be of type string', function(){
    let pw = generateRandomPassword( 8 );
    pw.should.be.a('string');
  })

})