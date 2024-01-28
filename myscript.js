let navicon=document.getElementById("navicon");
let navbar=document.getElementById("navbar");
function toggleList(){
    if(!navbar.classList.contains("bg-body-tertiary")){

    navbar.classList.add("bg-body-tertiary");
    }
    else {
        navbar.classList.remove("bg-body-tertiary");
    }

}