let email=JSON.parse(sessionStorage.getItem("loggedUser"));
// console.log(email);
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let oldPassword=document.getElementById("oldPassword");
let users=JSON.parse(localStorage.getItem("users"));
for(let i=0;i<users.length;i++)
{
    if(users[i].email===email)
    {
        fname.value=users[i].firstName;
        lname.value=users[i].lastName;
        oldPassword.value=users[i].password;
    }
}
let saveInfo=document.getElementById("saveInfo");
saveInfo.addEventListener("click",()=>{
    if(fname.value.trim() && lname.value.trim())
    {
        let users=JSON.parse(localStorage.getItem("users"));
        for(let i=0;i<users.length;i++)
        {
            if(users[i].email==email)
            {
                 currentObj=users[i];
                users.splice(i,1);
            }
            currentObj.firstName=fname.value;
            currentObj.lastName=lname.value;
            users.push(currentObj);
            localStorage.removeItem("users");
            localStorage.setItem("users",JSON.stringify(users));
            alert("Your Personal Information has been changed");
        }

    }else{
        alert("Please fill all the fields");
    }
});
let newpassword=document.getElementById("newpassword");
let cnfnpassword=document.getElementById("cnfnpassword");
let changePassword=document.getElementById("chngePasswordBtn");
changePassword.addEventListener("click",()=>{
    if(newpassword.value && cnfnpassword.value)
    {
        if(newpassword.value===cnfnpassword.value)
        {
            // let emailMain=JSON.parse(sessionStorage.getItem("loggedUser"));
            let users=JSON.parse(localStorage.getItem("users"));
            
            // console.log(users);
            let currentObj;
            for(let i=0;i<users.length;i++)
            {
                if(users[i].email==email)
                {
                     currentObj=users[i];
                    users.splice(i,1);
                }
            }
            
            currentObj.password=newpassword.value;
            users.push(currentObj);
            localStorage.removeItem("users");
            localStorage.setItem("users",JSON.stringify(users));
            alert("Password has been chnaged");
            oldPassword.value=newpassword.value;
            newpassword.value="";
            cnfnpassword.value="";

        }else{
            alert("Confirm Password should match with New Password");
        }
    }else{
        alert("Please fill all the fields");
    }
});
 let logOut=document.getElementById("logoutButton");
 logOut.addEventListener("click",()=>{
    sessionStorage.removeItem("loggedUser");
    window.location.href="../FirstPage";
 })