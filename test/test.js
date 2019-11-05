const expect  = require('chai').expect;
const astro_lib = require('../dist/astro-lib.js');

it('library should export array with 12 zodiac signs', function(done) {
    expect(astro_lib.signsInOrder.length).to.equal(12);
    done();
});

it('library should have Aries as first sign', function(done) {
    expect(astro_lib.signsInOrder[0]).to.equal('Aries');
    done();
});

it('library should export sign Libra', function(done) {
    expect(astro_lib.signsList.LIBRA).to.equal('Libra');
    done();
});

it('library should correctly get sign from a birthday', function(done) {
    expect(astro_lib.getSign('02/04/1989', 'DD/MM/YYYY')).to.equal(astro_lib.signsList.ARIES);
    done();
});

it('library should correctly give the opposite sign', function(done) {
    expect(astro_lib.getOppositeSign(astro_lib.signsList.LIBRA)).to.equal(astro_lib.signsList.ARIES);
    done();
});

it('library should correctly dettermine opposite signs', function(done) {
    expect(astro_lib.areSignsOpposite(astro_lib.signsList.LEO, astro_lib.signsList.AQUARIUS)).to.equal(true);
    done();
});