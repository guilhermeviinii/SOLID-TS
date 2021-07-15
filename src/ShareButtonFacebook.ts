import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz, url);
  }

  createLink(): string {
    return `http://facebook.com/share.php?u=${this.url}`;
  }
}
