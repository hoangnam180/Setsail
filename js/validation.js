const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const user = document.querySelector('.top-header-user');
const validate = document.querySelector('.validate');
const changeItem = document.querySelectorAll('.change-item');
const validationForm = document.querySelectorAll('.validation-form');
const userMobile = document.querySelector('.mobile-top-header-user');
const form2 = document.querySelector('#form-2');
const fullName2 = document.querySelector('#form-2 #fullname')
const password2 =document.querySelector('#form-2 #password')
// form 3
const form3 = document.querySelector('#form-3');
const fullName3 = document.querySelector('#form-3 #fullname')
const email3 =document.querySelector('#form-3 #email')
const password3 =document.querySelector('#form-3 #password')
const passwordRepeat =document.querySelector('#form-3 #password_repeat')
let itemIndex =0;
function startValidation(){
    handlechangeItem(itemIndex);
}

userMobile.onclick =(e)=>{
    e.preventDefault();
    validate.classList.add('open');
}
user.onclick = (e)=>{
    e.preventDefault();
    validate.classList.add('open');
}

validate.onclick = (e)=>{
    if(e.target == e.currentTarget){
    validate.classList.toggle('open');
    }
}

changeItem[0].onclick = (e)=>{
    handlechangeItem(2);
}
changeItem[1].onclick = (e)=>{
    handlechangeItem(1);
}

function handlechangeItem(itemIndex){
    for(let i = 0;i<changeItem.length;i++){
        changeItem[i].classList.remove('active');
        validationForm[i].style.display = "none";
    }
    itemIndex ++;
        if(itemIndex > changeItem.length){
            itemIndex = 1;
        }
        changeItem[itemIndex-1].classList.add('active');
        validationForm[itemIndex-1].style.display = "block";
}

startValidation();


//Form 2 
form2.oninput = function(){
    setSuccess(fullName2);
    setSuccess(password2);
}

form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputForm2();
});

function checkInputForm2(){
    const usernameValue = fullName2.value.trim();
    const passWordValue = password2.value.trim();
    
    if(usernameValue === ""){
        setError(fullName2,'Username cannot be blank');
    }else{
        setSuccess(fullName2);
    }
    
    if(passWordValue === ""){
        setError(password2,'Userpassword cannot be blank');
    }
    else if(passWordValue.length <=6 ){
        setError(password2,'Please type more than 6 characters');
    }
    else{
        setSuccess(password2);
    }
}

// Form 3

form3.oninput = function(){
    setSuccess(fullName3);
    setSuccess(password3);
    setSuccess(email3);
    setSuccess(passwordRepeat);
}

form3.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputForm3();
});



function checkInputForm3(){
    const usernameValue = fullName3.value.trim();
    const emailValue = email3.value.trim();
    const passwordValue = password3.value.trim();
    const passwordRepeatValue = passwordRepeat.value.trim();
    
    if(usernameValue === ""){
        setError(fullName3,'Username cannot be blank');
    }else{
        setSuccess(fullName3);
    }
    
    // email
    if(emailValue === ""){
        setError(email3,'UserEmail cannot be blank')
    }
    else if(!isEmail(emailValue)){
        setError(email3,'Please types the correct format');
    }else{
        setSuccess(email3)
    }
    // pass
    if(passwordValue === ""){
        setError(password3,'Userpassword cannot be blank');
    }
    else if(passwordValue.length < 6 ){
        setError(password3,'Please type more than 6 characters');
    }
    else{
        setSuccess(password3);
    }
    // repeat
    if(passwordRepeatValue === ""){
        setError(passwordRepeat,'Userpassword cannot be blank');
    }
    else if(passwordRepeatValue == passwordValue ){
        setSuccess(passwordRepeat);
    }
    else{
        setError(passwordRepeat,'Password does not match');
    }
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setError(input,message){
    const formGroup = input.parentElement;
    const formMessage = formGroup.querySelector('.form-message');
    formMessage.innerText = message;
}
function setSuccess(input){
    const formGroup = input.parentElement;
    const formMessage = formGroup.querySelector('.form-message');
    formMessage.innerText = '';
}