import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center  rounded font-medium hover:bg-background-color_850C text-text-color_2 hover:text-text-color_1 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:!border-l data-[state=on]:bg-surface-indigo-bg-active border border-transparent hover:!border-border-color_1 data-[state=on]:text-surface-indigo-fg [&_svg]:pointer-events-none data-[state=on]:!border-surface-indigo-border-active [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0  outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "bg-transparent shadow-xs border border-border-color_1",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: " min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
