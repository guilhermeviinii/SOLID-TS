import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, clazz: string, url: string) {
    super(eventHandler, clazz, url);
  }

  createLink(): string {
    return `http://twitter.com/share?url=${this.url}`;
  }
}
