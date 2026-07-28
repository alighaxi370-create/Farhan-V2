// ====================================
// FARHAN V2 - ONE CARD BUILDER
// ====================================

// INPUTS

const imageInput = document.getElementById("imageInput");
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const displayUrlInput = document.getElementById("displayUrlInput");
const websiteUrlInput = document.getElementById("websiteUrlInput");
const ctaInput = document.getElementById("ctaInput");


// PREVIEW

const previewImage = document.getElementById("previewImage");
const previewTitle = document.getElementById("previewTitle");
const previewDesc = document.getElementById("previewDesc");
const previewDisplayUrl = document.getElementById("previewDisplayUrl");
const previewButton = document.getElementById("previewButton");


// BUTTONS

const draftBtn = document.getElementById("draftBtn");
const publishBtn = document.getElementById("publishBtn");


// ===========================
// IMAGE
// ===========================

imageInput.addEventListener("change",()=>{

const file=imageInput.files[0];

if(!file) return;

previewImage.src=URL.createObjectURL(file);

saveDraft();

});


// ===========================
// TITLE
// ===========================

titleInput.addEventListener("input",()=>{

previewTitle.textContent=
titleInput.value||"Amazing Product";

saveDraft();

});


// ===========================
// DESCRIPTION
// ===========================

descInput.addEventListener("input",()=>{

previewDesc.textContent=
descInput.value||"Your description will appear here...";

saveDraft();

});


// ===========================
// DISPLAY URL
// ===========================

displayUrlInput.addEventListener("input",()=>{

previewDisplayUrl.textContent=
displayUrlInput.value||"mybrand.com";

saveDraft();

});


// ===========================
// DESTINATION URL
// ===========================

websiteUrlInput.addEventListener("input",()=>{

previewButton.href=
websiteUrlInput.value||"#";

saveDraft();

});


// ===========================
// CTA
// ===========================

ctaInput.addEventListener("change",()=>{

previewButton.textContent=
ctaInput.value;

saveDraft();

});


// ===========================
// SAVE DRAFT
// ===========================

function saveDraft(){

const draft={

title:titleInput.value,

description:descInput.value,

displayUrl:displayUrlInput.value,

websiteUrl:websiteUrlInput.value,

cta:ctaInput.value

};

localStorage.setItem(

"oneCardDraft",

JSON.stringify(draft)

);

}


// ===========================
// LOAD DRAFT
// ===========================

window.addEventListener("load",()=>{

const draft=JSON.parse(

localStorage.getItem("oneCardDraft")

);

if(!draft) return;

titleInput.value=draft.title||"";
descInput.value=draft.description||"";
displayUrlInput.value=draft.displayUrl||"";
websiteUrlInput.value=draft.websiteUrl||"";
ctaInput.value=draft.cta||"Watch More";

previewTitle.textContent=
draft.title||"Amazing Product";

previewDesc.textContent=
draft.description||"Your description will appear here...";

previewDisplayUrl.textContent=
draft.displayUrl||"mybrand.com";

previewButton.href=
draft.websiteUrl||"#";

previewButton.textContent=
draft.cta||"Watch More";

});


// ===========================
// BUTTONS
// ===========================

draftBtn.addEventListener("click",()=>{

saveDraft();

alert("Draft Saved Successfully");

});

publishBtn.addEventListener("click",()=>{

alert(

"Frontend Ready ✅\n\nNext Step:\nFacebook Connect + Publish"

);

});
