 
const ulMainEl = document.querySelectorAll('#categories .item')
 
console.log(`Number of categories: ${ulMainEl.length}`);



const titleEl = document.querySelectorAll('.item  h2')
 
 
const liEl = document.querySelectorAll('.item')

  

const makeMessage = function(param1, param2)   {
  
      return `Category: ${param1}
Elements: ${param2}`
  
}
 
console.log(makeMessage(titleEl[0].textContent, liEl[0].lastElementChild.children.length));
console.log(makeMessage(titleEl[1].textContent, liEl[1].lastElementChild.children.length));
console.log(makeMessage(titleEl[2].textContent, liEl[2].lastElementChild.children.length));
 
