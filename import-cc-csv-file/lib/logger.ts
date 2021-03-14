const bunyan = require("bunyan")

const logger = bunyan.createLogger({ name: "main" })

module.exports = logger
