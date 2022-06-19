var gCurrImgId

var gMeme = {
    textOne: 'One does not simply write js',
    textTwo: 'May the force be with you',

    selectedImgId: 1,
    selectedLineId: 1,

    alignOne: 'center',
    alignTwo: 'center',

    colorOne: 'white',
    colorTwo: 'white',

    strokeOne: false,
    strokeTwo: false,

    fontSizeOne: 30,
    fontSizeTwo: 30,

    fontTypeOne: 'Impact',
    fontTypeTwo: 'Impact',
}

var gUserFontOne = '' + gMeme.fontSizeOne + 'px ' + gMeme.fontTypeOne + ''
var gUserFontTwo = '' + gMeme.fontSizeTwo + 'px ' + gMeme.fontTypeTwo + ''

function renderCanvas() {
    if (!gCtx) return
    clearCanvas()

    var elImg = document.getElementById(gMeme.selectedImgId)
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)


    gCtx.lineWidth = 2

    for (var i = 0; i < 2; i++) {
        if (i === 0) {
            gCtx.fillStyle = gMeme.colorOne
            gCtx.font = gUserFontOne
            gCtx.textAlign = gMeme.alignOne
            gCtx.fillText(gMeme.textOne, 300, 45)
            if (gMeme.strokeOne) gCtx.strokeText(gMeme.textOne, 300, 45)
        }
        else {
            gCtx.fillStyle = gMeme.colorTwo
            gCtx.font = gUserFontTwo
            gCtx.textAlign = gMeme.alignTwo
            gCtx.fillText(gMeme.textTwo, 300, 550)
            if (gMeme.strokeTwo) gCtx.strokeText(gMeme.textTwo, 300, 550)
        }
    }

}

function onChangeFont() {
    if (gMeme.selectedLineId === 1) {
        gMeme.fontTypeOne = document.querySelector('.font').value
        gUserFontOne = '' + gMeme.fontSizeOne + 'px ' + gMeme.fontTypeOne + ''
    }
    else {
        gMeme.fontTypeTwo = document.querySelector('.font').value
        gUserFontTwo = '' + gMeme.fontSizeTwo + 'px ' + gMeme.fontTypeTwo + ''
    }
    onSetLineTxt()
}

function onIcreaseFont() {
    if (gMeme.selectedLineId === 1) {
        gMeme.fontSizeOne++
        gUserFontOne = '' + gMeme.fontSizeOne + 'px ' + gMeme.fontTypeOne + ''
    }
    else {
        gMeme.fontSizeTwo++
        gUserFontTwo = '' + gMeme.fontSizeTwo + 'px ' + gMeme.fontTypeTwo + ''
    }
    onSetLineTxt()
}

function onDecreaseFont() {
    if (gMeme.selectedLineId === 1) {
        gMeme.fontSizeOne--
        gUserFontOne = '' + gMeme.fontSizeOne + 'px ' + gMeme.fontTypeOne + ''
    }
    else {
        gMeme.fontSizeTwo--
        gUserFontTwo = '' + gMeme.fontSizeTwo + 'px ' + gMeme.fontTypeTwo + ''
    }
    onSetLineTxt()
}

function onSetAlignLeft() {
    if (gMeme.selectedLineId === 1) {
        gMeme.alignOne = 'right'
    }
    else gMeme.alignTwo = 'right'
    onSetLineTxt()

}

function onSetAlignCenter() {
    if (gMeme.selectedLineId === 1) {
        gMeme.alignOne = 'center'
    }
    else gMeme.alignTwo = 'center'
    onSetLineTxt()
}

function onSetAlignRight() {
    if (gMeme.selectedLineId === 1) {
        gMeme.alignOne = 'left'
    }
    else gMeme.alignTwo = 'left'
    onSetLineTxt()

}

function onSetStroke() {
    if (gMeme.selectedLineId === 1) {
        if (gMeme.strokeOne === false) {
            gMeme.strokeOne = true
        }
        else gMeme.strokeOne = false
    }
    if (gMeme.selectedLineId === 2) {
        if (gMeme.strokeTwo === false) {
            gMeme.strokeTwo = true
        }
        else gMeme.strokeTwo = false
    }
    onSetLineTxt()
}

function onChangeColor() {
    userColor = document.getElementById('user-color').value
    if (gMeme.selectedLineId === 1) {
        gMeme.colorOne = userColor
    }
    else gMeme.colorTwo = userColor

    onSetLineTxt()
}

function onLineFocus() {
    console.log(gMeme.selectedLineId)
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
    var userText = getUserText()

    renderCanvas()
}

function onDeleteText() {
    if (gMeme.selectedLineId === 1) {
        gMeme.textOne = ''
    }
    else gMeme.textTwo = ''

    renderCanvas()
}

function onChangeColor() {
    userColor = document.getElementById('user-color').value
    if (gMeme.selectedLineId === 1) {
        gMeme.colorOne = userColor
    }
    else gMeme.colorTwo = userColor

    onSetLineTxt()
}
