export * from "./kanban";
export * from "./students-wrk.type";
export * from "./templates";


type TemplateType = "students" | "software" | "business" | "design";

type TemplateStudents = "students_list" | "courses";
type TemplateSoftware = "software_analysis";
type TemplateDefault = "dashboard";

type TemplateComponentType =
  | TemplateDefault
  | TemplateStudents
  | TemplateSoftware
  | any;

type GetTemplateComponentType = {
  [key in TemplateType | any]: {
    [key in TemplateComponentType]: React.ReactNode | null;
  };
};

type EditIconType = "edit_1" | "edit_2" | "edit_3";

