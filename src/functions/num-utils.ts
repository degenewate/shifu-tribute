/**
 * Generates a random int bw limit and 1 
 * @param limit - max limit for func
 */
export function RandNum(limit: number): number{
    return Math.round((Math.random() * limit) + 1) 
}


/**
 * Generates a random int bw min and max
 * @param min - min limit for func
 * @param max - max limit for func
 */
export function RandNumRange(min: number , max: number): number{
    return Math.round((Math.random() * max) + min) 
}