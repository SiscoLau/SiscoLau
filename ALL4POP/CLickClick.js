 var appendee = `
  <div>
    <span>Per<input type='text' id='interval' maxlength=5 style="width: 6%;"> ms Click<input type='text' id='times' maxlength=4 style="width: 5%;"> ClickClick</span>
    <span><button id='start' onclick='start()'>Start</button></span>
  </div>
`;
var leaderboard = document.querySelector(".leaderboard");
leaderboard.innerHTML = appendee + leaderboard.innerHTML;

var event = new KeyboardEvent('keydown', {
  key: 'a'
})

var start = () => {
  let interval = document.querySelector("#interval");
  let times = document.querySelector("#times");
  let startButton = document.querySelector("#start");
  if (document.trigger === void 0) {
    document.trigger = setInterval(() => {
      for (let i = 0; i < times.value; i++) {
        document.dispatchEvent(event);
      }
    }, interval.value);
    startButton.textContent = "Pause";
    interval.disabled = true;
    times.disabled = true;
  } else {
    clearInterval(document.trigger)
    startButton.textContent = "Start";
    interval.disabled = false;
    times.disabled = false;
    document.trigger = undefined;
  }
}
