import * as typeorm from 'typeorm';
import { Product } from './entities/Product';
import { ProductImage } from './entities/ProductImage';

let db: typeorm.Connection | undefined = null
export default db

export function connectToDatabase() {
  return typeorm.createConnection({
    type: 'sqlite',
    database: './db.sqlite',
    synchronize: true,
    logging: true,
    entities: [
      Product,
      ProductImage
    ]
  })
}
