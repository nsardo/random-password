/**
 * @author Nicholas Sardo <nsardo@aol.com>
 */



/***********************************************
 * RANDOM PASSWORD GENERATOR
 ***********************************************
 *
 * let len = 5;
 * let password = generateRandomPassword( len );
 *
 **********************************************/
export function generateRandomPassword( len ) {
  let pw    = ''
  
      //        !  #  $  %  &  *  +  ?  ~   @
    , punc  =  [33,35,36,37,38,42,43,63,64,126];
    
    
  do {   
    //RETURN PUNC CHARACTER 20% OF THE TIME
    if (  Math.floor( ( Math.random() * 100 ) + 1 ) <= 20  ) {
      let pran = Math.floor( ( Math.random() * 9 ));    //0 - 9
      pw += String.fromCharCode( punc[ pran ] );
    } else {
      //80% OF THE TIME RETURN EITHER UPPER OR LOWER CASE LETTER
      pw += returnRandomLetterAndCase(); 
    }
  } while ( pw.length != len ); //x CHARACTER PASSWORDS RETURNED
  
  return pw; //RETURN CREATED PASSWORD
}

function returnRandomLetterAndCase() {
  let lran = Math.floor( ( Math.random() * 25 )) + 97  //LOWERCASE LETTER
    , uran = Math.floor( ( Math.random() * 25 )) + 65  //UPPERCASE LETTER
    , l = '';

  if ( Math.floor( ( Math.random() * 100 ) + 1 ) <= 51  ) {
    l = String.fromCharCode( lran );            
  } else if ( Math.floor(  ( Math.random() * 100 ) + 1 ) > 52 ) {
    l = String.fromCharCode( uran );
  }
  return l;
}
