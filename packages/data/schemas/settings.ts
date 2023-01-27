import z from 'zod';
import { readFile, writeFile } from '../helpers';

const schema = z.object({
  discordWebhook: z.string().nullable(),
  licenseKey: z.string().nullable(),
  port: z.string().nullable(),
});

type Settings = z.infer<typeof schema>;

const fileName = 'settings.json';
const defaultData: Settings = {
  discordWebhook: null,
  licenseKey: null,
  port: null,
};

const read = readFile<Settings>({ fileName, defaultData, schema });
const write = writeFile<Settings>({ fileName, defaultData });

export { read, write };
