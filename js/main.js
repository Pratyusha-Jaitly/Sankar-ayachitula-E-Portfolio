// Minimal JS: wire up the resume button.
// Replace the URL with your real resume path when ready.

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("downloadResumeBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Option A: navigate to a PDF in your project (recommended)
    // Example: put your PDF at: assets/Phani_Resume.pdf
    const resumeUrl = "assets/Resume.pdf";

    // If you don't have the file yet, show a friendly message:
    // alert("Add your resume file to assets/Resume.pdf and this will download it.");
    // return;

    window.location.href = resumeUrl;
  });
});
