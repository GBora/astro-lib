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
     * This function returns a string which is the astrological sign of a person born on that date
     * @param {string} date a string representing the date
     * @param {string} [format=YYYY-MM-DD] a optional string representing the format of the date, must be moment.js compatible
     * @returns {string} the name of the sign.
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

    exports.getSign = getSign;
    exports.signsInOrder = signsInOrder;
    exports.signsList = signsList;
    exports.signsRanges = signsRanges;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
