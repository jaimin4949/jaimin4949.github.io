const loadingPage = document.getElementsByClassName('loading')[0];

window.addEventListener('load', () => {
    loadingPage.style.animation = 'loadingFade 0.5s ease-in 1 forwards';
});
