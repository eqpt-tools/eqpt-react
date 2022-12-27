import { Product } from '@local/data/schemas/products';
import axios from 'axios';
import { nanoid } from 'nanoid';

interface ShopifyVariant {
  id: number;
  title: string;
  inventory_quantity?: number;
}

interface ShopifyImage {
  src: string;
}

interface ShopifyProduct {
  product: {
    id: number | string;
    title: string;
    variants: [ShopifyVariant];
    image?: ShopifyImage;
  };
}

interface ShopifyStore {
  name: string;
}

export const retrieveProduct = async function retrieveProduct(
  url: string,
): Promise<Product> {
  const axiosInstance = axios.create({
    headers: {
      'User-Agent': 'chrome',
      'Accept-Encoding': 'gzip,deflate,compress',
    },
  });

  try {
    const productDataUrl = `${url}.json`;
    const storeDataUrl = `${new URL(url).origin}/meta.json`;

    const { product: productData } = await axiosInstance
      .get(productDataUrl)
      .then((response) => response.data as ShopifyProduct);

    const storeData = await axiosInstance
      .get(storeDataUrl)
      .then((response) => response.data as ShopifyStore);

    return {
      id: nanoid(),
      store: storeData.name,
      url,
      title: productData.title,
      image: productData.image?.src,
      variants: productData.variants.map((v) => ({
        id: v.id.toString(),
        title: v.title,
        stock: v.inventory_quantity,
      })),
    };
  } catch (err) {
    throw new Error(err);
  }
};
