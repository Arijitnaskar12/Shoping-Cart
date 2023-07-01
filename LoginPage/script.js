let email=document.getElementById("email");
let password=document.getElementById("password");
let loginButton=document.getElementById("loginButton");
loginButton.addEventListener("click",()=>{
 if(email.value.trim() && password.value)
 {
    let users=JSON.parse(localStorage.getItem('users'));
     if(users)
     {
        let currentuserObj=users.find((currentUser)=>{
            return currentUser.email===email.value.trim();
        });
        if(currentuserObj)
        {
            if(password.value===currentuserObj.password)
            {
                alert("Login successful");
                sessionStorage.setItem("loggedUser",JSON.stringify(email.value));
                window.location.href="../HomePage";
            }else{
                password.value="";
                alert("Incorrect Password");
            }
        }else{
            alert("Please do signup");
        }
     }else{
        alert("Please do signup");
     }

 }else{
    alert("Please Fill all the details");
 }
});