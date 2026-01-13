const signinBtn = document.querySelector('#signin-btn');
const signupBtn=document.querySelector('#signup-btn');

if(signinBtn){
  signinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "home.html";
  });
}

if(signupBtn){
  signupBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="home.html";
  });
}
