const root = document.documentElement;
const button = document.getElementById('test');



let colors = [
    ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"],
    ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#6d6875"],
    ["#22223b", "#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"],
    ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"],
    ["#6b9080", "#a4c3b2", "#cce3de", "#eaf4f4", "#f6fff8"],
]

let index = 0;

const nextCol = () => {
    for (let i = 0; i < colors[0].length; i++) {
        root.style.setProperty('--color' + [i + 1], colors[index][i])
    }
    index += 1;
    if(index === colors.length){
        index = 0
    }
}
 
button.addEventListener('click', nextCol)