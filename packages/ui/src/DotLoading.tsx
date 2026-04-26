import type { SizeType } from "./type";


export const LoadingSize: { [key in SizeType]: string } = {
  xs: "[&>.dot]:w-[5px] [&>.dot]:h-[5px] gap-[3px]",
  sm: "[&>.dot]:w-[5px] [&>.dot]:h-[5px] gap-[3px]",
  md: "pl-1 [&>.dot]:w-[6px] [&>.dot]:h-[6px] gap-[3px]",
  lg: "pl-1 [&>.dot]:w-[6px] [&>.dot]:h-[6px] gap-[3px]",
  xl: "pl-1 [&>.dot]:w-[7px] [&>.dot]:h-[7px] gap-[4px]",
};

type DotLoadingPropsType = {
  loadingSize?: SizeType;
};

export const DotLoading = ({ loadingSize }: DotLoadingPropsType) => {
  const tempSize = loadingSize ? LoadingSize[loadingSize] : LoadingSize.md;
  return (
    <div className={`dots   ${tempSize} shrink-0! `}>
      <div className="dot shrink-0!" />
      <div className="dot shrink-0!" />
      <div className="dot shrink-0!" />
    </div>
  );
};
