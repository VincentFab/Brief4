const home_flag_button: HTMLElement | null = document.getElementById('home_flag')
const home_display: HTMLElement | null = document.getElementById('home_page')
const quizz_display: HTMLElement | null = document.getElementById('quizz')
const good_answer: HTMLCollectionOf<Element> = document.getElementsByClassName('good_answer')
const wrong_answer: HTMLCollectionOf<Element> = document.getElementsByClassName('wrong_answer')

function handleUserClick() {
    if (home_display !== null && quizz_display !== null){
        home_display.classList.add('no_display')
        quizz_display.classList.remove('no_display')
    }
}

if (home_flag_button !== null) {
    home_flag_button.addEventListener('click', handleUserClick)
}