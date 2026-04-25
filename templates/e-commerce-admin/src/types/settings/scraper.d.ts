// -- Data of each scraper app. which should be returned by backend and stored in database
// Through the apiURL scraper will communicate with backend to get data
// Each scraped data should be same for all scraper app
export type ScraperAppInfoTypes = {
  title: string;
  meta_desc: string;
  category: string;
  apiURL: string;
  image: string;
  isInstalled?: boolean
};