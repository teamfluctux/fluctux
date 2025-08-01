import { createContext, RefObject, useContext } from "react";

interface WorkspaceContextType {
  parentRef: RefObject<HTMLDivElement | null>;
}

export const workspaceContext = createContext<WorkspaceContextType | null>(
  null
);

export const useWorkspaceContext = () => {
  const context = useContext(workspaceContext);
  if (!context) {
    throw new Error(
      "useWorkspaceContext must be used within a WorkspaceProvider"
    );
  }
  return context;
};
