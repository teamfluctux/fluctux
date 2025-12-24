"use client";

import { IconBase } from "react-icons/lib";

export type SizeType = "sm" | "md" | "lg" | "xl";
export type RadiusType = "primary" | "tablet" | "circle" | "tiny";

export interface DialogProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  modal?: boolean;
  className?: string;
}

export type ComboboxDataType = {
  value: string;
  label: string;
  icon?: typeof IconBase | null;
  iconClassName?: string;
  image?: string;
  emoji?: string;
};

export type colorSchema = "dark" | "light" | "system";
