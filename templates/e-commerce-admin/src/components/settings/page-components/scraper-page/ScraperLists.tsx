"use client";
import type { ScraperAppInfoTypes } from "@/types";
import { observer } from "mobx-react";

import React, { useEffect } from "react";
import { scraperStore } from "stores";
import { ScraperListItem } from "./ScraperListItem";
import { ScraperHeader } from "./ScraperHeader";

// -- All available scraper apps [Dummy]
const SCRAPER_APPS: ScraperAppInfoTypes[] = [
  // BD E-Commerce
  {
    title: "Daraz",
    meta_desc:
      "Scrape products from Daraz — South Asia's largest e-commerce platform.",
    category: "E-Commerce",
    apiURL: "/api/v1/product/scrap/daraz",
    image: "/scrapers/daraz.png",
    isInstalled: false,
  },
  // Fashion
 {
    title: "Zara",
    meta_desc: "Scrape latest fashion collections from Zara.",
    category: "Fashion",
    apiURL: "/api/v1/product/scrap/zara",
    image: "/scrapers/zara.png",
    isInstalled: false,
  },
 
  {
    title: "Pandamart",
    meta_desc: "Scrape grocery items from Pandamart quick delivery.",
    category: "Grocery",
    apiURL: "/api/v1/product/scrap/pandamart",
    image: "/scrapers/pandamart.png",
    isInstalled: false,
  },
  {
    title: "Instacart",
    meta_desc: "Import grocery listings from Instacart marketplace.",
    category: "Grocery",
    apiURL: "/api/v1/product/scrap/instacart",
    image: "/scrapers/instacart.png",
    isInstalled: false,
  },
  {
    title: "Ocado",
    meta_desc: "Scrape grocery and household products from Ocado UK.",
    category: "Grocery",
    apiURL: "/api/v1/product/scrap/ocado",
    image: "/scrapers/ocado.png",
    isInstalled: false,
  },
  {
    title: "Tesco",
    meta_desc: "Import grocery and food products from Tesco online.",
    category: "Grocery",
    apiURL: "/api/v1/product/scrap/tesco",
    image: "/scrapers/tesco.png",
    isInstalled: false,
  },

  
  {
    title: "Lookfantastic",
    meta_desc: "Import luxury beauty and haircare products from Lookfantastic.",
    category: "Beauty & Skincare",
    apiURL: "/api/v1/product/scrap/lookfantastic",
    image: "/scrapers/lookfantastic.png",
    isInstalled: false,
  },
 
];

/**
 * A component that renders a list of available scraper applications.
 * It manages the initialization of scrapers in the store and provides
 * a grid layout for selecting and interacting with individual scrapers.
 */
export const ScraperLists = observer(() => {
  useEffect(() => {
    scraperStore.setAvailableScrapers(SCRAPER_APPS);
  }, []);
  return (
    <div className="w-full pb-20">
      <ScraperHeader />
      <div className="grid grid-cols-2 gap-3">
        {/* -- Use Array.from, otherwise state will not show any UI updates */}
        {Array.from(scraperStore.availableScrapers.values()).map((item, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                className="hidden peer"
                name="scraper"
                checked={
                  scraperStore.selectedScrapers.has(item.apiURL) ||
                  scraperStore.selectForUninstall.has(item.apiURL)
                }
                onChange={() => scraperStore.setSelectedScrapers(item.apiURL)}
              />
              <ScraperListItem {...item} />
            </label>
          );
        })}
      </div>
    </div>
  );
});
