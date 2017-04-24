# random-password
## for [Meteor](http://meteor.com)

A Meteor Package to generate a random password of specified length containing a mixture of upper and lowercase alpha-numeric characters, and the characters: !  #  $  %  &amp;  *  +  ?  ~  @

*DEFAULT*:  Return alpha-numeric characters, roughly 80% chance for each letter
            Return special characters, roughly 20% chance for each letter

            generateRandomPassword( length [,special_chars_percent_chance] )
            where length is the number of characters desired in the password
                  special_chars_percent_chance is OPTIONAL, and if not included, defaults to 20 (for 20% chance)
            NOTE for **special_chars_percent_chance**, desired percentage chance should be a WHOLE NUMBER, i.e. 25 for 25%

## usage:

```
meteor add nsardo:random-password
```

...

```
import { generateRandomPassword } from "meteor/nsardo:random-password";

// this will create a random password of length 8, and 
// a 20% chance of special chars for each letter
let pw = generateRandomPassword( 8 );
```
OR
```
// this will create a random password of length 8, special characters 
// having a 50% chance of showing up each letter
let pw = generateRandomPassword( 8, 50 );
```
