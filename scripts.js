/* Add your JavaScript to this file */

window.onload = function(){
  submit = document.getElementsByTagName("button")[0]
  message = document.getElementsByClassName("message")[0]
  submit.setAttribute('type', 'button') /*Prevents page reload on submit button click*/


  submit.addEventListener("click", function(){
    email = document.getElementsByTagName("input")[0].value
    if ((email.includes("@")) && (email.includes("."))){message.innerHTML = "Thank you! Your email " +
      email.toString() + " has been added to our mailing list!"}
    else{message.innerHTML = "Error: Please enter valid email address."}
  })
}
