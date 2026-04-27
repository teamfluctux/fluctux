"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FxButton,
  FxInput,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@fluctux/ui";
import { useReactForm } from "@/hooks";
import React, { useState } from "react";
import {
  scraperZodValidation,
  type ScraperConfigType,
  type ZodErrorType,
} from "@/zod";
import { scraperStore } from "stores";
import { toast } from "sonner";
import { set, z } from "zod/v4";
import { observer } from "mobx-react";

const WHAT_TO_DO_WITH_SCRAPED_PRODUCTS: { label: string; value: string }[] = [
  {
    label: "Save instantly",
    value: "save_instantly",
  },
  {
    label: "Save after review",
    value: "save_after_review",
  },
];

export const ScrapingConfiguration = observer(() => {
  const [payloadError, setPayloadError] =
    useState<ZodErrorType<ScraperConfigType>>();
  const { register, handleSubmit, setValue } = useReactForm({
    ZOD_SCHEMA: scraperZodValidation.ScraperConfig,
  });
  const onSubmit = handleSubmit((data) => {
    scraperStore.setScrapingConfiguration(data);

    const payload = scraperZodValidation.ScraperConfig.safeParse(
      scraperStore.scrapingConfiguration
    );
    if (!payload.success) {
      const formatError = z.flattenError(payload.error);
      if (formatError.fieldErrors.apiUrl) {
        toast.error(formatError.fieldErrors.apiUrl[0]);
      }
      setPayloadError(formatError);
    }
  });

  return (
    <div className="w-full">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Scraping Configuration</FieldLegend>
          <FieldDescription>
            Configure how the scraper should behave when fetching products.
          </FieldDescription>
          <Field>
            <FieldLabel>
              Number of products to scrape{" "}
              <span className="text-destructive">*</span>
            </FieldLabel>
            <FxInput
              {...register("numberOfProducts", { valueAsNumber: true })}
              type="number"
              isError={!!payloadError?.fieldErrors.numberOfProducts}
              errorMsg={payloadError?.fieldErrors.numberOfProducts}
              variant="blackPrimary"
              size="md"
              placeholder="20000"
              min={0}
            />
          </Field>
          <Field>
            <FieldLabel>
              What to do with scraped products{" "}
              <span className="text-destructive">*</span>
            </FieldLabel>
            <RadioGroup
              defaultValue="save_after_review"
              className="w-fit"
              onValueChange={(value) =>
                setValue("whatToDoWithScrapProducts", value)
              }
            >
              {WHAT_TO_DO_WITH_SCRAPED_PRODUCTS.map((item, i) => {
                return (
                  <div className="flex items-center gap-3" key={i}>
                    <RadioGroupItem value={item.value} id={item.value} />
                    <Label htmlFor={item.value}>{item.label}</Label>
                  </div>
                );
              })}
            </RadioGroup>

            <FieldDescription aria-invalid>
              Choose whether to save products directly to the database as they
              are scraped, or hold them for your review once scraping is
              complete.
            </FieldDescription>
          </Field>
        </FieldSet>
      </FieldGroup>

      <FxButton
        size="sm"
        className="mt-5 sticky bottom-4 place-self-end"
        onClick={onSubmit}
      >
        Start Scraping
      </FxButton>
    </div>
  );
});
