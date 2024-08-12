function validate(){
    const username = document.getElementById("username").value
    const usernameerror = document.getElementById("usernameerror")
    let usernamestatus = false
    const alphaexp = /^[a-zA-Z]+$/;

    const mobile = document.getElementById("mobile").value
    const mobileerror = document.getElementById("mobileerror")
    let mobilestatus = false
    const mobileexp = /^(0|91)?[6-9][0-9]{9}$/;

    const email = document.getElementById("email").value
    const emailerror = document.getElementById("emailerror")
    let emailstatus = false
    const emailexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    

    // name validation

    if( username === ""){
        usernameerror.innerHTML = "Please enter your name"
        usernameerror.style.color = "red"
    }
    else{
        if( username.match(alphaexp)){
            usernameerror.innerHTML = ""
            usernamestatus = true
        }
        else{
            usernameerror.innerHTML = "Dude!!!! Enter your name..."
            usernameerror.style.color = "red"
        }
    }


    // mobile validation

    if(mobile ===""){
        mobileerror.innerHTML = "Please enter your mobile number..."
        mobileerror.style.color = "red"
    }
    else{
        if(mobile.match(mobileexp)){
            mobileerror.innerHTML =""
            mobilestatus = true
        }
        else{
            mobileerror.innerHTML = "Dude!!! enter mobile number"
             mobileerror.style.color = "red"
        }
    }


    // mail validation


    if(email === ""){
        emailerror.innerHTML =" Please enter your email id"
        emailerror.style.color = "red"
    }
    else{
        if(email.match(emailexp)){
            emailerror.innerHTML =""
            emailstatus = true
        }
        else{
            emailerror.innerHTML = "Dude!!! enter valid email id...."
            emailerror.style.color = "red"
        }
    }



    // return

    if(usernamestatus && mobilestatus && emailstatus){
        return true
    }
    else{
        return false
    }
}


