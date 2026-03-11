type SettingsTitleDescType = {
    title: string,
    desc: string
}

export const SETTINGS_TITLE_DESC: Record<string, SettingsTitleDescType> = {
  "settings": {
    title: "General Settings",
    desc: "Configure your store's basic info like name, logo, currency, timezone and language.",
  },
  "site-status": {
    title: "Site Status & Performance",
    desc: "Monitor your store's uptime, speed scores and server response health.",
  },
  "website-details": {
    title: "Website Details",
    desc: "View your store's technical details like server location, domain, and hosting info.",
  },
  "appearance": {
    title: "Appearance",
    desc: "Customize your admin panel's theme, colors and display preferences.",
  },
  "sidebar-access": {
    title: "Sidebar Access Control",
    desc: "Control which sidebar menu items are visible to your sellers and team members.",
  },
  "custom-code": {
    title: "Header & Footer Code",
    desc: "Inject custom scripts like Facebook Pixel, Google Analytics or any third-party tracking code.",
  },
  "auth-forms": {
    title: "Authentication Forms",
    desc: "Customize and configure your seller and team login & signup forms.",
  },
  "team": {
    title: "Team",
    desc: "Invite and manage your admin team members and their roles.",
  },
  "sellers": {
    title: "Sellers",
    desc: "Manage your registered sellers, their access and account status.",
  },
  "billing": {
    title: "Billing & Plans",
    desc: "View your current Fluctux plan, usage and manage your subscription.",
  },
  "api": {
    title: "API Keys",
    desc: "Generate and manage API keys to integrate your store with external services.",
  },
  "account": {
    title: "Account Settings",
    desc: "Update your personal profile, email, password and security preferences.",
  },
};