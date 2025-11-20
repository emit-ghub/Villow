import algoliasearch, { type SearchClient } from 'algoliasearch';

const appId = process.env.ALGOLIA_APP_ID;
const adminKey = process.env.ALGOLIA_ADMIN_KEY;

export const algoliaServerClient: SearchClient | null =
  appId && adminKey ? algoliasearch(appId, adminKey) : null;

export const ALGOLIA_LISTINGS_INDEX = 'listings';
