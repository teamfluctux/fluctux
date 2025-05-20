import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const SidebarSkeletonLoading = () => {
  return (
     <div className="h-[calc(100%-107px)] w-full overflow-y-auto custom-scrollbar p-2">
                <div className="mb-1">
                  <div className="flex justify-start items-center gap-2 mb-1">
                    <Skeleton
                      className="flex-shrink-0"
                      width={16}
                      height={16}
                      borderRadius={"5px"}
                    />
                    <Skeleton width={200} height={16} borderRadius={"50px"} />
                  </div>

                  <div className="flex justify-start items-center gap-2 mb-1">
                    <Skeleton
                      className="flex-shrink-0"
                      width={16}
                      height={16}
                      borderRadius={"5px"}
                    />
                    <Skeleton width={150} height={16} borderRadius={"50px"} />
                  </div>

                  <div className="flex justify-start items-center gap-2 mb-1">
                    <Skeleton
                      className="flex-shrink-0"
                      width={16}
                      height={16}
                      borderRadius={"5px"}
                    />
                    <Skeleton width={100} height={16} borderRadius={"50px"} />
                  </div>
                </div>

                <div className="mb-1">
                  <div className="flex justify-start items-center gap-2 mb-1">
                    <Skeleton
                      className="flex-shrink-0"
                      width={16}
                      height={16}
                      borderRadius={"5px"}
                    />
                    <Skeleton width={130} height={16} borderRadius={"50px"} />
                  </div>

                  <div className="flex justify-start items-center gap-2 mb-1">
                    <Skeleton
                      className="flex-shrink-0"
                      width={16}
                      height={16}
                      borderRadius={"5px"}
                    />
                    <Skeleton width={180} height={16} borderRadius={"50px"} />
                  </div>

                  <div className="flex justify-start items-center gap-2 mb-1">
                    <Skeleton
                      className="flex-shrink-0"
                      width={16}
                      height={16}
                      borderRadius={"5px"}
                    />
                    <Skeleton width={100} height={16} borderRadius={"50px"} />
                  </div>
                </div>

                <div className="border-t border-border-color_1 mt-3 pt-3">
                  <div>
                    <Skeleton width={222} height={16} borderRadius={"50px"} />
                    <div className="border-l border-border-color_1 flex justify-start items-center gap-2 ml-2 pl-3">
                      <Skeleton
                        className="flex-shrink-0"
                        width={16}
                        height={16}
                        borderRadius={"5px"}
                      />
                      <Skeleton width={150} height={16} borderRadius={"50px"} />
                    </div>
                    <div className="border-l border-border-color_1 flex justify-start items-center gap-2 ml-2 pl-3">
                      <Skeleton
                        className="flex-shrink-0"
                        width={16}
                        height={16}
                        borderRadius={"5px"}
                      />
                      <Skeleton width={100} height={16} borderRadius={"50px"} />
                    </div>
                    <div className="border-l border-border-color_1 flex justify-start items-center gap-2 ml-2 pl-3">
                      <Skeleton
                        className="flex-shrink-0"
                        width={16}
                        height={16}
                        borderRadius={"5px"}
                      />
                      <Skeleton width={120} height={16} borderRadius={"50px"} />
                    </div>
                  </div>
                  <div className="mt-3">
                    <Skeleton width={222} height={16} borderRadius={"50px"} />
                    <div className="border-l border-border-color_1 flex justify-start items-center gap-2 ml-2 pl-3">
                      <Skeleton
                        className="flex-shrink-0"
                        width={16}
                        height={16}
                        borderRadius={"5px"}
                      />
                      <Skeleton width={110} height={16} borderRadius={"50px"} />
                    </div>
                    <div className="border-l border-border-color_1 flex justify-start items-center gap-2 ml-2 pl-3">
                      <Skeleton
                        className="flex-shrink-0"
                        width={16}
                        height={16}
                        borderRadius={"5px"}
                      />
                      <Skeleton width={140} height={16} borderRadius={"50px"} />
                    </div>
                    <div className="border-l border-border-color_1 flex justify-start items-center gap-2 ml-2 pl-3">
                      <Skeleton
                        className="flex-shrink-0"
                        width={16}
                        height={16}
                        borderRadius={"5px"}
                      />
                      <Skeleton width={90} height={16} borderRadius={"50px"} />
                    </div>
                  </div>
                </div>
              </div>
  )
}