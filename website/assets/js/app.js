const videoInput = document.getElementById("videoInput");
const thumbInput = document.getElementById("thumbInput");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
const ctaInput = document.getElementById("ctaInput");

const videoPreview = document.getElementById("videoPreview");
const thumbPreview = document.getElementById("thumbPreview");
const titlePreview = document.getElementById("titlePreview");
const urlPreview = document.getElementById("urlPreview");
const ctaPreview = document.getElementById("ctaPreview");

// Thumbnail Preview
if (thumbInput) {
  thumbInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    thumbPreview.src = URL.createObjectURL(file);
    thumbPreview.style.display = "block";
  });
}

// Video Preview
if (videoInput) {
  videoInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    videoPreview.src = URL.createObjectURL(file);
    videoPreview.style.display = "block";
  });
}

// Title Preview
if (titleInput) {
  titleInput.addEventListener("input", function () {
    titlePreview.textContent = this.value || "Video Title";
  });
}

// URL Preview
if (urlInput) {
  urlInput.addEventListener("input", function () {
    urlPreview.textContent = this.value || "example.com";
  });
}

// CTA Preview
if (ctaInput) {
  ctaInput.addEventListener("change", function () {
    ctaPreview.textContent = this.value;
  });
}
