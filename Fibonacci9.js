/*Create a JavaScript function to generate the Fibonacci sequence using memoization to improve performance. */

function generateFibonacciSequence(n) {
    let memo = {};

    function fibonacci(num) {
        if (num <= 0) {
            return 0;
        } else if (num === 1) {
            return 1;
        } else if (memo[num]) {
            return memo[num];
        } else {
            memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
            return memo[num];
        }
    }

    let sequence = [];
    for (var i = 0; i < n; i++) {
        sequence.push(fibonacci(i));
    }

    return sequence;
}

function main() {
    let n = 10;
    let fibonacciSequence = generateFibonacciSequence(n);
    console.log(fibonacciSequence);
}
main();