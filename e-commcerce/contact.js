console.log("hello");
let form=document.querySelector(".form")
let button=document.querySelector(".button")
let firstName,secondName,email,password;
let fild;
let errorM=document.querySelectorAll(".errorM")
let emptyM=document.querySelectorAll(".empty")
let regex1= /^[a-z]+$/i;
let regex2= /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
let regex3= /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/


// hidden span with error message
for(let item of errorM){
    item.classList.add("displayN")
}
// hidden span with empty field
for(let element of emptyM){
    element.classList.add("displayN")
}

// add event to parent
form.addEventListener("keyup", (event)=>{
    event.preventDefault()
    fild=event.target.dataset.key
    switch(fild){
        case "firstName":
            firstName=event.target.value
            break;
        case "secondName":
            secondName=event.target.value
            break;
        case "Email":
            email=event.target.value
            break;
        case "Password":
            password=event.target.value
            break;
        default:
            firstName=secondName=email=password=""
            break;                
    }
})

// add event to button
button.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log(firstName, secondName, email, password);
    if(firstName){
        if(!regex1.test(firstName)){
           errorM[0].classList.add("displayB")
           emptyM[0].classList.remove("displayB")
        }else{
           errorM[0].classList.remove("displayB")
           emptyM[0].classList.remove("displayB")
        }
    }else{
        emptyM[0].classList.add("displayB")
        errorM[0].classList.remove("displayB")
    }
    if(secondName){
        if(!regex1.test(secondName)){
            errorM[1].classList.add("displayB")
            emptyM[1].classList.remove("displayB")
        }else{
            errorM[1].classList.remove("displayB")
           emptyM[1].classList.remove("displayB")
        }
    }else{
        emptyM[1].classList.add("displayB")
        errorM[1].classList.remove("displayB")
    }
    if(email){
        if(!regex2.test(email)){
            errorM[2].classList.add("displayB")
            emptyM[2].classList.remove("displayB")
        }else{
            errorM[2].classList.remove("displayB")
           emptyM[2].classList.remove("displayB")
        }
    }else{
        emptyM[2].classList.add("displayB")
        errorM[2].classList.remove("displayB")
    }
    if(password){
        if(!regex3.test(password)){
            errorM[3].classList.add("displayB")
            emptyM[3].classList.remove("displayB")
        }else{
            errorM[3].classList.remove("displayB")
           emptyM[3].classList.remove("displayB")
        }
    }else{
        emptyM[3].classList.add("displayB")
        errorM[3].classList.remove("displayB")
    }
     if(regex1.test(firstName),regex1.test(secondName),regex2.test(email),regex3.test(password)){
        console.log(alert("good job"));
     }
})