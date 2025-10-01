import { StudentType } from "@fluctux/types";
import { makeObservable, observable, action } from "mobx";
import { TemplateStore } from "./store";

class StudentManagementStore extends TemplateStore {
  isViewStudentPopup: boolean = false;
  student_id: string = "";
  student_type: StudentType = "basic";

  constructor() {
    super()
    makeObservable(this, {
      isViewStudentPopup: observable,
      student_id: observable,
      student_type: observable,
      setViewStudentPopup: action,
      setStudentType: action,
    });
  }

  setViewStudentPopup(value: boolean, student_id: string) {
    this.student_id = student_id;
    this.isViewStudentPopup = value || false;
  }

  setStudentType(value: StudentType) {
    this.student_type = value;
  }

  get getStudentID() {
    return this.student_id;
  }

  get getStudentType() {
    return this.student_type;
  }
}

const studentManagementStore = new StudentManagementStore();
export { studentManagementStore };
