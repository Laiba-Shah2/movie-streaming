let answerBox = document.querySelectorAll(".answer");
let accordianDropdown = document.querySelectorAll(".question");
let questionIcon = document.querySelectorAll(".question i");

accordianDropdown.forEach((eachIcon, index) => {
  eachIcon.addEventListener("click", () => {
    answerBox[index].classList.toggle("active");

    if (questionIcon[index].classList.contains("fa-plus")) {
      questionIcon[index].classList.replace("fa-regular", "fa-solid");
      questionIcon[index].classList.replace("fa-plus", "fa-xmark");
    } else {
      questionIcon[index].classList.replace("fa-solid", "fa-regular");
      questionIcon[index].classList.replace("fa-xmark", "fa-plus");
    }
  });
});
