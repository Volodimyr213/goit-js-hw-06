
const ul = document.querySelector ("#categories");
const animals = ul.children.length;

console.log(`Number of categories:${animals}`)


const categorys = document.querySelectorAll(".item") 


categorys.forEach(elem=>{
    
   const categori = elem.firstElementChild.textContent
   const elements = elem.lastElementChild.children.length
   console.log(`Category:${categori}`)    
   console.log(`Elements:${elements}`)
})
