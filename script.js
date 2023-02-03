const input = document.querySelector(".search")
const liItem = document.querySelectorAll("li")


const serchEngine = (e) => {
    const text = e.target.value.toLowerCase();
    console.log(text)

liItem.forEach(el => {
    const task = el.textContent;
    if  (task.toLocaleLowerCase().indexOf(text) !== -1){
        el.style.display = "block"}
else {
    el.style.display = "none"
}

    
})
}
input.addEventListener("keyup", serchEngine)

