const quizForm = document.querySelector('form')
const showResultQuiz = document.querySelector('.show_result')

const getNumberOfHitsPercent = answers => {
    const correctAnswers = ['B', 'D', 'A', 'A']

    const numberOfHits = answers.reduce((acc, answer, index) => 
        answer === correctAnswers[index] ? acc+1 : acc, 0)

    return (numberOfHits / 4) * 100
}

const showPercentageOfHits = percentageOfHits => {
    showResultQuiz.innerHTML = `Você acertou <span>${percentageOfHits}%</span> do quiz.`
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    setTimeout(() => {
        showResultQuiz.classList.remove('hide')
        showResultQuiz.classList.remove('show_opacity')
        showResultQuiz.classList.add('show')
        
        setTimeout(() => {
            showResultQuiz.classList.add('show_opacity')
        }, 900)
    }, 500)

    setTimeout(() => {
        showResultQuiz.classList.remove('show')
        showResultQuiz.classList.add('hide')
    }, 6000)
}

const getQuizAnswers = e => {
    e.preventDefault()

    const q1 = document.querySelector('[name="q1_alternative"]:checked')?.value ?? ''
    const q2 = document.querySelector('[name="q2_alternative"]:checked')?.value ?? ''
    const q3 = document.querySelector('[name="q3_alternative"]:checked')?.value ?? ''
    const q4 = document.querySelector('[name="q4_alternative"]:checked')?.value ?? ''

    const percentageOfHits = getNumberOfHitsPercent([q1, q2, q3, q4])
    showPercentageOfHits(percentageOfHits)
}

quizForm.addEventListener('submit', getQuizAnswers)