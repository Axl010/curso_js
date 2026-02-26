
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck
 * @returns {String} Ejemplo: 4D
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    return carta;
    // return deck.pop(); Refactor
}