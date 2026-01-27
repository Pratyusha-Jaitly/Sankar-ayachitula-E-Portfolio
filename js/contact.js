// js/contact.js
import { byId } from "./lib/dom.js";
import { buildMailtoLink } from "./lib/mailto.js";

export function initContactPage() {
  const form = byId("contactForm");
  const statusEl = byId("formStatus");

  if (!form || !statusEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Trigger Bootstrap validation UI
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
      statusEl.textContent = "Please fix the highlighted fields and try again.";
      return;
    }

    const name = byId("fullName").value.trim();
    const email = byId("email").value.trim();
    const subject = byId("subject").value.trim();
    const message = byId("message").value.trim();

    const to = "ayachitula.s@northeastern.edu";

    const body =
      `Message:
${message}

Best regards,
${name}
${email}`;

    statusEl.textContent = "Opening your email client…";

    const mailto = buildMailtoLink({ to, subject, body });
    window.location.href = mailto;
  });
}

document.addEventListener("DOMContentLoaded", initContactPage);
