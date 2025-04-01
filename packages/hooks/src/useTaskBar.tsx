import React, { useRef, useState } from 'react'
import { TabsRndType, TabsStateType, UseTaskBarPropsType } from "@fluctux/types"


export const useTaskBar = () => {

    const [showTaskBar, setShowTaskbar] = useState(false)
    const [allowIntelligentAutoHideTaskBar, setAllowIntelligentAutoHideTaskBar] = useState<boolean>(false)
    const [isDragStart, setIsDragStart] = useState(false)

    const [tabs, setTabs] = useState<TabsStateType>({});

    const updateTabInCategory = (categorySlug: string, tabId: number, newValues: Partial<TabsRndType>) => {

        setTabs((prevCategories) => {
            if (!prevCategories[categorySlug]) return prevCategories;

            return {
                ...prevCategories,
                [categorySlug]: {
                    ...prevCategories[categorySlug],
                    tabs: prevCategories[categorySlug].tabs.map((tab) =>
                        tab.id === tabId ? { ...tab, ...newValues, isActive : true } : {...tab, isActive: false}
                    ),
                },
            };
        });
    };


    const handleCloseTab = (categorySlug: string, tabId: number) => {
         setTabs((prevCategories) => {
            if (!prevCategories[categorySlug]) return prevCategories;

            return {
                ...prevCategories,
                [categorySlug]: {
                    ...prevCategories[categorySlug],
                    tabs: prevCategories[categorySlug].tabs.filter((tab) => tab.id !== tabId),
                },
            };
        });
    };


    const parentRef = useRef<HTMLDivElement>(null);

    const handleMaxMinTabSize = (tabId: number, categorySlug: string) => {
        if (!parentRef.current) return;

        const { offsetWidth, offsetHeight } = parentRef.current;


        const category = tabs[categorySlug];

        if (!category) return;

        const getCurrentTab = category.tabs.find((tab) => tab.id === tabId);

        if (!getCurrentTab) return;

        updateTabInCategory(categorySlug, tabId, {
            size: (getCurrentTab.size?.width !== offsetWidth || getCurrentTab.size?.height !== offsetHeight)
                ? { width: offsetWidth, height: offsetHeight }
                : { width: 700, height: 500 },
            position: (getCurrentTab.size?.width !== offsetWidth || getCurrentTab.size?.height !== offsetHeight) ? { x: 0, y: 0 }: {x: 50, y:50},
            isMaximized: getCurrentTab.size?.width !== offsetWidth || getCurrentTab.size?.height !== offsetHeight,
            isActive: true
        });

    };

    // const handleNewTab = (newTabs: TabsRndType) => {
    //     const existedTabs = tabs.find((tab) => tab.id === newTabs.id)
    //     const restTabs = tabs.find((tab) => tab.id !== newTabs.id)
    //     restTabs?.isActive && updateTab(restTabs.id!, { isActive: false })
    //     if (existedTabs) return
    //     setTabs((prevTabs) => [...prevTabs, newTabs])
    // }

    const handleAddNewTab = (categorySlug: string, newTab: TabsRndType) => {
        setTabs((prevCategories) => {
            const existingCategory = prevCategories[categorySlug] || {
                tabs: [],
            };

            // Check if a tab with the same ID already exists
            const isTabExists = existingCategory.tabs.some((tab) => tab.id === newTab.id);
            updateTabInCategory(categorySlug, newTab.id!, { isActive: false })
            if (isTabExists) return prevCategories; // If found, return unchanged state
            return {
                ...prevCategories,
                [categorySlug]: {
                    ...existingCategory,
                    tabs: [...existingCategory.tabs, newTab],
                },
            };
        });
    };



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
        handleAddNewTab
    }
}
