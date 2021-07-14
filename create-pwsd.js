const togglePassword = document.querySelector("#toggle-password");
const confirmPassword = document.getElementById("confirm");
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

