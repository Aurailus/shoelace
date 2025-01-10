import "../chunks/chunk.2SU6QBUU.js";
import "../chunks/chunk.DT2WPFWO.js";
import {
  registerTranslation
} from "../chunks/chunk.TDEXDIPB.js";
import "../chunks/chunk.W27M6RDR.js";

// src/translations/uk.ts
var translation = {
  $code: "uk",
  $name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
  $dir: "ltr",
  carousel: "\u041A\u0430\u0440\u0443\u0441\u0435\u043B\u044C",
  clearEntry: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u043B\u0435",
  close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
  copied: "\u0421\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E",
  copy: "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438",
  currentValue: "\u041F\u043E\u0442\u043E\u0447\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
  error: "\u0417\u0431\u0456\u0439",
  goToSlide: (slide, count) => `\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0441\u043B\u0430\u0439\u0434\u0430 \u2116${slide} \u0437 ${count}`,
  hidePassword: "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
  loading: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
  nextSlide: "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0441\u043B\u0430\u0439\u0434",
  numOptionsSelected: (num) => {
    const n = num % 10;
    if (n === 0) return "\u043D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432";
    if (n === 1) return "\u0432\u0438\u0431\u0440\u0430\u043D\u043E 1 \u0432\u0430\u0440\u0456\u0430\u043D\u0442";
    if (n === 2 || n === 3 || n === 4) return `\u0432\u0438\u0431\u0440\u0430\u043D\u043E ${num} \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0438`;
    return `\u0432\u0438\u0431\u0440\u0430\u043D\u043E ${num} \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432`;
  },
  previousSlide: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0441\u043B\u0430\u0439\u0434",
  progress: "\u041F\u043E\u0441\u0442\u0443\u043F",
  remove: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
  resize: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440",
  scrollToEnd: "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u0432 \u043A\u0456\u043D\u0435\u0446\u044C",
  scrollToStart: "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u043D\u0430 \u043F\u043E\u0447\u0430\u0442\u043E\u043A",
  selectAColorFromTheScreen: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u043E\u043B\u0456\u0440 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0456",
  showPassword: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
  slideNum: (slide) => `\u0421\u043B\u0430\u0439\u0434 ${slide}`,
  toggleColorFormat: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u043A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0443 \u043C\u043E\u0434\u0435\u043B\u044C"
};
registerTranslation(translation);
var uk_default = translation;
export {
  uk_default as default
};