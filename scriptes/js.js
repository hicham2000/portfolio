const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');




function form_verify() {
    // Obtenir toutes les valeurs des inputs
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    const phoneValue = phone.value.trim();

    let userValid;
    let emailValid;
    let subjectValid;
    let messageValid;
    let phoneValid;
    
    // Username verify
    if (userValue === "") {
        
        username.classList.add("contact-erorr");
        userValid=false;
        
    }

    else{
        let letterNum = userValue.length;
        if (letterNum < 3) {
            username.classList.remove("contact-succes");
            username.classList.add("contact-erorr");
            userValid=false;
        }   
         else if(userValue.length > 45){
            username.classList.remove("contact-succes");
            username.classList.add("contact-erorr");
            userValid=false;

        }
         else {
            username.classList.remove("contact-erorr");
            username.classList.add("contact-succes");
            userValid=true;
        }
    }

    // email verify
    if (emailValue === "") {
        email.classList.add("contact-erorr");
        emailValid=false;
        
    }else if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){
        email.classList.remove("contact-succes");
        email.classList.add("contact-erorr");
        emailValid=false;
    }else if(emailValue.length >45){
        email.classList.remove("contact-succes");
        email.classList.add("contact-erorr");
        emailValid=false;
    }
    else{
        email.classList.remove("contact-erorr");
        email.classList.add("contact-succes");
        emailValid=true;
    }
    
    // password verify
    if (subjectValue ==="") {
        subject.classList.add("contact-erorr");
        subjectValid=false;
    }else if(subjectValue.length > 45){
        subject.classList.remove("contact-succes")
        subject.classList.add("contact-erorr");
        subjectValid=false;
    }

    else{
        subject.classList.remove("contact-erorr");
        subject.classList.add("contact-succes");
        subjectValid=true;
        
    }
    // pwd confirm
    if (messageValue ==="") {
        message.classList.add("contact-erorr");
        messageValid=false;
        
    }else if(messageValue.length >250){
        message.classList.remove("contact-succes")
        message.classList.add("contact-erorr");
        messageValid=false;
    }
    
    else{
        message.classList.remove("contact-erorr");
        message.classList.add("contact-succes");
        messageValid=true;
    }

    if(phoneValue.length > 14){
        phone.classList.remove("contact-succes")
        phone.classList.add("contact-erorr");
        phoneValid=false;

    }
    else{
        phone.classList.remove("contact-erorr")
        phone.classList.add("contact-succes");
        phoneValid=true;
    }

    if(userValid && emailValid && subjectValid && messageValid && phoneValid)
    {
        return true;
    }
    else{
        return false;
    }
}




