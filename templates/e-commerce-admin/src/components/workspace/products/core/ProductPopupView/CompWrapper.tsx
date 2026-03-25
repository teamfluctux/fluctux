import React from "react";

type CompWrapperPropsType = {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

export const CompWrapper = ({
  title,
  fullWidth = false,
  children,
}: CompWrapperPropsType) => {
  return (
    <>
      {fullWidth ? (
        <div className="w-full p-10">
          <h1 className="text-text-color_1 text-read_20 font-semibold mb-5">
            {title}
          </h1>
          {children}
        </div>
      ) : (
        <div className="max-w-[400px] w-full ml-10 mt-10">
          <h1 className="text-text-color_1 text-read_20 font-semibold mb-5">
            {title}
          </h1>

          {children}
        </div>
      )}
    </>
  );
};
