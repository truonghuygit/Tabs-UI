let tabLists = document.querySelectorAll(".tab-item");
let paneLists = document.querySelectorAll(".pane-item");

let tabActive = document.querySelector(".tab-item.active");
let line = document.querySelector(".line");

tabLists.forEach(function (tab, index) {
  let pane = paneLists[index];
  tab.onclick = function () {
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".pane-item.active").classList.remove("active");
    tab.classList.add("active");
    pane.classList.add("active");
  };
});
