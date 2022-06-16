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



