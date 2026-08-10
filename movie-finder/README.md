# 🎬 Movie Finder

A simple Movie Finder built with HTML, CSS, and JavaScript.

This project allows users to search for movies and retrieve movie information directly from the OMDb REST API.

---

## 🖼️ Preview

### 🏠 Home Page

![Movie Finder Home](./assets/movie-finder-home.png)

### 🔎 Movie Search

![Movie Finder Search](./assets/movie-finder-search.png)

### 🎬 Movie Details

![Movie Finder Details](./assets/movie-finder-details.png)

---

## 🚀 Features

* 🔎 Search for movies by title
* 🎞️ Display the movie poster
* 📝 Display the movie overview
* 🎬 Display the director
* ⏱️ Display the runtime
* 🎭 Display the genre
* ⭐ Display IMDb rating
* 📅 Display release date
* 👥 Display the main cast
* 🏆 Display movie awards
* ❌ Handle movies that cannot be found
* ⚡ Fetch data dynamically without reloading the page
* 📱 Responsive interface

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* DOM Manipulation
* Fetch API
* Async/Await
* REST API
* JSON
* Error Handling

---

## 📡 API Used

This project uses the **OMDb REST API** to retrieve movie information.

The application dynamically creates an API endpoint based on the movie title entered by the user.

```text
https://www.omdbapi.com/?t={movie-title}&apikey={API_KEY}
```

The response is converted from JSON into a JavaScript object and then used to update the webpage.

---

## 🧠 Concepts Practiced

### DOM Manipulation

Selecting HTML elements and updating their content dynamically using:

* `getElementById()`
* `textContent`
* `classList`

### Event Handling

Handling user interaction with:

* `click` events
* Button interactions
* User input

### Fetch API

Making HTTP requests to an external API using:

* `fetch()`
* `async`
* `await`
* `response.json()`

### API Error Handling

Checking the API response and throwing an error when a movie cannot be found.

### Object Destructuring

Extracting useful properties from the OMDb API response:

```javascript
const {
    Poster,
    Title,
    Plot,
    Director,
    Runtime,
    Genre,
    imdbRating,
    Released,
    Actors,
    Awards
} = data
```

### Dynamic UI Updates

The movie information is inserted into the page after the API request completes.

### Dynamic Images

The movie poster URL received from the API is used as the `src` of the image element.

### Conditional UI

The movie details card is shown when a movie is found, while the error message is shown when the request fails.

---

## 🎨 Design

The interface uses a dark cinematic theme with red accents, glowing elements, responsive layout, and a modern movie-details card.

The movie poster and information are displayed inside a responsive card.

---

## 📂 Project Structure

```text
movie-finder/
│
├── index.html
├── style.css
├── script.js
│
└── assets/
    ├── movie-finder-home.png
    ├── movie-finder-search.png
    └── movie-finder-details.png
```

---

## ▶️ How It Works

```text
User enters movie title
          ↓
       Search
          ↓
   Build API URL
          ↓
     fetch() request
          ↓
    OMDb API response
          ↓
      JSON data
          ↓
    Extract movie data
          ↓
      Update DOM
          ↓
   Display movie details
```

---

## 📚 What I Learned

This project helped me practice working with external APIs and understand the complete API workflow:

* Taking user input
* Building an API endpoint dynamically
* Sending API requests
* Working with asynchronous JavaScript
* Handling API responses
* Converting JSON into JavaScript data
* Extracting information from objects
* Displaying images from API data
* Displaying API data in the DOM
* Handling failed requests
* Separating API logic from display logic

---

## 🎯 Future Improvements

Possible improvements for this project:

* 🔍 Add movie search suggestions
* 🎬 Display multiple search results
* ❤️ Add a movie watchlist
* 💾 Save favorite movies using Local Storage
* ⌨️ Allow searching by pressing Enter
* ⏳ Add a loading state while fetching data
* 🔗 Add a link to the movie's IMDb page
* 🎨 Improve the movie card design
* 📱 Further improve mobile responsiveness

---

## 💡 Purpose

This project is part of my frontend development learning journey.

The goal is not just to build the application, but to understand how frontend applications communicate with external APIs and turn API data into an interactive user interface.

---

## 👨‍💻 Author

**Ramit Sarker**
