window.onload=function(){
const signupForm = document.querySelector('#signup-data');

// const signupBtn = document.querySelector('#sign-up');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    // get user info
    const fname = signupForm['first_name'].value;
    const lname = signupForm['last_name'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    // const phone = signupForm['telephone'].value;
    console.log(email, password);

    // sign up user
    
    auth.createUserWithEmailAndPassword(email , password).then(cred =>{
      console.log(cred);
      if (cred) {
        window.location='dashboard.html';
        signupForm.querySelector(".error").innerHTML="";
    }
}).catch
(err=>{
    signupForm.querySelector(".error").innerHTML=err.message;
        signupForm.reset();
    });
});
}