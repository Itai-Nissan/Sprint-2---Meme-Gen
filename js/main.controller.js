var gCanvas
var gCtx
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gIsDrag = false
var gToggle = false
var gStickerPage = 1
var gIsClickedOff = false

var elInput
var elSearchInput

function init() {
    toggleEditor(false);
    toggleGallery(true);

    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    // elInput = document.querySelector('.insert-text')
    // elSearchInput = document.querySelector('.insert-search')
    renderGallery()

    // addListeners()
    // renderCanvas()



    // addMouseListeners()
    // addTouchListeners()
}

function onImgSelect(imgId) {
    toggleEditor(true)
    toggleGallery(false)
    setImg(imgId)
    // renderMeme(imgId)
    renderCanvas(imgId)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function onRateKeywords(ev) {
    console.log(ev)
    var elRateBtn = document.querySelector('button')
    console.log(elRateBtn)
    console.log(elRateBtn.style.fontSize)
    elRateBtn.style.fontSize += gFontSize + 6 + 'px'
}

function onSearchText(inputText) {
    updateText(inputText, gCurrMeme.id)
    renderCanvas()
}

function updateText(inputText, memeId) {
    let meme = getMemeById(memeId)
    if (!meme.lines.length) return
    getSelectedLine(meme).txt = inputText
}

function getSelectedLine(meme) {
    return meme.lines[meme.selectedLineIdx]
}

function getMemeById(memeId) {
    return gMemes.find((meme) => meme.id === memeId)
}






