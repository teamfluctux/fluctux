"use client";
import React from "react";
import { countries, type TCountryCode, type ICountry } from "countries-list";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Spinner,
} from "@fluctux/ui";
import ReactCountryFlag from "react-country-flag";

export type CountryListType = { code: TCountryCode } & ICountry;

type CountrySelectorPropsType = {
  onCountrySelect?: (data: CountryListType) => void;
  loading?: boolean
  classNames?: {
    inputClassName?: string;
  };
};

const countryList = Object.entries(countries).map(([code, data]) => ({
  code,
  ...data,
}));

/**
 * A searchable country selector combobox that displays country flags,
 * names, and capitals.
 *
 * Built on top of the `Combobox` primitive from `@fluctux/ui` and uses
 * `react-country-flag` for SVG flag rendering.
 *
 * @component
 * @param props - {@link CountrySelectorPropsType}
 * @param props.onCountrySelect - Callback fired when a country is selected.
 * @param props.classNames - Optional class name overrides for internal elements.
 * @param props.classNames.inputClassName - Class name applied to the combobox input.
 *
 * @returns A combobox with a searchable list of all world countries.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <CountrySelector />
 *
 * // With selection handler
 * <CountrySelector
 *   onCountrySelect={(country) => {
 *     console.log(country.code); // "BD"
 *     console.log(country.name); // "Bangladesh"
 *   }}
 * />
 *
 * // With custom input class
 * <CountrySelector
 *   onCountrySelect={(country) => console.log(country)}
 *   classNames={{ inputClassName: "w-full" }}
 * />
 * ```
 */
export const CountrySelector = ({
  onCountrySelect,
  loading = false,
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
        showClear
        placeholder="Select your business location"
        className={`w-[300px] ${classNames?.inputClassName}`}
      >
          {
            loading&& 
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">
            <Spinner />
          </InputGroupButton>
        </InputGroupAddon>
          }
      </ComboboxInput>

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
