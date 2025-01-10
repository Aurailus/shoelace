import "../chunks/chunk.IFDWM6P4.js";

// src/translations/ar.ts
import { registerTranslation } from "@shoelace-style/localize";
var translation = {
  $code: "ar",
  $name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  $dir: "rtl",
  carousel: "\u0643\u0627\u0631\u0648\u0633\u064A\u0644",
  clearEntry: "\u062D\u0630\u0641 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A",
  close: "\u0627\u063A\u0644\u0627\u0642",
  copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E",
  copy: "\u0646\u0633\u062E",
  currentValue: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629",
  error: "\u062E\u0637\u0623",
  goToSlide: (slide, count) => `\u0639\u0631\u0636 \u0634\u0631\u064A\u062D\u0629 \u0631\u0642\u0645 ${slide} \u0645\u0646 ${count}`,
  hidePassword: "\u0627\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
  loading: "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
  nextSlide: "\u0627\u0644\u0634\u0631\u064A\u062D\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "\u0644\u0645 \u064A\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u0623\u064A \u062E\u064A\u0627\u0631\u0627\u062A";
    if (num === 1)
      return "\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u062E\u064A\u0627\u0631 \u0648\u0627\u062D\u062F";
    if (num === 2)
      return "\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u062E\u064A\u0627\u0631\u0627\u0646";
    if (num > 2 && num < 11)
      return `\u062A\u0645 \u062A\u062D\u062F\u064A\u062F ${num} \u062E\u064A\u0627\u0631\u0627\u062A`;
    return `\u062A\u0645 \u062A\u062D\u062F\u064A\u062F ${num} \u062E\u064A\u0627\u0631`;
  },
  previousSlide: "\u0627\u0644\u0634\u0631\u064A\u062D\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
  progress: "\u0645\u0642\u062F\u0627\u0631 \u0627\u0644\u062A\u0642\u062F\u0645",
  remove: "\u062D\u0630\u0641",
  resize: "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062D\u062C\u0645",
  scrollToEnd: "\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u064A\u0629",
  scrollToStart: "\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u0649 \u0627\u0644\u0628\u062F\u0627\u064A\u0629",
  selectAColorFromTheScreen: "\u0627\u062E\u062A\u0631 \u0644\u0648\u0646 \u0645\u0646 \u0627\u0644\u0634\u0627\u0634\u0629",
  showPassword: "\u0639\u0631\u0636 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
  slideNum: (slide) => `\u0634\u0631\u064A\u062D\u0629 ${slide}`,
  toggleColorFormat: "\u062A\u063A\u064A\u064A\u0631 \u0635\u064A\u063A\u0629 \u0639\u0631\u0636  \u0627\u0644\u0644\u0648\u0646"
};
registerTranslation(translation);
var ar_default = translation;
export {
  ar_default as default
};
