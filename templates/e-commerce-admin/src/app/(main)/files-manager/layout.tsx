import { FileHeader } from "./FileHeader";

type LayoutPropsType = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutPropsType) {
  return (
    <div className="w-full">
      <FileHeader />
      {children}
    </div>
  );
}
