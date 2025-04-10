import { ROUNDED_VARIANTS } from "../constant";
import { cn } from "../lib/utils";
import { getOneListStyling, oneListSize, OneListVariantType } from "./helper";

interface FxOneListPropsType {
  children: React.ReactNode;
  className?: string;
  variant?: OneListVariantType;
  disabled?: boolean;
  size?: keyof typeof oneListSize;
  loading?: boolean;
  radius?: keyof typeof ROUNDED_VARIANTS;
  showActiveIndicator?: boolean;
}

export const FxOneList = ({
  children,
  className,
  variant,
  disabled,
  size,
  loading,
  radius,
  showActiveIndicator,
  ...props
}: FxOneListPropsType) => {
  const variantStyling = getOneListStyling(variant, disabled || loading, size);
  const radiusVariant = radius ? ROUNDED_VARIANTS[radius] : "";
  return (
    <li
      className={cn(variantStyling, radiusVariant, className, "relative")}
      {...props}
    >
        {children}
        <span className="absolute w-[2px] h-[8px] rounded-tablet bg-background-indigo_primary"></span>
    </li>
  );
};
