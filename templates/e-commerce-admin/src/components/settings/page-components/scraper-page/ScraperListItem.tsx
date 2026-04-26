import type { ScraperAppInfoTypes } from "@/types";
import { FxButton } from "@fluctux/ui";
import Image from "next/image";
import { toast } from "sonner";
import { scraperStore } from "stores";

/**
 * A component that renders an individual scraper application item.
 * Displays the scraper's image, title, description, and category,
 * along with actions to install or uninstall the scraper.
 * @param props - The scraper application information of type {@link ScraperAppInfoTypes}.
 */
export const ScraperListItem = (props: ScraperAppInfoTypes) => {
  const { title, meta_desc, category, image, isInstalled, apiURL } = props;

  //   -- Uninstall scraper
  const handleUnInstallScraper = async (api_url: string) => {
    const toastId = toast.loading(`Uninstalling ${title} scraper!`);
    if (!scraperStore.availableScrapers.get(api_url)) {
      toast.error("Scraper not found");
      return;
    }
    // -- Simulating uninstalling
    await new Promise((r) => setTimeout(r, 1000));
    scraperStore.setUninstallScraper(api_url);
    toast.success(`${title} scraper uninstalled successfully.`, {
      id: toastId,
    });
  };

  //   -- Install scraper
  const handleInstallScraper = async (api_url: string) => {
    const toastId = toast.loading(`Installing ${title} scraper.`);
    if (!scraperStore.availableScrapers.get(api_url)) {
      toast.error("Scraper not found");
      return;
    }
    // -- Simulating installing
    await new Promise((r) => setTimeout(r, 1000));
    scraperStore.setInstallScraper(api_url);
    toast.success(`${title} scraper installed successfully.`, {
      id: toastId,
    });
  };

  return (
    <div className="rounded-xl border border-border-color_1 bg-background-color_900C hover:bg-background-color_800C cursor-default p-1 h-[125px] flex justify-start items-center gap-2.5 peer-checked:border-surface-border-active peer-checked:bg-surface-bg peer-checked:hover:bg-surface-bg-active">
      <div className="rounded-lg border border-border-color_1 overflow-hidden w-[120px] h-full shrink-0">
        <Image
          src={image ?? ""}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div>
        <h3 className="text-workspace_1 font-medium text-text-color_1 one-line-ellipsis">
          {title}
        </h3>
        <p className="text-workspace_2 text-text-color_2 mt-0.5 leading-[18px] two-line-ellipsis">
          {meta_desc}
        </p>
        <div className="flex justify-between items-center mt-3 pr-2">
          <p className="text-workspace_3 font-medium text-text-color_4  one-line-ellipsis">
            {category}
          </p>
          {isInstalled ? (
            <FxButton
              size="xs"
              variant="destructive"
       
              onClick={() => handleUnInstallScraper(apiURL)}
            >
              Uninstall
            </FxButton>
          ) : (
            <FxButton size="xs" onClick={() => handleInstallScraper(apiURL)} >
              Install
            </FxButton>
          )}
        </div>
      </div>
    </div>
  );
};
