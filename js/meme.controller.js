var gCurrImgId
var gUserColor
// var gCurrLine = 1

var gFontSize = 30
var gUserFont = '' + gFontSize + 'px Impact' + ''
var gUserFont2 = "30px Impcat";


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

function onIcreaseFont() {
    console.log(gFontSize);
    // console.log(gUserFont);
    gFontSize += 4
    gUserFont = '' + gFontSize + 'px Impact' + ''
}

function onDecreaseFont() {
    console.log(gFontSize);
    // console.log(gUserFont);
    gFontSize -= 4
    gUserFont = '' + gFontSize + 'px Impact' + ''
}

function onLineFocus() {
    console.log(gMeme.selectedLineId)
    // gCurrLine = gMeme.selectedLineId
    if (gMeme.selectedLineId === 1) {
        gMeme.selectedLineId = 2
        console.log(gMeme.selectedLineId);
        return
    }
    if (gMeme.selectedLineId === 2) {
        gMeme.selectedLineId = 1
        console.log(gMeme.selectedLineId);
        return
    }
    renderCanvas()
}

function onSetLineTxt() {
    const btn = document.querySelector('.set-line')

    // btn.addEventListener('click', function handleClick(event) {
    //     // 👇️ if you are submitting a form (prevents page reload)
    //     event.preventDefault()

    //     const canvasText = document.querySelector('.canvas-text')

    //     // Send value to server
    //     console.log(canvasText.value)

    //     // 👇️ clear input field
    //     canvasText.value = ''
    // })

    var userText = getUserText()

    renderCanvas()
    // renderMeme()
}

function onDeleteText() {
    if (gMeme.selectedLineId === 1) gMeme.textOne = ''
    if (gMeme.selectedLineId === 2) gMeme.textTwo = ''
    renderCanvas()
}

// var gLineOne
// var gLineTwo

// var lineOnePos = (300 - (gMeme.textOne.length * 10), 45)
// var lineTwoPos = (300 - (gMeme.textTwo.length * 10), 550)

// // function createLines(pos) {
//     gLineOne = {
//         pos: lineOnePos,
//         text: gMeme.textOne,
//         size: 60,
//         color: 'blue',
//         isDrag: false
//     }
//     gLineTwo = {
//         pos: lineTwoPos,
//         text: gMeme.textTwo,
//         size: 60,
//         color: 'blue',
//         isDrag: false
//     }
// // }
