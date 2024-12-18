const root = document.documentElement;

const homePage = document.getElementById("home-page");
const habitPage = document.getElementById("habit-page");
const todoPage = document.getElementById("todo-page");

const button = document.getElementById("colorChange");
const body = document.body;
const textArea = document.getElementById("textarea");
const newHabitBtn = document.getElementById("new-habit-btn");
const clostHabitScreen = document.getElementById("close-habit-btn")
const newHabitScreen = document.getElementById("new-habit-screen")

let index = 0;
//sidebar functionality

let colors = [
    ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"],
    ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#6d6875"],
    ["#22223b", "#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"],
    ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"],
    ["#6b9080", "#a4c3b2", "#cce3de", "#eaf4f4", "#f6fff8"],
]
const nextCol = () => {
    index += 1;
    if(index === colors.length){
        index = 0
    }
    for (let i = 0; i < colors[0].length; i++) {
        root.style.setProperty("--color" + [i + 1], colors[index][i])
    }
}

button.addEventListener("click", nextCol)


if(todoPage){ //check page todo
    textArea.addEventListener("input", () => {
        localStorage.setItem("todo", JSON.stringify(textArea.value))
    })
    const savedTodo = JSON.parse(localStorage.getItem("todo"))
    textArea.value = savedTodo;
}

if(habitPage){ //check page habit

newHabitBtn.addEventListener("click", () => {
    newHabitScreen.classList.add("open");
})

clostHabitScreen.addEventListener("click", () => {
    newHabitScreen.classList.remove("open");
})

}