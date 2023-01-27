import axios from 'axios';
import { MarketplaceProduct, ProductVariant } from '@local/data/schemas/market';

interface SearchProduct {
  urlKey: string;
}

interface SearchResponse {
  Products: SearchProduct[];
}

interface ProductChild {
  market: {
    lowestAsk: number;
    highestBid: number;
  };
  shoeSize: string;
}

interface ProductResponse {
  title: string;
  styleId: string;
  colorway: string;
  media: {
    imageUrl?: string;
  };
  children: {
    [key: string]: ProductChild;
  };
}

export default async function stockx(
  query: string,
): Promise<MarketplaceProduct | null> {
  const axiosInstance = axios.create({
    headers: {
      'User-Agent': 'chrome',
      'Accept-Encoding': 'gzip,deflate,compress',
    },
  });

  const searchUrl = `https://stockx.com/api/browse?&_search=${query}&dataType=product&country=US`;

  const searchData = await axiosInstance
    .get(searchUrl)
    .then((response) => response.data as SearchResponse);

  if (!searchData.Products.length) return null;

  const slug = searchData.Products[0].urlKey;
  const productUrl = `https://stockx.com/api/products/${slug}?includes=market&currency=USD`;

  const productData = await axiosInstance
    .get(productUrl)
    .then((response) => response.data.Product as ProductResponse);

  const marketData: ProductVariant[] = Object.values(productData.children).map(
    (value) => ({
      title: value.shoeSize,
      lowestAsk: value.market.lowestAsk,
      highestBid: value.market.highestBid,
    }),
  );

  return {
    title: productData.title,
    image: productData.media.imageUrl,
    sku: productData.styleId,
    colorway: productData.colorway,
    link: `https://stockx.com/${slug}`,
    market: marketData,
  };
}
