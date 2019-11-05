import { signsList } from './signList';

/** @constant
    @type {Object}
    @default
*/
export let oppositeSigns = {};

oppositeSigns[signsList.ARIES] = signsList.LIBRA;
oppositeSigns[signsList.LIBRA] = signsList.ARIES;

oppositeSigns[signsList.TAURUS] = signsList.SCORPIO;
oppositeSigns[signsList.SCORPIO] = signsList.TAURUS;

oppositeSigns[signsList.GEMINI] = signsList.SAGITTARIUS;
oppositeSigns[signsList.SAGITTARIUS] = signsList.GEMINI;

oppositeSigns[signsList.CANCER] = signsList.CAPRICORN;
oppositeSigns[signsList.CAPRICORN] = signsList.CANCER;

oppositeSigns[signsList.LEO] = signsList.AQUARIUS;
oppositeSigns[signsList.AQUARIUS] = signsList.LEO;

oppositeSigns[signsList.VIRGO] = signsList.PISCES;
oppositeSigns[signsList.PISCES] = signsList.VIRGO;

/**
 * This function returns a string which is the opposite sign of the sign passed into it.
 * @param {string} sign the name of the signs we want the opposite for.
 * @returns {{string|null}} the name of the opposite sign or null if it can't be found.
 */
export const getOppositeSign = (sign) => {
    if (oppositeSigns[sign]) {
        return oppositeSigns[sign];
    } else {
        return null;
    }
}

/**
 * This function confirms if the two signs are opposites.
 * @param {string} signA the name of the first sign.
 * @param {string} signA the name of the second sign.
 * @returns {boolean} wether the signs are opposite.
 */
export const areSignsOpposite = (signA, signB) => {
    return oppositeSigns[signA] === signB;
}

