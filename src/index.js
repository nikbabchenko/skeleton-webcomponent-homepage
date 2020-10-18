import "./styles.scss";
import "prism-themes/themes/prism-xonokai.css";
import "prismjs";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";

import { defineCustomElements as initSkeleton } from "skeleton-webcomponent-loader/loader/index.js";

initSkeleton();

const getInitCodePenScript = () => {
  let isInited = false;

  return () => {
    if (isInited) return;

    isInited = true;
    // Loop over all elements with the `data-prefill` attribute
    Array.from(document.querySelectorAll("[data-user]"), (el) => {
      el.classList.add("codepen");
      window.__CPEmbed(); // Trigger the CodePen embed script to run again.
    });
  };
};

const initCodePen = getInitCodePenScript();

window.addEventListener("load", () => {
  setTimeout(() => {
    requestAnimationFrame(() => initCodePen());
  }, 500);
});
