Here’s the version I’d actually put in your GitHub repo:

````markdown
# 🎯 Guess The Number Game

A simple and interactive **Guess The Number Game** built with HTML, CSS, and JavaScript.

Choose a starting and limiting number, let the game generate a random number within that range, and try to guess it. The game gives you **Higher** or **Lower** hints until you find the correct number.

---

## 🎨 Preview

### Game Setup

![Guess The Number Game - Setup](./guessing_game1.png)

### Guessing in Progress

![Guess The Number Game - Gameplay](./guessing_game2.png)

---

## 🚀 Features

- 🎯 Generate a random number within a user-defined range
- 🔢 Choose the starting and limiting numbers
- ⬆️ Get a **Higher** hint when the guess is too low
- ⬇️ Get a **Lower** hint when the guess is too high
- 🎉 Display a congratulations message when the number is guessed
- ❌ Prevent guesses outside the selected range
- 📝 Keep track of previous guesses
- 🔄 Reset the game after successfully guessing the number
- 🎨 Different colors for different feedback states
- 📱 Responsive interface

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM Manipulation
- Event Handling
- `Math.random()`
- `Math.floor()`
- Conditional Statements
- Dynamic DOM Elements

---

## 🧠 How It Works

1. Enter a **starting number**.
2. Enter a **limiting number**.
3. Click **Start**.
4. The game generates a random number within the selected range.
5. Enter your guess.
6. The game tells you whether to guess **Higher** or **Lower**.
7. Keep guessing until you find the number.
8. Once the number is guessed correctly, the game resets and you can start again.

### Random Number Generation

The random number is generated using:

```javascript
Math.floor(Math.random() * (limit - start + 1)) + start
````

---

## 🎮 Feedback System

The game provides different feedback depending on the guess.

| Guess                      | Feedback                    |
| -------------------------- | --------------------------- |
| Guess is too low           | ⬆️ Higher                   |
| Guess is too high          | ⬇️ Lower                    |
| Guess is correct           | 🎉 Congratulations          |
| Guess is outside the range | ❌ Please Enter Within Range |

---

## 📝 Guess History

Every incorrect guess is added to the guess history.

Example:

```text
10 - Higher
21 - Lower
25 - Lower
28 - Lower
```

The most recent guess appears at the top of the list.

The guess history is cleared when the correct number is guessed.

---

## 🔄 Game Reset

After successfully guessing the number:

* 🎉 The congratulations message is displayed
* 🧹 Guess history is cleared
* 🔢 Starting number is cleared
* 🔢 Limiting number is cleared
* ⌨️ Guess input is cleared
* 👻 Guess section disappears
* ▶️ Start button appears again

The player can then start a new game with a different range.

---

## 📂 Project Structure

```text
guess-the-number/
│
├── index.html
├── styles.css
├── script.js
├── guessing_game1.png
└── guessing_game2.png
```

---

## 📚 Concepts Practiced

* DOM Selection
* `addEventListener()`
* Click Events
* Variables and Scope
* `let` and `const`
* `parseInt()`
* `.value`
* `.textContent`
* `.className`
* Conditional Statements
* Comparison Operators
* Strict Equality
* `Math.random()`
* `Math.floor()`
* Template Literals
* `createElement()`
* `prepend()`
* Dynamic DOM Updates
* Showing and Hiding Elements
* Resetting Application State
* Managing Event Listeners

---

## 💡 What I Learned

This project helped me practice:

* Generating random numbers within a specific range
* Working with values from HTML inputs
* Converting input values into numbers
* Comparing user input with another value
* Dynamically updating the DOM
* Creating and inserting HTML elements with JavaScript
* Changing CSS classes based on application state
* Showing and hiding elements dynamically
* Managing game state with JavaScript variables
* Resetting an application after completing a game

---

## 🎯 Future Improvements

Possible improvements for this project:

* 🔢 Add a maximum number of attempts
* 🏆 Add a scoring system
* 📊 Track total guesses
* 🥇 Add difficulty levels
* ⏱️ Add a timer
* 🔊 Add sound effects
* 🌙 Add dark mode
* 🎉 Add a winning animation
* ⌨️ Allow pressing **Enter** to submit a guess
* 🔄 Add a dedicated **New Game** button

---

## 🎯 Purpose

This project is part of my **frontend development learning journey**.

The goal was to practice JavaScript by building an interactive application and understand how JavaScript can handle user input, maintain application state, manipulate the DOM, and dynamically update the user interface.

---

## 👨‍💻 Author

**Ramit Sarker**

``
