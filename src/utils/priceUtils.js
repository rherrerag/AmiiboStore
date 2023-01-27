/**
 * Funcion retorna un precio simulado
 * a partir de un rango y por múltiplos de 10
 * @param {*} min int
 * @param {*} max int
 */
const randomPrice = (min, max) => Math.floor(Math.random() * (max - min)) * 10;

export {randomPrice};
