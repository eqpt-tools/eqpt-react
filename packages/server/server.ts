import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './routers/_app';
import { createContext } from './trpc';

export default {
  listen() {
    // express implementation
    const app = express();

    app.use((req, _res, next) => {
      // request logger
      console.log('⬅️ ', req.method, req.path, req.body ?? req.query);

      next();
    });

    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
      }),
    );

    app.get('/', (_req, res) => res.send('hello'));

    app.listen(2021, () => {
      console.log('listening on port 2021');
    });
  },
};
