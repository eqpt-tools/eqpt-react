import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import { appRouter } from './routers/_app';
import { createContext } from './trpc';

const IS_DEV = process.env.NODE_ENV === 'development';

export default {
  listen(port: number) {
    // Instantiate express server
    const app = express();

    // Logging middleware for dev
    if (IS_DEV)
      app.use((req, _res, next) => {
        // request logger
        console.log('⬅️ ', req.method, req.path, req.body ?? req.query);

        next();
      });

    // CORS midddleware to accept requests from localhost
    app.use(cors());

    // TRPC middleware to handle all requests to the `trpc` endpoint
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
      }),
    );

    app.listen(port, () => {
      if (IS_DEV) console.log('listening on', port);
    });
  },
};
