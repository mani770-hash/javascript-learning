// //* onChange (input - selectBox)

// const textInput = document.querySelector(".text-input");
// const checkInput = document.querySelector(".check-input");
// const citiesSelectBox = document.querySelector("#cities");

// // textInput.addEventListener("change", function () {
// //   console.log("Input Changed");
// // });

// // checkInput.addEventListener("change", function () {
// //   console.log("CheckBox Changed ->", checkInput.checked);
// // });

// // citiesSelectBox.addEventListener("change", function () {
// //   console.log("City Changed -> ", citiesSelectBox.value);
// // });

// function selectCity() {
//   console.log("City Changed -> ", citiesSelectBox.value);
// }
let select1 = document.querySelector("#select");
let select2 = document.querySelector("#select2");

let cites = {
  تهران: ["شهریار", "پردیس", "فردیس"],
  مازندران: ["نور", "محموداباد", "نوشهر"],
  فارس: ["شیراز", "لار"],
};
let arraycities = Object.keys(cites);
console.log(arraycities);
let newoption;
let ostanha = arraycities.forEach(function (ostan) {
  console.log(ostan);

  newoption = document.createElement("option");
  newoption.className = "px-4";
  newoption.value = ostan;
  newoption.innerHTML = ostan;
  select1.append(newoption);
});
let citiesoption;
select1.addEventListener("change", function () {
  let ostan = select1.value;
  let ostanha = cites[ostan];
  select2.innerHTML = "";
  citiesoption = ostanha.forEach(function (city) {
    citiesoption = document.createElement("option");
    citiesoption.className = "px-4";
    citiesoption.value = city;
    citiesoption.innerHTML = city;
    select2.append(citiesoption);
  });
});
let newcities;
