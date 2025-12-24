import { action, makeObservable, observable } from "mobx";

export class TemplateStore {
  template_type: string = "";
  constructor() {
    makeObservable(this, {
      template_type: observable,
      setTemplateType: action,
    });
  }

  setTemplateType(type: string) {
    this.template_type = type;
  }
}

export const templateStore = new TemplateStore();
