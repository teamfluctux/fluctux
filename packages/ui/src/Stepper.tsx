import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { Check, type LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

type MenuDataType = {
  label: string;
  value: string;
  icon?: LucideIcon;
};

type StepperProps = {
  steps: MenuDataType[];
  onStepChange?: (step: MenuDataType, index: number) => void;
  onFinish?: () => void;
  isEnableTooltip?: boolean;
  isEnableLabel?: boolean;
  tooltipSide?: "top" | "bottom" | "left" | "right";
  classNames?: {
    buttonWrapperClassName?: string;
    stepNodeClassName?: string;
    wrapperClassName?: string;
    connectorLineClassName?: string;
    labelClassName?: string;
  };
};

export type StepperRef = {
  next: () => void;
  back: () => void;
  goTo: (index: number) => void;
  currentStepIndex: number;
  progressValue: number;
  isLast: boolean;
};

type StepNodeButtonProps = {
  isDone: boolean;
  isActive: boolean;
  index: number;
  stepIcon?: LucideIcon;
  stepNodeClassName?: string;
};
const StepNodeButton = forwardRef<HTMLSpanElement, StepNodeButtonProps>(
  (
    {
      isDone,
      isActive,
      index,
      stepIcon: StepIcon,
      stepNodeClassName,
      ...props
    },
    ref
  ) => {
    const state = isDone ? "done" : isActive ? "active" : "inActive";
    return (
      <span
        {...props}
        ref={ref}
        data-state={state}
        className={`w-[30px] h-[30px] hover:scale-[1.1] rounded-full flex items-center justify-center text-[11px] font-medium relative z-10 shrink-0 transition-all border-border-color_2  ring-0 duration-200 data-[state=done]:bg-primary-color data-[state=active]:bg-background-color_800C data-[state=active]:ring-2 data-[state=active]:ring-primary-color data-[state=active]:text-text-color_1 data-[state=inActive]:bg-background-color_800C data-[state=inActive]:border ${stepNodeClassName}`}
      >
        {isDone ? (
          <Check size={14} />
        ) : StepIcon ? (
          <StepIcon size={14} />
        ) : (
          <span>{index + 1}</span>
        )}
      </span>
    );
  }
);

StepNodeButton.displayName = "StepNodeButton";

export const Stepper = forwardRef<StepperRef, StepperProps>(
  (
    {
      steps,
      onStepChange,
      onFinish,
      classNames,
      tooltipSide = "top",
      isEnableLabel = true,
      isEnableTooltip,
    },
    ref
  ) => {
    const [current, setCurrent] = useState(0);

    const goTo = useCallback((index: number) => {
      setCurrent(index);
      onStepChange?.(steps[index]!, index);
    }, []);

    const handleBack = useCallback(() => {
      if (current > 0) goTo(current - 1);
    }, []);

    const handleNext = useCallback(() => {
      if (current < steps.length - 1) {
        goTo(current + 1);
      } else {
        onFinish?.();
      }
    }, []);

    const progressPct =
      current === 0 ? 0 : Math.round((current / (steps.length - 1)) * 100);
    const isLast = current === steps.length - 1;

    useImperativeHandle(ref, () => {
      return {
        next: handleNext,
        back: handleBack,
        goTo: goTo,
        currentStepIndex: current,
        progressValue: progressPct,
        isLast: isLast,
      };
    }, []);

    return (
      <div className={`flex mb-6 w-full ${classNames?.wrapperClassName}`}>
        {steps.map((step, i) => {
          const isDone = i < current;
          const isActive = i === current;
          const StepIcon = step.icon;

          return (
            <div
              key={step.value}
              className={`flex flex-col outline-none! outline-0! ring-0! items-center flex-1 min-w-28 relative bg-transparent cursor-pointer px-1 py-1 border-none gap-1.5 ${classNames?.buttonWrapperClassName}`}
              onClick={() => goTo(i)}
              data-state={isDone ? "done" : isActive ? "active" : "inActive"}
              aria-current={isActive ? "step" : undefined}
            >
              {/* -- Connector line */}
              {i < steps.length - 1 && (
                <span
                  data-state={isDone && "done"}
                  className={`absolute top-4.5 h-[3px] z-0 transition-colors duration-300 left-[calc(50%+14px)] right-[calc(-50%+14px)] bg-background-color_800C data-[state=done]:bg-primary-color ${classNames?.connectorLineClassName}`}
                />
              )}
              {/* -- Circle */}

              {isEnableTooltip && !isEnableLabel ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <StepNodeButton
                      index={i}
                      isActive={isActive}
                      isDone={isDone}
                      stepIcon={StepIcon}
                      stepNodeClassName={classNames?.stepNodeClassName}
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    side={`${tooltipSide}`}
                    className="z-[999999999999999999]"
                  >
                    <p>{step.label}</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <StepNodeButton
                  index={i}
                  isActive={isActive}
                  isDone={isDone}
                  stepIcon={StepIcon}
                  stepNodeClassName={classNames?.stepNodeClassName}
                />
              )}

              {/* -- Label */}
              {!isEnableTooltip && isEnableLabel && (
                <span
                  data-state={
                    isDone ? "done" : isActive ? "active" : "inActive"
                  }
                  className={`text-workspace_2 text-center font-medium leading-tight whitespace-nowrap transition-colors duration-200 data-[state=done]:text-primary-color data-[state=active]:text-text-color_1 data-[state=inActive]:text-text-color_4 ${classNames?.labelClassName}`}
                >
                  {step.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = "Stepper";
