
const titleEl = document.querySelectorAll('.item  h2')


const liEl = document.querySelectorAll('.item')


console.log(`Number of categories: ${liEl.length}`);

 
 

liEl.forEach(el => {
      console.log(`Category: ${el.querySelector('h2').textContent}
      Elements: ${el.querySelectorAll("ul li" ).length}  `); 
})
 
 