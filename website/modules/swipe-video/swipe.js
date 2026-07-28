const videoStatus=document.getElementById("videoStatus");
const thumbStatus=document.getElementById("thumbStatus");
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


// =========================
// VIDEO PREVIEW
// =========================

if (videoInput) {

    videoInput.addEventListener("change", () => {

        const file = videoInput.files[0];

        if (!file) return;

        const url = URL.createObjectURL(file);

        videoPreview.src = url;
        videoPreview.load();
videoStatus.textContent = file.name;
        // Thumbnail ko video ka poster bana do
        if (thumbPreview.src) {
            videoPreview.poster = thumbPreview.src;
            thumbStatus.textContent = file.name;
        }

    });

}


// =========================
// THUMBNAIL PREVIEW
// =========================

if (thumbInput) {

    thumbInput.addEventListener("change", () => {

        const file = thumbInput.files[0];

        if (!file) return;

        const url = URL.createObjectURL(file);

        thumbPreview.src = url;

        // Video ka poster update karo
        videoPreview.poster = url;

    });

}


// =========================
// TITLE
// =========================

if (titleInput) {

    titleInput.addEventListener("input", () => {

        titlePreview.textContent =
            titleInput.value || "Video Title";

    });

}


// =========================
// WEBSITE URL
// =========================

if (urlInput) {

    urlInput.addEventListener("input", () => {

        urlPreview.textContent =
            urlInput.value || "example.com";

    });

}


// =========================
// CTA BUTTON
// =========================

if (ctaInput) {

    ctaInput.addEventListener("change", () => {

        ctaPreview.textContent = ctaInput.value;

    });

}
