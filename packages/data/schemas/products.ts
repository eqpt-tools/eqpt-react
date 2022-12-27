import z from 'zod';
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

const schema = z.array(
  z.object({
    id: z.string(),
    store: z.string(),
    url: z.string(),
    title: z.string(),
    image: z.string().optional(),
    variants: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        stock: z.number().optional(),
      }),
    ),
  }),
);

const read = readFile<Product[]>({ fileName, defaultData, schema });
const write = writeFile<Product[]>({ fileName, defaultData });

export { read, write };
