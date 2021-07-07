console.log("test");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const hamburgerContainer = document.querySelector("#header__main-nav");
const lists = document.querySelectorAll(".header__main-nav--lists li");
hamburger.addEventListener("click", (e) => {
  hamburgerContainer.classList.toggle("clicked");
  console.log(hamburgerContainer);
  // console.log(lists);
  lists.forEach((list) => {
    return list.classList.toggle("fade");
  });
});
