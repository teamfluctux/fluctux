import React from "react";

export const InlineLoading = () => {
  return (
    <div className="w-[80px] h-[10px] border border-border-color_1 rounded-[50px] p-[1px] overflow-hidden">
      <div className="w-[50px] rounded-[50px] h-full bg-background-indigo_primary short-loader"></div>
    </div>
  );
};
