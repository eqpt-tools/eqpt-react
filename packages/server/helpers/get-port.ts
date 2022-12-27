import { read, write } from '@local/data/schemas/settings';

/**
 * A function to randomly choose a port
 */
export default async function getPort() {
  const port = Math.floor(10000 + Math.random() * 50000);

  await write({
    ...(await read()),
    port: port.toString(),
  });

  return port;
}
