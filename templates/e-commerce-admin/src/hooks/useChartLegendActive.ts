import { useCallback, useState } from "react";
import type { LegendPayload } from "recharts";

export const useChartLegendActive = <T extends string>(_keys: readonly T[]) => {
  const [activeKey, setActiveKey] = useState<T | undefined>(undefined);

  const getOpacity = useCallback(
    (key: T): number =>
      activeKey === undefined || activeKey === key ? 1 : 0.5,
    [activeKey]
  );

  const handleActiveLegend = useCallback((payload: LegendPayload) => {
    setActiveKey(payload.dataKey as T);
  }, []);

  const handleDisableLegend = useCallback(() => {
    setActiveKey(undefined);
  }, []);

  return { activeKey, getOpacity, handleActiveLegend, handleDisableLegend };
};
