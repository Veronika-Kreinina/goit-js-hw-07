
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const gallery = document.querySelector('.gallery')
const fragment = document.createDocumentFragment()

images.forEach(image => {
  const itemsList = document.createElement('li')

  const img = document.createElement('img')
  img.src = image.url
  img.alt = image.alt
  img.width ='200'

  itemsList.append(img)
  fragment.append(itemsList)
})

gallery.append(fragment)
console.log(gallery);



// const listOfImg = images.map(image => {
//  const img = document.createElement('img') 
// img.src = image.url
// img.alt = image.alt

// })

// const boxImg = images.map(image => {
//   const boxEl = document.createElement('li')
//   boxEl.width = '100'
//   boxEl.height = '100'
//   boxEl.setAttribute('data-url', image.url)
//   boxEl.setAttribute('data-alt', image.alt)
//   // boxEl.url = images.url
//   // boxEl.alt = images.alt
//   return boxEl
// })
// console.log(boxImg);

// gallery.append(...boxImg)

// document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML()

// const itemsEl = document.querySelector('.gallery')
// const listEl = document.createElement('li')
// listEl.textContent = "img"
// listEl.classList.add('list-item')
// listEl.style.color= 'teal'

// const linkItemsEl = document.createElement('a')
// linkItemsEl.classList.add('img-item')

// listEl.append(linkItemsEl)
// console.log(listEl);


// const imageEl = document.createElement('img')
// imageEl.width = 100
// imageEl.alt = "Lighthouse Coast Sea"
// imageEl.src = "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg"
// console.log(imageEl);

// itemsEl.append(listEl,imageEl)