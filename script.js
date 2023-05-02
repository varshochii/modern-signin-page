
///////////////////////////////////////////////////////////
/// Get elements from the dom 
const inputs = document.querySelectorAll('.input-wrap input');
const formBtn = document.querySelector('#form-open-btn');
const form = document.querySelector('.sign-up');
const closeBtn = document.querySelector('.close');
const video = document.querySelector('.sign-up video');



///////////////////////////////////////////////////////////
/// select all input fields 
inputs.forEach(input => {

     //add a focus event 
     input.addEventListener('focus', e => {

           // add focus style to the input
           input.previousElementSibling.classList.add('input-focused');
     });

     //add a blur effect
     input.addEventListener('blur', () => {
        // check if the input field is empty 
        if(input.value == '' || input.value === null){
            // remove focus styles from the label 
            input.previousElementSibling.classList.remove('input-focused');
        }
     });
});



///////////////////////////////////////////////////////////
// Add a click event to the form open button
formBtn.addEventListener('click', () => {

     // add show styles from the form 
     form.classList.add('form-show');

     //hide the form show button
     formBtn.style.display = 'none';
});



///////////////////////////////////////////////////////////
///// add a click event to the form close button 
closeBtn.addEventListener('click', () => {

     //// Remove show styles from the form 
     form.classList.remove('form-show');

     /// show the form show button 
     formBtn.style.display = 'block';
});

