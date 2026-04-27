export * from "./scraper.zod"

// Generic ZodError type
export type ZodErrorType<T extends Record<string, unknown>> = {
  formErrors: string[];
  fieldErrors: Partial<Record<keyof T, string[]>>;
};