"use client";
import { FxButton, FxCommandBox } from "@fluctux/ui";
import { useToggleOpen } from "@fluctux/hooks";
import { SearchIcon } from "lucide-react";
import React, { useCallback } from "react";
import { InstantSearch, SearchBox } from "react-instantsearch";
import {
  isSearchBoxOpenSelector,
  setSearchBoxOpen,
  useGlobalSearchDispatch,
  useGlobalSearchSelector,
} from "../../redux";
export const GlobalSearch = () => {
  const isSearchBoxOpen = useGlobalSearchSelector(isSearchBoxOpenSelector);
  const globalSearchDispatch = useGlobalSearchDispatch();

  const handleToggleSearchBoxOpenNClose = useCallback(
    (state: boolean) => {
      if (!setSearchBoxOpen) return;
      globalSearchDispatch(setSearchBoxOpen(state));
    },
    [globalSearchDispatch]
  );

  useToggleOpen({
    shortcutKey: "k",
    onToggle: handleToggleSearchBoxOpenNClose,
    externalIsOpen: isSearchBoxOpen,
  });

  return (
    <div>
      <FxCommandBox
        open={isSearchBoxOpen}
        className="max-w-[700px] h-[500px] w-full p-2"
      >
        <FxButton
          onClick={() => handleToggleSearchBoxOpenNClose(false)}
          className="absolute right-[10px] top-[10px] z-10 text-text-color_2 font-medium text-[14px]"
          variant="secondary"
          size="sm"
          radius="primary"
        >
          esc
        </FxButton>
        <InstantSearch searchClient={""}>
          <div className="w-full h-[50px] border-b border-border-color_1 sticky top-0 left-0 fx-flex-center flex-shrink-0">
            <SearchBox
              placeholder="Search documentation..."
              autoFocus={true}
              className="w-full"
              classNames={{
                form: "bg-transparent flex flex-row-reverse gap-2 w-full h-full pl-2 pr-2 border-none",
                input:
                  "bg-transparent w-full h-[45px] border-none outline-none fx-flex-cl pr-[35px]",
                loadingIndicator: "hidden",
                loadingIcon: "hidden",
                reset: "hidden",
              }}
              submitIconComponent={() => <SearchIcon />}
            />
          </div>

          {/* <NoResultsBoundary fallback={<NoResults />}>
            <div className="w-full border-b border-border-color_1 sticky top-[50px] left-0 h-[70px] fx-flex-cl flex-shrink-0 z-10">
              <DocCustomRefinementList sortBy={["name"]} attribute="type" />
            </div>
            <div className="h-full">
              <div className="overflow-y-auto h-[calc(100%-120px)] pb-3 bg-transparent border-none">
                <InfiniteHits hitComponent={Hit} />
              </div>
            </div>
          </NoResultsBoundary> */}
        </InstantSearch>
      </FxCommandBox>
    </div>
  );
};
