"use strict";

new Notification("خیلی وقت به موبوشار سر نزدی ها، خوشحال میشم بهمون سر بزنی");

let membershipBtn = document.querySelector(".membershipBtn");
let memberShipPanel = document.querySelector(".memberShipPanel");
let numberRegisterInput = document.querySelector(".numberRegisterInput");
let enterInputBTN = document.querySelector(".enterInputBTN");
let warningP = document.querySelector(".warningP");
let entSpan = document.querySelector(".entSpan");
let regSpan = document.querySelector(".regSpan");
let XremoverBtn = document.querySelector(".XremoverBtn");
let sentCodeBtnTimer = document.querySelector(".sentCodeBtnTimer");
membershipBtn.addEventListener("click", () => {
  memberShipPanel.classList.toggle("memberShipPanelVisible");
  XremoverBtn.style.display = "flex";
});

XremoverBtn.addEventListener("click", () => {
  memberShipPanel.classList.remove("memberShipPanelVisible");
  XremoverBtn.style.display = "none";
});

let registerDivBTN = document.querySelectorAll(".registerDivBTN");

registerDivBTN.forEach((regChange) => {
  regChange.addEventListener("click", () => {
    memberShipPanel.classList.add("changeToRegisterPanel");
    entSpan.style.color = "purple";
    regSpan.style.color = "black";
    sentCodeBtnTimer.classList.toggle("sentCodeBtnTimerShow");
    if ((enterInputBTN.value = "ورود")) {
      enterInputBTN.value = "ثبت نام";
    } else if ((enterInputBTN.value = "ثبت نام")) {
      enterInputBTN.value = "ورود";
    }

    if ((regChange.innerHTML = "ثبت نام")) {
      regChange.innerHTML = "عضو هستم";
    } else if ((regChange.innerHTML = "عضو هستم")) {
      regChange.innerHTML = "ثبت نام";
    }
    numberRegisterInput.style.display = "flex";
  });
});

numberRegisterInput.addEventListener("keyup", (e) => {
  enterInputBTN.classList.add("allowEnter");
  console.log(e.keyCode);
  if (e.keyCode === 8 && numberRegisterInput.value === "") {
    enterInputBTN.classList.remove("allowEnter");
  }
});
let codeInput = document.querySelector(".codeInput");
let warningP2 = document.querySelector(".warningP2");
enterInputBTN.addEventListener("click", () => {
  if (numberRegisterInput.value.length < "11" && codeInput.value.length < "6") {
    warningP.innerHTML = "مقدار ورودی شما صحیح نمی باشد";
    warningP2.innerHTML = "کد شما صحیح نمی باشد";
  } else {
    warningP.innerHTML = "";
    warningP2.innerHTML = "";
    // sent message
  }
});

codeInput.addEventListener("keyup", (inputCode) => {
  if (inputCode.keyCode === 8 || inputCode.value === "") {
    enterInputBTN.classList.remove("allowEnter");
  } else {
    enterInputBTN.classList.add("allowEnter");
  }
});

// *********************************************************************************************************
// *********************************************************************************************************

const cards = document.querySelectorAll(".sectionSec");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let card;

function isCardVisible() {
  for (card of cards) {
    isElementInViewport(card)
      ? card.classList.add("isVisible")
      : card.classList.remove("isVisible");
  }
}

document.addEventListener("DOMContentLoaded", isCardVisible);
window.addEventListener("scroll", isCardVisible);
window.addEventListener("resize", isCardVisible);

// *******************************************************************************************

let sideElements = document.querySelectorAll(".catrgoriesElems");

sideElements.forEach((sideSingleElem) => {
  sideSingleElem.addEventListener("click", () => {
    sideSingleElem.classList.toggle("openDownSideElem");
  });
});

// ***************************************************************************************************

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function () {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

// ****************************************************************************************************
let likeBtnElem = document.querySelectorAll(".likeBtn");

likeBtnElem.forEach((heartBtn) => {
  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("likeBtnSelected");
  });
});
// need to set a local storage

const proPrev = document.querySelector(".pro-prev");
const proNext = document.querySelector(".pro-next");

proNext.addEventListener("click", () => {
  proPrev.style.visibility = "visible";
});
