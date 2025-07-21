type StudentShiftType = "morning" | "day" | "none";
type StudentSection = string;

type Students = {
  id: string;
  name: string;
  class: string;
  shift?: StudentShiftType;
  section?: StudentSection | string;
  group?: string;
  batchNo?: number;
  [key: string]: string | undefined | number;
};


interface SelectFilterParams {
  availableValues: string[];
}