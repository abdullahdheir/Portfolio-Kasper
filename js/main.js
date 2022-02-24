// Nav Bar Secation

const headi = document.querySelector("header");
const nav = document.querySelector(".toggle-menu");
const navList = document.querySelector("header .container ul");

nav.onclick = function () {
  if (navList.hasAttribute("style") === true) {
    navList.removeAttribute("style");
  } else {
    navList.style.cssText = "display:flex;";
  }
};

window.onscroll = function () {
  const navAfter = document.createElement("style");
  const inHTML = `header .container nav::after {
      display:none;
  }`;
  navAfter.innerHTML = inHTML;
  if (window.scrollY >= 50) {
    headi.style.cssText =
      "position:fixed; background-color: rgb(25, 200, 250,75%); transition:background-color .3s linear; top:0px";
    document.head.removeAttribute("data-none");
  }
  if (window.scrollY <= 500) {
    document.head.setAttribute("data-none", "");
    headi.style.cssText = "position:fixed; ";
  }
  if (window.scrollY >= 50) {
    const sty = document.querySelectorAll("style");
    const length = sty.length;
    if (document.head.hasAttribute("data-none") === true) {
      sty.forEach((e) => {
        e.remove();
      });
    } else {
      if (length === 0) {
        document.body.prepend(navAfter);
      }
    }
  }
  // Skills Scroll Section
  if (window.scrollY >= skillSection.offsetTop) {
    skillSpan.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  // About Secation
  if (window.scrollY >= aboutSection.offsetTop) {
    if (!started) {
      countAbout.forEach((e) => increasNumber(e));
    }
    started = true;
  }
};

// Protfoilo Secation

const list = document.querySelectorAll(".portfolio-content ul > li");
const imgs = document.querySelectorAll(".portfolio .all");
const text = document.querySelectorAll(".portfolio .photos .photo .text");

// Switch Between Photos

list.forEach((e) => {
  e.onclick = function () {
    list.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
    imgs.forEach((im) => {
      const cls = im.classList.item(1);
      im.style.cssText = "transform:scale(0); display:none; opacity:0;";
      if (this.getAttribute("data-cont") === cls) {
        im.style.cssText = "transform:scale(0); display:block; opacity:0;";
        setTimeout(() => {
          im.style.cssText = "transform:scale(1);  opacity:1;";
        }, 400);
      }
      if (this.getAttribute("data-cont") === "all") {
        im.style.cssText = "transform:scale(0);  opacity:0;";
        setTimeout(() => {
          im.style.cssText = "transform:scale(1);  opacity:1;";
        }, 400);
      }
    });
  };
});

// About Secation

const countAbout = document.querySelectorAll(".about-two .text span");
const aboutSection = document.querySelector(".about");
let started = false;

function increasNumber(el) {
  let count = el.dataset.count;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == count) {
      clearInterval(counter);
    }
  }, 1000 / count);
}

// Skills Secation

const skillSection = document.querySelector(".skills");
const skillSpan = document.querySelectorAll(".skills span");

skillSpan.forEach((span) => {
  span.style.width = 0;
});
// window.onscroll = function () {
//   if (window.scrollY >= skillSection.offsetTop) {
//     skillSpan.forEach((span) => {
//       span.style.width = span.dataset.progress;
//     });
//   }
// };
