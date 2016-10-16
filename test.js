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
    const before = new Date()
    const a = f(inp)
    console.log(`Ran function in ${new Date() - before}ms: ${des}`)
    console.assert(
      out.includes(a),
      red(`${des}: answer ${a} not found in [${out}]`)
    )
  })

console.info(green('checks out'))
