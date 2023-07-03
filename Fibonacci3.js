/*Create a JavaScript function to calculate the sum of the Fibonacci sequence up to a given number of terms.*/

function calculateFibonacciSum(numTerms) {
    let sum = 0;
    let fibonacciSequence = [0, 1];

    if (numTerms === 1) {
        return fibonacciSequence[0];
    } else if (numTerms === 2) {
        return fibonacciSequence[0] + fibonacciSequence[1];
    } else {
        sum = fibonacciSequence[0] + fibonacciSequence[1];

        for (var i = 2; i < numTerms; i++) {
            var nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
            fibonacciSequence.push(nextTerm);
            sum += nextTerm;
        }
    }

    return sum;
}

function main() {
    let numTerms = 10;
    let fibonacciSum = calculateFibonacciSum(numTerms);
    console.log(fibonacciSum);
}
main();