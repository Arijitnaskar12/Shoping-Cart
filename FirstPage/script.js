let SignupDiv=document.getElementById("signup");
let loginDiv=document.getElementById("login");
let profile=document.getElementById("profile");
SignupDiv.addEventListener("click",()=>{
    window.location.href="../SignupPage";
});

loginDiv.addEventListener("click",()=>{
    window.location.href="../LoginPage";
});
 profile.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("You must Login/Signup first");
 });