const add = document.getElementsByClassName("add")
const show = document.getElementsByClassName("show")
var title = document.getElementById("title")
const list = document.getElementById("List")
const ol = document.querySelector("ol")
var close = document.getElementById("close")
function Add_data() {
    if (title.value.trim() === "") {
        alert("Task Can't be Empty!!")
        return
    }
    const newtask = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = "task_checkbox"
    const label = document.createElement("label")
    label.htmlFor = "task_checkbox"
    label.innerHTML = title.value
    
    
    newtask.appendChild(label)
    newtask.appendChild(checkbox)
    ol.append(newtask)
    checkbox.addEventListener("change",()=>{
        if (checkbox.checked) {
            newtask.style.textDecoration = "Line-through"
            setTimeout(() => {
                newtask.remove()
                }, 500);
        }
    })
    
    title.value = ""
}
function show_data() {
    list.style.display = "block"
    list.style.backgroundColor = "hsla(0, 31.40%, 93.10%, 0.91)"
}
close.addEventListener("click",()=>{
    list.style.display = "none"
})