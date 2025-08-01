import { z } from "zod";
import { OrgVisibilityEnum } from "@fluctux/constants";

export const ORG_VISIBILITY_ZOD_ENUMS = z.nativeEnum(OrgVisibilityEnum);

export const createOrgZodSchema = z.object({
  org_name: z
    .string()
    .max(100, "Organization name must be 100 characters or less")
    .optional(),
  org_slug: z
    .string()
    .max(200, "Organization slug must be 200 characters or less"),
  org_visibility: ORG_VISIBILITY_ZOD_ENUMS,
});
