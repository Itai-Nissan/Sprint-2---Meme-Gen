
function renderMeme(imgId) {   
    var elImg = document.getElementById(imgId)
    gCtx.drawImage(elImg, 0, 10, 270, 275.5)
    
    
    var elSearch = document.querySelector('.search-gallery')
    elSearch.style.display = 'none'
    
    var elCanvas = document.querySelector('.canvas-container')
    elCanvas.style.display = 'block'

    var elSetTxt = document.querySelector('.canvas-text');
    elSetTxt.style.display = 'block'
    elSetTxt.style.right = '200px'
    elSetTxt.style.top = '100px'

    // setLineTxt()

}

// function handleEnter(e) {
//     var keyCode = e.keyCode;
//     if (keyCode === 13) {
//         drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
//         document.body.removeChild(this);
//         hasInput = false;
//     }
// }


function toggleEditor(isShow) {
    const elEditor = document.querySelector('.meme-editor')
    elEditor.style.display = isShow ? 'flex' : 'none'

    const elCanvas = document.querySelector('.my-canvas')
    elCanvas.style.display = isShow ? 'block' : 'none'
}

function toggleGallery(isShow) {
    const elGallery = document.querySelector('.image-gallery')
    elGallery.style.display = isShow ? 'grid' : 'none'
}

