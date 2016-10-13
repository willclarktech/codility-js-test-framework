const f = require( './solution.js' )
const { red, green } = require( './color.js' )

const cases = [
  {
    des: 'example array',
    inp: [-1, 3, -4, 5, 1, -6, 2, 1],
    out: [1, 3, 7],
  },
  {
    des: 'empty array',
    inp: [],
    out: [-1],
  },
]

const tests = cases
  .forEach(({ des, inp, out }) => {
    const a = f(inp)
    console.assert(
      out.includes(a),
      red(`${des}: ${out} does not include ${a}`)
    )
  })

console.info(green('checks out'))
