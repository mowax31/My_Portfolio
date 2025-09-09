// WebTechnologies PopUP Scripts
// WT
const modal = document.getElementById('web-tech-modal');
const openBtn = document.getElementById('open-web-tech');
const closeBtn = document.getElementById('close-web-tech');
// FE
const feModal = document.getElementById('fe-tech-modal');
const openFeBtn = document.getElementById('open-fe-tech');
const closeFeBtn = document.getElementById('close-fe-tech');
// BE
const beModal = document.getElementById('be-tech-modal');
const openBeBtn = document.getElementById('open-be-tech');
const closeBeBtn = document.getElementById('close-be-tech');
//DB
const dbModal = document.getElementById('db-tech-modal');
const openDbBtn = document.getElementById('open-db-tech');
const closeDbBtn = document.getElementById('close-db-tech');
//Servers
const serModal = document.getElementById('ser-tech-modal');
const openSerBtn = document.getElementById('open-ser-tech');
const closeSerBtn = document.getElementById('close-ser-tech');
//MAD
const maModal = document.getElementById('ma-tech-modal');
const openMaBtn = document.getElementById('open-ma-tech');
const closeMaBtn = document.getElementById('close-ma-tech');
//ES
const esModal = document.getElementById('es-tech-modal');
const openEsBtn = document.getElementById('open-es-tech');
const closeEsBtn = document.getElementById('close-es-tech');
//GAME
const gdModal = document.getElementById('gd-tech-modal');
const openGdBtn = document.getElementById('open-gd-tech');
const closeGdBtn = document.getElementById('close-gd-tech');
//Tools
const tolsModal = document.getElementById('tols-tech-modal');
const openTolsBtn = document.getElementById('open-tols-tech');
const closeTolsBtn = document.getElementById('close-tols-tech');
//OS
const osModal = document.getElementById('os-tech-modal');
const openOsBtn = document.getElementById('open-os-tech');
const closeOsBtn = document.getElementById('close-os-tech');




// When the user clicks the "Web Technologies" button, open the modal
openBtn.onclick = function() {
  modal.style.display = "block";
}

openFeBtn.onclick = function() {
  feModal.style.display = "block";
}

openBeBtn.onclick = function() {
  beModal.style.display = "block";
}

openDbBtn.onclick = function() {
  dbModal.style.display = "block";
}

openSerBtn.onclick = function() {
  serModal.style.display = "block";
}

openMaBtn.onclick = function() {
  maModal.style.display = "block";
}

openEsBtn.onclick = function() {
  esModal.style.display = "block";
}

openGdBtn.onclick = function() {
  gdModal.style.display = "block";
}

openTolsBtn.onclick = function() {
  tolsModal.style.display = "block";
}

openOsBtn.onclick = function() {
  osModal.style.display = "block";
}

// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

closeFeBtn.onclick = function() {
  feModal.style.display = "none";
}

closeBeBtn.onclick = function() {
  beModal.style.display = "none";
}

closeDbBtn.onclick = function() {
  dbModal.style.display = "none";
}

closeSerBtn.onclick = function() {
  serModal.style.display = "none";
}

closeMaBtn.onclick = function() {
  maModal.style.display = "none";
}

closeEsBtn.onclick = function() {
  esModal.style.display = "none";
}

closeGdBtn.onclick = function() {
  gdModal.style.display = "none";
}

closeTolsBtn.onclick = function() {
  tolsModal.style.display = "none";
}

closeOsBtn.onclick = function() {
  osModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal content, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == feModal) {
    feModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == beModal) {
    beModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == dbModal) {
    dbModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == serModal) {
    serModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == maModal) {
    maModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == esModal) {
    esModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == gdModal) {
    gdModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == tolsModal) {
    tolsModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == osModal) {
    osModal.style.display = "none";
  }
}