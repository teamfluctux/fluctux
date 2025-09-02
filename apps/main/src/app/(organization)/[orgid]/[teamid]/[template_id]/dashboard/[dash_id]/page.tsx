import { StudentDashboard } from "@/components/workspace/student-management";
import React from "react";

export default function Dashboard() {
  const templateType = "STUDENTS_MANAGEMENT";
  if (templateType === "STUDENTS_MANAGEMENT") {
    return (
      <div className="w-full p-3">
        <StudentDashboard />
      </div>
    );
  }
}
