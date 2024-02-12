


const btDecrementHtml = document.querySelector(`button[data-action = "decrement"]`)
const spanHtml = document.querySelector("#value")
const btIncrementHtml = document.querySelector(`button[data-action="increment"]`)

let counterValue = 0

btDecrementHtml.addEventListener("click", evt => {
    counterValue -= 1
    spanHtml.textContent = counterValue
})

btIncrementHtml.addEventListener("click", evt => {
    counterValue += 1
    spanHtml.textContent = counterValue
})


console.log(spanHtml)

