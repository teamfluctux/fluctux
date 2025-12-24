"use client";
import { StudentType } from "@fluctux/types";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { UniversityDashboard } from "./university-dashboard";
import { studentManagementStore } from "@/services/stores/template";

export const StudentDashboard = observer(() => {
  useEffect(() => {
    studentManagementStore.setStudentType("university");
  }, []);
  return (
    <>
      {studentManagementStore.getStudentType === "university" ? (
        <UniversityDashboard />
      ) : (
        <div>College</div>
      )}
    </>
  );
});
