import React from "react";
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
  cn,
  AvatarImage,
  AvatarFallback,
  ComboboxDataType,
} from "./";
import { IconBase } from "react-icons/lib";
import { CheckIcon } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { PopoverContentProps } from "@radix-ui/react-popover";

type ComboBoxPropsType = {
  popoverTriggerComponent: React.ReactNode;
  isCloseOnSelectItem?: boolean;
  onComboDataSelect: (value: string) => void;
  data: ComboboxDataType[];
  currentValue: string;
  showSearchBox?: boolean;
  searchPlaceholder?: string;
  popoverProps?: PopoverContentProps;
};

export const ComboBox = ({
  popoverTriggerComponent,
  currentValue: value,
  isCloseOnSelectItem = true,
  onComboDataSelect,
  searchPlaceholder,
  showSearchBox = true,
  data: combos,
  popoverProps,
}: ComboBoxPropsType) => {
  const [open, setOpen] = React.useState(false);

  const handleComboItemSelect = React.useCallback(
    (selectedValue: string) => {
      onComboDataSelect?.(selectedValue);
      if (isCloseOnSelectItem) {
        setOpen(false);
      }
    },
    [onComboDataSelect, isCloseOnSelectItem]
  );

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
            <CommandEmpty>Not Found</CommandEmpty>
            <CommandGroup>
              {combos.map((combo) => {
                const Icon = combo.icon;
                return (
                  <CommandItem
                    className="hover:bg-background-color_800C transition-colors text-text-color_4 hover:!text-text-color_1 justify-between"
                    key={combo.value}
                    value={combo.value}
                    onSelect={handleComboItemSelect}
                  >
                    <div className="flex justify-start items-center gap-2">
                      {Icon ? (
                        <Icon className={`${combo.iconClassName}`} />
                      ) : combo.image ? (
                        <Avatar className="border w-[20px] h-[20px]">
                          <AvatarImage src={`${combo.image}`} alt="i" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      ) : (
                        ""
                      )}

                      {combo.label}
                    </div>
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === combo.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
