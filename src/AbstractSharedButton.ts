import DOMEventHandler from "./DOMEventHandler";
import EventHandler from "./EventHandler";

export default abstract class AbstractSharedButton {
  eventHandler: EventHandler;
  clazz: string;
  constructor(eventHander: EventHandler, clazz: string) {
    this.clazz = clazz;
    this.eventHandler = eventHander;
  }
  abstract createAction();
  bind() {
    const action = this.createAction();

    this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
  }
}
