
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');
var logo = document.getElementById('logo');
var form = document.getElementById('contact-form');

burger.addEventListener('click', openMenu);

function openMenu(){
    burger.classList.toggle("opened");
    menu.classList.toggle("opened");
    logo.classList.toggle("opened");
}
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
// function ValidateEmail(input) {
    
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
//     if (input.match(validRegex)) {
//         document.form1.text1.focus();
//         return true;
//     } 
//     else {
//         document.form1.text1.focus();
//         return false;
//     }
// }
// form.addEventListener("submit", function(e){
//     email = document.getElementById('email').value;
    
//     form.preventDefault();
//     alert(email)
//     if(!ValidateEmail(email)){
//         form.classList.add('was-validated');
//     }
// });

