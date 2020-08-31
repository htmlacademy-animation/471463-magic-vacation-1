// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import AnimatedLetters from "./modules/animated-letters.js";
import FullPageScroll from './modules/full-page-scroll';
import rules from './modules/rules.js';
import onLoad from './modules/on-load.js';

// init modules
onLoad();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
rules();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animatedIntroTitle = new AnimatedLetters({
  elementSelector: `.intro__title`,
  timer: 500,
  classForActivate: `active`,
  property: `transform`,
  delay: 600,
  alternately: true,
});

const animatedIntroLabel = new AnimatedLetters({
  elementSelector: `.intro__date`,
  timer: 500,
  classForActivate: `active`,
  property: `transform`,
  delay: 1400,
});

animatedIntroTitle.runAnimation();
animatedIntroLabel.runAnimation();
