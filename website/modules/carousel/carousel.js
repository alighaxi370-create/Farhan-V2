// =========================
// FARHAN V2 - 2 CARD CAROUSEL
// =========================

// ---------- Card 1 ----------

const image1 = document.getElementById("image1");
const title1 = document.getElementById("title1");
const url1 = document.getElementById("url1");
const cta1 = document.getElementById("cta1");

const previewImg1 = document.getElementById("previewImg1");
const previewTitle1 = document.getElementById("previewTitle1");
const previewUrl1 = document.getElementById("previewUrl1");
const previewCta1 = document.getElementById("previewCta1");


// ---------- Card 2 ----------

const image2 = document.getElementById("image2");
const title2 = document.getElementById("title2");
const url2 = document.getElementById("url2");
const cta2 = document.getElementById("cta2");

const previewImg2 = document.getElementById("previewImg2");
const previewTitle2 = document.getElementById("previewTitle2");
const previewUrl2 = document.getElementById("previewUrl2");
const previewCta2 = document.getElementById("previewCta2");


// ---------- Buttons ----------

const draftBtn = document.getElementById("draftBtn");
const publishBtn = document.getElementById("publishBtn");


// =========================
// CARD 1 IMAGE
// =========================

image1.addEventListener("change", () => {

const file = image1.files[0];

if(!file) return;

previewImg1.src = URL.createObjectURL(file);

saveDraft();

});


// =========================
// CARD 2 IMAGE
// =========================

image2.addEventListener("change", () => {

const file = image2.files[0];

if(!file) return;

previewImg2.src = URL.createObjectURL(file);

saveDraft();

});


// =========================
// CARD 1 TITLE
// =========================

title1.addEventListener("input",()=>{

previewTitle1.textContent =
title1.value || "Card 1 Title";

saveDraft();

});


// =========================
// CARD 2 TITLE
// =========================

title2.addEventListener("input",()=>{

previewTitle2.textContent =
title2.value || "Card 2 Title";

saveDraft();

});


// =========================
// CARD 1 URL
// =========================

url1.addEventListener("input",()=>{

previewUrl1.textContent =
url1.value || "example1.com";

saveDraft();

});


// =========================
// CARD 2 URL
// =========================

url2.addEventListener("input",()=>{

previewUrl2.textContent =
url2.value || "example2.com";

saveDraft();

});


// =========================
// CARD 1 CTA
// =========================

cta1.addEventListener("change",()=>{

previewCta1.textContent = cta1.value;

saveDraft();

});


// =========================
// CARD 2 CTA
// =========================

cta2.addEventListener("change",()=>{

previewCta2.textContent = cta2.value;

saveDraft();

});


// =========================
// SAVE DRAFT
// =========================

function saveDraft(){

const draft={

title1:title1.value,
url1:url1.value,
cta1:cta1.value,

title2:title2.value,
url2:url2.value,
cta2:cta2.value

};

localStorage.setItem(
"carousel2Draft",
JSON.stringify(draft)
);

}


// =========================
// LOAD DRAFT
// =========================

window.addEventListener("load",()=>{

const draft=JSON.parse(
localStorage.getItem("carousel2Draft")
);

if(!draft) return;

title1.value=draft.title1||"";
url1.value=draft.url1||"";
cta1.value=draft.cta1||"Watch More";

title2.value=draft.title2||"";
url2.value=draft.url2||"";
cta2.value=draft.cta2||"Watch More";


previewTitle1.textContent=
draft.title1||"Card 1 Title";

previewUrl1.textContent=
draft.url1||"example1.com";

previewCta1.textContent=
draft.cta1||"Watch More";


previewTitle2.textContent=
draft.title2||"Card 2 Title";

previewUrl2.textContent=
draft.url2||"example2.com";

previewCta2.textContent=
draft.cta2||"Watch More";

});


// =========================
// BUTTONS
// =========================

draftBtn.addEventListener("click",()=>{

saveDraft();

alert("Draft Saved");

});

publishBtn.addEventListener("click",()=>{

alert("Frontend Ready\n\nNext Step: Facebook Connect + Publish");

});
