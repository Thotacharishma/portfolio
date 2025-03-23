document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    nav.style.display = "flex";
    nav.style.justifyContent = "center";
    nav.style.alignItems = "center";
    nav.style.flexWrap = "nowrap";
    nav.style.padding = "15px 5%";
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index : 1000;

    // Example: Sticky Navbar Updates
const navbar = document.querySelector("#main-navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 105, 180, 1)";
    } else {
        navbar.style.background = "rgba(255, 105, 180, 0.9)";
    }
});


    // Move Brand Name Below Navbar
    const brandContainer = document.createElement("div");
    brandContainer.style.textAlign = "center";
    brandContainer.style.padding = "80px 0 20px";
    brandContainer.style.marginTop = "60px";
    
    const brandTitle = document.createElement("h1");
    brandTitle.textContent = "Thota Charishma";
    brandTitle.style.color = "black";
    brandTitle.style.fontSize = "2rem";
    brandTitle.style.fontWeight = "bold";
    
    const brandSubtitle = document.createElement("p");
    brandSubtitle.textContent = "Full Stack Developer | ML Enthusiast | DSA Practitioner";
    brandSubtitle.style.color = "black";
    brandSubtitle.style.fontSize = "1.2rem";
    
    brandContainer.appendChild(brandTitle);
    brandContainer.appendChild(brandSubtitle);
    
    document.body.insertBefore(brandContainer, document.body.firstChild.nextSibling);

    // Reveal sections on scroll
    const sections = document.querySelectorAll(".module");
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Sticky Navbar on Scroll
    window.addEventListener("scroll", function() {
        let navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(255, 105, 180, 1)";
            navbar.style.padding = "10px 5%";
        } else {
            navbar.style.background = "rgba(255, 105, 180, 0.9)";
            navbar.style.padding = "15px 5%";
        }
    });
});
