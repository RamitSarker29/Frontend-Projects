let percentage = document.getElementById('percentage')

let progress = document.querySelector('.progress')

let statusNow = document.querySelector('.status')

let progressBar = document.querySelector('.progress-bar')

let p = document.querySelector('p')

let count = 0
let timer = setInterval(()=>{
    if (count < 100) {
        count ++
        percentage.textContent = `${count}%`
        progress.style.width = `${count}%`
    }
    if (count == 100) {
        statusNow.textContent = ''
        p.textContent = 'Downloaded!!'
        progressBar.classList.add('hidden')
        percentage.textContent = ''
    }
} , 50)