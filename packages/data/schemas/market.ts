import z from 'zod';
import { readFile, writeFile } from '../helpers';

const marketSchema = z.object({
  title: z.string(),
  lowestAsk: z.number().nullable(),
  highestBid: z.number().nullable(),
});

const marketplaceProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  color: z.string(),
  image: z.string().nullable(),
  sku: z.string(),
  links: z.object({
    stockx: z.string().nullable(),
    goat: z.string().nullable(),
  }),
  market: z.array(
    z.object({
      title: z.string(),
      stockx: marketSchema,
      goat: marketSchema,
    }),
  ),
});

const schema = z.array(marketplaceProductSchema);

export type MarketplaceProduct = z.infer<typeof marketplaceProductSchema>;
export type Product = z.infer<typeof schema>;
export type ProductVariant = z.infer<typeof marketSchema>;

const fileName = 'market.json';
const defaultData: Product[] = [];

const read = readFile<Product[]>({ fileName, defaultData, schema });
const write = writeFile<Product[]>({ fileName, defaultData });

export { read, write };
