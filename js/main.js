// Nav Bar Secation

let started = false;
let st = false;
const headi = document.querySelector("header");
const nav = document.querySelector(".toggle-menu");
const navBar = document.getElementById("nav");
const navList = document.querySelector("header .container ul");
const navAfter = window.getComputedStyle(navBar, "::after");
const buttonUp = document.getElementById("up");

nav.onclick = function () {
  if (navList.hasAttribute("style") === true) {
    navList.removeAttribute("style");
  } else {
    navList.style.cssText = "display:flex;";
  }
};

// Form Search Secation

const searchBtn = document.querySelector("header .container .search");
const searchInp = document.getElementById("search");
const closeBtn = document.getElementById("close-btn");
const accpetSBtn = document.getElementById("search-btn");
const overlay = document.querySelector("header form .overlay");

searchBtn.onclick = function () {
  overlay.style.cssText = "display:block";
  closeBtn.style.cssText = "display:block";
  setTimeout(() => {
    accpetSBtn.style.cssText =
      " transform: translate(-50%, -50%);  rigth:0;  display:block;";
    searchInp.style.cssText =
      "transform: translate(-50%, -50%); left:50%; display:block;";
  }, 10);
  accpetSBtn.style.cssText =
    " transform: translate(865px, -50%);  diplay:block;";
  searchInp.style.cssText =
    " transform: translate(-310px, -50%); left:0; display:block;";
};
closeBtn.onclick = function () {
  accpetSBtn.style.cssText =
    " transform: translate(865px, -50%);display:block;";
  searchInp.style.cssText =
    " transform: translate(-310px, -50%); left:0;display:block;";
  setTimeout(() => {
    overlay.style.cssText = "display:none";
    closeBtn.style.cssText = "display:none";
  }, 500);
};

// Slider Image Secation

const balls = document.querySelectorAll(".balls > li");
let landing = document.getElementById("landing");
let right = document.querySelector(".landing .right");
let left = document.querySelector(".landing .left");
let counter = 0;
let index = 1;
let iamge = [
  "imgs/slider/bg1.jpg",
  "imgs/slider/bg2.jpg",
  "imgs/slider/bg3.jpg",
];

balls.forEach((e) => {
  e.setAttribute("name", `${counter}`);
  counter++;
  e.onclick = function () {
    balls.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
    let name = e.getAttribute("name");
    landing.style.cssText = `background-image: url(${iamge[name]});`;
    index = name;
  };
});

right.onclick = function () {
  if (index < iamge.length - 1) {
    index++;
    landing.style.cssText = `background-image: url(${iamge[index]});`;
    balls.forEach((el) => {
      el.classList.remove("active");
      if (el.getAttribute("name") == index) {
        el.classList.add("active");
      }
    });
  }
};
left.onclick = function () {
  if (index >= 1) {
    index--;
    landing.style.cssText = `background-image: url(${iamge[index]});`;
    balls.forEach((el) => {
      el.classList.remove("active");
      if (el.getAttribute("name") == index) {
        el.classList.add("active");
      }
    });
  }
};

buttonUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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

let skillSection = document.querySelector(".skills");
let skillSpan = document.querySelectorAll(".skills span");

skillSpan.forEach((span) => {
  span.style.width = 0;
});

window.onscroll = function () {
  if (window.scrollY >= 50) {
    headi.style.cssText =
      "position:fixed; background-color: rgb(25, 200, 250,75%); transition:background-color .3s linear; top:0px";
    navBar.style.setProperty("--none-value", "none");
    buttonUp.style.opacity = "1";
  }
  if (window.scrollY <= 500) {
    document.head.setAttribute("data-none", "");
    headi.style.cssText = "position:fixed; ";
    navBar.style.setProperty("--none-value", "blcok");
    buttonUp.style.opacity = "0";
  }

  // Skills Scroll Section

  if (
    window.scrollY >= skillSection.offsetTop + 200 ||
    window.scrollY >= skillSection.offsetTop - 200
  ) {
    skillSpan.forEach((span) => {
      span.style.width = `${span.dataset.progress}%`;
    });
    if (!started) {
      skillSpan.forEach((e) => {
        let count = e.dataset.progress;
        let content = e.dataset.prog;
        let counter = setInterval(() => {
          content++;
          e.setAttribute("data-prog", `${content}`);
          if (e.getAttribute("data-prog") == count) {
            clearInterval(counter);
            setTimeout(() => {
              e.setAttribute("data-prog", `${content}%`);
            }, 50);
          }
        }, 1000 / count);
      });
    }
    started = true;
  }
  // About Secation

  if (window.scrollY >= aboutSection.offsetTop) {
    if (!st) {
      countAbout.forEach((e) => increasNumber(e));
    }
    st = true;
  }
};
