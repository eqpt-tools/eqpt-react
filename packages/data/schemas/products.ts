import z from 'zod';
import { readFile, writeFile } from '../helpers';

const productVariantSchema = z.object({
  id: z.string(),
  title: z.string(),
  stock: z.number().optional(),
});

const productSchema = z.object({
  id: z.string(),
  store: z.string(),
  url: z.string(),
  title: z.string(),
  image: z.string().optional(),
  variants: z.array(productVariantSchema),
});

const schema = z.array(productSchema);

export type Product = z.infer<typeof productSchema>;
export type ProductVariant = z.infer<typeof productVariantSchema>;

const fileName = 'variants.json';
const defaultData: Product[] = [];

const read = readFile<Product[]>({ fileName, defaultData, schema });
const write = writeFile<Product[]>({ fileName, defaultData });

export { read, write };
