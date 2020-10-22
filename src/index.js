import "./styles.scss";
import { defineCustomElements as initSkeleton } from "skeleton-webcomponent-loader/loader/index.js";
import { defineCustomElements as deckDeckGoElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoElement();
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
  }, 300);
});
