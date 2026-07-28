// =========================
// FARHAN V2 - SWIPE VIDEO V4
// =========================

// Inputs
const videoInput = document.getElementById("videoInput");
const thumbInput = document.getElementById("thumbInput");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
const ctaInput = document.getElementById("ctaInput");

// Preview
const videoPreview = document.getElementById("videoPreview");
const thumbPreview = document.getElementById("thumbPreview");
const titlePreview = document.getElementById("titlePreview");
const urlPreview = document.getElementById("urlPreview");
const ctaPreview = document.getElementById("ctaPreview");

// Status
const videoStatus = document.getElementById("videoStatus");
const thumbStatus = document.getElementById("thumbStatus");

// Buttons
const draftBtn = document.getElementById("draftBtn");
const publishBtn = document.getElementById("publishBtn");


// =========================
// VIDEO
// =========================

if(videoInput){

videoInput.addEventListener("change",()=>{

const file = videoInput.files[0];

if(!file) return;

const url = URL.createObjectURL(file);

videoPreview.src = url;

videoPreview.hidden = false;

videoPreview.load();

videoStatus.textContent = file.name;

// Agar thumbnail selected hai to poster use karo

if(thumbPreview.src){

videoPreview.poster = thumbPreview.src;

}

saveDraft();

});

}


// =========================
// THUMBNAIL
// =========================

if(thumbInput){

thumbInput.addEventListener("change",()=>{

const file = thumbInput.files[0];

if(!file) return;

const url = URL.createObjectURL(file);

thumbPreview.src = url;

thumbPreview.hidden = false;

videoPreview.poster = url;

thumbStatus.textContent = file.name;

saveDraft();

});

}


// =========================
// TITLE
// =========================

if(titleInput){

titleInput.addEventListener("input",()=>{

titlePreview.textContent =
titleInput.value || "Video Title";

saveDraft();

});

}


// =========================
// URL
// =========================

if(urlInput){

urlInput.addEventListener("input",()=>{

urlPreview.textContent =
urlInput.value || "example.com";

saveDraft();

});

}


// =========================
// CTA
// =========================

if(ctaInput){

ctaInput.addEventListener("change",()=>{

ctaPreview.textContent =
ctaInput.value;

saveDraft();

});

}



// =========================
// SAVE DRAFT
// =========================

function saveDraft(){

const draft = {

title:titleInput.value,

url:urlInput.value,

cta:ctaInput.value

};

localStorage.setItem(
"farhanSwipeDraft",
JSON.stringify(draft)
);

}



// =========================
// LOAD DRAFT
// =========================

window.addEventListener("load",()=>{

const draft =
JSON.parse(
localStorage.getItem("farhanSwipeDraft")
);

if(!draft) return;

titleInput.value = draft.title || "";

urlInput.value = draft.url || "";

ctaInput.value = draft.cta || "Watch More";

titlePreview.textContent =
draft.title || "Video Title";

urlPreview.textContent =
draft.url || "example.com";

ctaPreview.textContent =
draft.cta || "Watch More";

});



// =========================
// BUTTONS
// =========================

if(draftBtn){

draftBtn.addEventListener("click",()=>{

saveDraft();

alert("Draft Saved Successfully");

});

}

if(publishBtn){

publishBtn.addEventListener("click",()=>{

alert(
"Frontend Ready ✅\n\nNext Step:\nFacebook Connect + Publish API"
);

});

}
