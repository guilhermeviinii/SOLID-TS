import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonPrints from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";

const eventHandler = new DOMEventHandler();

const twitter = new ShareButtonTwitter(
  eventHandler,
  ".btn-twitter",
  "http://www.facebook.com/guilhermeviinii/"
);
const facebook = new ShareButtonFacebook(
  eventHandler,
  ".btn-facebook",
  "http://www.facebook.com/guilhermeviinii/"
);
const linkedin = new ShareButtonLinkedin(
  eventHandler,
  ".btn-linkedin",
  "http://www.facebook.com/guilhermeviinii/"
);
const print = new ShareButtonPrints(eventHandler, ".btn-print");

twitter.bind();
facebook.bind();
linkedin.bind();
print.bind();
