#F12::
loop {
  Random, clicks, 12, 42
  loop %clicks% {
    controlclick x200 y200, POPCAT - Brave
    Random, rest, 10, 310
    sleep %rest%
  }
  Random, rest, 200, 700
  sleep %rest%

  Random, rest, 1, 100
  if (rest > 85) {
    Random, resttime, 3000, 12000
    sleep %resttime%
  }
}
