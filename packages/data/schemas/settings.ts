import * as yup from 'yup';
import { readFile, writeFile } from '../helpers';

const fileName = 'settings.json';

export interface Settings {
  discordWebhook?: string;
  licenseKey?: string;
  port?: string;
}

const defaultData: Settings = {
  discordWebhook: null,
  licenseKey: null,
  port: null,
};

const schema = yup.object().shape({
  discordWebhook: yup.string().nullable(),
  licenseKey: yup.string().nullable(),
  port: yup.string().nullable(),
});

const read = readFile<Settings>({ fileName, defaultData, schema });
const write = writeFile<Settings>({ fileName, defaultData });

export { read, write };
