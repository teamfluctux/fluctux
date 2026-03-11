import {
  ApiSettings,
  AppearanceSettings,
  AuthFormsSettings,
  BillingSettings,
  CustomCodeSettings,
  GeneralSettings,
  SellersSettings,
  SidebarAccessSettings,
  SiteStatusSettings,
  TeamSettings,
  WebsiteDetailsSettings,
} from "@/components";

type SettingsChildPagePropsType = {
  params: Promise<{ slug: string }>;
};

const SETTINGS_PAGES: Record<string, React.ReactNode> = {
  "site-status": <SiteStatusSettings />,
  "website-details": <WebsiteDetailsSettings />,
  "appearance": <AppearanceSettings />,
  "sidebar-access": <SidebarAccessSettings />,
  "custom-code": <CustomCodeSettings />,
  "auth-forms": <AuthFormsSettings />,
  "team": <TeamSettings />,
  "sellers": <SellersSettings />,
  "billing": <BillingSettings />,
  "api": <ApiSettings />,
};

export default async function SettingsChildPage({ params }: SettingsChildPagePropsType) {
  const { slug } = await params;
  return <>{SETTINGS_PAGES[slug]}</>;
}