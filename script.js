document.querySelectorAll('nav ul li a').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection){
            window.scrollTo({
                top: targetSection.offsetTop - 60, 
                behaviour: "smooth"
            });
        }
    });
});

const menuToggle = document.createElement("div");
menuToggle.className = "menu-toggle";
menuToggle.innerHTML = "&#9776";
document.querySelector("nav").prepend(menuToggle);

menuToggle.addEventListener("click", function(){
    document.querySelector(".nav-links").classList.toggle("active");
});

const darkModelToggle = document.createElement("button");
darkModelToggle.innerText="Dark mode";
darkModelToggle.className = "dark-mode-btn";
document.body.prepend(darkModelToggle);

darkModelToggle.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
});