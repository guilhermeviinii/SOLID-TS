import AbstractSharedButton from "./AbstractSharedButton";
import EventHandler from "./EventHandler";

export default class ShareButtonPrints extends AbstractSharedButton {
  constructor(eventHandler: EventHandler, clazz: string) {
    super(eventHandler, clazz);
  }
  createAction() {
    return () => window.print();
  }
}
