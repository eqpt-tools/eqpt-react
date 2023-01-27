import { MarketplaceProduct } from '@local/data/schemas/market';
import { goatPayload, goatSearchURL } from './constants';
import axiosWithInterceptor from '../../helpers/axios';

interface SearchHit {
  slug: string;
  sku: string;
  name: string;
  details: string;
  main_display_picture_url: string;
}

interface SearchResult {
  hits: SearchHit[];
}

interface SearchResponse {
  results: SearchResult[];
}

interface MarketResponse {
  sizeOption: {
    presentation: string;
  };
  shoeCondition: string;
  boxCondition: string;
  lowestPriceCents: {
    amount?: number;
  };
}

export default async function stockx(
  query: string,
): Promise<MarketplaceProduct | null> {
  const axiosInstance = axiosWithInterceptor({
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'if-none-match': 'W/"e42b-ed3TKfeEV9ANvLVDUsppjwieTiw"',
      'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.3',
    },
  });

  const searchResponse = await axiosInstance
    .post(goatSearchURL, goatPayload(query))
    .then((response) => response.data as SearchResponse);

  if (!searchResponse.results.length || !searchResponse.results[0].hits.length)
    return null;

  const searchResult = searchResponse.results[0].hits[0];
  const productUrl = `https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=${searchResult.slug}&countryCode=US`;

  const productData = await axiosInstance
    .get(productUrl)
    .then((response) => response.data as MarketResponse[]);

  const marketData = productData
    .filter(
      (p) =>
        p.boxCondition === 'good_condition' &&
        p.shoeCondition === 'new_no_defects',
    )
    .map((p) => ({
      title: p.sizeOption.presentation,
      lowestAsk: p.lowestPriceCents.amount ?? 0 / 100,
    }));

  return {
    title: searchResult.name,
    image: searchResult.main_display_picture_url,
    sku: searchResult.sku.replace(' ', '-'),
    colorway: searchResult.details,
    link: `https://goat.com/sneakers/${searchResult.slug}`,
    market: marketData,
  };
}
