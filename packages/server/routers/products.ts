import { read, write } from '@local/data/schemas/products';
import z from 'zod';
import { router, publicProcedure } from '../trpc';
import { retrieveProduct } from '../services/products';

export const productsRouter = router({
  list: publicProcedure.query(() => {
    return read();
  }),
  create: publicProcedure
    .input(
      z.object({
        url: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      console.log(`products -> create -> ${input.url}`);

      const product = await retrieveProduct(input.url);
      const products = await read();

      await write([product, ...products]);

      return product;
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      console.log(`products -> delete -> ${input.id}`);

      const products = await read();
      const product = products.find((p) => p.id === input.id);

      await write(products.filter((p) => p.id !== input.id));

      return product;
    }),
});
