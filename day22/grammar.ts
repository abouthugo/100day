// Simple type anotation
let x: number = 1;
let fullName: string = "Hugo Perdomo";
let collection: number[] = [1, 4, 6, 2, 4];

/**
 * More detailed annotation for functions and lambdas
 * @param a a number
 * @param b a number
 * @returns the sum of a and b
 */
export const sum = (a: number, b: number) => a + b;

/**
 * An implementation of the forEach method 
 * @param arr an array
 * @param cb a callback function
 * @returns nothing, its a middleware type of deal
 */
const forEach: (arr: Array<any>, cb: Function) => void = (arr, cb) => {
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i], i, arr);
	}
};

/**
 * Logs a message on the console, demonstrates optional params
 * @param msg A message to be logged on the console
 */
const logger = (msg?: string) => {
    console.log(`[CheckPoint] ${msg ? msg: "not defined"}`)
}

logger();
forEach(collection, (item: number, index: number) => {
	console.log(`Item ${item} found in position ${index}`);
});
