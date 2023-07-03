/*1.	Write a JavaScript function to generate the Fibonacci sequence up to a given number of terms.*/
function generateFibonacciSequence(numTerms) {
    let fibonacciSequence = [];

    if (numTerms === 1) {
        fibonacciSequence.push(0);
    } else if (numTerms === 2) {
        fibonacciSequence.push(0, 1);
    } else {
        fibonacciSequence.push(0, 1);

        for (var i = 2; i < numTerms; i++) {
            var nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
            fibonacciSequence.push(nextTerm);
        }
    }

    return fibonacciSequence;
}

function main() {
    let numTerms = 5;
    let fibonacciSequence = generateFibonacciSequence(numTerms);
    console.log(fibonacciSequence);
}
main();