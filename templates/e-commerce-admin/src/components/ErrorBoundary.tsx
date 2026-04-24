"use client";

import {
  FxButton,
} from "@fluctux/ui";
import { AlertCircleIcon, Bug, Wrench } from "lucide-react";
// @ts-ignore
import { unstable_catchError as catchError, type ErrorInfo } from "next/error";

function ErrorFallback(
  props: { title: string },
  { error, unstable_retry }: ErrorInfo
) {
  return (
    <div className="w-full rounded-lg p-4 py-3 border-surface-red-border-active bg-surface-red-bg border flex justify-start items-start gap-2">
      <AlertCircleIcon size={16} className="text-red-500 shrink-0" />
      <div>
        <h2 className="text-[15px] font-medium  text-red-500 leading-4">
          {props.title}
        </h2>
        <p className="text-sm text-rdx-red-fg mt-1 leading-[18px]">
          {error.message}
        </p>
        <div className="flex justify-start items-center gap-2 shrink-0">
          <FxButton
          icon={Wrench}
            size="xs"
            variant="secondary"
            className="mt-3 "
            onClick={() => unstable_retry()}
          >
            Try to fix
          </FxButton>
          <FxButton icon={Bug} size="xs" variant="destructive" className="mt-3 ">
            Report Error
          </FxButton>
        </div>
      </div>
    </div>
  );
}

export default catchError(ErrorFallback);
