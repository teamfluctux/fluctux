
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Field, FieldDescription, FieldGroup, FieldLabel, FxInput, Label, Switch, ComboboxMultiple
} from "@fluctux/ui";
import { CurrencySelector } from "@fluctux/shared";
import type { MenuDataType } from "@fluctux/types";
import { CompWrapper } from "./CompWrapper";


export const PriceEdit = () => {
  return (
    <CompWrapper title="Price & Discounts">

      <FieldGroup>
        <Field>
          <FieldLabel>Choose Currency <span className="text-destructive">*</span></FieldLabel>
          <CurrencySelector classNames={{inputClassName: "h-10! p-1"}}  />
        </Field>
        <Field>
          <FieldLabel htmlFor="regular-price">Regular Price <span className="text-destructive">*</span></FieldLabel>

          <FxInput
            id="regular-price"
            variant="blackPrimary"
            type="number"
            placeholder=""
            className="w-full  "
            size="md"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="discount">Discount</FieldLabel>
          <FxInput
            id="discount"
            variant="blackPrimary"
            type="number"
            placeholder=""
            className="w-full "
            size="md"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="block-end-input">Sale price</FieldLabel>
          <InputGroup className="h-auto">
            <InputGroupInput id="block-end-input" placeholder="Enter amount" />
            <InputGroupAddon align="block-end">
              <Label htmlFor="auto_sale_calculate">Auto</Label>
              <Switch
                id="auto_sale_calculate"
                className=""
                size="sm"
                defaultChecked
              />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            Enter the sale price or toggle{" "}
            <label
              htmlFor="auto_sale_calculate"
              className="underline underline-offset-2"
            >
              Auto
            </label>{" "}
            to calculate it automatically.
          </FieldDescription>
        </Field>
      </FieldGroup>
  
   </CompWrapper>
  );
};
