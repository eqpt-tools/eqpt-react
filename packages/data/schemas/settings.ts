import * as yup from 'yup';
import { Settings } from '@local/graphql/dist';
import { readFile, writeFile } from '../helpers';

const fileName = 'settings.json';

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
