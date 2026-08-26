# 📁 File Picker UI

A simple frontend project that replaces the default browser file input with a **custom file picker interface**.

Instead of using the usual boring file upload button, this project uses a styled button. When a user selects a file, the selected **filename is displayed directly on the button**.

---

## 🚀 Features

* 📁 Custom file picker interface
* 🖱️ Styled button instead of the default file input
* 📂 Opens the native file selector when clicked
* 📝 Displays the selected file's name
* ✨ Smooth hover transition
* 🎨 Simple custom UI

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Event Handling
* File Input
* `click` Event
* `change` Event

---

## 🧠 How It Works

The actual HTML file input is hidden from the user. The visible button is used as the custom interface. 

When the user clicks the custom button, JavaScript programmatically triggers the hidden file input:

```js
fileInp.click()
```

This opens the browser's native file selector. 

Once the user selects a file, the `change` event fires. The selected file is accessed through the event object, and its name is used to update the button's text:

```js
e.target.files[0].name
```



### Flow

```text
User clicks custom button
          ↓
Hidden file input is triggered
          ↓
File selector opens
          ↓
User selects a file
          ↓
change event fires
          ↓
Selected file is accessed
          ↓
File name is displayed on button
```

---

## 🎨 Design

The interface uses a dark background with a custom purple button. The button has rounded corners, bold text, letter spacing, and a smooth background-color transition on hover.  

---

## 📂 Project Structure

```text
file-picker-ui/
│
├── index.html
├── style.css
└── script.js
```

---

## 📚 Concepts Practiced

* DOM selection
* DOM manipulation
* Event listeners
* `click` events
* `change` events
* Event objects
* File input elements
* Accessing selected files
* Accessing file properties
* `textContent`
* Programmatically triggering elements
* CSS transitions
* CSS hover states

---

## 🎯 What I Learned

This project helped me understand how a native browser control can be **customized through HTML, CSS, and JavaScript**.

Instead of relying on the default file input UI, I created a custom interface and connected it to the actual file input using JavaScript.

The main idea was:

> **Click the custom UI → select a file → display the selected filename.**

---

## 🔮 Future Improvements

Possible improvements:

* 🖼️ Preview selected images
* 📏 Display file size
* 📄 Display file type
* ❌ Add a reset/remove option
* 🚫 Validate file types
* 🚫 Validate file size
* 📤 Add actual file uploading to a server

---

## 👨‍💻 Author

**Ramit Sarker**
