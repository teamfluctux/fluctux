// packages/shared/dist/index.js or src/index.ts
export { AirFlowText } from "./components/framer-motion/airflow";
export { ScaleUpDown } from "./components/framer-motion/scaleUpDown";
export { CopyCodeButton } from "./components/code/copyCodebtn";
export { FxLogo } from "./ui/fx-logo";
export { ThemeToggler } from "./ui/theme-toggler";
export { GetIconByLanguage } from "./utils/get-icons";


// Export server-only function separately
export { mdxToHtml } from "./utils/mdxToHtml";