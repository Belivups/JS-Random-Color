let generate, hex, randColor, headColor
headColor = document.getElementById('headColor')

generate = document.getElementById('btn')

hex = document.getElementById('getColor')

generate.addEventListener('click', colorSet)

function generateColor(){
    randColor = Math.floor(Math.random()*16777215).toString(16)
    return randColor
}

function colorSet(){
    generateColor()
    hex.innerHTML = `#${randColor}`
    // headColor.style.color = `#${randColor}`
    document.body.style.backgroundColor = `#${randColor}`
    document.title = `Color #${randColor}`
    
}