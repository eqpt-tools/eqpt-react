import { read, write } from '@local/data/schemas/settings';
import z from 'zod';
import { router, publicProcedure } from '../trpc';

export const settingsRouter = router({
  retrieve: publicProcedure.query(() => {
    return read();
  }),
  login: publicProcedure
    .input(
      z.object({
        licenseKey: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      console.log(`auth -> login -> ${input.licenseKey}`);

      await write({
        ...(await read()),
        licenseKey: input.licenseKey,
      });

      return read();
    }),
});
