const header = document.querySelector("#Header")
const navOpts= document.querySelectorAll(".opts")

header.addEventListener("mouseover", ()=>{
    
    header.style.fontStyle = "italic";
    header.style.color = "black";
    header.style.textShadow = "2px 2px 4px rgba(0,0,0,0.5)";
    header.style.transition = "all 1.5s ease";
    header.style.cursor = "pointer";
    header.style.background="white";
    header.addEventListener("mouseout",()=>{
    header.style.fontStyle = "normal";
    header.style.color = "white";
    header.style.textShadow = "none";
    header.style.background="black";
})})
  navOpts.forEach((navOpt) => {   
    navOpt.addEventListener("mouseover", ()=>{
        navOpt.style.background="black";
        navOpt.style.color="white";
        navOpt.style.padding="1rem";
        navOpt.style.transition = "all 1.5s ease";
        navOpt.addEventListener("mouseout",()=>{
        navOpt.style.background="white";
        navOpt.style.color="black";
        navOpt.style.padding="0";
    })})
  })