
function random() {
    return Math.floor(Math.random() * 255) + 1
}

document.querySelector('button').addEventListener('click', ()=>{
    let r = random()
    let g =random()
    let b = random()
    document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    document.querySelector('.example').textContent = `background-color: rgb(${r}, ${g}, ${b})`
})
