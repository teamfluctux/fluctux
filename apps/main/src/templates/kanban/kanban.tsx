"use client";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import React, { useCallback, useEffect, useState } from "react";
import { DndContainer } from "./DndContainer";
import { DndItem } from "./DndItem";
import { kanbanStore } from "@/services/stores";
import { KanbanDndDataEnum } from "./constant";
import { v4 as uuidV4 } from "uuid";
import { observer } from "mobx-react";

type DndType = {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  }[];
};

export const KanbanTemplate = observer(() => {
  const data: DndType[] = [
    {
      id: `container-${uuidV4()}`,
      title: "Todo",
      items: [
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Itfdhem 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Itedfhm 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Ifdhfdhem 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Itemdfghfh 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 2",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 3",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 4",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 5",
        },
        {
          id: `item-${uuidV4()}`,
          title: "Item 1",
        },
      ],
    },
    {
      id: `container-${uuidV4()}`,
      title: "In Progress",
      items: [
        {
          id: `item-${uuidV4()}`,
          title: "Item 2",
        },
      ],
    },
    {
      id: `container-${uuidV4()}`,
      title: "Done",
      items: [
        {
          id: `item-${uuidV4()}`,
          title: "Item 3",
        },
      ],
    },
    {
      id: `container-${uuidV4()}`,
      title: "Custom",
      items: [
        {
          id: `item-${uuidV4()}`,
          title: "Item 4",
        },
      ],
    },
  ];

  useEffect(() => {
    kanbanStore.setContainers(data);
  }, []);

  //   const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  //   const [currentContainerID, setContainerID] = useState<UniqueIdentifier>();
  //   const [containerName, setContainerName] = useState<string>("");
  //   const [itemName, setItemName] = useState<string>("");
  //   const [showAddContainerModel, setShowAddContainerModel] =
  //     useState<boolean>(false);
  //   const [showAddItemModel, setShowAddItemModel] = useState<boolean>(false);

  const findKanbanDndValues = (
    id: UniqueIdentifier,
    type: KanbanDndDataEnum
  ) => {
    if (type === KanbanDndDataEnum.ITEM) {
      return kanbanStore.containers.find((container) =>
        container.items!.find((item) => item.id === id)
      );
    }

    if (type === KanbanDndDataEnum.CONTAINER) {
      return kanbanStore.containers.find((item) => item.id === id);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleOnDragStart = (e: DragStartEvent) => {
    const { active } = e;
    kanbanStore.setActiveId(active.id);
  };

  const handleOnDragOver = (e: DragOverEvent) => {
    const { active, over } = e;

    if (
      !active.id.toString().includes(KanbanDndDataEnum.ITEM) ||
      !over?.id.toString().includes(KanbanDndDataEnum.CONTAINER)
    )
      return;

    const activeContainer = findKanbanDndValues(
      active.id,
      KanbanDndDataEnum.ITEM
    );
    const overContainer = findKanbanDndValues(
      over.id,
      KanbanDndDataEnum.CONTAINER
    );

    if (!activeContainer || !overContainer) return;

    const activeContainerIndex = kanbanStore.containers.findIndex(
      (c) => c.id === activeContainer.id
    );
    const overContainerIndex = kanbanStore.containers.findIndex(
      (c) => c.id === overContainer.id
    );

    // If already in the target container, do nothing
    if (activeContainerIndex === overContainerIndex) return;

    const activeItemIndex = activeContainer.items!.findIndex(
      (i) => i.id === active.id
    );

    let newContainers = [...kanbanStore.containers];
    const [removedItem] = newContainers[activeContainerIndex]!.items!.splice(
      activeItemIndex,
      1
    );

    newContainers[overContainerIndex]!.items!.push(removedItem!);
    kanbanStore.setContainers(newContainers);
  };

  const handleOnDragMove = (e: DragMoveEvent) => {
    const { active, over } = e;

    // handle items sorting
    // if (
    //   active.id.toString().includes(KanbanDndDataEnum.ITEM) &&
    //   over?.id.toString().includes(KanbanDndDataEnum.ITEM) &&
    //   active &&
    //   over &&
    //   active.id !== over.id
    // ) {
    //   const activeContainer = findKanbanDndValues(
    //     active.id,
    //     KanbanDndDataEnum.ITEM
    //   );
    //   const overContainer = findKanbanDndValues(
    //     over.id,
    //     KanbanDndDataEnum.ITEM
    //   );

    //   if (!activeContainer || !overContainer) return;
    //   //   find the index of active and over container
    //   const activeContainerIndex = kanbanStore.containers.findIndex(
    //     (container) => container.id === activeContainer.id
    //   );
    //   const overContainerIndex = kanbanStore.containers.findIndex(
    //     (container) => container.id === overContainer.id
    //   );
    //   //   find the index of active and over item
    //   const activeItemIndex = activeContainer.items!.findIndex(
    //     (item) => item.id === active.id
    //   );
    //   const overItemIndex = overContainer.items!.findIndex(
    //     (item) => item.id === over.id
    //   );

    //   // in the same container
    //   if (activeContainerIndex === overContainerIndex) {
    //     let newItems = [...kanbanStore.containers];
    //     newItems[activeContainerIndex]!.items! = arrayMove(
    //       newItems[activeContainerIndex]?.items!,
    //       activeItemIndex,
    //       overItemIndex
    //     );

    //     kanbanStore.setContainers(newItems);
    //   } else {
    //     let newItems = [...kanbanStore.containers];
    //     const [removedItem] = newItems[activeContainerIndex]!.items!.splice(
    //       activeItemIndex,
    //       1
    //     );

    //     newItems[overContainerIndex]!.items!.splice(
    //       overItemIndex,
    //       0,
    //       removedItem!
    //     );

    //     kanbanStore.setContainers(newItems);
    //   }
    // }

    // handling item drop into the container
    if (
      active.id.toString().includes(KanbanDndDataEnum.ITEM) &&
      over?.id.toString().includes(KanbanDndDataEnum.CONTAINER) &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeContainer = findKanbanDndValues(
        active.id,
        KanbanDndDataEnum.ITEM
      );
      const overContainer = findKanbanDndValues(
        over.id,
        KanbanDndDataEnum.CONTAINER
      );

      if (!activeContainer || !overContainer) return;

      //   find the index of active and over container
      const activeContainerIndex = kanbanStore.containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = kanbanStore.containers.findIndex(
        (container) => container.id === overContainer.id
      );

      //   find the index of active and over items
      const activeItemIndex = activeContainer.items!.findIndex(
        (item) => item.id === active.id
      );

      let newItems = [...kanbanStore.containers];
      const [removedItem] = newItems[activeContainerIndex]!.items!.splice(
        activeItemIndex,
        1
      );

      newItems[overContainerIndex]!.items!.push(removedItem!);
      kanbanStore.setContainers(newItems);
    }
  };

  const handleOnDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (
      active.id.toString().includes(KanbanDndDataEnum.CONTAINER) &&
      over?.id.toString().includes(KanbanDndDataEnum.CONTAINER) &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the index of the active and over container
      const activeContainerIndex = kanbanStore.containers.findIndex(
        (container) => container.id === active.id
      );
      const overContainerIndex = kanbanStore.containers.findIndex(
        (container) => container.id === over.id
      );
      // Swap the active and over container
      let newItems = [...kanbanStore.containers];
      newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex);
      kanbanStore.setContainers(newItems);
    }

    // Handling item Sorting
    if (
      active.id.toString().includes(KanbanDndDataEnum.ITEM) &&
      over?.id.toString().includes(KanbanDndDataEnum.ITEM) &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findKanbanDndValues(
        active.id,
        KanbanDndDataEnum.ITEM
      );
      const overContainer = findKanbanDndValues(
        over.id,
        KanbanDndDataEnum.ITEM
      );

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = kanbanStore.containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = kanbanStore.containers.findIndex(
        (container) => container.id === overContainer.id
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );
      const overitemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id
      );

      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...kanbanStore.containers];
        newItems[activeContainerIndex]!.items = arrayMove(
          newItems[activeContainerIndex]!.items,
          activeitemIndex,
          overitemIndex
        );
        kanbanStore.setContainers(newItems);
      } else {
        // In different containers
        let newItems = [...kanbanStore.containers];
        const [removeditem] = newItems[activeContainerIndex]!.items.splice(
          activeitemIndex,
          1
        );
        newItems[overContainerIndex]!.items.splice(
          overitemIndex,
          0,
          removeditem!
        );
        kanbanStore.setContainers(newItems);
      }
    }

    // Handling item dropping into Container
    if (
      active.id.toString().includes(KanbanDndDataEnum.ITEM) &&
      over?.id.toString().includes(KanbanDndDataEnum.CONTAINER) &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // find the active and over container
      const activeContainer = findKanbanDndValues(
        active.id,
        KanbanDndDataEnum.ITEM
      );
      const overContainer = findKanbanDndValues(
        over.id,
        KanbanDndDataEnum.CONTAINER
      );

      if (!activeContainer || !overContainer) return;

      // find the index of the active and over container
      const activeContainerIndex = kanbanStore.containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = kanbanStore.containers.findIndex(
        (container) => container.id === overContainer.id
      );
      // find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );

      let newItems = [...kanbanStore.containers];
      const [removeditem] = newItems[activeContainerIndex]!.items.splice(
        activeitemIndex,
        1
      );
      newItems[overContainerIndex]!.items.push(removeditem!);
      kanbanStore.setContainers(newItems);
    }
    kanbanStore.setActiveId(null);
  };

  return (
    <div>
      <div className="flex justify-start items-start gap-2 overflow-x-scroll w-full p-2 h-[calc(100vh-40px)]">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleOnDragStart}
          onDragOver={handleOnDragOver}
          onDragMove={handleOnDragMove}
          onDragEnd={handleOnDragEnd}
        >
          <SortableContext
            items={kanbanStore.containers.map((contr) => contr.id)}
          >
            {kanbanStore.containers.map((contr) => {
              return (
                <DndContainer
                  id={contr.id}
                  title={contr.title || "Undefined"}
                  key={contr.id}
                >
                  <SortableContext items={contr.items!.map((item) => item.id)}>
                    <div className="flex flex-col items-start justify-start gap-2 w-[320px] shrink-0">
                      {contr.items ? (
                        contr.items.map((item) => {
                          return (
                            <DndItem
                              id={item.id}
                              title={item.title}
                              key={item.id}
                            />
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                  </SortableContext>
                </DndContainer>
              );
            })}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
});
