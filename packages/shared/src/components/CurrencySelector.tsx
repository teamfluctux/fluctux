"use client";
import React from "react";
import { data, type CurrencyCodeRecord } from "currency-codes";
import ReactCountryFlag from "react-country-flag";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@fluctux/ui";

type CurrencySelectorPropsType = {
  onCurrencySelect?: (value: string) => void;
  classNames?: {
    inputClassName?: string
  }
};

export const CurrencySelector = ({
  onCurrencySelect,
  classNames
}: CurrencySelectorPropsType) => {
  return (
    <Combobox
      items={data}
      onValueChange={(value) => onCurrencySelect?.(String(value))}
    >
      <ComboboxInput placeholder="Select a timezone" showClear className={classNames?.inputClassName} />
      <ComboboxContent>
        <ComboboxEmpty>No Currency found.</ComboboxEmpty>
        <ComboboxList>
          {(group: CurrencyCodeRecord, index) => {
            return (
              <ComboboxItem key={group.number} value={group.code}>
                <div className="text-workspace_2 p-1.5 shrink-0 py-1! border border-border-color_2 bg-background-color_800C rounded-sm tracking-wider flex justify-center items-center gap-2">
                  {
                    <ReactCountryFlag
                      style={{
                        fontSize: "1.5em",
                      }}
                      className="emojiFlag"
                      countryCode={`${group.code.slice(0, 2)}`}
                      svg
                    />
                  }
                  {group.code}
                </div>{" "}
                <span className="text-[12px] text-text-color_3 two-line-ellipsis leading-3.5">
                  {group.currency}
                </span>
              </ComboboxItem>
            );
          }}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};
