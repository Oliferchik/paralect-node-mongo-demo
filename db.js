const CONNECTION_STRING = '';

const db = require('@paralect/node-mongo').connect(CONNECTION_STRING);

module.exports = db;