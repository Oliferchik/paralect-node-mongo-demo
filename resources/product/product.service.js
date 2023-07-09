const db = require('../../db');
const constants = require('../../app.constants');

const validateSchema = require('./product.schema');

const service = db.createService(constants.DATABASE_DOCUMENTS.PRODUCTS, { validate: validateSchema });


module.exports = service;