import type { ScraperAppInfoTypes } from "@/types";
import { FxButton, FxCommandBox } from "@fluctux/ui";
import { X } from "lucide-react";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { productStore, scraperStore } from "stores";
import { InstalledScraperList } from "./InstalledScraperList";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ScrapingConfiguration } from "./ScrapingConfiguration";

// -- Simulating installed scrapper apps from database
const INSTALLED_SCRAPER_APPS: ScraperAppInfoTypes[] = [
  // BD E-Commerce
  {
    title: "Daraz",
    meta_desc:
      "Scrape products from Daraz — South Asia's largest e-commerce platform.",
    category: "E-Commerce",
    apiURL: "/api/v1/product/scrap/daraz",
    image: "/scrapers/daraz.png",
    isInstalled: true,
  },
  // Fashion
  {
    title: "Zara",
    meta_desc: "Scrape latest fashion collections from Zara.",
    category: "Fashion",
    apiURL: "/api/v1/product/scrap/zara",
    image: "/scrapers/zara.png",
    isInstalled: true,
  },
];

export const ProductScraperPopUp = observer(() => {
  useEffect(() => {
    scraperStore.setGetInstalledScrappersFromRemote(INSTALLED_SCRAPER_APPS);
  }, []);
  return (
    <FxCommandBox
      overlayBackground
      modal={false}
      open={!productStore.productMoreOptionsMenu.isScrapProductsPopupOpen}
      className="max-w-[820px] w-full max-h-[550px] h-full "
    >
      <FxButton
        variant="secondary"
        size="rounded_sm"
        icon={X}
        onClick={() =>
          productStore.setProductMoreOptionsMenu({
            isScrapProductsPopupOpen: false,
          })
        }
        className="absolute top-2 right-2 z-10 "
      />
      <div className="w-full h-full flex justify-center items-start overflow-y-auto overflow-x-hidden">
        <InstalledScraperList />

        <div className="w-full p-4 ">
          <ErrorBoundary title="Error in scraping">
            <ScrapingConfiguration/>
          </ErrorBoundary>
        </div>
      </div>
    </FxCommandBox>
  );
});
