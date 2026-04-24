import { FileHeader } from "./FileHeader";
import { UploadPopupView } from "./UploadPopupView";

type LayoutPropsType = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutPropsType) {
  return (
    <div className="w-full">
      <FileHeader />
      {children}
      <UploadPopupView/>
    </div>
  );
}
