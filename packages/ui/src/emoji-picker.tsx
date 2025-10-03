"use client";

import React from "react"
import {
  type EmojiPickerListCategoryHeaderProps,
  type EmojiPickerListEmojiProps,
  type EmojiPickerListRowProps,
  EmojiPicker as EmojiPickerPrimitive,
} from "frimousse";
import { LoaderIcon, SearchIcon } from "lucide-react";
import { cn } from "./lib/utils";

function EmojiPicker({
  className,
  ...props
}: React.ComponentProps<typeof EmojiPickerPrimitive.Root>) {
  return (
    <EmojiPickerPrimitive.Root  
      className={cn(
        "bg-background-color_900C text-text-color_2 isolate border border-border-color_1 flex h-full w-fit flex-col overflow-hidden rounded-md",
        className
      )}
      data-slot="emoji-picker"
      {...props}
    />
  );
}

function EmojiPickerSearch({
  className,
  ...props
}: React.ComponentProps<typeof EmojiPickerPrimitive.Search>) {
  return (
    <div
      className={cn("flex h-9 items-center gap-2 border-b border-border-color_1 px-3 bg-background-color_925C ", className)}
      data-slot="emoji-picker-search-wrapper"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <EmojiPickerPrimitive.Search
        className="outline-hidden !outline-none !ring-0 placeholder:text-text-color_3 flex h-10 w-full rounded-md bg-transparent py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        data-slot="emoji-picker-search"
        {...props}
      />
    </div>
  );
}

function EmojiPickerRow({ children, ...props }: EmojiPickerListRowProps) {
  return (
    <div {...props} className="scroll-my-1 px-1" data-slot="emoji-picker-row">
      {children}
    </div>
  );
}

function EmojiPickerEmoji({
  emoji,
  className,
  ...props
}: EmojiPickerListEmojiProps) {
  return (
    <button
      {...props}
      className={cn(
        "data-[active]:bg-red-500 flex size-7 items-center justify-center rounded-sm text-workspace_2",
        className
      )}
      data-slot="emoji-picker-emoji"
    >
      {emoji.emoji}
    </button>
  );
}

function EmojiPickerCategoryHeader({
  category,
  ...props
}: EmojiPickerListCategoryHeaderProps) {
  return (
    <div
      {...props}
      className="bg-background-color_900C text-text-color_2 px-3 pb-2 pt-3.5 text-xs leading-none"
      data-slot="emoji-picker-category-header"
    >
      {category.label}
    </div>
  );
}

function EmojiPickerContent({
  className,
  ...props
}: React.ComponentProps<typeof EmojiPickerPrimitive.Viewport>) {
  return (
    <EmojiPickerPrimitive.Viewport
      className={cn("outline-hidden relative flex-1", className)}
      data-slot="emoji-picker-viewport"
      {...props}
    >
      <EmojiPickerPrimitive.Loading
        className="absolute inset-0 flex items-center justify-center text-text-color_4"
        data-slot="emoji-picker-loading"
      >
        <LoaderIcon className="size-4 animate-spin" />
      </EmojiPickerPrimitive.Loading>
      <EmojiPickerPrimitive.Empty
        className="absolute inset-0 flex items-center justify-center text-text-color_2 text-sm"
        data-slot="emoji-picker-empty"
      >
        No emoji found.
      </EmojiPickerPrimitive.Empty>
      <EmojiPickerPrimitive.List
      data-slot="emoji-picker-list"
       className="select-none pb-1"
  components={{
    
    Row: EmojiPickerRow,
     CategoryHeader: EmojiPickerCategoryHeader,
    Emoji: ({ emoji, ...props }) => {
      return (
    <button
      {...props}
      className={cn(
        "relative flex cursor-pointer aspect-square size-8 items-center justify-center overflow-hidden rounded-md text-read_18 data-[active]:bg-neutral-100/80 dark:data-[active]:bg-neutral-800/80 group",
        className
      )}
    >
      {/* Blur background, shown only on hover */}
      <span
        className="absolute inset-0 hidden group-hover:flex items-center justify-center text-[2.5em] blur-lg saturate-200 opacity-80 pointer-events-none"
      >
        {emoji.emoji}
      </span>

      {/* Main emoji */}
      <span className="relative z-10">{emoji.emoji}</span>
    </button>
      );
    },
  }}
/>
      {/* <EmojiPickerPrimitive.List
        className="select-none pb-1"
        components={{
          Row: EmojiPickerRow,
          Emoji: EmojiPickerEmoji,
          CategoryHeader: EmojiPickerCategoryHeader,
        }}
        data-slot="emoji-picker-list"
      /> */}
    </EmojiPickerPrimitive.Viewport>
  );
}

function EmojiPickerFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "max-w-(--frimousse-viewport-width) flex w-full min-w-0 items-center gap-1 border-t border-border-color_1 p-2",
        className
      )}
      data-slot="emoji-picker-footer"
      {...props}
    >
      <EmojiPickerPrimitive.ActiveEmoji>
        {({ emoji }) =>
          emoji ? (
            <>
              <div className="flex size-7 flex-none items-center justify-center text-read_18">
                {emoji.emoji}
              </div>
              <span className="text-text-color_4 truncate text-xs">
                {emoji.label}
              </span>
            </>
          ) : (
            <span className="text-text-color_4 ml-1.5 flex h-7 items-center truncate text-xs">
              Select an emoji…
            </span>
          )
        }
      </EmojiPickerPrimitive.ActiveEmoji>
    </div>
  );
}

export {
  EmojiPickerEmoji,
  EmojiPicker,
  EmojiPickerSearch,
  EmojiPickerContent,
  EmojiPickerFooter,
};