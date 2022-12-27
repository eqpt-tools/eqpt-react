import { router } from '../trpc';
import { settingsRouter } from './settings';
import { productsRouter } from './products';

export const appRouter = router({
  settings: settingsRouter,
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
