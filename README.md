# Minimal TDD framework for Codility tests in JS and Node

## Why?

The Codility web interface is pretty good, but it can't compete with a real text editor. Especially when it comes to customising your tests—you're limited to 10 for a start!

## How to use it?

### `test.js`

1. Think about what sort of output your function will need to return and adjust the assertion in line `21` accordingly. I based this on the sample test which has multiple correct answers, so it checks whether the output of the solution function is in an array of correct answers, but you might be able to use a simple `===` comparison.
1. Change the boilerplate test cases to have relevant descriptions, inputs and expected outputs (and add more).
1. Run with `node test.js`. I'm using node 6.4 like in the codility environment.
1. You should get helpful feedback in the terminal!

### `solution.js`

Change the boilerplate solution to pass the tests.

### `color.js`

Just adds some nice colors and bold style for easier identification of your failure.
