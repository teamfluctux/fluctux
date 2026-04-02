import { FxButton, FxInput, Label, Textarea } from "@fluctux/ui";
import { ChevronRight, MoveRight } from "lucide-react";
import React from "react";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@fluctux/ui";
import { CompWrapper } from "./CompWrapper";

export const GeneralEdit = () => {
  return (
    <CompWrapper title="General Details" fullWidth>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="product_name">Product Name<span className="text-destructive">*</span></FieldLabel>
          <FxInput
            id="product_name"
            variant="blackPrimary"
            placeholder="Enter product name"
            className="w-full  "
            size="md"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="product_slug">Product Slug<span className="text-destructive">*</span></FieldLabel>
          <FxInput
            id="product_slug"
            variant="blackPrimary"
            placeholder="enter-product-slug"
            className="w-full  "
            size="md"
            required
          />
          <FieldDescription>
            Keep product slugs lowercase, hyphenated, and concise - e.g. blue-running-shoes
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="product_desc">Product Description</FieldLabel>
          <Textarea id="product_desc" className="min-h-[150px]! h-auto!" />
        </Field>
      </FieldGroup>
 </CompWrapper>
  );
};
