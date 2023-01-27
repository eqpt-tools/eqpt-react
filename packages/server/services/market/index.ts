import { ProductVariant, Product } from '@local/data/schemas/market';
import { randomUUID } from 'crypto';
import goat from './goat';
import stockx from './stockx';

interface MarketData {
  [key: string]: {
    stockx?: ProductVariant;
    goat?: ProductVariant;
  };
}

export default async function market(query: string): Promise<Product | null> {
  const [stockxData, goatData] = await Promise.all([
    stockx(query),
    goat(query),
  ]);

  const overallMarket: MarketData = {};

  if (stockxData)
    stockxData.market.forEach((item) => {
      if (!overallMarket[item.title])
        overallMarket[item.title] = {
          stockx: item,
        };
      else overallMarket[item.title].stockx = item;
    });

  if (goatData)
    goatData.market.forEach((item) => {
      if (!overallMarket[item.title])
        overallMarket[item.title] = {
          goat: item,
        };
      else overallMarket[item.title].goat = item;
    });

  const marketData = Object.entries(overallMarket)
    .map(([key, value]) => ({
      title: key,
      ...value,
    }))
    .sort((a, b) => Number(a.title) - Number(b.title));

  if (!stockxData && !goatData) return null;

  return {
    id: randomUUID(),
    title: stockxData?.title || '',
    color: stockxData?.colorway || '',
    image: stockxData?.image || goatData?.image,
    sku: stockxData?.sku || '',
    links: {
      stockx: stockxData?.link,
      goat: goatData?.link,
    },
    market: marketData,
  };
}
