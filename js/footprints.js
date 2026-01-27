import { footprints } from "./lib/footprints-data.js";

let photosModal = null;

function cleanupBackdrops() {
  document.body.classList.remove("modal-open");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("padding-right");
  document.querySelectorAll(".modal-backdrop").forEach((b) => b.remove());
}

function openPhotosModal({ heading, photos }) {
  const modalTitle = document.getElementById("modalTitle");
  const grid = document.getElementById("photosGrid");
  const modalEl = document.getElementById("photosModal");

  modalTitle.textContent = heading;
  grid.innerHTML = "";

  if (!photos || photos.length === 0) {
    grid.innerHTML =
      '<div class="col-12"><p class="mb-0">No photos added yet.</p></div>';
  } else {
    for (const src of photos) {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6";
      col.innerHTML = `
        <img
          src="${src}"
          alt="Footprint photo"
          class="img-fluid rounded-3"
          loading="lazy"
        />
      `;
      grid.appendChild(col);
    }
  }

  // ✅ Reuse a single modal instance (prevents stuck backdrop)
  photosModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  photosModal.show();
}

function initMap() {
  // World view
  const map = L.map("map", { worldCopyJump: true }).setView([20, 0], 2);

  // Free tile layer (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Add footprint markers (dots)
  for (const fp of footprints) {
    const marker = L.circleMarker([fp.lat, fp.lng], {
      radius: 7,
      weight: 2,
      fillOpacity: 0.85,
    }).addTo(map);

    marker.bindTooltip(fp.title || fp.countryName);

    marker.on("click", () => {
      openPhotosModal({
        heading: `${fp.countryName} — ${fp.title ?? ""}`.trim(),
        photos: fp.photos,
      });
    });
  }

  // Optional: click anywhere on map to show nearest footprint
  map.on("click", (e) => {
    let best = null;
    let bestDist = Infinity;

    for (const fp of footprints) {
      const d = map.distance(e.latlng, L.latLng(fp.lat, fp.lng));
      if (d < bestDist) {
        bestDist = d;
        best = fp;
      }
    }

    if (best && bestDist < 400_000) {
      openPhotosModal({
        heading: `${best.countryName} — ${best.title ?? ""}`.trim(),
        photos: best.photos,
      });
    }
  });

  // ✅ Cleanup any stuck backdrop when modal closes
  const modalEl = document.getElementById("photosModal");
  modalEl.addEventListener("hidden.bs.modal", cleanupBackdrops);
}

document.addEventListener("DOMContentLoaded", initMap);
