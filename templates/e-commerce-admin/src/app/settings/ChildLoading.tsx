"use client";

import { useEffect, useState } from "react";

export const ChildLoading = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <div className="w-full h-full flex justify-center items-center">
        
    </div>
  }
  return <>{children}</>;
};
