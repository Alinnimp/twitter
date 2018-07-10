var btn = document.getElementById("button");
btn.disabled = false;
btn.addEventListener("click", tweet);
// console.log("text");
areaText.addEventListener('input-area', expandBox);
function tweet() {
    var tweetBox = document.getElementById("input-area");
    var newTweet = document.createElement("p");
    newTweet.textContent = tweetBox.value;
    
    var inputText = document.getElementById("input-text");
    inputText.appendChild(newTweet);
    event.preventDefault();
    tweetBox.value = "";
    
// console.log("newTweet");
 } 
 function limiteText(value) {        
    var quant = 140;
    var total = value.length;
    if(total <= quant) {
        rest = quant - total;
        document.getElementById('cont').innerHTML = rest; 
    } 
    if (areaText.value === 0 || areaText.value === '') {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

function caracter (){
    cont.textContent = (140 - input-text.value.length);
    console.log(input-text.value.length);
    if (input-text.value.length === 0 || input-text.value === ' ') {
        btn.disabled = true;
    } else if (input-text.value.length > 140) {
        cont.classList = 'colorDef';
        cont.classList.add('colorUm');
        btn.disabled = true;
    } else if (input-text.value.length >= 110 && input-text.value.length < 120) {
        cont.classList = 'color-def';
        cont.classList.add('colorDois');
    } else if (input-text.value.length >= 120 && input-text.value.length <= 140) {
        cont.classList = 'color-def';
        cont.classList.add('colorTres');
        btn.disabled = false;
    } else {
        cont.classList = 'color-def';
        btn.disabled = false;
    }
}

// var date = new Date();
//        var content = document.createTextNode(areaText + " " + date.getHours()+":"+date.getMinutes());//adicionando hora//
//        var main = document.getElementById("boxOne")
//          container.appendChild(twitt);
//          twitt.appendChild(content);
//          twitt.classList.add ("twitt");
//          main.appendChild(twitt);
//          words.value = ' ';

function expandBox() {
    if (areaText.scrollHeight > areaText.offsetHeight) {
        areaText.rows += 1;
    }
}
