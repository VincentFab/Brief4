// Zone d'annoncement des constante elle seront toute ici sauf si une execption m'oblige a en mettre autre part
//
const home_flag_button: HTMLElement | null = document.getElementById('home_flag')
const home_display: HTMLElement | null = document.getElementById('home_page')
//
const quizz1_display: HTMLElement | null = document.getElementById('quizz1')
const quizz2_display: HTMLElement | null = document.getElementById('quizz2')
const quizz3_display: HTMLElement | null = document.getElementById('quizz3')
//
const end_page: HTMLElement | null = document.getElementById('end_page')
const go_home_button: HTMLElement | null = document.getElementById('go_home')
//
const good_answer: Element | null = document.querySelector('.good_answer')
const wrong_answer: NodeListOf<Element> = document.querySelectorAll('.wrong_answer')
//
const good_answer2: Element | null = document.querySelector('.good_answer2')
const wrong_answer2: NodeListOf<Element> = document.querySelectorAll('.wrong_answer2')
//
const good_answer3: Element | null = document.querySelector('.good_answer3')
const wrong_answer3: NodeListOf<Element> = document.querySelectorAll('.wrong_answer3')
//
const good_answer_display: HTMLElement | null = document.getElementById('good_answer_page1')
const next_button_good: HTMLElement | null = document.getElementById('suivant_button_good1')
const wrong_answer_display: HTMLElement | null = document.getElementById('wrong_answer_page1')
const next_button_wrong: HTMLElement | null = document.getElementById('suivant_button_wrong1')
//
const good_answer_display_two: HTMLElement | null = document.getElementById('good_answer_page_two')
const next_button_good_two: HTMLElement | null = document.getElementById('suivant_button_good_two')
const wrong_answer_display_two: HTMLElement | null = document.getElementById('wrong_answer_page_two')
const next_button_wrong_two: HTMLElement | null = document.getElementById('suivant_button_wrong_two')
//
const good_answer_display_three: HTMLElement | null = document.getElementById('good_answer_page_three')
const next_button_good_three: HTMLElement | null = document.getElementById('suivant_button_good_three')
const wrong_answer_display_three: HTMLElement | null = document.getElementById('wrong_answer_page_three')
const next_button_wrong_three: HTMLElement | null = document.getElementById('suivant_button_wrong_three')
// score et page
const score_Element: HTMLCollectionOf<Element> = document.getElementsByClassName("score")
const end_score: HTMLElement | null = document.getElementById('end_score')
let score: number = 0 //variable qui compte les points
//
// fin des constante
//page d'accueil
for (let i = 0; i < score_Element.length; i++) {
    const scoreElement = score_Element[i]
    scoreElement.textContent = `Score: ${score}`
  }
function handle_user_click() {
    if (home_display !== null && quizz1_display !== null){
        home_display.classList.add('no_display')
        quizz1_display.classList.remove('no_display')
    }
}

if (home_flag_button !== null) {
    home_flag_button.addEventListener('click', handle_user_click)
}
//fin page
//page quizz 1
function handle_click_answer_good_quizz1() {
    if (quizz1_display !== null && good_answer_display !== null && good_answer_display_two !== null) {
        quizz1_display.classList.add('no_display')
        good_answer_display.classList.remove('no_display')
        good_answer_display_two.classList.add('no_display')
        score += 1;
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}
function handle_click_answer_wrong_quizz1() {
    if (quizz1_display !== null && wrong_answer_display !== null && wrong_answer_display_two !== null) {
        quizz1_display.classList.add('no_display')
        wrong_answer_display.classList.remove('no_display')
        wrong_answer_display_two.classList.add('no_display')
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}

if (good_answer !== null) {
    good_answer.addEventListener('click', handle_click_answer_good_quizz1)
}

for (let i = 0; i < wrong_answer.length; i++) {
    wrong_answer[i].addEventListener('click', handle_click_answer_wrong_quizz1)
}
//fin page
//page de réponse 1
function handle_user_next_for_good(): void {
    if (quizz2_display !== null && quizz1_display !== null && good_answer_display !== null && wrong_answer_display !== null){
        good_answer_display.classList.add('no_display')
        quizz2_display.classList.remove('no_display')
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}

if (next_button_good !== null) {
    next_button_good.addEventListener('click', handle_user_next_for_good)
}

function handle_user_next_for_wrong(): void {
    if (quizz2_display !== null && quizz1_display !== null && good_answer_display !== null && wrong_answer_display !== null){
        wrong_answer_display.classList.add('no_display')
        quizz2_display.classList.remove('no_display')
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}

if (next_button_wrong !== null) {
    next_button_wrong.addEventListener('click', handle_user_next_for_wrong)
}
//fin page
//page de quizz 2
function handle_click_answer_good_quizz2() {
    if (quizz2_display !== null && good_answer_display_two !== null) {
        quizz2_display.classList.add('no_display')
        good_answer_display_two.classList.remove('no_display')
        score += 1;
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}
function handle_click_answer_wrong_quizz2() {
    if (quizz2_display !== null && wrong_answer_display_two !== null) {
        quizz2_display.classList.add('no_display')
        wrong_answer_display_two.classList.remove('no_display')
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}

if (good_answer2 !== null) {
    good_answer2.addEventListener('click', handle_click_answer_good_quizz2)
}

for (let i = 0; i < wrong_answer2.length; i++) {
    wrong_answer2[i].addEventListener('click', handle_click_answer_wrong_quizz2)
}
//fin de page
//page de réponse 2
function handle_user_next_for_good2(): void {
    if (quizz3_display !== null && good_answer_display_two !== null && wrong_answer_display_two !== null){
        good_answer_display_two.classList.add('no_display')
        quizz3_display.classList.remove('no_display')
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}

if (next_button_good_two !== null) {
    next_button_good_two.addEventListener('click', handle_user_next_for_good2)
}

function handle_user_next_for_wrong2(): void {
    if (quizz3_display !== null && good_answer_display_two !== null && wrong_answer_display_two !== null){
        wrong_answer_display_two.classList.add('no_display')
        quizz3_display.classList.remove('no_display')
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}

if (next_button_wrong_two !== null) {
    next_button_wrong_two.addEventListener('click', handle_user_next_for_wrong2)
}
//fin page
//page de quizz 3
function handle_click_answer_good_quizz3() {
    if (quizz3_display !== null && good_answer_display_three !== null) {
        quizz3_display.classList.add('no_display')
        good_answer_display_three.classList.remove('no_display')
        score += 1;
        console.log(`Your score is ${score}`)
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}
function handle_click_answer_wrong_quizz3() {
    if (quizz3_display !== null && wrong_answer_display_three !== null) {
        quizz3_display.classList.add('no_display')
        wrong_answer_display_three.classList.remove('no_display')
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Score: ${score}`
      }
}

if (good_answer3 !== null) {
    good_answer3.addEventListener('click', handle_click_answer_good_quizz3)
}

for (let i = 0; i < wrong_answer3.length; i++) {
    wrong_answer3[i].addEventListener('click', handle_click_answer_wrong_quizz3)
}
//fin de page
//page de réponse 3
function handle_user_next_for_good3(): void {
    if (end_page !== null && good_answer_display_three !== null && wrong_answer_display_three !== null && end_score !== null){
        good_answer_display_three.classList.add('no_display')
        end_page.classList.remove('no_display')
        end_score.textContent = `Votre score est: ${score}/3`
    }
}

if (next_button_good_three !== null) {
    next_button_good_three.addEventListener('click', handle_user_next_for_good3)
}

function handle_user_next_for_wrong3(): void {
    if (end_page !== null && good_answer_display_three !== null && wrong_answer_display_three !== null && end_score !== null){
        wrong_answer_display_three.classList.add('no_display')
        end_page.classList.remove('no_display')
        end_score.textContent = `Votre score est: ${score}/3`
    }
}

if (next_button_wrong_three !== null) {
    next_button_wrong_three.addEventListener('click', handle_user_next_for_wrong3)
}
//fin de page
//page de fin
function handle_user_click_for_home() {
    if (home_display !== null && end_page !== null){
        end_page.classList.add('no_display')
        home_display.classList.remove('no_display')
        score = 0
        console.log(`Your score is ${score}`)
    }
    for (let i = 0; i < score_Element.length; i++) {
        const scoreElement = score_Element[i]
        scoreElement.textContent = `Votre score est: ${score}/3`
      }
}

if (go_home_button !== null) {
    go_home_button.addEventListener('click', handle_user_click_for_home)
}

//fin de page