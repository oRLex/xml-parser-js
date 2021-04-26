export const generateNumber: (min: number, max: number) => number = (min, max) => {
    const delta: number = max - min;
    return  Math.ceil(Math.random()*(delta + 1 ) + min);
}