"use strict";
exports.__esModule = true;
// Simple type anotation
var x = 1;
var fullName = "Hugo Perdomo";
var collection = [1, 4, 6, 2, 4];
/**
 * More detailed annotation for functions and lambdas
 * @param a a number
 * @param b a number
 * @returns the sum of a and b
 */
exports.sum = function (a, b) { return a + b; };
/**
 * An implementation of the forEach method
 * @param arr an array
 * @param cb a callback function
 * @returns nothing, its a middleware type of deal
 */
var forEach = function (arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
};
/**
 * Logs a message on the console, demonstrates optional params
 * @param msg A message to be logged on the console
 */
var logger = function (msg) {
    console.log("[CheckPoint] " + (msg ? msg : "not defined"));
};
logger();
forEach(collection, function (item, index) {
    console.log("Item " + item + " found in position " + index);
});
