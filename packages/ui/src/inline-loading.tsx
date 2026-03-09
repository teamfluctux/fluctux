import { cn } from "./lib/utils";

export const InlineLoading = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-[80px] h-[10px] border border-border-color_1 rounded-tablet p-px overflow-hidden",
        className
      )}
    >
      <div className="w-[50px] rounded-tablet h-full bg-background-indigo_primary short-loader"></div>
    </div>
  );
};
