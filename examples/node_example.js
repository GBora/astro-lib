const astro_lib = require('../dist/astro-lib.js');

console.log(astro_lib.getSign('02/04/1989', 'DD/MM/YYYY'));
console.log(astro_lib.getCompleteSignInfo(astro_lib.signsList.GEMINI));