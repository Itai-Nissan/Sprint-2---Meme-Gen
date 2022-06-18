var gMeme = {
    textOne: 'One does not simply write js',
    textTwo: 'May the force be with you',
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
    gMeme.selectedImgId = imgId
}

function toggleEditor(isShow) {

    const elEditor = document.querySelector('.meme-page')
    elEditor.style.display = isShow ? 'flex' : 'none'

    const elCanvas = document.querySelector('.my-canvas')
    elCanvas.style.display = isShow ? 'block' : 'none'

    var elCanvasContainer = document.querySelector('.canvas-container')
    elCanvasContainer.style.display = 'block'

    var elSetTxt = document.querySelector('.canvas-text');
    elSetTxt.style.display = 'block'
}

function getUserText() {
    var elSetTxt = document.querySelector('.canvas-text');
    console.log(elSetTxt.value);

    if(!elSetTxt.value)return

    if (gMeme.selectedLineId === 1) {
        gMeme.textOne = elSetTxt.value
        // console.log(gMeme.textOne);
    }
    if (gMeme.selectedLineId === 2) {
        gMeme.textTwo = elSetTxt.value
        // console.log(gMeme.textTwo);
    }
    console.log(gMeme);
    return gMeme
}

