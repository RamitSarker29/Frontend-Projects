document.addEventListener('DOMContentLoaded', ()=>{
    const randomText = document.getElementById('randomText')
    const inputText = document.getElementById('inputText')
    const getTextBtn = document.getElementById('getTextBtn')
    const startBtn = document.getElementById('startBtn')
    const time = document.getElementById('time')
    const wpm = document.getElementById('wpm')
    const acc = document.getElementById('acc')

    const texts = [
    "Great programmers are not people who never make mistakes.",
    "They are people who become better at finding and fixing those mistakes.",
    "Learning something difficult requires patience and consistent effort.",
    "A blank editor can feel intimidating when you do not know where to begin.",
    "Start with the smallest part of the problem that you understand.",
    "Once that part works, move on to the next piece.",
    "Programming is a process of turning ideas into instructions that computers can follow.",
    "A function is useful when you want to organize code around a specific task.",
    "Variables allow programs to remember information while they are running.",
    "Arrays are useful when you need to work with collections of related values.",
    "Objects allow you to group related information together in a structured way.",
    "Events allow JavaScript to respond when users interact with a webpage.",
    "The DOM gives JavaScript a way to interact with elements on a webpage.",
    "A webpage can change without being completely reloaded when JavaScript updates the DOM.",
    "Good user interfaces should make common actions easy to understand.",
    "A simple design can be more effective than an interface filled with unnecessary features.",
    "Performance matters because users expect websites to respond quickly.",
    "Accessibility helps make websites usable by people with different needs.",
    "Responsive design allows a website to work across different screen sizes.",
    "A developer should understand the problem before deciding how to solve it.",
    "Reading error messages carefully can save a lot of debugging time.",
    "Console logs are useful when you need to understand what your program is doing.",
    "Testing small pieces of code makes debugging much easier.",
    "Sometimes a bug is caused by a tiny detail that is easy to overlook.",
    "Learning to read someone else's code is an important programming skill.",
    "Clean code makes it easier for you and other developers to understand a project.",
    "Naming variables clearly can make complicated logic much easier to follow.",
    "A good variable name can explain what information the variable contains.",
    "Functions become easier to use when they have a clear and focused responsibility.",
    "Breaking a large function into smaller functions can make a program easier to maintain.",
    "The internet is full of useful documentation and examples for learning programming.",
    "Knowing how to search for an answer is an important skill for every developer.",
    "You do not need to memorize every method in a programming language.",
    "What matters more is understanding what you are trying to accomplish.",
    "Programming becomes less mysterious when you learn to follow the flow of your data.",
    "When something does not work, trace the data and find where it changes unexpectedly.",
    "A program is easier to understand when each part has a clear purpose.",
    "Building projects gives you opportunities to practice concepts in realistic situations.",
    "Your first implementation will rarely be your final implementation.",
    "Refactoring means improving existing code without changing what the program does.",
    "Learning to refactor helps you recognize patterns and improve your programming style.",
    "The best projects are often the ones that challenge you slightly beyond your current ability.",
    "Feeling stuck does not mean you are bad at programming.",
    "Being stuck usually means there is something you have not understood yet.",
    "Asking good questions can help you find the missing piece faster.",
    "Curiosity is one of the most useful qualities a programmer can have.",
    "Keep experimenting because sometimes the best way to understand something is to try it.",
    "The more problems you solve, the more patterns you begin to recognize.",
    "Programming is a skill that becomes stronger through repeated practice."
];

    getTextBtn.addEventListener('click', ()=>{
        let randomNumber = Math.floor(Math.random() * texts.length);
        randomText.textContent = texts[randomNumber]
    })

    let startTime = null
    startBtn.addEventListener('click', ()=>{
        startTime = Date.now()
        
    })
    let mistakes = 0

    inputText.addEventListener('input', () => {
    const index = inputText.value.length - 1

    if (inputText.value[index] !== randomText.textContent[index]) {
        mistakes++
    }

    if (inputText.value === randomText.textContent) {
        const endTime = Date.now()
        const resultTime = (endTime - startTime) / 1000

        time.textContent = `Time: ${resultTime.toFixed(2)} Seconds`

        const words = inputText.value.split(' ')
        const wordCount = words.length

        const wpmResult = (wordCount * 60) / resultTime
        wpm.textContent = `WPM: ${wpmResult.toFixed(2)}`

        acc.textContent = `Mistakes: ${mistakes}`
    }
})

})