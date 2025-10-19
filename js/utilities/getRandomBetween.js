/**
 * Random Between (min,max)
 * @param {number} min The minimum range value
 * @param {number} max The maximum range value
 * 
 * @return {number} Random number between range given
 */

export const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
}