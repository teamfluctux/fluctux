"use client";
import React, { useState } from "react";
import { countries, type TCountryCode, type ICountry } from "countries-list";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@fluctux/ui";
import ReactCountryFlag from "react-country-flag";

type CountryListType = { code: TCountryCode } & ICountry;

type CountrySelectorPropsType = {
  onCountrySelect?: (data: CountryListType) => void;
  classNames?: {
    inputClassName?: string;
  };
};

const countryList = Object.entries(countries).map(([code, data]) => ({
  code,
  ...data,
}));

console.log(countryList);

export const CountrySelector = ({
  onCountrySelect,
  classNames,
}: CountrySelectorPropsType) => {
  return (
    <Combobox
      onValueChange={(data: CountryListType | null) => {
        if (data) {
          onCountrySelect?.(data);
        }
      }}
      items={countryList}
      itemToStringLabel={(item: CountryListType | null) => item?.name ?? ""}
    >
      <ComboboxInput
        placeholder="Select your business location"
        className={`w-[300px] ${classNames?.inputClassName}`}
      />
      <ComboboxContent>
        <ComboboxEmpty>No countries found.</ComboboxEmpty>
        <ComboboxList>
          {(item: CountryListType) => (
            <ComboboxItem
              key={item.code}
              value={item}
              className={"leading-4.5 group!"}
            >
              <div className="flex justify-center items-center w-[27px] bg-background-color_750C border border-border-color_2 h-fit rounded-sm overflow-hidden">
                <ReactCountryFlag
                  style={{
                    fontSize: "1.5em",
                  }}
                  className="emojiFlag"
                  countryCode={`${item.code}`}
                  svg
                />
              </div>
              <div>
                <p>{item.name}</p>
                <p className="text-[12px] text-text-color_3 group-hover:text-red-600!">
                  {item.capital}
                </p>
              </div>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};
