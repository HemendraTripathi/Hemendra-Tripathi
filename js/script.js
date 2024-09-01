onload = () => {
    document.getElementsByClassName("pre-loader")[0].classList.add("fadeOut");
    document.querySelector(".pre-loader span").classList.add("fadeOutText");
    document.querySelector(".pre-loader h1").classList.add("fadeOutText");
    setInterval(() => {
        document.getElementsByTagName("header")[0].classList.add("fadeIn");
        document.getElementsByTagName("main")[0].classList.add("fadeIn");   
    },3000);
}

window.onscroll = () => {
    if(scrollY > 125){
        document.getElementsByClassName("top-button")[0].classList.add("show");
        document.getElementsByClassName("top-button")[0].classList.remove("disappear");
    }
    else{
        document.getElementsByClassName("top-button")[0].classList.remove("show");
        document.getElementsByClassName("top-button")[0].classList.add("disappear");
    }

    var current  = "";
    const sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        if(pageYOffset >= sectionTop - 120){
            current = sections[i].getAttribute("id");
        }
    }
    const navItems = document.getElementsByClassName("nav-item");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");
        console.log(current)
        if(navItems[i].href.includes(current) && current != ""){
            navItems[i].classList.add("active");
        }
    }
}