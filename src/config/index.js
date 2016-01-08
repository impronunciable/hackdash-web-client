
let config

try {
  config = require('./config')
} catch (e) {}

export default Object.assign({}, config)
