import {pets} from './pets.js';

const container=document.querySelector(".cards-container");

pets.forEach((pet,idx)=>{

  const badgeType=pet.type==="For Adoption"? "badge1" :"badge2";
  const badgeText=pet.type;
  const badgeClass=pet.type==="For Adoption" ? "home-icon" :"clock-icon";
  const badgeSvg= pet.type==="For Adoption" ? `<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />` : ` <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />`;

  container.innerHTML+=`
  <div class="card card${idx+1}">
    <div class="image-container">
      <div class="${badgeType}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${badgeClass}">${badgeSvg}</svg>
        ${badgeText}  
      </div>
      <img src="${pet.image}" class="card-image">
    </div>
    <div class="card-content">
      <h3>${pet.petName}</h3>
      <p>${pet.breed} . ${pet.age}</p>
      <p class="loc">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="loc-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
        ${pet.location.city}, ${pet.location.state}
      </p>
    </div>
    </div>
  `
});

const cards=document.querySelectorAll('.card');
cards.forEach((card,idx)=>{
  card.addEventListener('click',()=>{
    window.open(`petDetails.html?petIndex=${idx}`,"_self");
  });
});