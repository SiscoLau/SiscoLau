console.clear()
let keyDownEvent = new KeyboardEvent("keydown", { key: "-" });
let keyUpEvent = new KeyboardEvent("keyup", { key: "-" });
var total = 0;
console.log("%c🐱:💬popcat.click 每個 IP 每 30 秒僅接收 800 次彈出，如果發送超過 10 次將被標記為使用機器人。必須清除 cookie", "background: #050 ;顏色：#0f0");
console.log("%c🐱:🔄Bot開始，每 30 秒發送 800 次 pops ", "background: #050; color: #0f0");
function legitPop() {
  document.dispatchEvent(keyDownEvent);
  document.dispatchEvent(keyUpEvent);
}

async function legitMassPop(popCount) {
  for (let i = 0; i < popCount; i++) {
    legitPop();
  }
}


function legitClearCookie(cookieName) {
  let cookies = document.cookie.split(";").map((cookieString) => {
    let cookieArray = cookieString.trim().split("=");
    return {
      name: cookieArray[0] ? cookieArray[0] : "",
      propertyString: cookieArray[1] ? cookieArray[1] : ""
    };
  });

  let filteredCookies = cookies.filter(
    (cookie) =>
      cookie.propertyString && cookie.name.toLowerCase() !== cookieName
  );
  let cookieStringArray = filteredCookies.map((cookie) =>
    cookie.name.concat("=").concat(cookie.propertyString)
  );
  let cookieString = cookieStringArray.join("; ");

  document.cookie = cookieString;
}

function legitResetSequentialMaxPops() {
  let vueElement = document.getElementById("app").__vue__;

  vueElement.sequential_max_pops = 0;
}

function legitMassPopProcess(popCount, cookieName) {
  legitClearCookie(cookieName);
  legitResetSequentialMaxPops();
  legitMassPop(popCount);
   total += 800;
    console.log(`[${new Date().toLocaleTimeString()}] %c🐱: ✅ 800 次成功發送（📶發送次數：${total}）`, "background: #050; color: # 0f0");
    return;
}

function legitStartAutomation(popCount, interval = 30e3, cookieName = "bot") {
  legitMassPopProcess(popCount, cookieName);
  setInterval(() => {
    legitMassPopProcess(popCount, cookieName);
  }, interval);
}
legitStartAutomation(800)




