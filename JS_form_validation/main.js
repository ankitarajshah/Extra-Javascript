// let username = document.getElementById("username"),
// email = document.getElementById("email"),
// password = document.getElementById("password");

//let email = document.getElementById("email");
// let password = document.getElementById("password");

//let id = () =>{ return document.getElementById(id)} //arrow fucntion

let id = (id) => document.getElementById(id); // without return arrow function

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),

    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

    // errorMsg = document.getElementsByClassName("error"),
    // successIcon = document.getElementsByClassName("success-icon"),
    // failureIcon = document.getElementsByClassName("failure-icon");

    //errorMsg = ["error","error","error"];
    //errorMsg[0].innerHTML ="ggg";
    //errorMsg[1].innerHTML ="jj";
    //errorMsg[2].innerHTML ="mm";

   // adding eventlistener
   form.addEventListener("submit" ,(e) => {
    e.preventDefault();
    //errorMsg[2].innerHTML ="jhkj";

    engine(username, 0, "UserName cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");

   });

   let engine = (id,serial,message) =>{
    if(id.value.trim() === "")
    {
      errorMsg[serial].innerHTML = message;
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    }
    else{
     errorMsg[serial].innerHTML = "";
     successIcon[serial].style.opacity = "1";
     failureIcon[serial].style.opacity = "0";
    }
   }


