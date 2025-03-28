import React, { useRef, useState } from 'react'

interface UseTaskBarPropsType {
    taskbarHoverItems: {
        slug: string,
        label: string
    }[]
}

interface TabsRndType {
    id?: number | null,
    size?: {
        width: number, height: number
    },
    position?: {
        x: number,
        y: number
    },
    isActive?: boolean,
    slug?: string,
    label?: string,
    isMaximized?: boolean
}


export const useTaskBar = ({ taskbarHoverItems }: UseTaskBarPropsType) => {

    const [showTaskBar, setShowTaskbar] = useState(false)
    const [allowIntelligentAutoHideTaskBar, setAllowIntelligentAutoHideTaskBar] = useState<boolean>(false)
    const [taskbarItems, setTaskbarItems] = useState(taskbarHoverItems)
    const [isDragStart, setIsDragStart] = useState(false)

    const [tabs, setTabs] = useState<TabsRndType[]>([
        {
            id: null,
            size: { width: 700, height: 500 },
            position: { x: 50 + 0 * 50, y: 50 + 0 * 50 },
            isActive: false,
            slug: "",
            label: "",
            isMaximized: false
        }]);

    const updateTab = (id: number, newValues: TabsRndType[] | TabsRndType) => {

        setTabs((prevTabs) =>
            prevTabs.map((tab) => (tab.id === id ? { ...tab, ...newValues } : { ...tab, isActive: false }))
        );
    };

    const handleCloseTab = (tabId: number) => {
        setTabs((prevTab) => prevTab.filter((tab) => tab.id != tabId))
    }

    const parentRef = useRef<HTMLDivElement>(null);

    const handleMaxMinTabSize = (tabId: number) => {
        if (!parentRef.current) return;

        const { offsetWidth, offsetHeight } = parentRef.current;
        const getCurrentTab = tabs.find((tab) => tab.id === tabId)
        if (getCurrentTab?.size?.width !== offsetWidth || getCurrentTab?.size?.height !== offsetHeight) {

            updateTab(tabId, {
                size: { width: offsetWidth, height: offsetHeight },
                position: { x: 0, y: 0 },
                isActive: true,
                isMaximized: true
            });

        } else {
            updateTab(tabId, {
                size: { width: 700, height: 500 },
                position: { x: 50, y: 50 },
                isMaximized: false
            });
        }


    };

    const handleNewTab = (newTabs: TabsRndType) => {
        const existedTabs = tabs.find((tab) => tab.id === newTabs.id)
        const restTabs = tabs.find((tab) => tab.id !== newTabs.id)
        restTabs?.isActive && updateTab(restTabs.id!, { isActive: false })
        if (existedTabs) return
        setTabs((prevTabs) => [...prevTabs, newTabs])
    }

    return {
        showTaskBar, 
        setShowTaskbar,
        allowIntelligentAutoHideTaskBar,
        setAllowIntelligentAutoHideTaskBar,
        taskbarItems, 
        setTaskbarItems,
        isDragStart,
        setIsDragStart,
        tabs,
        setTabs,
        updateTab,
        handleCloseTab,
        parentRef,
        handleMaxMinTabSize,
        handleNewTab
    }
}
