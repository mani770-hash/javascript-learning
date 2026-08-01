// titleElem.classList.add("hidden");
// titleElem.classList.remove("hidden");
// titleElem.classList.toggle("hidden");
let btn = document.querySelector(".login-button");
let inputName = document.querySelector("#name");
let inputPassword = document.querySelector("#password");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let finallogin = document.querySelector(".modal-screen");

btn.addEventListener("click", function () {
  let namevalid = inputName.value.length <= 3;
  let passwordvalid = inputPassword.value.length < 8;
  if (namevalid || passwordvalid) {
    if (inputName.value.length <= 3) {
      p1.innerHTML = "نام کاربری باید بیشتر از 3 کرکتر باشد";
      p1.classList.remove("hidden");
    } else {
      p1.classList.add("hidden");
    }
    if (inputPassword.value.length < 8) {
      p2.innerHTML = "گذزواژه شما باید حداقل 8 کرکتر داشته باشد";
      p2.classList.remove("hidden");
    } else {
      p2.classList.add("hidden");
    }
  } else {
    finallogin.classList.remove("hidden");
  }
});
let btn2 = document.querySelector(".modal-button");
btn2.addEventListener("click", function () {
  finallogin.classList.add("hidden");
  p1.style.color = "blue";
  p1.classList.remove("hidden");
  p1.innerHTML = "نام کاربری صحیح است";
  p2.style.color = "green";
  p2.classList.remove("hidden");
  p2.innerHTML = "گذرواژه قابل قبول است";
});
