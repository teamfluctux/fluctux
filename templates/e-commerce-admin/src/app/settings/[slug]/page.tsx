import {
  ApiSettings,
  AppearanceSettings,
  AuthFormsSettings,
  BillingSettings,
  CustomCodeSettings,
  SellersSettings,
  SidebarAccessSettings,
  SiteStatusSettings,
  TeamSettings,
  WebsiteDetailsSettings,
} from "@/components";
import { SETTINGS_TITLE_DESC, type SettingsSlugType } from "@/constants";

type SettingsChildPagePropsType = {
  params: Promise<{ slug: string }>;
};

type SettingsChildPageMetaDataPropsType = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: SettingsChildPageMetaDataPropsType) {
  const { slug } = await params;
  const metaData = SETTINGS_TITLE_DESC[`/${slug}` as SettingsSlugType];
  return {
    title: metaData?.title,
    description: metaData?.desc,
  };
}

const SETTINGS_PAGES: Record<string, React.ReactNode> = {
  "site-status": <SiteStatusSettings />,
  "website-details": <WebsiteDetailsSettings />,
  appearance: <AppearanceSettings />,
  "sidebar-access": <SidebarAccessSettings />,
  "custom-code": <CustomCodeSettings />,
  "auth-forms": <AuthFormsSettings />,
  team: <TeamSettings />,
  sellers: <SellersSettings />,
  billing: <BillingSettings />,
  api: <ApiSettings />,
};

export default async function SettingsChildPage({
  params,
}: SettingsChildPagePropsType) {
  const { slug } = await params;
  return <>{SETTINGS_PAGES[slug]}</>;
}
