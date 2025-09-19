import React from "react";
import { KanbanTemplate, StudentsListMainPage } from "@/templates";

type TemplateLayout = {
  params: Promise<{ template_id: string }>;
};

export default async function TemplatePage({ params }: TemplateLayout) {
  const { template_id } = await params;

  /**
   * here perform database operation
   * get the template type by template id via template_id variable
   * currenty directly specifying the template type for testing purposes
   */
  if (template_id === "students") {
    return (
      <>
        <StudentsListMainPage />
      </>
    );
  } else if(template_id === "kanban") {
    return <KanbanTemplate/>
  } 
  
  else {
    return (
      <>
        <p>Nothing</p>
      </>
    );
  }
}
