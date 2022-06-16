function getImgs() {
    return gImgs;
}

function getImgById(imgId) {
    return gImgs.find((img) => img.id === imgId);
}

function toggleGallery(isShow) {
    const elGallery = document.querySelector('.image-gallery')
    elGallery.style.display = isShow ? 'grid' : 'none'

    const elSearch = document.querySelector('.search-gallery')
    elSearch.style.display = 'none'

}

