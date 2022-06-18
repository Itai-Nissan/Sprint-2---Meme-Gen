var gFilteredBooksCount

var gImgs = [
    {
        id: 1,
        url: 'images/1.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 2,
        url: 'images/2.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 3,
        url: 'images/3.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 4,
        url: 'images/4.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 5,
        url: 'images/5.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 6,
        url: 'images/6.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 7,
        url: 'images/7.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 8,
        url: 'images/8.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 9,
        url: 'images/9.jpg',
        keywords: ['funny', 'cat']
    },
]

function renderGallery() {
    const image = gImgs
    const strHTML = image.map((image) => {
        return `
        <div>
        <img id='${image.id}' class="gallery-img" src="${image.url}" onclick="onImgSelect('${image.id}')">
        </div>
        
        `
    }
    )
    const elGallery = document.querySelector('.grid-gallery');
    elGallery.innerHTML = strHTML.join('');
}
