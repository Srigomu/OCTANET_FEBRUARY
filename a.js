const addtocartbuttons = document.querySelectorAll(".codingbooks");
const emptytrolly = document.getElementById("blank-container");
const selectedimages = [];

addtocartbuttons.forEach((button)=>{
     button.addEventListener("click",()=>{
    const productitem = button.parentElement;
    const productimage = productitem.querySelector("img");

    if(selectedimages.some((img)=> img.src === productimage.src

    )){
        alert(`you have already selected this product!`)
    }
    const clonedimage = productimage.cloneNode();
    emptytrolly.appendChild(clonedimage);
    selectedimages.push(clonedimage);

    })

})

