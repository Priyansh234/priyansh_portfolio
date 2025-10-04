console.log("Hello world!");

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault();

            if (href === "#") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const sectionEl = document.querySelector(href);
                sectionEl.scrollIntoView({
                    behavior: "smooth"
                });
            }

            if (link.classList.contains("main-nav-link")) {
                headerEl.classList.remove("nav-open");
            }
        }
    });
});

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        if (!ent.isIntersecting) {
            document.body.classList.add("sticky");
        } else {
            document.body.classList.remove("sticky");
        }
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);

if (sectionHeroEl) obs.observe(sectionHeroEl);

function checkFlexGap() {
    const flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();

function openWhatsapp() {
    let phone = "918979821765";
    let message = "Hi Priyansh, I visited your portfolio and want to discuss a frontend development project.";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

function sendEmail() {
    let name = document.getElementById("full-name").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let email = "priyanshguptaji234@gmail.com";

    let body = "Name: " + name + "\nMessage: " + message;

    window.location.href = "mailto:" + email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
}