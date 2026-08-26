# ⌨️ Key Press Detector

A simple JavaScript project that detects keyboard key presses and displays the pressed key directly on the webpage.

This project was built to practice **keyboard events and DOM manipulation**.

---

## 🚀 Features

* ⌨️ Detects keyboard key presses
* 🖥️ Displays the pressed key on screen
* ␣ Displays `SpaceBar` when the Space key is pressed
* ⚡ Updates the display instantly
* 🎨 Simple dark interface

The HTML provides a heading that acts as the display area for the pressed key. 

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Keyboard Events

---

## 🧠 Concepts Practiced

### Keyboard Events

The project uses the `keydown` event to detect when the user presses a keyboard key. 

### Event Object

The event object provides information about which key was pressed through:

```js
e.key
```

The project uses this value to update the heading. 

### Conditional Statements

The Space key is handled separately so that it displays `SpaceBar` instead of a blank space. 

### DOM Manipulation

The heading's content is dynamically changed using:

```js
h1.textContent
```

---

## 🎨 Design

The project uses a minimal dark interface with a large centered heading. The main container fills the viewport and centers the key display. 

The displayed key uses a large font and prevents text selection for a cleaner interaction. 

---

## 📂 Project Structure

```text
key-press-detector/
│
├── index.html
├── styles.css
└── script.js
```

---

## ▶️ How It Works

```text
User presses a key
        ↓
keydown event fires
        ↓
JavaScript reads e.key
        ↓
Check if key is Space
        ↓
Update h1.textContent
        ↓
Pressed key appears on screen
```

---

## 📚 What I Learned

This project helped me practice:

* Listening for keyboard events
* Working with the JavaScript event object
* Using `e.key`
* Updating DOM elements dynamically
* Using `textContent`
* Writing `if...else` conditions
* Connecting JavaScript events to visible webpage changes

---

## 🎯 Future Improvements

Possible improvements:

* 🔊 Add keyboard sounds
* 🎨 Highlight different types of keys
* ⌨️ Display modifier keys such as `Ctrl`, `Shift`, and `Alt`
* 📊 Track the number of keys pressed
* 🕐 Display the time of the last key press

---

## 👨‍💻 Author

**Ramit Sarker**
