// const myname = "kho van";

// const h1 = document.querySelector(".heading-primary");
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myname;
//   h1.style.backgroundColor = "green";
// });

// copyright
const yearEl = document.querySelector(".year");
const currentDate = new Date();
yearEl.textContent = currentDate.getFullYear();

const headerEl = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//scroll

// to go to class -> classList.
// to get attribute in selector -> getAttribute()

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(link);
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if ((href !== "#") & href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (link.classList.contains(".main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///stickly
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    // console.log(entry);
    if (entry.isIntersecting === false) document.body.classList.add("stickly");
    if (entry.isIntersecting) document.body.classList.remove("stickly");
  },
  {
    root: null,
    rootMargin: "-80px",
    threshold: 0,
  }
);
obs.observe(sectionHeroEl);
///fix flexbox gap property missing in some Safari version
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
