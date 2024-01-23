const form = document.querySelector("form");
const input = document.getElementById("searchInput");

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

      if (getAboutBlank() === 'on') {
        openAboutBlank(window.location.href.slice(0, -1) + __uv$config.prefix + __uv$config.encodeUrl(url));
      } else {
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
      }
    });
};
openUrl("https://www.gameslol.net/data/waflash/index.php?g=635")

function getAnalytics() {
    return localStorage.getItem('analytics') || 'on';
}

function setAnalytics() {
    const $analyticsSelect = document.getElementById('analyticsSelect');
    const analyticsPref = $analyticsSelect.value;
    if (analyticsPref === 'on') {
        localStorage.setItem('analytics', 'on');
    } else if (analyticsPref === 'off') {
        localStorage.setItem('analytics', 'off');
    }
    location.reload();
}

// analytics (change it if you want to enable it)
if(localStorage.getItem('analytics') != 'off') {
    var scriptTagGTAG = document.createElement('script');
    scriptTagGTAG.setAttribute('async', '');
    scriptTagGTAG.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-CX3B4NHEG0');
    document.head.appendChild(scriptTagGTAG);
    // gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)};
    gtag('js', new Date());

    gtag('config', 'G-CX3B4NHEG0');

    // arc
    var scriptTagARC = document.createElement('script');
    scriptTagARC.setAttribute('async', '');
    scriptTagARC.setAttribute('src', 'https://arc.io/widget.min.js#85sFzH5m');
    document.head.appendChild(scriptTagARC);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(window.location.origin + "/js/sw.js");
  }
  