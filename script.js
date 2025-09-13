let file = document.querySelector("input")
let fileinp = document.querySelector("div")

fileinp.addEventListener("click", function(){
    file.click();
});

file.addEventListener("change", function(detls){
    let name = detls.target.files[0].name
    if (name){
    fileinp.textContent = name
    };
});

