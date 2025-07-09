import { AppSidebar } from "@/components/core";
import { MainWrapper } from "@/components/core";

export default function Home() {
  return (
    <div className="w-full h-full grid grid-cols-[320px_1fr]">
      <AppSidebar slug={""} />
    </div>
  );
}
