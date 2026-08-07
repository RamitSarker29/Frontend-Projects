document.addEventListener('DOMContentLoaded', () =>{
    let btn = document.getElementById('btn')
    let quote = document.getElementById('quote')
    btn.addEventListener('click', function(){
        const randomIndex = Math.floor(Math.random()*allQuotes.length)
        let newQuote = allQuotes[randomIndex]
        quote.textContent= newQuote
    })
    const allQuotes = ["Stay hungry, stay foolish.",
    "Small steps every day lead to big results.",
    "Discipline beats motivation.",
    "Dream big. Start small.",
    "Your future is created by what you do today.",
    "Success is built one habit at a time.",
    "Progress, not perfection.",
    "The best time to start was yesterday. The next best time is now.",
    "Don't watch the clock. Do what it does. Keep going.",
    "Consistency creates results.",
    "Believe you can, and you're halfway there.",
    "Every expert was once a beginner.",
    "The only limit is the one you set yourself.",
    "Make yourself proud.",
    "Hard work beats talent when talent doesn't work hard.",
    "Be stronger than your excuses.",
    "Action cures fear.",
    "Learn something every day.",
    "The pain of discipline is better than the pain of regret.",
    "Focus on progress, not perfection.",
    "Success starts with self-belief.",
    "If you get tired, learn to rest, not quit.",
    "Your only competition is who you were yesterday.",
    "Fall seven times, stand up eight.",
    "Do it scared.",
    "Mistakes are proof that you're trying.",
    "The comeback is always stronger than the setback.",
    "Great things take time.",
    "Done is better than perfect.",
    "Success is a series of small wins.",
    "Be patient. Growth takes time.",
    "Don't stop until you're proud.",
    "You become what you practice.",
    "Confidence comes from preparation.",
    "Keep showing up.",
    "The only impossible journey is the one you never begin.",
    "Your habits shape your future.",
    "Start before you're ready.",
    "Today is another chance to improve.",
    "Success isn't owned; it's rented. Rent is due every day.",
    "Difficult roads often lead to beautiful destinations.",
    "Never let yesterday take up too much of today.",
    "The secret of getting ahead is getting started.",
    "A little progress each day adds up to big results.",
    "You don't have to be great to start, but you have to start to be great.",
    "Push yourself because no one else is going to do it for you.",
    "Growth begins at the end of your comfort zone.",
    "Keep your eyes on the goal, not the obstacles.",
    "Your future self will thank you."]
    

})
