import React, { useRef, useState } from "react";
import { CompWrapper } from "./CompWrapper";
import {
  DragDropManager,
  DragDropProvider,
  DragOverlay,
  type DragDropEventHandlers,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/react";
import { DraggableImage } from "./DraggableImage";
import type { ProductManageDataType } from "@/types";
import { createPortal } from "react-dom";
import { isSortable } from "@dnd-kit/react/sortable";
import { RestrictToElement } from "@dnd-kit/dom/modifiers";

const UPLOADED_IMAGES: ProductManageDataType["images"] = [
  {
    label: "Main Product View",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    isThumbnail: true,
  },
  {
    label: "Side Profile",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    isThumbnail: false,
  },
  {
    label: "Detail Shot 01",
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    isThumbnail: false,
  },
  {
    label: "Detail Shot 02",
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    isThumbnail: false,
  },
  {
    label: "Packaging",
    src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
    isThumbnail: false,
  },
  {
    label: "Lifestyle Context",
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    isThumbnail: false,
  },
];

export const ProductImagesEdit = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [uploadedImages, setUploadedImages] =
    useState<ProductManageDataType["images"]>(UPLOADED_IMAGES);
  const [activeDragImage, setActiveDragImage] = useState<
    NonNullable<ProductManageDataType["images"]>[number] | null
  >(null);

  const onDragStart = (event: Parameters<NonNullable<DragStartEvent>>[0]) => {
    const { source } = event.operation;

    if (isSortable(source)) {
      const { data } = source;
      setActiveDragImage(data.item);
    }
  };

  const onDragEnd = (event: Parameters<NonNullable<DragEndEvent>>[0]) => {
    setActiveDragImage(null);
    if (event.canceled) return;

    const { source } = event.operation;
    if (isSortable(source)) {
      const { index, initialIndex } = source;

      if (initialIndex !== index) {
        setUploadedImages((items) => {
          const newItems = [...items!];
          const [removed] = newItems.splice(initialIndex, 1);
          newItems.splice(index, 0, removed!);
          return newItems;
        });
      }
    }
  };

  return (
    <CompWrapper title="Product Images" fullWidth>
      <div className="w-fit grid grid-cols-3 h-fit gap-5">
        <DragDropProvider
          modifiers={[
            RestrictToElement.configure({
              element: () => containerRef.current,
            }),
          ]}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
        >
          {uploadedImages?.map((item, index) => (
            <DraggableImage key={item.src} item={item} index={index} />
          ))}
          <DragOverlay>
            {activeDragImage && (
              <DraggableImage item={activeDragImage} isOverlay={true} />
            )}
          </DragOverlay>
        </DragDropProvider>
      </div>
    </CompWrapper>
  );
};
