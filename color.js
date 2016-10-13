const redCode = '\x1b[31m'
const greenCode = '\x1b[32m'
const boldCode = '\x1b[1m'
const normalCode = '\x1b[36m'

const applyColor = (colorCode, s) => `${boldCode}${colorCode}${s}${normalCode}`

const red = applyColor.bind(null, redCode)
const green = applyColor.bind(null, greenCode)

module.exports = { red, green }
