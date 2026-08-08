document.addEventListener('DOMContentLoaded', () =>{
    const input = document.getElementById('inputMovie')
    const btn = document.getElementById('btn')
    const moviesList = document.getElementById('moviesList')
    btn.addEventListener('click', ()=>{
        let movie = input.value
        if (movie.trim() ==="") return
        movies.push(movie)
        localStorage.setItem('movies',JSON.stringify(movies))
        renderList()
        input.value =''

    }
    )
    function renderList(){
        moviesList.innerHTML=""
        for (let index = 0; index < movies.length; index++) {
            const movie = movies[index]
            const li = document.createElement('li')
            const deleteBtn = document.createElement('button')
            deleteBtn.addEventListener('click',()=>{
                movies.splice(index,1)
                localStorage.setItem('movies',JSON.stringify(movies))
                renderList()
        
    })
            deleteBtn.textContent = 'Delete Movie'
            li.textContent = movie
            li.appendChild(deleteBtn)
            moviesList.appendChild(li)
        }
    }
    let movies = JSON.parse(localStorage.getItem('movies')) || []
    renderList()



})