const form = document.querySelector('form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const emailError = document.querySelector('#emailError')
const passwordError = document.querySelector('#passwordError')
const successMsg = document.querySelector('#successMsg')


form.addEventListener('submit' , (e) => {
    e.preventDefault()
    console.log(password.value)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/    
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/

    
    if (emailRegex.test(email.value) === false) {
        emailError.textContent = 'Invalid Email'
    }
    else {
        emailError.textContent = ''
    }
    if (passwordRegex.test(password.value) === false) {
        passwordError.textContent = 'Invalid Password'
    }
    else {
        passwordError.textContent = ''

    }
    if (emailRegex.test(email.value) === true && passwordRegex.test(password.value) === true) {
        successMsg.textContent = 'Valid Email and Password'
    }
    else {
        successMsg.textContent = ''
    }

})