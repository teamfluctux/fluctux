import Image from "next/image";
import { useSortable } from "@dnd-kit/react/sortable";
import type { ProductManageDataType } from "@/types";
import { RestrictToElement } from "@dnd-kit/dom/modifiers";

export const ProductImage = ({
  item,
}: {
  item: NonNullable<ProductManageDataType["images"]>[number];
}) => (
  <div className="w-full h-full rounded-lg border border-border-color_1 overflow-hidden">
    <Image
      src={item.src}
      width={400}
      height={400}
      className="w-full h-full object-cover object-center"
      alt={item.label ?? "product image"}
    />
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
        className="w-[200px] h-[200px] rounded-lg border border-dashed border-surface-border bg-surface-bg overflow-hidden"
      />
    );
  }

  return (
    <div ref={ref} className="w-[200px] h-[200px]">
      <ProductImage item={item} />
    </div>
  );
};
