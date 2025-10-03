import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
  EmojiPicker,
  EmojiPickerSearch,
  EmojiPickerContent,
  EmojiPickerFooter,
} from "./emoji-picker";

type EmojiPickerPopoverProps = {
  children?: React.ReactNode;
  onEmojiSelect?: (emoji: string) => void; // clearer callback
  changeOpen?: boolean;
};
export const EmojiPickerPopover = ({
  changeOpen = false,
  children,
  onEmojiSelect,
}: EmojiPickerPopoverProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(changeOpen);
  const handleEmojiSelect = ({ emoji }: { emoji: string }) => {
    onEmojiSelect?.(emoji); // callback to parent
    setIsOpen?.(false); // close popover
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen?.(open);
  };
  return (
    <Popover onOpenChange={handleOpenChange} open={isOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <EmojiPicker className="h-[342px]" onEmojiSelect={handleEmojiSelect}>
          <EmojiPickerSearch />
          <EmojiPickerContent className="bg-background-color_900C" />
          <EmojiPickerFooter />
        </EmojiPicker>
      </PopoverContent>
    </Popover>
  );
};
