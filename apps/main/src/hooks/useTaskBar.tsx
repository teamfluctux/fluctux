import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  TabsRndType,
  TabsStateType,
  TaskbarCategoriesType,
} from "@fluctux/types";
import { useWorkspaceContext } from "@/context/workspace-context";
import { mainSidebarStore } from "@/services/stores";
import { observer } from "mobx-react";

export const useTaskBar = () => {
  const [showTaskBar, setShowTaskbar] = useState(false);
  const [allowIntelligentAutoHideTaskBar, setAllowIntelligentAutoHideTaskBar] =
    useState<boolean>(false);
  const [isDragStart, setIsDragStart] = useState(false);
  const [tabs, setTabs] = useState<TabsStateType>({});
  const { parentRef, masterRef } = useWorkspaceContext();

  const updateTabInCategory = useCallback(
    (
      categorySlug: TaskbarCategoriesType,
      tabId: number,
      newValues: Partial<TabsRndType>
    ) => {
      setTabs((prevCategories) => {
        if (!prevCategories[categorySlug]) return prevCategories;

        return {
          ...prevCategories,
          [categorySlug]: {
            ...prevCategories[categorySlug],
            tabs: prevCategories[categorySlug].tabs.map((tab) =>
              tab.id === tabId
                ? { ...tab, ...newValues, isActive: true }
                : { ...tab, isActive: false }
            ),
          },
        };
      });
    },
    []
  );

  const handleCloseTab = useCallback((categorySlug: string, tabId: number) => {
    setTabs((prevCategories) => {
      if (!prevCategories[categorySlug]) return prevCategories;

      return {
        ...prevCategories,
        [categorySlug]: {
          ...prevCategories[categorySlug],
          tabs: prevCategories[categorySlug].tabs.filter(
            (tab) => tab.id !== tabId
          ),
        },
      };
    });
  }, []);

  const handleMaxMinTabSize = useCallback(
    (tabId: number, categorySlug: TaskbarCategoriesType) => {
      if (!parentRef.current) return;

      const { offsetWidth, offsetHeight } = parentRef.current;

      const category = tabs[categorySlug];

      if (!category) return;

      const getCurrentTab = category.tabs.find((tab) => tab.id === tabId);

      if (!getCurrentTab) return;

      updateTabInCategory(categorySlug, tabId, {
        size:
          getCurrentTab.size?.width !== offsetWidth ||
          getCurrentTab.size?.height !== offsetHeight
            ? { width: offsetWidth, height: offsetHeight }
            : { width: 700, height: 500 },
        position:
          getCurrentTab.size?.width !== offsetWidth ||
          getCurrentTab.size?.height !== offsetHeight
            ? { x: 0, y: 0 }
            : { x: 50, y: 50 },
        isMaximized:
          getCurrentTab.size?.width !== offsetWidth ||
          getCurrentTab.size?.height !== offsetHeight,
        isActive: true,
      });
    },
    [tabs, parentRef, updateTabInCategory]
  );

  useEffect(() => {
    if (!parentRef.current) return;
    const { offsetWidth, offsetHeight } = parentRef.current;
    setTabs((prevTabs) => {
      return Object.entries(prevTabs).reduce(
        (newTabs, [categorySlug, category]) => {
          newTabs[categorySlug] = {
            ...category,
            tabs: category.tabs.map((tab) => {
              if (tab.isMaximized) {
                return {
                  ...tab,
                  size: { width: (Number(masterRef.current?.offsetWidth) - Number(mainSidebarStore.getSidebarSize)), height: masterRef.current?.offsetHeight },
                };
              }

               if (tab.isMaximizedMd) {
                return {
                  ...tab,
                  size: { width: (Number(masterRef.current?.offsetWidth) - Number(mainSidebarStore.getSidebarSize)), height: tab.size?.height },
                };
              }

              const tabWidth = tab.size?.width ?? 280;
              const tabX = tab.position?.x ?? 0;
              const tabY = tab.position?.y ?? 0;

              // Check if the tab is out of bounds
              const isOutOfBounds = tabX + tabWidth > offsetWidth;

              if (isOutOfBounds && !tab.isMaximized) {
                const isTabWidthGTOffsetWidth = tabWidth > offsetWidth;
                return {
                  ...tab,
                  size: {
                    width: isTabWidthGTOffsetWidth ? offsetWidth : tabWidth,
                    height: tab.size?.height,
                  },
                  position: {
                    x: isTabWidthGTOffsetWidth
                      ? 0
                      : tabX - (tabX + tabWidth - offsetWidth),
                    y: tabY,
                  },
                };
              }

              return tab;
            }),
          };
          return newTabs;
        },
        {} as typeof prevTabs
      );
    });
  }, [ parentRef, mainSidebarStore.getSidebarSize, masterRef]);

  // const handleNewTab = (newTabs: TabsRndType) => {
  //     const existedTabs = tabs.find((tab) => tab.id === newTabs.id)
  //     const restTabs = tabs.find((tab) => tab.id !== newTabs.id)
  //     restTabs?.isActive && updateTab(restTabs.id!, { isActive: false })
  //     if (existedTabs) return
  //     setTabs((prevTabs) => [...prevTabs, newTabs])
  // }

  const handleAddNewTab = useCallback(
    (categorySlug: TaskbarCategoriesType, newTab: TabsRndType) => {
      setTabs((prevCategories) => {
        const existingCategory = prevCategories[categorySlug] || {
          tabs: [],
        };

        // Check if a tab with the same ID already exists
        const isTabExists = existingCategory.tabs.some(
          (tab) => tab.id === newTab.id
        );
        updateTabInCategory(categorySlug, newTab.id!, { isActive: false });
        if (isTabExists) return prevCategories; // If found, return unchanged state
        return {
          ...prevCategories,
          [categorySlug]: {
            ...existingCategory,
            tabs: [...existingCategory.tabs, newTab],
          },
        };
      });
    },
    [updateTabInCategory]
  );

  return {
    showTaskBar,
    setShowTaskbar,
    allowIntelligentAutoHideTaskBar,
    setAllowIntelligentAutoHideTaskBar,
    isDragStart,
    setIsDragStart,
    tabs,
    setTabs,
    updateTabInCategory,
    handleCloseTab,
    parentRef,
    handleMaxMinTabSize,
    handleAddNewTab,
  };
};
