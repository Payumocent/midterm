let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150; // Adjusted offset
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            console.log("Active section ID:", id);
            console.log("Active link:", activeLink);

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};

