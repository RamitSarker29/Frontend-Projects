document.addEventListener('DOMContentLoaded', ()=>{
    let text = document.getElementById('input')
    let char = document.getElementById('characters-space')
    let charSpace = document.getElementById('characters-nospace')
    let word = document.getElementById('words')
    text.addEventListener('input', function(){
        let userTyped = text.value
        char.textContent = `Characters[With Space]: ${userTyped.length}`
        let space = userTyped.replaceAll(' ','')
        charSpace.textContent = `Characters[Without Space]: ${space.length}`

        if (userTyped ===""){
            word.textContent = `Words: 0`
        }
        else{
            let words = userTyped.split(" ")
            word.textContent = `Words: ${words.length}`
        }

    })
})