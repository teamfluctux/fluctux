import React, { useCallback, useRef } from "react";

import type { IAfterGuiAttachedParams } from "ag-grid-community";
import type { CustomFilterDisplayProps } from "ag-grid-react";
import { useGridFilterDisplay } from "ag-grid-react";
import { FxInput } from "@fluctux/ui";

export const UserRawNameFilter = ({
  model,
  onModelChange,
}: CustomFilterDisplayProps) => {
  const refInput = useRef<HTMLInputElement>(null);

  const afterGuiAttached = useCallback((params?: IAfterGuiAttachedParams) => {
    if (!params || !params.suppressFocus) {
      // Focus the input element for keyboard navigation.
      // Can't do this in an effect,
      // as the component is not recreated when hidden and then shown again
      refInput.current?.focus();
    }
  }, []);

  // register filter handlers with the grid
  useGridFilterDisplay({
    afterGuiAttached,
  });

  return (
    <div className="p-1">
      <FxInput ref={refInput}
      variant="secondary"
      className="p-1 px-2"
        type="text"
        value={model || ""}
        onChange={({ target: { value } }) =>
          onModelChange(value === "" ? null : value)
        }
        placeholder="Search" />
    </div>
  );
};
