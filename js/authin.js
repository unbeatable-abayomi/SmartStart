
// login
window.onload=function(){
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  
 // log the user in
  auth.signInWithEmailAndPassword(email,password).then(cred=> {
    console.log(cred.user);
    // signinForm.reset();
    if (cred.user) {
        window.location='dashboard.html';
        loginForm.querySelector(".error").innerHTML="";
    }
}).catch
(err=>{
  loginForm.querySelector(".error").innerHTML=err.message;
});
});
 

 }
