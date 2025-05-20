import React from "react";
import Skeleton from "react-loading-skeleton";

export const CommandMenuSkeleton = () => {
  return (
    <div className="w-[200px] border-border-color_1 overflow-hidden bg-background-color_950C border rounded h-[400px]">
      <div className="mb-1 px-2 py-1">
        <Skeleton height={13} borderRadius={"50px"} width={100} />

        <Skeleton height={28} borderRadius={"5px"} width={182} />
        <Skeleton
          height={28}
          borderRadius={"5px"}
          width={182}
          style={{ marginTop: "8px" }}
        />
        <Skeleton
          height={28}
          borderRadius={"5px"}
          width={182}
          style={{ marginTop: "8px" }}
        />
      </div>
      <div className="border-t border-border-color_1 pt-2  px-2">
        <div className="flex justify-start items-center gap-2 mb-1">
          <Skeleton
            className="flex-shrink-0"
            width={16}
            height={16}
            borderRadius={"5px"}
          />
          <Skeleton width={100} height={16} borderRadius={"50px"} />
        </div>
        <div className="flex justify-start items-center gap-2 mb-1">
          <Skeleton
            className="flex-shrink-0"
            width={16}
            height={16}
            borderRadius={"5px"}
          />
          <Skeleton width={130} height={16} borderRadius={"50px"} />
        </div>
        <div className="flex justify-start items-center gap-2 mb-2">
          <Skeleton
            className="flex-shrink-0"
            width={16}
            height={16}
            borderRadius={"5px"}
          />
          <Skeleton width={70} height={16} borderRadius={"50px"} />
        </div>
      </div>

      <div className="border-t border-border-color_1 pt-2 px-2">
        <div className="flex justify-start items-center gap-2 mb-1">
          <Skeleton
            className="flex-shrink-0"
            width={16}
            height={16}
            borderRadius={"5px"}
          />
          <Skeleton width={120} height={16} borderRadius={"50px"} />
        </div>
        <div className="flex justify-start items-center gap-2 mb-1">
          <Skeleton
            className="flex-shrink-0"
            width={16}
            height={16}
            borderRadius={"5px"}
          />
          <Skeleton width={95} height={16} borderRadius={"50px"} />
        </div>
      </div>
    </div>
  );
};
