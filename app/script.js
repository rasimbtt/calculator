const input = document.querySelector("input")
const numbers = document.querySelectorAll(".num")


numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
        value = e.target.textContent;
        if (value == "=") {
            input.value = eval(input.value)
        } else if (value == "C") {
           input.value = ""
        }else if (value == "←"){
            input.value = input.value.slice(0,-1)
        }else {
            input.value += value;
        }
        


    })
})
