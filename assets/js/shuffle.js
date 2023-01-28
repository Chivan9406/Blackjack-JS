export function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (currentIndex !== 0) {
        // Seleccionar un elemento quedando...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Intercambiarlo con el elemento actual
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}