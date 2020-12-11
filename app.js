// 1. get DOM element
const regForm = document.getElementById('registration-form')

const username = document.getElementById('username')
const usernameErr = username.nextElementSibling

username.addEventListener('blur', function (e) {
  if (username.value !== '') {
    e.target.nextElementSibling.innerHTML = '<small class="success">✔ Complete</small>'
  }
})

// 2. Add event / modification
regForm.addEventListener('click', function (e) {
  e.preventDefault()

  // 2. Check if the value is empty
  if (username.value === '') {
    // 3. If empty, give user some feedback
    usernameErr.innerHTML = '<small class="error"> ❌ Please enter your username </small>'
  } else {
    console.log('Sending to server')
  }
  //@TODO: add the validation for email

  //@TODO: add the validation for password
})

function showError(){
  // what should be done...
}

