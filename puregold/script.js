const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="flex";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="flex";
    signUpForm.style.display="none";
})


const logoutbtn = document.getElementById('logout-btn');

logoutbtn.addEventListener('click', function(){
    window.location.href = 'logout.php';
})