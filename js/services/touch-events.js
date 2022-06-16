var gStartPos


function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
    })
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

function getEvPos(ev) {

    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

// function onDown(ev) {
//     //Get the ev pos from mouse or touch
//     const pos = getEvPos(ev)
//     if (!isCircleClicked(pos)) return
//     setCircleDrag(true)
//     //Save the pos we start from 
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'

// }

function onMove(ev) {
    // const circle = getCircle();
    // if (circle.isDrag) {
    const pos = getEvPos(ev)
    // console.log(ev);
    console.log(pos);

    //Calc the delta , the diff we moved
    // const dx = pos.x - gStartPos.x
    // const dy = pos.y - gStartPos.y
    // console.log(dx);
    // console.log(dy);
    // moveCircle(dx, dy)
    //Save the last pos , we remember where we`ve been and move accordingly
    // gStartPos = pos
    //The canvas is render again after every move
    // renderCanvas()
    // }
}

// function onUp() {
//     setCircleDrag(false)
//     document.body.style.cursor = 'grab'
// }

