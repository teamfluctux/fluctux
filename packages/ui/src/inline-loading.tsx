import React from "react";

export const InlineLoading = () => {
  return (
    <div className="w-[80px] h-[10px] border fx-border-color rounded-[50px] p-[1px] overflow-hidden">
      <div className="w-[50px] rounded-[50px] h-full bg-[#5865f2] short-loader"></div>
    </div>
  );
};
