var gMeme = {
    // text: '',
    textOne: '',
    textTwo: '',
    selectedImgId: 1,
    selectedLineId: 1
}

var lines = [
    {
        textUp: 'Wanna bet?',
        textDown: 'Yep'
    }
]

function getMemes() {
    return gMeme;
}

function setImg(imgId) {
    // var elImg = document.getElementById(imgId)
    // gCtx.drawImage(elImg, 15, 10, 270, 275.5)
    gCurrImgId = imgId
}

function toggleEditor(isShow) {
    const elEditor = document.querySelector('.meme-editor')
    elEditor.style.display = isShow ? 'flex' : 'none'

    const elCanvas = document.querySelector('.my-canvas')
    elCanvas.style.display = isShow ? 'block' : 'none'

    var elCanvasContainer = document.querySelector('.canvas-container')
    elCanvasContainer.style.display = 'block'

    var elSetTxt = document.querySelector('.canvas-text');
    elSetTxt.style.display = 'block'
    elSetTxt.style.right = '200px'
    elSetTxt.style.top = '100px'


}

function getUserText() {
    // var elSetTxt = document.querySelector('.canvas-text');
    // // console.log(elSetTxt.value);
    // gMeme.text = elSetTxt.value
    // return gMeme

    var elSetTxt = document.querySelector('.canvas-text');
    console.log(elSetTxt.value);
    // if(!elSetTxt.value)return
    // console.log('hello');

    if (elSetTxt.value && gMeme.selectedLineId === 1) {
        gMeme.textOne = elSetTxt.value
        // console.log(gMeme.textOne);
    }
    if (elSetTxt.value && gMeme.selectedLineId === 2) {
        gMeme.textTwo = elSetTxt.value
        // console.log(gMeme.textTwo);
    }

    // if (!elSetTxt.value && !gMeme.selectedLineId === 1) return gMeme
    // else gMeme.textOne = elSetTxt.value
    // if (!elSetTxt.value && !gMeme.selectedLineId === 2) return gMeme
    // else gMeme.textTwo = elSetTxt.value

    return gMeme
}

function renderCanvas() {
    if (!gCtx) return
    clearCanvas()

    // var elImg = document.getElementById(imgId)
    // gCtx.drawImage(elImg, 15, 10, 270, 275.5)


    var elImg = document.getElementById(gCurrImgId)
    gCtx.drawImage(elImg, 15, 10, 270, 275.5)

    gUserColor = document.getElementById('user-color').value
    gCtx.fillStyle = gUserColor

    gCtx.font = gUserFont
    // if(!gMeme.textOne) return
    // console.log(gMeme.selectedLineId);
    if (gMeme.selectedLineId === 1) {
        gCtx.fillText(gMeme.textOne, 100, 30)
    }
    if (gMeme.selectedLineId === 2) {
        gCtx.fillText(gMeme.textTwo, 100, 280)
    }
}

// var elSetTxt1 = document.querySelector('.canvas-text .lin1-1');
// var elSetTxt2 = document.querySelector('.canvas-text .lin1-2');
// console.log(elSetTxt1.value)
// gMeme.textUp = elSetTxt1.value
// gMeme.textDown = elSetTxt2.value
// console.log(gMeme.textUp);
// if(gCurrLine === 1) return gMeme.textUp
// if(gCurrLine === 2) return gMeme.textDown

