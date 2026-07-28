const videoInput = document.getElementById("videoInput");
const thumbInput = document.getElementById("thumbInput");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
const ctaInput = document.getElementById("ctaInput");

const videoPreview = document.getElementById("videoPreview");
const titlePreview = document.getElementById("titlePreview");
const urlPreview = document.getElementById("urlPreview");
const ctaPreview = document.getElementById("ctaPreview");

if(videoInput){

videoInput.addEventListener("change",()=>{

const file=videoInput.files[0];

if(file){

videoPreview.src=URL.createObjectURL(file);

videoPreview.style.display="block";

}

});

}

if(titleInput){

titleInput.addEventListener("input",()=>{

titlePreview.textContent=titleInput.value||"Video Title";

});

}

if(urlInput){

urlInput.addEventListener("input",()=>{

urlPreview.textContent=urlInput.value||"example.com";

});

}

if(ctaInput){

ctaInput.addEventListener("change",()=>{

ctaPreview.textContent=ctaInput.value;

});

}
