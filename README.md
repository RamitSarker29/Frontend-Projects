# 📝 Dark Mode To-Do List

A simple and responsive To-Do List web application built with **HTML**, **CSS**, and **Vanilla JavaScript**. The application allows users to add, complete, delete, and permanently save tasks using the browser's Local Storage.

## 🚀 Features

- ➕ Add new tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 💾 Tasks persist after page refresh using Local Storage
- 🌙 Clean dark mode interface
- 📱 Responsive and minimal UI

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```
├── index.html
├── styles.css
└── script.js
```

---

## 📖 How It Works

### Adding a Task

- Enter a task in the input field.
- Click **Add Task**.
- The task is:
  - Added to the page
  - Stored in an array
  - Saved in Local Storage

### Completing a Task

- Click on a task.
- The task is marked as completed.
- Clicking it again toggles the completed state.

### Deleting a Task

- Click the **Delete** button beside a task.
- The task is removed from:
  - The webpage
  - The task array
  - Local Storage

### Local Storage

Tasks are automatically saved using:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the page loads, saved tasks are retrieved:

```javascript
JSON.parse(localStorage.getItem("tasks"));
```

---

## 📚 JavaScript Concepts Practiced

- DOM Manipulation
- Event Listeners
- Event Propagation (`stopPropagation`)
- Dynamic Element Creation
- Template Literals
- Arrays (`push`, `filter`, `forEach`)
- Objects
- Arrow Functions
- Local Storage API
- CSS Class Manipulation (`classList.toggle`)
- `DOMContentLoaded`


## ▶️ Running the Project

1. Clone the repository

```bash
git clone https://github.com/RamitSarker29/todo-list.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

No additional setup or dependencies are required.

---

## 🌱 Future Improvements

- Edit existing tasks
- Due dates
- Task categories
- Search functionality
- Drag-and-drop task ordering
- Dark/Light mode toggle
- Filter tasks (All, Active, Completed)
- Clear completed tasks

---

## 👨‍💻 Author
**Ramit Sarker**
