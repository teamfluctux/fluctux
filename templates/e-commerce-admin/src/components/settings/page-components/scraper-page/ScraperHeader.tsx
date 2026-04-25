"use client";
import { formatScaleValue } from "@fluctux/shared";
import { Badge, FxButton, Separator } from "@fluctux/ui";
import { observer } from "mobx-react";
import { scraperStore } from "stores";

/**
 * Props for the ScraperHeaderInfoList component.
 */
type ScraperHeaderInfoListPropsType = {
  /** The label to display (e.g., "Total scrapers"). */
  label: string;
  /** The value associated with the label. */
  value: string;
};

/**
 * A small display component for scraper statistics in the header.
 * @param props - The label and value to display.
 */
const ScraperHeaderInfoList = ({
  label,
  value,
}: ScraperHeaderInfoListPropsType) => {
  return (
    <p className="text-workspace_2 font-medium text-text-color_2">
      {label}: <span className="text-text-color_4">{value}</span>
    </p>
  );
};

/**
 * Header component for the Scraper settings page.
 * Displays statistics and bulk actions for installing/uninstalling selected scrapers.
 */
export const ScraperHeader = observer(() => {
  // -- Get selected scraper apps count for installation
  const selected_scraper_length = scraperStore.selectedScrapers.size;
  //   -- Get selected scraper apps count for uninstallation
  const selected_for_uninstall_length = scraperStore.selectForUninstall.size;

  return (
    <div className="bg-background-color_950C w-full h-fit flex justify-between items-center pb-4">
      <div className="flex justify-start items-center gap-3">
        <ScraperHeaderInfoList
          label="Total scrapers"
          value={formatScaleValue(scraperStore.availableScrapers.size)}
        />
        <Separator orientation="vertical" className="h-5" />
        <ScraperHeaderInfoList
          label="Installed"
          value={formatScaleValue(scraperStore.installedScrapersCount)}
        />
      </div>

      <div className="flex justify-end items-center gap-3">
        {selected_scraper_length > 0 && (
          <FxButton
            size="xs"
            className="relative"
            onClick={() => scraperStore.setInstallMultiScrapers()}
          >
            <Badge className="absolute -top-4.5 -right-2 border-2 border-background-color_950C">
              {formatScaleValue(selected_scraper_length)}
            </Badge>
            Install selected
          </FxButton>
        )}
        {selected_for_uninstall_length > 0 && (
          <FxButton size="xs" className="relative" variant="destructive"  onClick={() => scraperStore.setUninstallMultiScrapers()}>
            <Badge
              variant={"destructive"}
              className="absolute -top-4.5 -right-2 border-2 border-background-color_950C"
            >
              {formatScaleValue(selected_for_uninstall_length)}
            </Badge>
            Uninstall selected
          </FxButton>
        )}
        {(selected_scraper_length || selected_for_uninstall_length) > 0 && (
          <FxButton
            size="xs"
            variant="secondary"
            onClick={() => scraperStore.setClearAllSelections()}
          >
            Clear Selections
          </FxButton>
        )}
      </div>
    </div>
  );
});
