var btn = document.getElementById('button');
var textoArea = document.getElementById('input-area');
var charCont = document.getElementById('cont');
charCont.textContent = 140;
btn.disabled = true;

function colorsCaracteres() {
    charCont.textContent = (140 - textoArea.value.length);
    console.log(textoArea.value.length);
    if (textoArea.value.length === 0 || textoArea.value === ' ') {
        btn.disabled = true;
    } else if (textoArea.value.length < 20) {
        charCont.classList.add('color-def');
        charCont.classList.add('colorUm');
        btn.disabled = true;
    } else if (textoArea.value.length >= 110 && textoArea.value.length < 120) {
        charCont.classList.add('color-def');
        charCont.classList.add('colorDois');
    } else if (textoArea.value.length >= 120 && textoArea.value.length <= 140) {
        charCont.classList.add('color-def');
        charCont.classList.add('colorTres');
        btn.disabled = false;
    } else {
        charCont.classList = 'color-def';
        btn.disabled = false;
    }
}

function boxTextSize() {
    textoArea = event.currentTarget;
    textoArea.style.height = 'auto';
    textoArea.style.height = textoArea.scrollHeight + 'px';
}


function userPostText() {
    event.preventDefault();
    if (textoArea.value) {
        var postTextOutput = document.getElementById('input-text');
        var newUserPost = document.createElement('li');
        newUserPost.textContent = textoArea.value;
        var dateOfPost = document.createElement('span');
        var currentTime = new Date();
        dateOfPost.textContent = 'Hora: ' + currentTime.getHours() + '\:' + currentTime.getMinutes();
        newUserPost.appendChild(dateOfPost);
        postTextOutput.appendChild(newUserPost);
        console.log(userText.length);
    }    
}

textoArea.addEventListener('keydown', boxTextSize);
textoArea.addEventListener('keyup', colorsCaracteres);
btn.addEventListener("click", userPostText);
