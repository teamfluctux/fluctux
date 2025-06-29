import React from "react";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background-color_925C rounded overflow-hidden w-full h-full border border-border-color_1 ">
      {children}
    </div>
  );
};
