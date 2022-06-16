var gCurrImgId
// var gCurrLine = 1

var gFontSize = 30
var gUserFont = '' + gFontSize + 'px Arial' + ''
var gUserFont2 = "30px Arial";

var gUserColor

function renderMeme(imgId) {
    // gCurrImgId = imgId
    // var elImg = document.getElementById(imgId)
    // gCtx.drawImage(elImg, 0, 10, 270, 275.5)    
    
}

// function handleEnter(e) {
//     var keyCode = e.keyCode;
//     if (keyCode === 13) {
//         drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
//         document.body.removeChild(this);
//         hasInput = false;
//     }
// }

function onIcreaseFont(){
    console.log(gFontSize);
    // console.log(gUserFont);
    gFontSize += 4
    gUserFont = '' + gFontSize + 'px Arial' + ''    
}

function onDecreaseFont(){
    console.log(gFontSize);
    // console.log(gUserFont);
    gFontSize -= 4
    gUserFont = '' + gFontSize + 'px Arial' + ''    
}

function onLineFocus(){
    console.log(gMeme.selectedLineId)
    // gCurrLine = gMeme.selectedLineId
    if(gMeme.selectedLineId === 1){
        gMeme.selectedLineId = 2
        console.log(gMeme.selectedLineId);
        return
    }
    if(gMeme.selectedLineId === 2){
        gMeme.selectedLineId = 1
        console.log(gMeme.selectedLineId);
        return
    }
}

function onSetLineTxt() {
    const btn = document.querySelector('.set-line')

    btn.addEventListener('click', function handleClick(event) {
        // 👇️ if you are submitting a form (prevents page reload)
        event.preventDefault()

        const canvasText = document.querySelector('.canvas-text')

        // Send value to server
        console.log(canvasText.value)

        // 👇️ clear input field
        canvasText.value = ''
    })
    
    var userText = getUserText()
    
    renderCanvas()
    // renderMeme()
}

function onDeleteText(){
    // console.log(gCtx);
    // gCtx.fillText('', 100, 30)
    // gCtx.fillText('', 100, 280)
    // gCtx.fillText('', gCanvas.width, gCanvas.height)
    if(gMeme.selectedLineId === 1) gMeme.textOne = ' '
    if(gMeme.selectedLineId === 2) gMeme.textTwo = ' '
    renderCanvas()

}

var gLineOne
var gLineTwo

function createLines(pos) {
    gLineOne = {
        pos: (100, 30),
        text: gMeme.textOne,
        size: 60,
        color: 'blue',
        isDrag: false
    }
    gLineTwo = {
        pos: (100, 280),
        text: gMeme.textTwo,
        size: 60,
        color: 'blue',
        isDrag: false
    }
}
