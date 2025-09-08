import {
  ICellEditorComp,
  ICellRendererComp,
  ICellRendererParams,
} from "ag-grid-community";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type BasicInputAgGridType = {} & ICellRendererParams;

export const BasicInputAgGrid = forwardRef<
  Omit<ICellRendererComp, "getGui">,
  BasicInputAgGridType
>((props, ref) => {
  const [value, setValue] = useState(props.value);

  useImperativeHandle(ref, () => ({
    refresh: (params) => {
      return false;
    },
    getValue: () => value,
  }));

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          const newValue = e.target.value;
          props.setValue?.(newValue);
          setValue(newValue);
        }}
      />
    </div>
  );
});
