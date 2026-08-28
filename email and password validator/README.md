# 🔐 Email & Password Validator

A simple **Email & Password Validator** built with HTML, CSS, and JavaScript.

The project takes an email and password from the user and validates them using **Regular Expressions (Regex)**. It displays error messages when the input is invalid and a success message when both inputs are valid.

---

## 🚀 Purpose

The goal of this project was to practice:

- Form handling
- User input validation
- Regular Expressions
- DOM manipulation
- Conditional logic
- Event handling

---

## ✨ Features

- 📧 Validates email format
- 🔑 Validates password requirements
- ❌ Displays error messages for invalid input
- ✅ Displays a success message when both inputs are valid
- 📝 Uses form submission events
- 🚫 Prevents the default form submission
- 🎨 Simple dark-themed interface

---

## 📂 Project Structure

```text
Email-Password-Validator/
│
├── index.html
├── style.css
├── script.js
└── screenshots/
```

---

## 📚 Concepts Practiced

- DOM Manipulation
- `querySelector()`
- Form Submission
- `addEventListener()`
- `preventDefault()`
- Input `.value`
- `textContent`
- Conditional Statements
- `if...else`
- Logical AND (`&&`)
- Regular Expressions
- Regex `.test()`
- CSS Flexbox
- CSS Transitions
- Form Styling

---

## 🔎 Validation

### Email

The email is checked using a regular expression to make sure it follows a basic email format.

Examples:

```text
abc123@gmail.com   ✅
user@yahoo.in     ✅
a@a.a             ❌
hello@gmail       ❌
```

### Password

The password must contain:

- At least 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

Example:

```text
Hello123   ✅
Password1  ✅
hello123   ❌
Hello      ❌
```

---

## 📸 Screenshots

### Empty Form

![Empty Form](screenshots/empty_form.png)

### Invalid Email

![Invalid Email](screenshots/invalid_email.png)

### Invalid Password

![Invalid Password](screenshots/invalid_password.png)

### Valid Email & Password

![Valid Email & Password](screenshots/valid_email_password.png)


---

## 🎯 What I Learned

- How form submission events work
- How to prevent the browser's default form behavior
- How to access values entered by the user
- How Regular Expressions can be used for validation
- How `.test()` checks whether a value matches a Regex
- How to display validation messages dynamically
- How to combine multiple conditions using `&&`
- How to handle different validation states with `if...else`

---

## 📌 Note

This project is part of my **frontend development learning journey**.

It was built to practice JavaScript form validation and Regex rather than to create a production-ready authentication system.

---

## 👨‍💻 Author

**Ramit Sarker**
