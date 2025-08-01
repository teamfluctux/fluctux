import { makeObservable, observable, action } from "mobx";

class StudentManagementStore {
  isViewStudentPopup: boolean = false;
  student_id: string = "";

  constructor() {
    makeObservable(this, {
      isViewStudentPopup: observable,
      student_id: observable,
      setViewStudentPopup: action,
    });
  }

  setViewStudentPopup(value: boolean, student_id: string) {
    this.student_id = student_id;
    this.isViewStudentPopup = value || false;
  }

  get getStudentID(){
    return this.student_id
  }
}

const studentManagementStore = new StudentManagementStore();
export { studentManagementStore };
