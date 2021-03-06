// 1. get DOM element
const form = document.getElementById('registration-form')

const username = document.getElementById('username')
const email = document.getElementById('email')

// adding event listener on the form
form.addEventListener('submit', function (e) {
  e.preventDefault()

  validateEmpty(username)
  validateEmpty(email)
  // validateMinLength(username)
  // validateMinLength(username)
  //validateEmpty(password)
  // validateFirstName(firstName)
  // validateIsEmail(email)

  //@TODO: add the validation for email (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  //@TODO: Code Challenge 5c: Starting from your refactored code,
  // 1. Implement and use the validatePassMatch() function to confirm both passwords match
  // 2. Implement and use the emailValidates() function to confirm it's a valid email. See: https://stackoverflow.com/a/46181

  //@TODO: add the validation for password (Code Challenge 5a)
  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
})

// input: HTMLInputElement
function validateEmpty (input) {
  const inputName = input.name
  if (input.value === '') {
    showError(input, `${inputName} is empty`)
  } else {
    showSuccess(input)
  }
}

// input: HTMLInputElement (DOM) | msg: string
function showError (input, msg) {
  input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`

  //reverts the success border
  input.className='base-input'
}

function showSuccess (input) {
  input.className = 'success-input'
  // removes the flash message
  input.nextElementSibling.innerHTML = ''
}

function validatePassMatch (password1, password2) {
  // password1.value === password2.value
  //@TODO: check if the passwords match
}

function validateIsEmail (email) {
  if (emailValidates(email)) { // return true
    showSuccess(email)
  } else {
    showError(email, 'Email is invalid')
  }
}

// returns boolean
function emailValidates (email) {
  // Regular Expression
  //@TODO:  find implementation on SO
  //
  return true
}

// input: HTMLInputElement
function validateMinLength (input) {
  // console.log(input.value.length)
  if (input.value.length < 6) {
    showError(input, 'Username too short')
  } else {
    showSuccess(input)
  }
}
