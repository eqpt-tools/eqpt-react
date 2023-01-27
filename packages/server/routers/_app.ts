import { router } from '../trpc';
import { settingsRouter } from './settings';
import { productsRouter } from './products';
import { marketRouter } from './market';

export const appRouter = router({
  settings: settingsRouter,
  products: productsRouter,
  market: marketRouter,
});

export type AppRouter = typeof appRouter;
