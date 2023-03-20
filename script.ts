// Zone d'annoncement des constante elle seront toute ici sauf si une execption m'oblige a en mettre autre part
const home_flag_button: HTMLElement | null = document.getElementById('home_flag')
const home_display: HTMLElement | null = document.getElementById('home_page')
const quizz_display: HTMLElement | null = document.getElementById('quizz')
const good_answer: Element | null = document.querySelector('.good_answer')
const wrong_answer: NodeListOf<Element> = document.querySelectorAll('.wrong_answer')
const good_answer_display: HTMLElement | null = document.getElementById('good_answer_page')
const next_button_good: HTMLElement | null = document.getElementById('suivant_button_good')
const wrong_answer_display: HTMLElement | null = document.getElementById('wrong_answer_page')
const next_button_wrong: HTMLElement | null = document.getElementById('suivant_button_wrong')
// fin des constante

function handle_user_click(): void {
    if (home_display !== null && quizz_display !== null){
        home_display.classList.add('no_display')
        quizz_display.classList.remove('no_display')
    }
}

if (home_flag_button !== null) {
    home_flag_button.addEventListener('click', handle_user_click)
}

function handle_click_answer_good() {
    if (quizz_display !== null && good_answer_display !== null) {
        quizz_display.classList.add('no_display')
        good_answer_display.classList.remove('no_display')
    }
}
function handle_click_answer_wrong() {
    if (quizz_display !== null && wrong_answer_display !== null) {
        quizz_display.classList.add('no_display')
        wrong_answer_display.classList.remove('no_display')
    }
}

if (good_answer !== null) {
    good_answer.addEventListener('click', handle_click_answer_good)
}

for (let i = 0; i < wrong_answer.length; i++) {
    wrong_answer[i].addEventListener('click', handle_click_answer_wrong)
}

function handle_user_next_for_good(): void {
    if (home_display !== null && quizz_display !== null && good_answer_display !== null && wrong_answer_display !== null){
        good_answer_display.classList.add('no_display')
        home_display.classList.remove('no_display')
    }
}

if (next_button_good !== null) {
    next_button_good.addEventListener('click', handle_user_next_for_good)
}

function handle_user_next_for_wrong(): void {
    if (home_display !== null && quizz_display !== null && good_answer_display !== null && wrong_answer_display !== null){
        wrong_answer_display.classList.add('no_display')
        home_display.classList.remove('no_display')
    }
}

if (next_button_wrong !== null) {
    next_button_wrong.addEventListener('click', handle_user_next_for_wrong)
}