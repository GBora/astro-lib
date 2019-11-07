import { signsList, cardinalSigns, fixedSigns, mutableSigns, fireSigns, earthSigns, watersigns, airSigns } from './signList';

const modalities = {
    CARDINAL: 'Cardinal',
    FIXED: 'Fixed',
    MUTABLE: 'Mutable'
}

const elements = {
    FIRE: 'Fire',
    EARTH: 'Earth',
    WATER: 'Water',
    AIR: 'Air'
}

/**
 * This function returns a string which is the modality of the sign that was passed into it.
 * @param {string} sign the sign we want the modality for.
 * @returns {{string|null}} the modality or null if it can't be found.
 */
export const getModality = (sign) => {

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
}

/**
 * This function returns a string which is the element of the sign that was passed into it.
 * @param {string} sign the sign we want the element for.
 * @returns {{string|null}} the element or null if it can't be found.
 */
export const getElement = (sign) => {

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
}

/**
 * This function returns an object with all the data about the sign.
 * @param {string} sign the sign we want the info for.
 * @returns {object} an object with the data as fields.
 */
export const getCompleteSignInfo = (sign) => {
    return {
        modality: getModality(sign),
        element: getElement(sign),
    }
}

