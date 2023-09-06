$(".menue-bar > img ").on("click",function(){
    $(".menue").slideToggle();
})

$(".slideUp").on("click",function(){
    $(".menue").slideToggle();
})
function setText()
{
    let value =window.scrollY;
    document.getElementById("name").style.marginLeft = value*.20 +'px';
}
window.addEventListener("scroll",setText);


for(let i=0;i<document.querySelectorAll("absolute").length;i++)
{
    document.querySelectorAll("absolute")[i].style.left = '${i*100}%' ;
}

/*
const slides = document.querySelectorAll("absolute")
var counter =0;
slides.forEach(
    (slide,index)=> {
        slide.style.left = '${index*100}%'
        
    }
)
*/

