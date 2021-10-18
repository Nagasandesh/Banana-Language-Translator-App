// var person=prompt("Enter your name",'');
// if(person!=null){
//     document.getElementById('output').innerHTML="Hi " + person + " how you doing!!";
// }

// document.getElementById("button").addEventListener("click",function() {
//     alert('Clicked');
// })

var translateInput=document.querySelector("#input");
var translateButton=document.querySelector("#button");
var translateOutput=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/minion.json";


function buttonClickHandler() {
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
};

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}

translateButton.addEventListener("click",buttonClickHandler)