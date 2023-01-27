import z from 'zod';
import { read, write } from '@local/data/schemas/market';
import market from '../services/market';
import { router, publicProcedure } from '../trpc';

export const marketRouter = router({
  list: publicProcedure.query(() => {
    return read();
  }),
  create: publicProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      console.log(`market -> create -> ${input.query}`);

      const marketData = await market(input.query);
      const products = await read();

      if (!marketData) return products;

      await write([marketData, ...products]);

      return marketData;
    }),
});
