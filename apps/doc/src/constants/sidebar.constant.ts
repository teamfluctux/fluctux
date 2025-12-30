import { SidebarDocListType } from "@/types/siderbar-type";
import { ObjectListArrayType } from "@fluctux/types";
import { SVGProps } from "react";



export const USER_DOC_SIDEBAR_LISTS: SidebarDocListType = {
    "Getting Started": {
        slug: "getting-started",
        lists: [
            {
                label: "How to create workspace",
                slug: "create-workspace",
            },
            {
                label: "Interface Overview",
                slug: "interface-tour",
            },
        ],
    },
    "Project Management": {
        slug: "project-mgmt",
        lists: [
            {
                label: "Creating your first task",
                slug: "first-task",
            },
            {
                label: "Using Kanban boards",
                slug: "kanban-guide",
            },
        ],
    },
    Integrations: {
        slug: "integrations",
        lists: [
            {
                label: "Connecting to Slack",
                slug: "slack-integration",
            },
            {
                label: "GitHub Sync setup",
                slug: "github-sync",
            },
        ],
    },
};


export const DEV_DOC_SIDEBAR_LISTS: SidebarDocListType = {
    "Getting Started Dev": {
        slug: "getting-started",
        lists: [
            {
                label: "How to create workspace",
                slug: "create-workspace",
            },
            {
                label: "Interface Overview",
                slug: "interface-tour",
            },
        ],
    },
    "Project Management": {
        slug: "project-mgmt",
        lists: [
            {
                label: "Creating your first task",
                slug: "first-task",
            },
            {
                label: "Using Kanban boards",
                slug: "kanban-guide",
            },
        ],
    },
    Integrations: {
        slug: "integrations",
        lists: [
            {
                label: "Connecting to Slack",
                slug: "slack-integration",
            },
            {
                label: "GitHub Sync setup",
                slug: "github-sync",
            },
        ],
    },
};