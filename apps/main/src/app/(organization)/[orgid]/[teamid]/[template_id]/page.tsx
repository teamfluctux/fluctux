import React from "react";
import { StudentsListMainPage } from "@/templates";

type TemplateLayout = {
  params: Promise<{ template_id: string }>;
};

export default async function TemplatePage({ params }: TemplateLayout) {
  const { template_id } = await params;

  if (template_id === "students") {
    return (
      <>
        <StudentsListMainPage />
      </>
    );
  }else{
    return <>
    <p>Nothing</p>
    </>
  }
}
