const counterValue = document.querySelector('#value')
const counterEl = document.querySelector('#counter')

const btnDecrement =  counterEl.firstElementChild
const btnIncrement = counterEl.lastElementChild


const counter = {
    value: 0, 
    increment() {
        this.value += 1
    },

     decrement() {
        this.value -= 1
    },
}

btnIncrement.addEventListener("click", function () {
    
    counter.increment()
 
    counterValue.textContent = counter.value
})


btnDecrement.addEventListener("click", function () {
       counter.decrement()
 
    counterValue.textContent = counter.value
})
 