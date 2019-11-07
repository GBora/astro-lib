/** @constant
    @type {Object}
    @default
*/
export const signsList = {
    ARIES: 'Aries',
    TAURUS: 'Taurus',
    GEMINI: 'Gemini',
    CANCER: 'Cancer',
    LEO: 'Leo',
    VIRGO: 'Virgo',
    LIBRA: 'Libra',
    SCORPIO: 'Scorpio',
    SAGITTARIUS: 'Sagittarius',
    CAPRICORN: 'Capricorn',
    AQUARIUS: 'Aquarius',
    PISCES: 'Pisces'
}

/** @constant
    @default
*/
export const signsInOrder = [
    signsList.ARIES,
    signsList.TAURUS,
    signsList.GEMINI,
    signsList.CANCER,
    signsList.LEO,
    signsList.VIRGO,
    signsList.LIBRA,
    signsList.SCORPIO,
    signsList.SAGITTARIUS,
    signsList.CAPRICORN,
    signsList.AQUARIUS,
    signsList.PISCES,
];

export const cardinalSigns = [signsList.ARIES, signsList.CANCER, signsList.LIBRA, signsList.CAPRICORN];
export const fixedSigns = [signsList.LEO, signsList.AQUARIUS, signsList.TAURUS, signsList.SCORPIO];
export const mutableSigns = [signsList.SAGITTARIUS, signsList.VIRGO, signsList.PISCES, signsList.GEMINI];

export const fireSigns = [signsList.ARIES, signsList.LEO, signsList.SAGITTARIUS];
export const earthSigns = [signsList.TAURUS, signsList.VIRGO, signsList.CAPRICORN];
export const airSigns = [signsList.GEMINI, signsList.LIBRA, signsList.AQUARIUS];
export const watersigns = [signsList.CANCER, signsList.SCORPIO, signsList.PISCES];