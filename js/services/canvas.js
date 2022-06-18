function clearCanvas() {
  if (gCtx) return
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function onClearCanvas() {
  clearCanvas()
}

function getRect() {

}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}



function renderCanvas() {
  if (!gCtx) return
  clearCanvas()

  var elImg = document.getElementById(gMeme.selectedImgId)
  gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)

  gUserColor = document.getElementById('user-color').value
  gCtx.fillStyle = gUserColor

  gCtx.font = gUserFont


  gCtx.fillText(gMeme.textOne, 300 - (gMeme.textOne.length * 10), 45)
  gCtx.fillText(gMeme.textTwo, 300 - (gMeme.textTwo.length * 10), 550)

}



