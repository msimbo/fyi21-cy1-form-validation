// 1. get DOM element
const regForm = document.getElementById('registration-form')

const username = document.getElementById('username')
const usernameErr = username.nextElementSibling
const usernameSuccess = usernameErr.nextElementSibling
const email = document.getElementById('email')
const emailErr = email.nextElementSibling
const emailSuccess = emailErr.nextElementSibling
const password = document.getElementById('password')
const passwordErr = password.nextElementSibling
const passwordSuccess = passwordErr.nextElementSibling
const Confirmpassword = document.getElementById('password-2')
const ConfirmpasswordErr = Confirmpassword.nextElementSibling
const ConfirmpasswordSuccess = ConfirmpasswordErr.nextElementSibling


// const usernameErr = document.getElementById("usernameErr") 

regForm.addEventListener('click', function (e) {
  e.preventDefault()

if (username.value ==='') {
  usernameErr.className = 'block bg-red-500 text-white'
} else {
  usernameSuccess.className = 'block bg-green-600 text-white'
}


  // 2. Check if the value is empty
 
  if (email.value === '') {
    emailErr.className = 'block bg-red-500 text-white'
  } else {
    emailSuccess.className = 'block bg-green-600 text-white'
  }

 //@TODO: add the validation for email
 if (password.value === '') {
   passwordErr.className = 'block bg-red-600 text-white'
 }
 else { 
   passwordSuccess.className = 'block bg-green-600 text-white'
  }

 
  //@TODO: add the validation for email

  if (Confirmpassword.value === '') {
    // 3. If empty, give user some feedback
    ConfirmpasswordErr.className = 'block bg-red-500 text-white'
  } else {
    ConfirmpasswordSuccess.className = 'block bg-green-600 text-white'
  }

  //@TODO: add the validation for password
})
