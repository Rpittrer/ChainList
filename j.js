const _ = require('lodash');
const { PerformanceObserver, performance } = require('perf_hooks');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16];
const limit = 10 ** 6;

console.log('Builtin');

var es0 = performance.now();

for (let i = 0; i < limit; i++) {
    arr.reduce((total, n) => total + n);
}

var es1 = performance.now();

console.log('Calling builtin took ' + (es1 - es0) + ' milliseconds.');

console.log('lodash');

var t0 = performance.now();

for (let i = 0; i < limit; i++) {
    _.reduce(arr, (total, n) => total + n, 0);
}

var t1 = performance.now();

console.log('Calling lodash took ' + (t1 - t0) + ' milliseconds.');
