
// const controls = document.querySelector('#controls')
// const btnCreate = document.querySelector('button')
// const btnDestroy = controls.lastElementChild
// const input = controls.firstElementChild
// const boxes = document.querySelector("#boxes")

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// btnCreate.addEventListener("click", onButtonCreateClick)
// btnDestroy.addEventListener("click", onButtonDestroyClick)
// input.addEventListener('submit', onImputSubmit)

// function onImputSubmit(event) {

//   console.log( event.currentTarget.value);
// }


// let amount = 0;

// console.log(input.value);

// function onButtonCreateClick() {
//   amount += input.value
//   createBoxes(amount)


// }

// function onButtonDestroyClick() {
//   boxes.innerHTML = ""
// }


// function createBoxes(amount) {
//   const basicBoxSize = 30;
//   const box = document.createElement('div');
//   let boxesToInsert = document.createDocumentFragment()
//   for (let i = 0; i < amount; i += 1){
//     let size = basicBoxSize + i * 10
//     box.style = `width: ${size}px; heigh : ${size}px; background-color: rgba ${getRandomHexColor()}`
//   }
//     boxesToInsert.appendChild(box)
//     boxes.appendChild(boxesToInsert)

// }

