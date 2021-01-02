var btnTranslate = document.querySelector("#btn-translate");  
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
const url = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text){
    return url + "?" + "text=" + text;
}
console.log(txtInput);

function errorHandler(error){
    console.log("error" + error);
}

function clickHandler(){
    // outputDiv.innerText = "asasas" + txtInput.value;
    var inputText = txtInput.value;

    fetch(getTranslatedUrl(inputText))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler); 
}

btnTranslate.addEventListener("click",clickHandler);

 