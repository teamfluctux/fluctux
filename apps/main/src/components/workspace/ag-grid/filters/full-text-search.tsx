import React, { useCallback, useRef } from "react";
import type { IAfterGuiAttachedParams, IRowNode } from "ag-grid-community";
import type { CustomFilterDisplayProps } from "ag-grid-react";
import { useGridFilterDisplay } from "ag-grid-react";
import { FxInput } from "@fluctux/ui";

interface DoesFullTextFilterPassParams {
  model: string;
  node: IRowNode;
  handlerParams: {
    getValue: (node: IRowNode) => any;
  };
}

export const doesFullTextFilterPass: ({
  model,
  node,
  handlerParams,
}: DoesFullTextFilterPassParams) => boolean = ({
  model,
  node,
  handlerParams,
}: DoesFullTextFilterPassParams) => {
  // make sure each word passes separately, ie search for firstname, lastname
  let passed = true;
  model
    .toLowerCase()
    .split(" ")
    .forEach((filterWord) => {
      const value = handlerParams.getValue(node);
      if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
        passed = false;
      }
    });
  return passed;
};

export const FullTextSearchFilter = ({
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
    <div className="p-2">
      <FxInput
        variant="primary"
        ref={refInput}
        radius="tiny"
        className="p-1 px-2"
        type="text"
        value={model || ""}
        onChange={({ target: { value } }) =>
          onModelChange(value === "" ? null : value)
        }
        placeholder="Search"
      />
    </div>
  );
};
