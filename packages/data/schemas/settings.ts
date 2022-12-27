import z from 'zod';
import { readFile, writeFile } from '../helpers';

const fileName = 'settings.json';

export interface Settings {
  discordWebhook: string | null;
  licenseKey: string | null;
  port: string | null;
}

const defaultData: Settings = {
  discordWebhook: null,
  licenseKey: null,
  port: null,
};

const schema = z.object({
  discordWebhook: z.string().nullable(),
  licenseKey: z.string().nullable(),
  port: z.string().nullable(),
});

const read = readFile<Settings>({ fileName, defaultData, schema });
const write = writeFile<Settings>({ fileName, defaultData });

export { read, write };
