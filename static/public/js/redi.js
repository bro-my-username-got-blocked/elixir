var currentURL = window.location.href;
var redirectionMap = {
  "-cc.html": "https://orteil.dashnet.org",
  "-l2f3.html": "https://www.silvergames.com/en/learn-to-fly-3/iframe",
  "-sg.html": "https://stumbleguys.com",
  "l2fi.html": "https://www.gameslol.net/data/waflash/index.php?g=635",
  "-f.html": "https://florr.io",
  "-bo.html": "https://now.gg/apps/roblox-corporation/5349/roblox.html",
  "-ch.html": "https://www.clickerheroes.com/play.html",
  "-is.html": "http://lutsgames.com/games/idle-superpowers/",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
  "": "",
};
var urlFragment = currentURL.split('/').pop();
if (redirectionMap.hasOwnProperty(urlFragment)) {
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(redirectionMap[urlFragment]);
}
