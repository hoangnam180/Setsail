const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const user = document.querySelector('.top-header-user');
const validate = document.querySelector('.validate');
const changeItem = document.querySelectorAll('.change-item');
const validationForm = document.querySelectorAll('.validation-form');
console.log(validationForm)
let itemIndex =0;
// const
function startValidation(){
    handlechangeItem(itemIndex);
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


function validation(options){

    // Hàm thực hiện validate
function validate(inputElement,rule){
    const messageElement =inputElement.parentElement.querySelector(options.errorSelector);
    const errormess = rule.test(inputElement.value)
    if(errormess){
        messageElement.innerText = errormess;
       inputElement.parentElement.classList.add('invalid')
    }else{
        messageElement.innerText = '';
       inputElement.parentElement.classList.remove('invalid')
    }
}

// lấy Element của form cần validate
  const formElement = $(options.form);

  if(formElement){
    options.rules.forEach((rule) => {
        const inputElement = formElement.querySelector(rule.selector)
        if(inputElement){
            //xử lý trường hợp blur ra khỏi input 
            inputElement.onblur = function(){
                validate(inputElement,rule)
            }
            //Xử lý mỗi khi người dùng nhập vào input
            inputElement.oninput = function(){
                const messageElement =
                inputElement.parentElement.querySelector(options.errorSelector);
                messageElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid')
            }
        }
        
    });
  }
}
// Định nghĩa rules

// 1.khi có lỗi thì trả ra message lỗi
// 2. Khi không có lỗi thì trả ra undefined
// 
validation.isRequired = function(selector){
    return {
        selector,
        test : function(value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    };
}
// rule email
validation.isEmail = function(selector){
     return {
        selector,
        test : function(value){
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value.toLowerCase()) ? undefined : 'Mời nhập đúng định dạng';
        }
    };
}
// rule islength
validation.islength = function(selector,min){
     return {
        selector,
        test : function(value){
           return value.length >= min ? undefined : `Mời nhập đủ ${min} ký tự`
        }
    };
}