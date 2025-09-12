let file = document.querySelector("input")
let fileinp = document.querySelector("div")

fileinp.addEventListener("click", function(){
    file.click();
})

fileinp.addEventListener("change", function(detls){
    console.log(detls)
})