import React from "react";

interface DocParentLayoutPropsType {
  children: React.ReactNode;
}

export default function Layout({ children }: DocParentLayoutPropsType) {
  return (
    <>
      {children}
    </>
  );
}
