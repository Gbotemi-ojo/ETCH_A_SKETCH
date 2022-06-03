let contained = document.getElementById("defaultContainer")
let colorText = document.getElementById("text")
let dimension = document.getElementById("dimension")
function red(){
    colorText.textContent = "RED"
}
function yellow(){
    colorText.textContent = "YELLOW"
}
function green(){
    colorText.textContent = "GREEN"
}
function blue(){
    colorText.textContent = "BLUE"
}
function eraser(){
    colorText.textContent = "ERASER"
}
for (let j = 1 ; j<=256 ; j++){ 
    let defaultContent = document.createElement("div"[j])
    contained.appendChild(defaultContent)
    defaultContent.style.width = "25px" 
    defaultContent.style.height = "25px"
    defaultContent.addEventListener("mouseover", overthediv2)
    function overthediv2(){
        if(colorText.textContent === "BLUE"){
            defaultContent.style.background = "blue" 
        }
      else if(colorText.textContent === "RED"){
            defaultContent.style.background = "red" 
        }
        else if(colorText.textContent === "YELLOW"){
            defaultContent.style.background = "yellow" 
        }
        else if(colorText.textContent === "GREEN"){
            defaultContent.style.background = "green" 
        }
       else if(colorText.textContent === "ERASER"){
            defaultContent.style.background = "WHITE" 
        }
        else{
            defaultContent.style.background = "black" 
        }
    }
}
function edit(){
    contained.style.display = "none"
    let askDimension = Number(prompt("enter dimension"))
    let contain = document.getElementById("container")
    contain.style.display = "flex"
for (let i = 1 ; i<=askDimension * askDimension ; i++){
    let content = document.createElement("div"[i])
    content.classList.add("colors")
    contain.appendChild(content)
    content.style.width = `calc(400px / ${askDimension})` 
    content.style.height = `calc(400px / ${askDimension})`
    content.addEventListener("mouseover", overthediv)
    function overthediv(){
        if(colorText.textContent === "BLUE"){
            content.style.background = "blue" 
        }
      else if(colorText.textContent === "RED"){
            content.style.background = "red" 
        }
        else if(colorText.textContent === "YELLOW"){
            content.style.background = "yellow" 
        }
        else if(colorText.textContent === "GREEN"){
            content.style.background = "green" 
        }
       else if(colorText.textContent === "ERASER"){
            content.style.background = "WHITE" 
        }
        else{
            content.style.background = "black" 
        }
    }
}
}


