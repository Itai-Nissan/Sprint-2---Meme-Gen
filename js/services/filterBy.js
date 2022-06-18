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


// var data = [
//     {email: "usera@gmail.com",nama:"User A", Level:"Super Admin"},
//     {email: "userb@gmail.com",nama:"User B", Level:"Super Admin"},
//     {email: "userc@gmail.com",nama:"User C", Level:"Standart"},
//     {email: "userd@gmail.com",nama:"User D", Level:"Standart"},
//     {email: "usere@gmail.com",nama:"User E", Level:"Admin"},
//     {email: "userf@gmail.com",nama:"User F", Level:"Standart"}
//   ];
  
//   function onSetFilterBy(ev){
//     console.log(ev);
//     var filter = "keywords";
//     var keyword = "funny";
    
//     var filterByKeyWord = data.filter(function(obj) {
//         console.log(obj[filter] === keyword);
//         return obj[filter] === keyword;
//     });
    
//     console.log(filterByKeyWord);
  

//   }

// function onSetFilterBy(filterBy) {
//     console.log(filterBy);
//     filterBy = setImgFilter(filterBy)
//     renderGallery()
//     // renderBooksNames()
//     // doTrans()
  
  
//     // const queryStringParams = `?name=${filterBy.name}`
//     // const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
//     // window.history.pushState({ path: newUrl }, '', newUrl)
// }

// function setImgFilter(filterBy = {}) {
//     if (filterBy.keywords !== undefined) gFilterBy.keywords = filterBy.keywords
//     return gFilterBy
// }

// var gFilterBy = { keywords: ''}

// function getImages() {
//     var images = gImgs.filter(image => image.includes(gFilterBy.id))

//     const startIdx = gPageIdx * PAGE_SIZE
//     images = images.slice(startIdx, startIdx + PAGE_SIZE)
//     return images
// }


  