# random-password
## for [Meteor](http://meteor.com)

A Meteor Package to generate a random password of specified length containing a mixture of upper and lowercase alpha-numeric characters, and the characters: !  #  $  %  &amp;  *  +  ?  ~  @

## usage:

```
meteor add nsardo:random-password
```

...

```
import { generateRandomPassword } from "meteor/nsardo:random-password";

//this will create a random password of length 8
let pw = generateRandomPassword( 8 );
```
