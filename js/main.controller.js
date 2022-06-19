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
    renderGallery()
}

function onImgSelect(imgId) {
    toggleEditor(true)
    toggleGallery(false)
    setImg(imgId)
    renderCanvas(imgId)
    
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function onRateKeywords(ev) {
    var gRateFontSize = 20
    var elRateBtn = document.querySelector('.' + ev.innerText + '')

    console.log(elRateBtn.style.fontSize)
    console.log(gRateFontSize)
    elRateBtn.style.fontSize += gRateFontSize + 3 + 'px'
    gRateFontSize = elRateBtn.style.fontSize
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




  






