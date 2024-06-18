 console.log(null >0);
 console.log(null < 0);
 console.log(null >=0);
 // avoid this type of conversions
 // try to do clean code

 /* The reason is that an equality check == and comparisions > < >= and <= works differntly.
 Comparisions convert null to a number, treating it as a 0.
 that's why (3) null >= is true and (1) null >0 is false */

 // "===" this opeartor  strictly checks before coverting