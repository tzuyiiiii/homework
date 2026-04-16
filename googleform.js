const favcolor= document.querySelector("#favcolor")
const coloroption =favcolor.querySelectorAll("input")
const clr= document.querySelector("#clr")

coloroption.forEach(function(option){
  option.addEventListener("click",showhint)
})

function showhint(event){
  if(event.target.checked){
  clr.style.display = "block"  
 }else{
  clr.style.display = "" 
 }
}

clr.addEventListener("click",hidden)
function hidden(){
  clr.style.display = "none" 
}

coloroption.forEach(function(option){
  if(option.checked){
    option.checked = false
  }
})
