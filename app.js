var btn = document.getElementById("button");
btn.disabled = false;
btn.addEventListener("click", tweet);
console.log("text");
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
 
