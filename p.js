const selectallbuttons = document.querySelectorAll(".codingbooks");
const mycart = document.querySelector("#blank-container");  
const selectedimg = [];

selectallbuttons.forEach(function(el){
    el.addEventListener("click",function(){
        const selectitem = el.parentElement;
        const productimage = selectitem.querySelector("img");
        if(selectedimg.some(function(img){
           return img.src === productimage.src;
            
            
        })){
            alert("you have allready selected this project!")
        }
       
        

        const clonedimage = productimage.cloneNode();
        mycart.appendChild(clonedimage);
        selectedimg.push(clonedimage);
    })

})