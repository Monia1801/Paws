import {pets} from './pets.js';

const urlParams=new URLSearchParams(window.location.search);
const petIndex=urlParams.get('petIndex');

const pet=pets[petIndex];

document.getElementById('pet-image').src=pet.image;

document.getElementById('pet-name').textContent=pet.petName;
document.getElementById('pet-breed').textContent=pet.breed;
document.getElementById('pet-age').textContent=pet.age;
document.getElementById('pet-gender').textContent=pet.gender || 'N/A';
document.getElementById('pet-color').textContent=pet.color ||'N/A';
document.getElementById('pet-location').textContent=`${pet.location.city}, ${pet.location.state}`;

document.getElementById('pet-vaccinated').textContent=pet.healthDetails?.vaccinated || 'N/A';
document.getElementById('pet-neutered').textContent=pet.healthDetails?.neutered || 'N/A';
document.getElementById('pet-last-checkup').textContent=pet.healthDetails?.lastVetCheckup || 'N/A' ;
document.getElementById('pet-special-care-needed').textContent=pet.healthDetails?.specialCareNeeded || 'N/A';
document.getElementById('pet-existing-health-issues').textContent=pet.healthDetails?.anyExistingHealthIssues || 'N/A';

document.getElementById('parent-name').textContent=pet.petParentName || 'N/A';

const backBtn=document.querySelector('#back');
backBtn.addEventListener('click',()=>{
  window.open("index.html","_self");
  // window.location.href="index.html";
});
