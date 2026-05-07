export * from "./scraper.zod";

// Generic ZodError Flatten type
export type ZodFlattenErrorType<T extends Record<string, unknown>> = {
  formErrors: string[];
  fieldErrors: Partial<Record<keyof T, string[]>>;
};
