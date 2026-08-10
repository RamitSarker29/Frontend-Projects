document.addEventListener('DOMContentLoaded', () => {
    const inputMovies = document.getElementById('inputMovies')
    const searchBtn = document.getElementById('searchBtn')
    const movieDetails = document.getElementById('movieDetails')
    const moviePoster = document.getElementById('moviePoster')
    const movieName = document.getElementById('movieName')
    const movieOverview = document.getElementById('movieOverview')
    const movieDirector = document.getElementById('movieDirector')
    const movieRuntime = document.getElementById('movieRuntime')
    const movieGenre = document.getElementById('movieGenre')
    const movieRating = document.getElementById('movieRating')
    const movieYear = document.getElementById('movieYear')
    const movieCast = document.getElementById('movieCast')
    const movieAwards = document.getElementById('movieAwards')
    const errorMsg = document.getElementById('errorMsg')

    const API_KEY = '7d59fd'

    searchBtn.addEventListener('click', async () => {
        const inputData = inputMovies.value.trim()
        if (!inputData) return

        try {
            const movieData = await fetchData(inputData)
            displayData(movieData)
        } catch (error) {
            showError()
        }
    })

    async function fetchData(inputData) {
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(inputData)}&apikey=${API_KEY}`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Movie not found. Try Again")
        }
        const data = await response.json()
        if (data.Response === "False") {
            throw new Error(data.Error)
        }
        return data
    }

    function displayData(data) {
        const { Poster, Title, Plot, Director, Runtime, Genre, imdbRating, Released, Actors, Awards } = data

        moviePoster.src = Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/500x750?text=No+Poster+Available'
        movieName.textContent = Title
        movieOverview.textContent = Plot
        movieDirector.innerHTML = `<span class="label">Director: </span> ${Director}`
        movieRuntime.innerHTML = `<span class="label">Runtime: </span> ${Runtime}`
        movieGenre.innerHTML = `<span class="label">Genre: </span> ${Genre}`
        movieRating.innerHTML = `<span class="label">IMDb Rating: </span> ⭐ ${imdbRating} / 10`
        movieYear.innerHTML = `<span class="label">Release Date: </span> ${Released}`
        movieCast.innerHTML = `<span class="label">Cast: </span> ${Actors}`
        movieAwards.innerHTML = `<span class="label">Awards: </span> ${Awards}`

        movieDetails.classList.remove('hidden')
        errorMsg.classList.add('hidden')
    }

    function showError() {
        movieDetails.classList.add('hidden')
        errorMsg.classList.remove('hidden')
    }
})