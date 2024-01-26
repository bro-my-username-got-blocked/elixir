const form = document.querySelector("form");
const input = document.getElementById("searchInput");
function getSearchEngineURL() {
  return localStorage.getItem('searchEngineURL') || 'https://google.com/search?q=';
}
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let url = input.value.trim();
    openURL(url);
  });
  
function isUrl(val = "") {
    if (
        /^http(s?):\/\//.test(val) ||
        (val.includes(".") && val.substr(0, 1) !== " ")
    )
        return true;
    return false;
}
  

function openURL(url) {
    window.navigator.serviceWorker
    .register("./uv.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      if (!isUrl(url)) url = getSearchEngineURL() + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "http://" + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
};
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(window.location.origin + "/js/sw.js");
  }
  