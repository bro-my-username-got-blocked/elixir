const themeid = localStorage.getItem("style");
//Loads theme
themeEle = document.createElement("link");
themeEle.rel="stylesheet";
if (themeid === "mainStyle") {
  themeEle.href = "./css/default.css"
}
if (themeid === "darkStyle") {
    themeEle.href = "./css/dm.css";
} 
if (themeid === "frozenStyle") {
  themeEle.href="./css/frozen.css"
} else {
  themeEle.href = "./css/default.css"
}
document.body.appendChild(themeEle);