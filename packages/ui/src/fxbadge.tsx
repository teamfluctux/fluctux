// -- Remove this package
import React from "react";

interface FxBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: React.ReactNode;
  variant?: keyof typeof badgeVariants;
}

type BadgeVariantTypes =
  | "primary"
  | "secondary"
  | "purple"
  | "lolipop"
  | "lolipopPurple"
  | "lolipopPink"
  | "kitkat"
  | "kitkatPurple"
  | "kitkatPink";

const badgeVariants: { [key in BadgeVariantTypes]: string } = {
  primary:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] border-none bg-(--primary-color) text-white font-medium",
  secondary:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] fx-border-color fx-label-color",
  purple:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] border-(--badge-primary-purple-border) bg-(--badge-primary-purple-bg) text-(--badge-primary-purple-fg) font-medium",
  lolipop:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] border-(--badge-green-border) bg-(--badge-green-bg) text-(--badge-green-fg)",
  lolipopPurple:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] border-(--badge-purple-border) bg-(--badge-purple-bg) text-(--badge-purple-fg)",
  lolipopPink:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] border-(--badge-pink-border) bg-(--badge-pink-bg) text-(--badge-pink-fg)",
  kitkat:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] fx-border-color fx-secondary-bg text-(--badge-green-fg)",
  kitkatPurple:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] fx-border-color fx-secondary-bg text-(--badge-purple-fg)",
  kitkatPink:
    "pl-2 pr-2 rounded-rounded_20C border text-[12px] fx-border-color fx-secondary-bg text-(--badge-pink-fg)",
};

export function FxBadge({
  className,
  variant,
  children,
  ...props
}: FxBadgeProps) {
  const badgeVariant = variant
    ? badgeVariants[variant]
    : badgeVariants.secondary;
  return (
    <span className={`${badgeVariant} ${className}`} {...props}>
      {children}
    </span>
  );
}
