var savedMemes = loadAllFromLocalStorage()

function loadFromLocalStorage(id){
    return loadAllFromLocalStorage().find((meme)=>{
        return meme.memeId === id
    })

}

function loadAllFromLocalStorage(){
    if(!localStorage.savedMemes) return [];
    return JSON.parse(localStorage.savedMemes)
}

function saveToLocalStorage(){

    var imgContent = gCanvas.toDataURL('image/jpeg')
    gMeme.url = imgContent
    gMeme.selectedLineIdx = 0;
    
    if(!localStorage.savedMemes){
        localStorage.setItem('savedMemes',JSON.stringify([gMeme]))
    }else{
        localStorage.savedMemes = JSON.stringify([...JSON.parse(localStorage.savedMemes), gMeme])
    }
    console.log('Saved meme to local storage');
    console.log(JSON.parse(localStorage.savedMemes))

    savedMemes()
}
