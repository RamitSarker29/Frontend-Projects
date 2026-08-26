const form = document.querySelector('form')

const inputs = document.querySelectorAll('input')

const main = document.querySelector('#main')


form.addEventListener('submit' , (e) => {
    e.preventDefault()

    const card = document.createElement('div')
    card.classList.add('card')

    const profile = document.createElement('div')
    profile.classList.add('profile')


    const img = document.createElement('img')
    img.setAttribute('src' , inputs[0].value)

    const h3 = document.createElement('h3')
    h3.textContent = inputs[1].value

    const h5 = document.createElement('h5')
    h5.textContent = inputs[2].value
    
    const p = document.createElement('p')
    p.textContent = inputs[3].value

    profile.append(img)

    card.append(profile, h3, h5, p)

    main.appendChild(card)

    inputs.forEach((i) =>{
        if (i.type !== 'submit'){
            i.value = ''
        }
    })
})