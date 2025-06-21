"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Toaster, ToasterProps } from "sonner";
import { SessionDataType } from "@fluctux/types";

interface GlobalWrapperPropsType {
  children: React.ReactNode;
}

export default function GlobalWrappers({ children }: GlobalWrapperPropsType) {
  const { theme = "system" } = useTheme();
  const [user, setUser] = useState<SessionDataType | {}>({});
  const getUserSession = async () => {
    const userRequest = await fetch("http://localhost:5000/api/protected", {
      credentials: "include",
    });
    const session = await userRequest.json();
    if (session.session) {
      console.log("user is here", session);
      setUser(session.session);
    }
  };

  useEffect(() => {
    getUserSession();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <p>
        Testing: {user?.email} {user?.name}
      </p>
      {children}
      <Toaster
        richColors
        position="bottom-center"
        theme={theme as ToasterProps["theme"]}
        closeButton
      />
    </>
  );
}
