document.addEventListener('DOMContentLoaded',()=>{
    const startingNumber = document.getElementById('startingNumber')
    const limitingNumber = document.getElementById('limitingNumber')
    const startBtn = document.getElementById('startBtn')
    const guessInput = document.getElementById('guessInput')
    const guessBtn = document.getElementById('guessBtn')
    const feedback = document.getElementById('feedback')
    const guessedNumbers = document.getElementById('guessedNumbers')
    const guess = document.querySelector('.guess')
    let start
    let limit
    let randomNumber

    startBtn.addEventListener('click',()=>{
        start = parseInt(startingNumber.value.trim())
        limit = parseInt(limitingNumber.value.trim())
        
        randomNumber = Math.floor(Math.random() * (limit - start + 1)) + start
        console.log('random:',randomNumber)

        
        
        guessedNumbers.innerHTML = ''
        feedback.textContent = ''
        feedback.className = ''

        guess.style.display = 'flex'
        startBtn.style.display = 'none'

        })
    guessBtn.addEventListener('click',()=>{
        const guessedInput = parseInt(guessInput.value.trim())
        console.log('guess:',guessedInput)

        if (!guessedInput) return
        if (guessedInput < start || guessedInput > limit){
            feedback.textContent = 'Please Enter Within Range'
            feedback.className = 'error'
            guessInput.value = ''
            return
        }
        if (guessedInput > randomNumber){
            feedback.textContent = 'Lower'
            feedback.className = 'lower'


        }
        if (guessedInput < randomNumber){
            feedback.textContent = 'Higher'
            feedback.className = 'higher'

        } 
        if (guessedInput == randomNumber) {
            feedback.textContent = `Congratulations!!!! The Number was ${randomNumber}`
            feedback.className = 'correct'

            guessedNumbers.innerHTML = ''
            startingNumber.value = ''
            limitingNumber.value = ''
            guessInput.value = ''
            guess.style.display = 'none'
            startBtn.style.display = 'block'

        }
        guessInput.value = ''
        if (guessedInput !== randomNumber){
            const li = document.createElement('li')
            li.textContent = `${guessedInput} - ${feedback.textContent}`
            guessedNumbers.prepend(li)
        }

        guessInput.value =''

    })
    

    })

    
        

    
