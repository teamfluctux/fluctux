import * as React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "./combobox";
import { FxButton } from "./fxbutton";
import type { MenuDataType } from "@fluctux/types";
import { X } from "lucide-react";

type ComboboxMultiplePropsType = {
  items: MenuDataType[];
  selectedValues?: MenuDataType[];
  onValueAdd?: (values: MenuDataType) => void;
  onRemoveAllAddedData?: () => void;
  classNames?: {
    chipsContainerClassName?: string;
  };
};

export function ComboboxMultiple({
  items,
  onValueAdd,
  selectedValues = [],
  onRemoveAllAddedData,
  classNames,
}: ComboboxMultiplePropsType) {
  const anchor = useComboboxAnchor();

  return (
    <Combobox
      value={selectedValues as any[]}
      onValueChange={(value) => onValueAdd?.(value as any)}
      multiple
      autoHighlight
      items={items}
    >
      <ComboboxChips
        ref={anchor}
        className={`w-full max-w-xs relative ${classNames?.chipsContainerClassName}`}
      >
        <ComboboxValue>
          {(data: MenuDataType[]) => (
            <React.Fragment>
              {data.map((item) => {
                if (item.label && item.value)
                  return (
                    <ComboboxChip key={item.value}>{item.label}</ComboboxChip>
                  );
              })}
              <ComboboxChipsInput />
            </React.Fragment>
          )}
        </ComboboxValue>
        {selectedValues?.length > 0 && (
          <FxButton
            onClick={() => onRemoveAllAddedData?.()}
            variant="ghost_zinc_2"
            size="square_xs"
            className="rounded-sm! absolute top-1 right-1"
            icon={X}
          />
        )}
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(data) => (
            <ComboboxItem key={data.value} value={data}>
              {data.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
