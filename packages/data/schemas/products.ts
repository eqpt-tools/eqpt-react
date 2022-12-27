import * as yup from 'yup';
import { readFile, writeFile } from '../helpers';

const fileName = 'variants.json';

export interface ProductVariant {
  id: string;
  stock?: number;
  title: string;
}

export interface Product {
  id: string;
  image?: string;
  store: string;
  title: string;
  url: string;
  variants: Array<ProductVariant>;
}

const defaultData: Product[] = [];

const schema = yup.array().of(
  yup.object().shape({
    id: yup.string().required(),
    store: yup.string().required(),
    url: yup.string().required(),
    title: yup.string().required(),
    image: yup.string(),
    variants: yup.array().of(
      yup.object().shape({
        id: yup.string().required(),
        title: yup.string().required(),
        stock: yup.number().notRequired().default(undefined),
      }),
    ),
  }),
);

const read = readFile<Product[]>({ fileName, defaultData, schema });
const write = writeFile<Product[]>({ fileName, defaultData });

export { read, write };
