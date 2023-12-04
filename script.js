
function clock(){
  d = new Date();
  console.log(d)
  hour = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hDeg = hour * 30 + min * (30/60);
  mDeg = min * 6 + sec * (6/60);
  sDeg = sec * 6;

  h_hand = document.querySelector('.hour');
  m_hand = document.querySelector('.min');
  s_hand = document.querySelector('.sec');
  h_hand.style.transform = `rotate(${hDeg}deg)`;
  m_hand.style.transform =`rotate(${mDeg}deg)`;
  s_hand.style.transform = `rotate(${sDeg}deg)`;
}
setInterval(clock, 1000);
clock();