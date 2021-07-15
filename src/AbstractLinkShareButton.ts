import AbstractSharedButton from "./AbstractSharedButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractLinkShareButton extends AbstractSharedButton {
  url: string;
  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz);
    this.url = url;
  }
  abstract createLink(): string;

  createAction(): any {
    const link = this.createLink();
    return () => window.open(link);
  }
}
