"use client";
import {
  ORG_PRIVACY_OPTIONS,
  ORG_VISIBILITY_OPTIONS,
} from "@fluctux/constants";
import { OrgVisibilityType } from "@fluctux/types";
import {
  Checkbox,
  FxButton,
  FxInput,
  FxSeparator,
} from "@fluctux/ui";
import { MailPlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

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

const CheckboxButton = ({
  label,
  className,
  img,
}: {
  label: string;
  className?: string;
  img: string;
}) => {
  return (
    <div
      className={`flex justify-start items-center text-workspace_2 gap-1.5 font-medium text-text-color_2 ${className}`}
    >
      {img && (
        <div className="w-[25px] h-[25px] rounded-full overflow-hidden border border-border-color_1 ">
          <Image
            src={""}
            width={300}
            height={300}
            className="w-full h-full object-cover object-center"
            alt="profile-image"
          />
        </div>
      )}

      <span>{label}</span>
    </div>
  );
};

type CustomVisibilityCategoryType =
  | "FRIENDS"
  | "ORGANIZATIONS"
  | "ADD_BY_EMAIL";

interface SelectCategoryForCustomVisibility {
  label: string;
  value: CustomVisibilityCategoryType;
}
const SELECT_CATEGORY_FOR_CUSTOM_VISIBILITY: SelectCategoryForCustomVisibility[] =
  [
    {
      label: "Friends",
      value: "FRIENDS",
    },
    {
      label: "Organizations",
      value: "ORGANIZATIONS",
    },
    {
      label: "Add by Email",
      value: "ADD_BY_EMAIL",
    },
  ];

export default function CreateOrgPage() {
  const [orgVisibilityOptionDesc, setOrgVisibilityOptionDesc] = useState("");
  const [orgVisibilityType, setOrgVisibilityType] = useState<OrgVisibilityType>(
    ORG_VISIBILITY_OPTIONS[0]?.value as OrgVisibilityType
  );
  const [orgPrivacyOptionDesc, setOrgPrivacyOptionDesc] = useState(
    ORG_PRIVACY_OPTIONS[0]?.desc || ""
  );
  const [customVisbilityCategoryType, setCustomVisbilityCategoryType] =
    useState<CustomVisibilityCategoryType>(
      SELECT_CATEGORY_FOR_CUSTOM_VISIBILITY[0]
        ?.value as CustomVisibilityCategoryType
    );

  const handleGetVisibilityOption = (desc: string, type: OrgVisibilityType) => {
    setOrgVisibilityOptionDesc(desc);
    setOrgVisibilityType(type);
    setCustomVisbilityCategoryType("FRIENDS");
  };
  const handleGetPrivacyOptionDesc = (desc: string) => {
    setOrgPrivacyOptionDesc(desc);
  };
  const handleCustomVisibilityCategoryType = (
    type: CustomVisibilityCategoryType
  ) => {
    setCustomVisbilityCategoryType(type);
  };

  const handleCreateOrg = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    toast.success(data.message);
  };

  return (
    <div className="w-full h-screen overflow-y-auto flex justify-center items-start ">
      <div className="max-w-[350px] h-fit w-full my-auto py-24">
        <h1 className="text-read_25 font-medium text-center ">
          Create a new organization
        </h1>
        <p className="text-workspace_3 text-text-color_2 text-center mt-2">
          Start by setting up your organization. This will be your workspace
          where you can invite members, manage projects, and collaborate
          efficiently.
        </p>
        <div className="mt-10">
          <FxInput
            variant="outlineLabel"
            label="Organization Name"
            placeholder="e.g. Jhon's Org"
          />
          <div className="mt-5">
            <FxInput
              variant="outlineLabel"
              label="Organization URL"
              placeholder="e.g. jhons-org"
            />
          </div>
        </div>
        <FxSeparator gap="md" orientation="horizontal" />
        <p className="text-workspace_2 font-medium text-text-color_4">
          Visibility
        </p>
        <div className="w-full bg-background-color_925C p-2 px-0 rounded mt-1">
          <div className="flex justify-start items-center gap-1 border-b border-border-color_1 pb-2 px-2">
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
                    onChange={() =>
                      handleGetVisibilityOption(option.desc, option.value)
                    }
                  />
                  <RadioButton label={option.label} />
                </label>
              );
            })}
          </div>
          <p className="text-workspace_3 text-text-color_3 px-4 pt-1 mt-1">
            {orgVisibilityOptionDesc || "Visible to everyone on Fluctux"}
          </p>
          {orgVisibilityType === "CUSTOM" && (
            <div className="border-t border-border-color_1 mt-1">
              <div className="flex justify-start items-center gap-1 px-2 pt-2">
                {SELECT_CATEGORY_FOR_CUSTOM_VISIBILITY.map((option, i) => {
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        name="custom_visibility_category"
                        className="hidden peer"
                        value={option.value}
                        id={option.value}
                        defaultChecked={i == 0}
                        onChange={() =>
                          handleCustomVisibilityCategoryType(option.value)
                        }
                      />
                      <RadioButton
                        label={option.label}
                        className="text-text-color_4"
                      />
                    </label>
                  );
                })}
              </div>
              {customVisbilityCategoryType !== "ADD_BY_EMAIL" && (
                <>
                  <div className="px-4 mt-2 mb-1">
                    <p className="text-text-color_3 text-workspace_3 mb-2">
                      Find & select specific Users and Organizations.
                    </p>
                    <FxInput
                      variant="outline"
                      name="search_uandorg"
                      size="sm"
                      className="w-full !py-0.5 placeholder:text-text-color_3 !bg-background-color_900C"
                      placeholder="Search users and organizations"
                    />
                  </div>

                  <div>
                    <label className="flex justify-start items-center gap-5 px-4 py-1.5">
                      <Checkbox />
                      <CheckboxButton
                        label="Nimul Islam Mahin"
                        img="my-image"
                      />
                    </label>
                    <label className="flex justify-start items-center gap-5 px-4 py-1.5">
                      <Checkbox />
                      <CheckboxButton
                        label="Nimul Islam Mahin"
                        img="my-image"
                      />
                    </label>
                    <label className="flex justify-start items-center gap-5 px-4 py-1.5">
                      <Checkbox />
                      <CheckboxButton
                        label="Nimul Islam Mahin"
                        img="my-image"
                      />
                    </label>
                  </div>
                </>
              )}

              {customVisbilityCategoryType === "ADD_BY_EMAIL" && (
                <div className="px-4 mt-5 flex justify-center items-center gap-2">
                  <FxInput
                    variant="outline"
                    name="search_uandorg"
                    size="md"
                    className="w-full placeholder:text-text-color_3 !py-1 !bg-background-color_900C"
                    placeholder="jhondoe@gmail.com"
                  />
                  <FxButton className="px-3 py-1 rounded-tiny flex justify-center items-center gap-1">
                    <MailPlus size={16} className="text-fx_zinc-50" />
                    <span className="text-workspace_2 font-medium text-fx_zinc-50 ">
                      Add
                    </span>
                  </FxButton>
                </div>
              )}
            </div>
          )}
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
          <div>
            <p className="text-workspace_3 text-text-color_3 px-4 pt-2">
              {orgPrivacyOptionDesc}
            </p>
          </div>
        </div>
        <FxSeparator gap="md" orientation="horizontal" />

        <div className="mt-5">
          <FxButton
            onClick={handleCreateOrg}
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
