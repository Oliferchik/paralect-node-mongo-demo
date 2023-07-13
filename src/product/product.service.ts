import schema from './product.schema';
import { Product } from './product.types';
import db from '../db';
import { DATABASE_DOCUMENTS } from '../app.constants';


const service = db.createService<Product>(DATABASE_DOCUMENTS.PRODUCTS, {
  schemaValidator: (obj) => schema.parseAsync(obj),
});

export default service;