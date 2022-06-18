function getImgs() {
    return gImgs;
}

function getImgById(imgId) {
    return gImgs.find((img) => img.id === imgId);
}

function toggleGallery(isShow) {
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = isShow ? 'block' : 'none'

    // const elSearch = document.querySelector('.search-gallery')
    // elSearch.style.display = 'none'

}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

