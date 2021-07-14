const fullName = document.getElementById("fullname");
const contact = document.getElementById("phone-number");
const email = document.getElementById("email");

const username = document.getElementById("username");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");

const submit = document.querySelector(".btn-sign");
let welcomeMessage = document.querySelector(".box2");

const togglePassword = document.querySelector("#toggle-password");
togglePassword.addEventListener("click", function(e){
    // toggle the type attribute
    if (password.type === "password") {
    password.type = "text";
    this.classList.toggle("fa-eye-slash");
  } else {
    password.type = "password";
    this.classList.toggle("fa-eye-slash");
    
  }
});

const togglePassword2 = document.querySelector("#toggle-password2");
togglePassword2.addEventListener("click", function(e){
    // toggle the type attribute
    if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    this.classList.toggle("fa-eye-slash");
  } else {
    confirmPassword.type = "password";
    this.classList.toggle("fa-eye-slash"); 
  }
});


const data = document.getElementById('signUpForm');
    
data.addEventListener('submit', function (e) {
  e.preventDefault();
    //VALIDATION
  const fullName = document.getElementById("fullname");
  function validateForm (){
    const usernameValue = username.value.trim();
    const fullnameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = contact.value.trim();
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim();
    //fullname
    if(fullnameValue === "") {
      formError(fullName, "Full Name cannot be blank");
    }
    else{
      formSuccess(fullName);
    }
    //username
    if (usernameValue ==="" ) {
      formError(username, "User Name cannot be blank");
    }
    else {
      formSuccess(username);
    }
    //phone number
    if (phoneValue ==="" ) {
      formError(contact, "Phone Number cannot be blank");
    }
    else if (phoneValue.length < 4) {
      formError(contact, "Enter a valid Phone Number");
    }
    else {
      formSuccess(contact);
    }
    //email
    if (emailValue ==="" ) {
      formError(email, "Email cannot be blank");
    }
    else if(!isEmail(emailValue)) {
      formError(email, "This does not look like an Email");
    }
      
    else {
      formSuccess(email);
    }
    isEmail(emailValue);
      
    //passord
    let hasLower = /[a-z]/g;
    let hasUpper = /[A-Z]/g;
    let hasNumber = /[0-9]/g;

    if (passwordValue ==="" ) {
      formError(password, "Password cannot be blank");
    }
      
    else if(!passwordValue.match(hasLower)) {
      formError(password, "Password must contain at least 1 lowercase letter ");
    }
    else if (!passwordValue.match(hasUpper)) {
      formError(password, "Password must contain at least 1 UpperCase letter ");
    }
    else if (!passwordValue.match(hasNumber)) {
      formError(password, "Password must contain at least 1 number ")
    }
    else if (passwordValue.length < 8) {
      hidePasswordError.textContent = "Password must be 8 characters or more"
    }
    else {
      formSuccess(password);
    }
    //confirm password
    if(confirmPasswordValue === "") {
      formError(confirmPassword, "Confirm Password");
    }
    else if (passwordValue !== confirmPasswordValue){
      formError(confirmPassword, "Password does not Match");
    }
    else{
      formSuccess(confirmPassword);
    }
  }
    
    function formError(input, message) {
      const inputBox = input.parentElement;
      const small = inputBox.querySelector("small")
      small.innerText = message;
      inputBox.className = "input-box error";
    }

    function formSuccess(input) {
      const inputBox = input.parentElement;
      inputBox.className = "input-box success";
    }
    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    }
    validateForm();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
    username:username.value,
    full_name:fullName.value,
    email: email.value,
    phone_number: contact.value,
    password: password.value,
    re_password: confirmPassword.value
    });
    console.log(raw);
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

fetch("https://trade-app-zuri.herokuapp.com/register/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result)
  //  .then(welcomeMessage.innerHTML = `<h2>Welcome ${username}, 
  //  an email was sent to ${email},verify your email and you will be redirected to the login page<h2>`)
  )
  .catch(error => console.log('error', error))

  //On submit

});

