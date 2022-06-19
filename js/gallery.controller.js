var gFilteredBooksCount

var gImgs = [
    {
        id: 1,
        url: 'images/1.jpg',
        keywords: ['funny', 'baba']
    },
    {
        id: 2,
        url: 'images/2.jpg',
        keywords: ['love', 'dog']
    },
    {
        id: 3,
        url: 'images/3.jpg',
        keywords: ['dog', 'baby']
    },
    {
        id: 4,
        url: 'images/4.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 5,
        url: 'images/5.jpg',
        keywords: ['baby', 'beach']
    },
    {
        id: 6,
        url: 'images/6.jpg',
        keywords: ['crazy', 'funny']
    },
    {
        id: 7,
        url: 'images/7.jpg',
        keywords: ['baby', 'sweet']
    },
    {
        id: 8,
        url: 'images/8.jpg',
        keywords: ['comedy', 'hat']
    },
    {
        id: 9,
        url: 'images/9.jpg',
        keywords: ['laugh', 'baby']
    },
    {
        id: 10,
        url: 'images/10.jpg',
        keywords: ['house', 'glass']
    },
    {
        id: 11,
        url: 'images/11.jpg',
        keywords: ['love', 'fight']
    },
    {
        id: 12,
        url: 'images/12.jpg',
        keywords: ['glasses', 'sky']
    },
    {
        id: 13,
        url: 'images/13.jpg',
        keywords: ['laugh', 'baby']
    },
    {
        id: 14,
        url: 'images/14.jpg',
        keywords: ['glasses', 'baby']
    },
    {
        id: 15,
        url: 'images/15.jpg',
        keywords: ['ocean', 'road']
    },
    {
        id: 16,
        url: 'images/16.jpg',
        keywords: ['laugh', 'baby']
    },
    {
        id: 17,
        url: 'images/17.jpg',
        keywords: ['water', 'bike']
    },
    {
        id: 18,
        url: 'images/18.jpg',
        keywords: ['tow', 'cartoon']
    },
]

function renderGallery() {
    // const image = getImages()
    var image = JSON.parse(JSON.stringify(gImgs))
    image = filter(image)
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

