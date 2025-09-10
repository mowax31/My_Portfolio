/*
*
*
* Computer Science
*
*
*/

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

/*
*
*
* Mechanical Engineering
*
*
*/
//Design Softwares
const dsModal = document.getElementById('ds-tech-modal');
const openDsBtn = document.getElementById('open-ds-tech');
const closeDsBtn = document.getElementById('close-ds-tech');
//mec
const machinesModal = document.getElementById('machines-tech-modal');
const openMachinesBtn = document.getElementById('open-machines-tech');
const closeMachinesBtn = document.getElementById('close-machines-tech');
//SP
const specialMachinesModal = document.getElementById('special-machines-tech-modal');
const openSpecialMachinesBtn = document.getElementById('open-special-machines-tech');
const closeSpecialMachinesBtn = document.getElementById('close-special-machines-tech');


// Open
openDsBtn.onclick = function() {
  dsModal.style.display = "block";
}

openMachinesBtn.onclick = function() {
  machinesModal.style.display = "block";
}

openSpecialMachinesBtn.onclick = function() {
  specialMachinesModal.style.display = "block";
}


//Close
closeDsBtn.onclick = function() {
  dsModal.style.display = "none";
}

closeMachinesBtn.onclick = function() {
  machinesModal.style.display = "none";
}

closeSpecialMachinesBtn.onclick = function() {
  specialMachinesModal.style.display = "none";
}


//OnClick
window.onclick = function(event) {
  if (event.target == dsModal) {
    dsModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == machinesModal) {
    machinesModal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == specialMachinesModal) {
    specialMachinesModal.style.display = "none";
  }
}

/**
 * Projects
 * 1. CSE
 * 2. mechanical
 * 
 */
// OS
const osProjectModal = document.getElementById('os-project-modal');
const openOsProjectBtn = document.getElementById('open-os-project-modal');
const closeOsProjectBtn = document.getElementById('close-os-project-modal');
//PL
const progLangModal = document.getElementById('prog-lang-modal');
const openProgLangBtn = document.getElementById('open-prog-lang-modal');
const closeProgLangBtn = document.getElementById('close-prog-lang-modal');
// 2D
const modal2d = document.getElementById('2d-game-modal');
const btn2d = document.getElementById('open-2d-game-modal');
const close2d = document.getElementById('close-2d-game-modal');
//3D
const modal3d = document.getElementById('3d-game-modal');
const btn3d = document.getElementById('open-3d-game-modal');
const close3d = document.getElementById('close-3d-game-modal');
//HMS
const hmsModal = document.getElementById('hms-modal');
const openHmsBtn = document.getElementById('open-hms-modal');
const closeHmsBtn = document.getElementById('close-hms-modal');
//MBS
const bbsModal = document.getElementById('bbs-modal');
const openBbsBtn = document.getElementById('open-bbs-modal');
const closeBbsBtn = document.getElementById('close-bbs-modal');
//AG
const agModal = document.getElementById('ag-modal');
const openAgModalBtn = document.getElementById('open-ag-modal');
const closeAgModalBtn = document.getElementById('close-ag-modal');


openOsProjectBtn.onclick = () => { osProjectModal.style.display = "block"; };
openProgLangBtn.onclick = () => { progLangModal.style.display = 'block'; };
btn2d.onclick = () => { modal2d.style.display = 'block'; };
btn3d.onclick = () => { modal3d.style.display = 'block'; };
openHmsBtn.onclick = () => { hmsModal.style.display = 'block'; };
openBbsBtn.onclick = () => { bbsModal.style.display = 'block'; };
openAgModalBtn.onclick = () => {
    agModal.style.display = 'block';
};

closeOsProjectBtn.onclick = () => { osProjectModal.style.display = "none"; };
closeProgLangBtn.onclick = () => { progLangModal.style.display = 'none'; };
close2d.onclick = () => { modal2d.style.display = 'none'; };
close3d.onclick = () => { modal3d.style.display = 'none'; };
closeHmsBtn.onclick = () => { hmsModal.style.display = 'none'; };
closeBbsBtn.onclick = () => { bbsModal.style.display = 'none'; };
closeAgModalBtn.onclick = () => {
    agModal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == osProjectModal) {
    osProjectModal.style.display = "none";
  }
}

window.onclick = (event) => {
  if (event.target.classList.contains('modal')) {
     event.target.style.display = 'none';
  }
};

window.onclick = (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};

window.onclick = (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
   }
};

window.onclick = (event) => {
  if (event.target.classList.contains('modal')) {
  event.target.style.display = 'none';
  }
};

window.onclick = (event) => {
    if (event.target === agModal) {
        agModal.style.display = 'none';
    }
};