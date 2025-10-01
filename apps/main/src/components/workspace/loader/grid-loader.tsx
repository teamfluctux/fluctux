import Skeleton from "react-loading-skeleton";

export const GridLoader = () => {
  return (
    <div className=" w-full overflow-hidden grid  grid-flow-col grid-cols-[300px_repeat(auto-fill,_200px)]">
      {Array.from({ length: 10 }).map((item, i) => {
        return (
          <div
            key={i}
            className={` ${i > 0 ? "w-[200px]" : "w-full"}  h-full excel_loader`}
          >
            <div className="w-full h-[50px] bg-background-color_900C excel_loader_header px-3 flex justify-center items-center">
              <div className="w-full  rounded-tiny overflow-hidden bg-background-color_800C h-[20px]"></div>
            </div>
            {Array.from({ length: 15 }).map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-full h-[50px] excel_loader px-3 flex justify-center items-center"
                >
                  <div className={`w-full`}>
                    <Skeleton height={20} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
