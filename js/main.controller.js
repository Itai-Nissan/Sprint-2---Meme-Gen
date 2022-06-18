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
    var gRateFontSize = 20
    var elRateBtn = document.querySelector('.' + ev.innerText + '')

    console.log(elRateBtn.style.fontSize)
    console.log(gRateFontSize)
    elRateBtn.style.fontSize += gRateFontSize + 3 + 'px'
    gRateFontSize = elRateBtn.style.fontSize
}

// function onSearchText(inputText) {
//     updateText(inputText, gCurrMeme.id)
//     renderCanvas()
// }

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



// function onSetFilterBy(filterBy) {
//     filterBy = setKeyFilter(filterBy)
//     renderCars()



//     const queryStringParams = `?vendor=${gImgs.keyWords}&minSpeed=${filterBy.minSpeed}`
//     const newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + queryStringParams
//     window.history.pushState({ path: newUrl }, '', newUrl)
// }

// function setKeyFilter(filterBy = {}) {
//     if (filterBy.vendor !== undefined) gFilterBy.vendor = filterBy.vendor
//     if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
//     return gFilterBy
// }

// function onSearchText(val) {
//     val = val.toUpperCase();
//     let galleryImages = document.getElementsByClassName('gallery-img');

//     Array.prototype.forEach.call(galleryImages, child => {
//         let id = child.id.toUpperCase()
//         if (!id.includes(val))
//             child.style.display = "none";
//         else {
//             child.style.display = "block";
//         }
//     });
// }

// var data = [
//     {email: "usera@gmail.com",nama:"User A", Level:"Super Admin"},
//     {email: "userb@gmail.com",nama:"User B", Level:"Super Admin"},
//     {email: "userc@gmail.com",nama:"User C", Level:"Standart"},
//     {email: "userd@gmail.com",nama:"User D", Level:"Standart"},
//     {email: "usere@gmail.com",nama:"User E", Level:"Admin"},
//     {email: "userf@gmail.com",nama:"User F", Level:"Standart"}
//   ];
  
//   function onSearchText(ev){
//     console.log(ev);
//     var filter = "keywords";
//     var keyword = "funny";
    
//     var filterByKeyWord = data.filter(function(obj) {
//         console.log(obj[filter] === keyword);
//         return obj[filter] === keyword;
//     });
    
//     console.log(filterByKeyWord);
  

//   }
  
  






