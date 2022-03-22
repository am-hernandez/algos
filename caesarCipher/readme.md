# Caesar Cipher

**to cipher**

Create a function that will receive a string message and a key number as input and return an encoded version of the message. A message is encoded by replacing each letter in the message with the letter that is a specified number (the key argument) of letters before it in the alphabet. When shifting, if the selection goes beyond the first letter of the alphabet you should continue counting from the last letter of the alphabet. Encoded messages should be returned in all upper case.

**to decipher**

Following similar steps as above, now create a function to decipher an encoded message when given a string secret and a number key!

### Examples

**cipher**

```javascript
// example 1

> message = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG";
> key = 3;

> caesarCipher(message, key);

QEB NRFZH YOLTK CLU GRJMBA LSBO QEB IXWV ALD

// example 2

> message2 = "Have you ever heard of The Byzantine Generals problem?";
> key2 = 19;

> caesarCipher(message2, key2);

OHCL FVB LCLY OLHYK VM AOL IFGHUAPUL NLULYHSZ WYVISLT?

// example 3

> message3 = "They saw about 5 wolves circling the field!";
> key3 = 99;

> caesarCipher(message3, key3);

YMJD XFB FGTZY 5 BTQAJX HNWHQNSL YMJ KNJQI!
```

**decipher**

```javascript
// example 1

> secret = "QEB NRFZH YOLTK CLU GRJMBA LSBO QEB IXWV ALD";
> key = 3;

> caesarDecipher(secret, key);
THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG


// example 2

> secret2 = "OHCL FVB LCLY OLHYK VM AOL IFGHUAPUL NLULYHSZ WYVISLT?";
> key2 = 19;

> caesarDecipher(secret2, key2);

HAVE YOU EVER HEARD OF THE BYZANTINE GENERALS PROBLEM?

// example 3

> secret3 = "YMJD XFB FGTZY 5 BTQAJX HNWHQNSL YMJ KNJQI!";
> key3 = 99;

> caesarDecipher(secret3, key3);

THEY SAW ABOUT 5 WOLVES CIRCLING THE FIELD!
```
