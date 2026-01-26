// js/main.js
import { byId } from "./lib/dom.js";

export function initHomePage() {
  const btn = byId("downloadResumeBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const resumeUrl = "assets/Resume.pdf";
    window.location.href = resumeUrl;
  });
}

document.addEventListener("DOMContentLoaded", initHomePage);
