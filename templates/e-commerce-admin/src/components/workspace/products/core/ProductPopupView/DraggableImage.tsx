import Image from "next/image";
import { useSortable } from "@dnd-kit/react/sortable";
import type { ProductManageDataType } from "@/types";
import { RestrictToWindow } from "@dnd-kit/dom/modifiers";
import { Badge } from "@fluctux/ui";
import { ImageIcon } from "lucide-react";

export const ProductImage = ({
  item,
}: {
  item: NonNullable<ProductManageDataType["images"]>[number];
}) => (
  <div className="w-full h-full rounded-lg border border-border-color_1 overflow-hidden bg-background-color_900C">
    <div className="w-full h-[calc(100%-32px)]">

    <Image
      src={item.src}
      width={400}
      height={400}
      className="w-full h-full object-cover object-center select-none pointer-events-none"
      alt={item.label ?? "product image"}
      />
      </div>
      <div className="h-8 px-3 flex justify-start items-center one-line-ellipsis text-xs font-medium text-text-color_1">
{item.label}
      </div>
  </div>
);

export const DraggableImage = ({
  item,
  index = 0,
  isOverlay = false,

}: {
  item: NonNullable<ProductManageDataType["images"]>[number];
  index?: number;

  isOverlay?: boolean;
}) => {
  const { ref, isDragging } = useSortable({
    id: item.src,
    index: index,
    data: { type: "image", item },
    modifiers: [RestrictToWindow]

  });

  if (isOverlay) {
    return (
      <div className="w-[200px] h-[200px]">
        <ProductImage item={item} />
      </div>
    );
  }

  // Dragging source — show placeholder
  if (isDragging) {
    return (
      <div
        ref={ref}
        className="w-[200px] h-[200px] flex justify-center items-center text-surface-bg-active rounded-lg border border-dashed border-surface-border bg-surface-bg overflow-hidden"
      ><ImageIcon size={90} strokeWidth={1.2} /></div>
    );
  }

  return (
    <div ref={ref} className="w-[200px] h-[200px] relative">
      {index == 0 && <Badge className="absolute top-2 left-2 ">Thumbnail Image</Badge>}
      <ProductImage item={item} />
    </div>
  );
};
