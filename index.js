


let ancheorTages = document.querySelectorAll(".aTags");
// console.log(ancheorTages); // node lists

ancheorTages.forEach(function(atags){
    atags.addEventListener('click',function(){
        ancheorTages.forEach(function(e){
            e.classList.remove("red");
        })
        atags.classList.add("red");
    })
})
onsole.log(ele.classList);


