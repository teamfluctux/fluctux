import React, { useState } from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
  Label,
  Checkbox,
  AvatarImage,
  AvatarFallback,
  type ComboboxDataType,
} from "./";
import type { PopoverContentProps } from "@radix-ui/react-popover";

type ComboBoxCheckboxPropsType = {
  popoverTriggerComponent: React.ReactNode;
  isCloseOnCheckItemForSingleData?: boolean;
  onComboDataChecked: (value: string) => void;
  data: ComboboxDataType[];
  showSearchBox?: boolean;
  checkedItems: ComboboxDataType[];
  searchPlaceholder?: string;
  iconSize?: string;
  popoverProps?: PopoverContentProps;
};

export const ComboBoxCheckbox = ({
  popoverTriggerComponent,
  isCloseOnCheckItemForSingleData = false,
  onComboDataChecked,
  data: combos,
  showSearchBox = true,
  searchPlaceholder,
  checkedItems: comboCheckedData,
  iconSize,
  popoverProps,
}: ComboBoxCheckboxPropsType) => {
  const [open, setOpen] = useState(false);

  const handleChecked = (value: string) => {
    onComboDataChecked?.(value);
    if (combos.length < 2) {
      if (isCloseOnCheckItemForSingleData) {
        setOpen(false);
      }
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{popoverTriggerComponent}</PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[200px] p-0 z-[9992] bg-background-color_900C border border-border-color_1"
        {...popoverProps}
      >
        <Command>
          {showSearchBox && (
            <CommandInput
              placeholder={`${searchPlaceholder ? searchPlaceholder : "Search..."}`}
            />
          )}
          <CommandList>
            <CommandEmpty>
              <span className="!text-text-color_3 text-workspace_2 font-medium">
                Not Found
              </span>
            </CommandEmpty>
            <CommandGroup>
              {combos.map((combo) => {
                const Icon = combo.icon;
                return (
                  <Label
                    key={combo.value}
                    className="hover:bg-background-color_800C transition-colors text-text-color_4 hover:!text-text-color_1 justify-start items-center gap-2 rounded-tiny"
                  >
                    <CommandItem className="!bg-transparent rounded-none">
                      <Checkbox
                        checked={comboCheckedData.some(
                          (data) => data.value === combo.value
                        )}
                        onCheckedChange={() => handleChecked(combo.value)}
                        value={combo.value}
                      />
                      <div className="flex justify-start items-center gap-2">
                        {Icon && (
                          <Icon
                            className={`${combo.iconClassName} `}
                            style={{
                              width: `${iconSize ?? "10px"}`,
                              height: `${iconSize ?? "10px"}`,
                            }}
                          />
                        )}
                        {combo.image && (
                          <Avatar className="border w-[20px] h-[20px]">
                            <AvatarImage src={`${combo.image}`} alt="i" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        )}
                        {combo.emoji && <span>{combo.emoji}</span>}
                        {combo.label}
                      </div>
                    </CommandItem>
                  </Label>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
