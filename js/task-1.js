const categoriesEl = document.querySelector('#categories')


const itemEl = categoriesEl.querySelectorAll('.item')
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
    const titleEl = item.querySelector('h2').textContent
    console.log(`Category: ${titleEl}`);

const numbersOfItem = item.querySelectorAll('li').length
console.log(`Elements ${numbersOfItem}`);
})


