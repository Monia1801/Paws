const backBtn=document.querySelector('.left-arrow');
backBtn.addEventListener('click',()=>{
  window.location.href="index.html";
});

const submitBtn=document.querySelector('.btn-submit');
submitBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  alert('Data submitted successfully');

  const form=document.querySelector('form');
  if(form) form.reset();
});