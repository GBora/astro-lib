const astro_lib = require('../dist/astro-lib.js');

console.log(astro_lib.getSign('02/04/1989', 'DD/MM/YYYY'));
console.log(astro_lib.signsList.LIBRA);
console.log(astro_lib.signsInOrder[3]);
console.log(astro_lib.getOppositeSign(astro_lib.signsList.CANCER));