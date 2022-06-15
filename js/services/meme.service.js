var gMeme = 
    {
        text:'Wanna bet?'
    }


function getMemes() {
    return gMeme;
}

function onSetLineTxt(){
    var userText = getUserText()
    console.log(userText);
    console.log(gMeme.text);
    // var currText = elSetTxt.innerText
    // console.log(currText);

    // const elSetTxt = document.querySelector('.canvas-container input')
    // console.log(elSetTxt.innerText);

    if (!gCtx) return
    gCtx.clearRect(300, 0, gCanvas.width, 50);

    gCtx.fillText(gMeme.text, gCanvas.width - 150, 30);

    renderMeme()

}

function getUserText(){
    var elSetTxt = document.querySelector('.canvas-text');
    // console.log(elSetTxt.value);
    gMeme.text = elSetTxt.value
    // console.log(gMeme.text);
    return gMeme.text
}



// document.querySelector('form.pure-form').addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();

//     console.log(nameInput.value);    
// });
