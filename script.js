"use strict";

const newList = document.getElementById("new-list"),
  button = document.getElementById("button"),
  listGroup = document.getElementById("list-group");

let arrayList = [];

function localStorageList() {
  button.addEventListener("click", (event) => {
    if (newList.value !== "") {
      localStorage.setItem(
        `${newList.value}`,
        `
        ${newList.value} <button class="bg-red-600 w-8 h-6 rounded-lg" id="times"><span class="fas fa-times"></span></button>
      `
      );
      let listItem = document.createElement("li");
      listItem.className =
        "text-white border-2 px-5 py-1 my-2 rounded-md flex justify-between items-center gap-2";
      listItem.innerHTML = `${newList.value} <button class="bg-red-600 w-8 h-6 rounded-lg" id="times"><span class="fas fa-times"></span></button>`;
      listGroup.append(listItem);
      let listItemTimes = document.querySelectorAll("#times");
      listItemTimes.forEach((option) => {
        option.addEventListener("click", () => {
          let confirmItem = confirm(
            "Rostan ham bu ro'yhatni o'chirishni istaysizmi?"
          );
            if (confirmItem) {
              localStorage.removeItem(option.parentElement.innerText)
            option.parentElement.style.display = "none";
          }
        });
      });
    } else {
      let form = document.getElementById("form");
      let caution = document.createElement("p");
      caution.className = "text-red-400";
      caution.textContent =
        "Qiymat Kiritmadingiz Qiymat Kiritishingiz so'raladi!";
      form.append(caution);
      setTimeout(() => {
        caution.style.display = "none";
      }, 3000);
    }

    event.preventDefault();
    newList.value = "";
  });
  for (let i = 0; i < localStorage.length; i++) {
    arrayList.push(localStorage.key(i));
    let innerList = document.createElement("li");
    innerList.className =
      "text-white border-2 px-5 py-1 my-2 rounded-md flex justify-between items-center gap-2";
    innerList.innerHTML = localStorage.getItem(arrayList[i]);
    listGroup.append(innerList);
  }
  let list = document.querySelectorAll("#times");
  list.forEach((option) => {
    option.addEventListener("click", () => {
      let confirmList = confirm(
        "Rostan ham bu ro'yhatni o'chirishni istaysizmi?"
      );
      if (confirmList) {
        localStorage.removeItem(option.parentElement.innerText);
        option.parentElement.style.display = "none";
      }
    });
  });
}
localStorageList();
