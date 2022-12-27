import { read, write } from '@local/data/schemas/products';
import { retrieveProduct } from '../services/products';

export default {
  queries: {
    products: async function getProducts() {
      const products = await read();

      return products;
    },
  },
  mutations: {
    addProduct: async function addProduct(_parent, args) {
      console.log(`products -> addProduct -> ${args.url}`);

      const product = await retrieveProduct(args.url);
      const products = await read();

      await write([product, ...products]);

      return product;
    },
  },
};
