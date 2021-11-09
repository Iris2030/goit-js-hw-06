function getRandomHexColor() {
  span.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   
const currentColor = document.body.style.backgroundColor
  document.body.style.backgroundColor = currentColor
  const currentText =  document.body.style.backgroundColor
  span.textContent = currentText
}

const btn = document.querySelector('.change-color')
const span = document.querySelector('.color')

btn.addEventListener('click', getRandomHexColor)
