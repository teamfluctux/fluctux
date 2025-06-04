"use client";
import {
  ORG_PRIVACY_OPTIONS,
  ORG_VISIBILITY_OPTIONS,
} from "@fluctux/constants";
import {
  FxButton,
  FxInput,
  FxSeparator,
  LUCIDE_WORKSPACE_ICON_SIZE,
} from "@fluctux/ui";

import React, { useState } from "react";

const RadioButton = ({
  label,
  className,
  Icon,
}: {
  label: string;
  className?: string;
  Icon?: React.ElementType;
}) => {
  return (
    <div
      className={`px-2 py-0.5 text-text-color_2 overflow-hidden text-workspace_2 transition-colors hover:bg-[var(--surface-indigo-bg)] rounded-tiny peer-checked:!bg-[var(--surface-indigo-bg)] peer-checked:!text-[var(--surface-indigo-fg)] peer-checked:shadow-[inset_0px_0px_1px_1px_var(--surface-indigo-border)] ${className}`}
    >
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </div>
  );
};

export default function CreateOrgPage() {
  const [orgVisibilityOptionDesc, setOrgVisibilityOptionDesc] = useState("");
  const [orgPrivacyOptionDesc, setOrgPrivacyOptionDesc] = useState("");
  const handleGetVisibilityOptionDesc = (desc: string) => {
    setOrgVisibilityOptionDesc(desc);
  };
  const handleGetPrivacyOptionDesc = (desc: string) => {
    setOrgPrivacyOptionDesc(desc);
  };
  return (
    <div className="w-full h-screen overflow-y-auto flex justify-center items-center">
      <div className="max-w-[350px] h-[500px] ">
        <h1 className="text-read_25 font-medium text-center ">
          Create a new organization
        </h1>
        <p className="text-workspace_3 text-text-color_2 text-center mt-2">
          Start by setting up your organization. This will be your workspace
          where you can invite members, manage projects, and collaborate
          efficiently.
        </p>
        <div className="mt-10">
          <FxInput variant="outline" label="Organization Name" />
          <div className="mt-5">
            <FxInput variant="outline" label="Organization URL" />
          </div>
        </div>
        <div className="w-full bg-background-color_925C p-2 px-0 rounded mt-5">
          <div className="flex justify-start items-center gap-2 border-b border-border-color_1 pb-2 px-2">
            {ORG_VISIBILITY_OPTIONS.map((option, i) => {
              return (
                <label key={i}>
                  <input
                    type="radio"
                    name="org_visibility"
                    className="hidden peer"
                    value={option.value}
                    id={option.value}
                    defaultChecked={i == 0}
                    onChange={() => handleGetVisibilityOptionDesc(option.desc)}
                  />
                  <RadioButton label={option.label} />
                </label>
              );
            })}
          </div>
          <p className="text-workspace_3 text-text-color_3 px-2 pt-2 mt-1">
            {orgVisibilityOptionDesc || "Visible to everyone on Fluctux"}
          </p>
        </div>
        <FxSeparator gap="md" orientation="horizontal" />
        <div className=" w-full">
          <p className="text-workspace_2 font-medium text-text-color_4">
            Privacy
          </p>
          <div className="flex justify-center items-center w-full mt-2">
            {ORG_PRIVACY_OPTIONS.map((option, i) => {
              const Icon = option.icon;
              return (
                <label key={i} className="w-full">
                  <input
                    type="radio"
                    name="org_privacy"
                    className="hidden peer"
                    value={option.value}
                    id={option.value}
                    defaultChecked={i == 0}
                    onChange={() => handleGetPrivacyOptionDesc(option.desc)}
                  />
                  <RadioButton
                    Icon={Icon}
                    label={option.label}
                    className="w-full px-3 !py-1.5 hover:!bg-transparent hover:text-text-color_1 flex justify-start items-center gap-1.5"
                  />
                </label>
              );
            })}
          </div>
        </div>
        <FxSeparator gap="md" orientation="horizontal" />

        <div className="mt-5">
          <FxButton
            variant="primary"
            className="font-medium text-workspace_2 w-full py-2 rounded-tiny"
          >
            Create Organization
          </FxButton>
        </div>
      </div>
    </div>
  );
}
