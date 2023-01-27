export const goatSessionURL = 'https://goat.com';

export const goatSearchURL =
  'https://2fwotdvm2o-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.25.1%3BJS%20Helper%20(3.1.1)%3Breact%20(16.9.0)%3Breact-instantsearch%20(6.5.0)&x-algolia-application-id=2FWOTDVM2O&x-algolia-api-key=ac96de6fef0e02bb95d433d8d5c7038a';

export const goatPayload = (query: string) =>
  JSON.stringify({
    requests: [
      {
        indexName: 'product_variants_v2',
        params: `highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&distinct=true&page=0&query=${query}&maxValuesPerFacet=30&facets=%5B%22instant_ship_lowest_price_cents%22%2C%22single_gender%22%2C%22presentation_size%22%2C%22shoe_condition%22%2C%22product_category%22%2C%22brand_name%22%2C%22color%22%2C%22silhouette%22%2C%22designer%22%2C%22upper_material%22%2C%22midsole%22%2C%22category%22%5D&tagFilters=&facetFilters=%5B%5B%22product_category%3Ashoes%22%5D%5D`,
      },
    ],
  });
