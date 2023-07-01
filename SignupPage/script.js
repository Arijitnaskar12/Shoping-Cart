let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let Signupbutton=document.getElementById("signupButton");
 function saveUser(fnameValue,lnameValue,emailValue,passwordValue)
 {
    let userObj={
        firstName:fnameValue,
        lastName:lnameValue,
        email:emailValue,
        password:passwordValue
    }
    let users=JSON.parse(localStorage.getItem('users'))|| [];
    users.push(userObj);
    localStorage.setItem('users',JSON.stringify(users));
    // sessionStorage.setItem("loggedUser",JSON.stringify(userObj));
    fname.value='';
    lname.value='';
    email.value='';
    password.value='';
    confirmPassword.value='';
    alert("Signup Successfull");
    window.location.href="../LoginPage";
 }
 function checkIfuserExits(email)
 {
    let users=JSON.parse(localStorage.getItem('users'));
    let returnEmail=users.find((userObj)=>{
        return userObj.email===email;
    });
    return returnEmail===undefined?false:true;
 }
Signupbutton.addEventListener("click",()=>{
    if(fname.value.trim() && lname.value.trim() && email.value.trim() && password.value && confirmPassword.value)
    {
        if(password.value===confirmPassword.value)
        {
            if(localStorage.getItem('users')){
                if(checkIfuserExits(email.value.trim()))
                {
                    alert("Email already exits.Please proceed with Login");
                }
                // if users array exit and user is unique
                else{
                    saveUser(fname.value.trim(),lname.value.trim(),email.value.trim(),password.value);
                  
                }
            }
            // for the first user whn users array is not exist
            else{
               saveUser(fname.value.trim(),lname.value.trim(),email.value.trim(),password.value);
            
            }
        }
        else{
            alert("Password mismatch");
            password.value="";
            confirmPassword.value="";
        }
    }
    else{
        alert("All fills are required");
    }
})