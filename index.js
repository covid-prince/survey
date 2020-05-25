document.addEventListener('DOMContentLoaded', () => {
    let start = document.querySelector('#startButton');
    let formPage = document.querySelector('#surveyElement')
    let landingP = document.querySelector('.section')


    start.addEventListener('click', () => {
        landingP.classList.add('hidden');
        formPage.classList.remove('hidden');
        formPage.classList.remove('hidden');
    })

});