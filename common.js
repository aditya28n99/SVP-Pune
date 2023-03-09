
// For Fade Effect
// let fadeEffect = document.getElementsByClassName('fade-effect');
// fadeEffect.classList.add("fade-In");

let fades = document.querySelectorAll('.fade-effect');
fades.forEach((e) =>{
    e.classList.add("fade-In");
});

// For scroll animation Effect
const observer = new IntersectionObserver((all_entries) =>{

    all_entries.forEach((each_entry) =>{
        // console.log(each_entry);
        if(each_entry.intersectionRatio > 0){
            each_entry.target.classList.add("show");
         } 
        //  else{
        //     each_entry.target.classList.remove("show"); 
        // }
    })
});
const animate = document.querySelectorAll(".animate")
animate.forEach((el)=> observer.observe(el));

// For top button

let topUp = document.getElementById("topup");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 400){
        topUp.classList.remove("fadedIn");
    }else{
        topUp.classList.add("fadedIn");
        
    }
});

// mobile sidebar

let sidebutton = document.getElementById("sidebutton");
let sidebars = document.getElementById("smn");
sidebutton.addEventListener("click", () =>{
    sidebars.classList.toggle("showSidebar");
})

// Images corousal