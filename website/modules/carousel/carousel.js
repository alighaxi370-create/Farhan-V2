// =========================
// FARHAN V2 - CAROUSEL
// =========================

// Inputs
const imageInput = document.getElementById("imageInput");
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const urlInput = document.getElementById("urlInput");
const ctaInput = document.getElementById("ctaInput");

// Preview
const carouselImage = document.getElementById("carouselImage");
const titlePreview = document.getElementById("titlePreview");
const descPreview = document.getElementById("descPreview");
const urlPreview = document.getElementById("urlPreview");
const ctaPreview = document.getElementById("ctaPreview");

// Status
const imageStatus = document.getElementById("imageStatus");
const cardStatus = document.getElementById("cardStatus");

// Buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const draftBtn = document.getElementById("draftBtn");
const publishBtn = document.getElementById("publishBtn");

// Images
let images = [];
let current = 0;

// =========================
// IMAGE UPLOAD
// =========================

if (imageInput) {

imageInput.addEventListener("change", () => {

images = [];

const files = Array.from(imageInput.files);

if (!files.length) return;

files.forEach(file => {
images.push(URL.createObjectURL(file));
});

current = 0;

carouselImage.src = images[0];

imageStatus.textContent = files.length + " Images";

cardStatus.textContent = files.length + " Cards";

saveDraft();

});

}

// =========================
// NEXT
// =========================

if (nextBtn) {

nextBtn.onclick = () => {

if (!images.length) return;

current++;

if (current >= images.length)
current = 0;

carouselImage.src = images[current];

};

}

// =========================
// PREVIOUS
// =========================

if (prevBtn) {

prevBtn.onclick = () => {

if (!images.length) return;

current--;

if (current < 0)
current = images.length - 1;

carouselImage.src = images[current];

};

}

// =========================
// TITLE
// =========================

titleInput.addEventListener("input", () => {

titlePreview.textContent =
titleInput.value || "Card Title";

saveDraft();

});

// =========================
// DESCRIPTION
// =========================

descInput.addEventListener("input", () => {

descPreview.textContent =
descInput.value || "Description will appear here...";

saveDraft();

});

// =========================
// URL
// =========================

urlInput.addEventListener("input", () => {

urlPreview.textContent =
urlInput.value || "example.com";

saveDraft();

});

// =========================
// CTA
// =========================

ctaInput.addEventListener("change", () => {

ctaPreview.textContent =
ctaInput.value;

saveDraft();

});

// =========================
// SAVE DRAFT
// =========================

function saveDraft() {

const draft = {

title: titleInput.value,

description: descInput.value,

url: urlInput.value,

cta: ctaInput.value

};

localStorage.setItem(
"carouselDraft",
JSON.stringify(draft)
);

}

// =========================
// LOAD DRAFT
// =========================

window.onload = () => {

const draft =
JSON.parse(localStorage.getItem("carouselDraft"));

if (!draft) return;

titleInput.value = draft.title || "";
descInput.value = draft.description || "";
urlInput.value = draft.url || "";
ctaInput.value = draft.cta || "Watch More";

titlePreview.textContent =
draft.title || "Card Title";

descPreview.textContent =
draft.description || "Description will appear here...";

urlPreview.textContent =
draft.url || "example.com";

ctaPreview.textContent =
draft.cta || "Watch More";

};

// =========================
// BUTTONS
// =========================

if (draftBtn) {

draftBtn.onclick = () => {

saveDraft();

alert("Carousel Draft Saved");

};

}

if (publishBtn) {

publishBtn.onclick = () => {

alert(
"Frontend Complete ✅\n\nNext Step:\nFacebook Connect + Publish"
);

};

}
