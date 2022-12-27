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
});
