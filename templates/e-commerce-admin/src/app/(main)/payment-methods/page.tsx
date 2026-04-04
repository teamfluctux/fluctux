"use client";
import { workspaceHeaderStore } from "@/services/stores";
import React, { useEffect, useState } from "react";
import { CountrySelector } from "./CountrySelector";
import { FxButton } from "@fluctux/ui";
import { PlusCircle } from "lucide-react";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { PaymentAddPopover } from "./PaymentAddPopover";

type MethodStatusCount = {
  active: number;
  inActive: number;
};

const MethodStatusLable = ({
  label,
  count,
}: {
  label: string;
  count: number;
}) => {
  return (
    <div className="flex justify-center items-center gap-1 text-workspace_2">
      <span className="text-text-color_4">{label}:</span>
      <span className="text-text-color_1">{count}</span>
    </div>
  );
};

export default function PaymentMethodPage() {
  const [methodStatusCount, setMethodStatusCount] =
    useState<MethodStatusCount>();

  useEffect(() => {
    workspaceHeaderStore.setMetaData({
      title: "Payment Methods",
      desc: "View, edit, and organize your entire product catalog",
    });

    setMethodStatusCount({
      active: 4,
      inActive: 5,
    });

    return () => workspaceHeaderStore.clearMetaData();
  }, []);

  return (
    <>
      <div className="w-full  h-[50px] mt-5 flex justify-between items-center ">
        <div className="flex justify-start items-center gap-5 ">
          <MethodStatusLable
            label="Active"
            count={Number(methodStatusCount?.active ?? 0)}
          />
          <MethodStatusLable
            label="Inactive"
            count={Number(methodStatusCount?.inActive ?? 0)}
          />
        </div>

        <div className="flex justify-end items-center gap-3">
          <CountrySelector />
          <FxButton size="sm" icon={PlusCircle}>
            Add Payment Method
          </FxButton>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-5">
        {Array.from({ length: 4 }).map((_, i) => {
          return <PaymentMethodCard />;
        })}
      </div>
      <PaymentAddPopover/>
    </>
  );
}
