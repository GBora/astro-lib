(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment')) :
    typeof define === 'function' && define.amd ? define(['exports', 'moment'], factory) :
    (global = global || self, factory(global.astro_lib = {}, global.moment));
}(this, (function (exports, moment) { 'use strict';

    moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

    /** @constant
        @type {Object}
        @default
    */
    const signsList = {
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
    };

    /** @constant
        @default
    */
    const signsInOrder = [
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

    const cardinalSigns = [signsList.ARIES, signsList.CANCER, signsList.LIBRA, signsList.CAPRICORN];
    const fixedSigns = [signsList.LEO, signsList.AQUARIUS, signsList.TAURUS, signsList.SCORPIO];
    const mutableSigns = [signsList.SAGITTARIUS, signsList.VIRGO, signsList.PISCES, signsList.GEMINI];

    const fireSigns = [signsList.ARIES, signsList.LEO, signsList.SAGITTARIUS];
    const earthSigns = [signsList.TAURUS, signsList.VIRGO, signsList.CAPRICORN];
    const airSigns = [signsList.GEMINI, signsList.LIBRA, signsList.AQUARIUS];

    // Months are 0 based, thanks js :|
    const signsRanges = [
        {
            startMonth: 2,
            startDay: 21,
            endMonth: 3,
            endDay: 20,
            sign: signsList.ARIES
        },
        {
            startMonth: 3,
            startDay: 21,
            endMonth: 4,
            endDay: 20,
            sign: signsList.TAURUS,
        },
        {
            startMonth: 4,
            startDay: 21,
            endMonth: 5,
            endDay: 20,
            sign: signsList.GEMINI,
        },
        {
            startMonth: 5,
            startDay: 21,
            endMonth: 6,
            endDay: 21,
            sign: signsList.CANCER,
        },
        {
            startMonth: 6,
            startDay: 22,
            endMonth: 7,
            endDay: 21,
            sign: signsList.LEO,
        },
        {
            startMonth: 7,
            startDay: 22,
            endMonth: 8,
            endDay: 21,
            sign: signsList.VIRGO,
        },
        {
            startMonth: 8,
            startDay: 22,
            endMonth: 9,
            endDay: 21,
            sign: signsList.LIBRA,
        },
        {
            startMonth: 9,
            startDay: 22,
            endMonth: 10,
            endDay: 21,
            sign: signsList.SCORPIO,
        },
        {
            startMonth: 10,
            startDay: 22,
            endMonth: 11,
            endDay: 21,
            sign: signsList.SAGITTARIUS,
        },
        {
            startMonth: 11,
            startDay: 22,
            endMonth: 0,
            endDay: 20,
            sign: signsList.CAPRICORN,
        },
        {
            startMonth: 0,
            startDay: 21,
            endMonth: 1,
            endDay: 19,
            sign: signsList.AQUARIUS,
        },
        {
            startMonth: 1,
            startDay: 20,
            endMonth: 2,
            endDay: 20,
            sign: signsList.PISCES,
        }
    ];

    /**
     * This function returns a string which is the astrological sign of a person born on that date.
     * @param {string} date a string representing the date.
     * @param {string} [format=YYYY-MM-DD] a optional string representing the format of the date, must be moment.js compatible.
     * @returns {{string|null}} the name of the sign or null if it can't be found.
     */
    const getSign = (date, format) => {
        try {
            format =  format || 'YYYY-MM-DD';
            let birthDate = moment(date, format);
            let birthDay = birthDate.date();
            let birthMonth =  birthDate.month();
            let result = null;
            signsRanges.forEach((range) => {
                if (range.startMonth === birthMonth) {
                    if (birthDay >= range.startDay) {
                        result = range.sign;
                    }
                }

                if (range.endMonth === birthMonth) {
                    if (birthDay <= range.endDay) {
                        result = range.sign;
                    }
                }
            });
            return result;
        } catch (e) {
            console.error(e);
            return null;
        }
    };

    /** @constant
        @type {Object}
        @default
    */
    let oppositeSigns = {};

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
    const getOppositeSign = (sign) => {
        if (oppositeSigns[sign]) {
            return oppositeSigns[sign];
        } else {
            return null;
        }
    };

    /**
     * This function confirms if the two signs are opposites.
     * @param {string} signA the name of the first sign.
     * @param {string} signA the name of the second sign.
     * @returns {boolean} wether the signs are opposite.
     */
    const areSignsOpposite = (signA, signB) => {
        return oppositeSigns[signA] === signB;
    };

    const modalities = {
        CARDINAL: 'Cardinal',
        FIXED: 'Fixed',
        MUTABLE: 'Mutable'
    };

    const elements = {
        FIRE: 'Fire',
        EARTH: 'Earth',
        WATER: 'Water',
        AIR: 'Air'
    };

    /**
     * This function returns a string which is the modality of the sign that was passed into it.
     * @param {string} sign the sign we want the modality for.
     * @returns {{string|null}} the modality or null if it can't be found.
     */
    const getModality = (sign) => {

        if (cardinalSigns.indexOf(sign) !== -1) {
            return modalities.CARDINAL;
        }

        if (fixedSigns.indexOf(sign) !== -1) {
            return modalities.FIXED;
        }

        if (mutableSigns.indexOf(sign) !== -1) {
            return modalities.MUTABLE;
        }

        return null
    };

    /**
     * This function returns a string which is the element of the sign that was passed into it.
     * @param {string} sign the sign we want the element for.
     * @returns {{string|null}} the element or null if it can't be found.
     */
    const getElement = (sign) => {

        if (fireSigns.indexOf(sign) !== -1) {
            return elements.FIRE;
        }

        if (earthSigns.indexOf(sign) !== -1) {
            return elements.EARTH;
        }

        if (airSigns.indexOf(sign) !== -1) {
            return elements.AIR;
        }

        if (waterSigns.indexOf(sign) !== -1) {
            return elements.WATER;
        }

        return null
    };

    /**
     * This function returns an object with all the data about the sign.
     * @param {string} sign the sign we want the info for.
     * @returns {object} an object with the data as fields.
     */
    const getCompleteSignInfo = (sign) => {
        return {
            modality: getModality(sign),
            element: getElement(sign),
        }
    };

    exports.areSignsOpposite = areSignsOpposite;
    exports.getCompleteSignInfo = getCompleteSignInfo;
    exports.getElement = getElement;
    exports.getModality = getModality;
    exports.getOppositeSign = getOppositeSign;
    exports.getSign = getSign;
    exports.signsInOrder = signsInOrder;
    exports.signsList = signsList;
    exports.signsRanges = signsRanges;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
