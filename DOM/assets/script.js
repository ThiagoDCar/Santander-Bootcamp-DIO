function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

}

function changeText(){
    if(body.classList.contains('dark-mode')){
        button.innerHTML = 'light-mode';
        h1.innerHTML = 'dark-mode ON';
        return;
    }
    button.innerHTML = 'Dark mode';
    h1.innerHTML = 'light-mode ON';
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
button.addEventListener('click', changeMode);