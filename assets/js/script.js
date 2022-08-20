/* Functions */
const btn_1 = document.getElementById('btn_1');
const btn_2 = document.getElementById('btn_2');
const btn_3 = document.getElementById('btn_3');
const btn_4 = document.getElementById('btn_4');
const btn_5 = document.getElementById('btn_5');


const speed_normal = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.getElementsByTagName('video')[0].playbackRate = 1;" });
    chrome.tabs.executeScript(activeTabs[0].id, { code: "document.querySelector('video').playbackRate = 1;" });
  });
}

const update_speed = (speed, btn) => {
  reset();
  btn.classList.add('active');
  const action_str_unicko = "document.getElementsByTagName('video')[0].playbackRate =" + speed;
  const action_str_zoom = "document.querySelector('video').playbackRate =" + speed;
  chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, { code: action_str_unicko });
    chrome.tabs.executeScript(activeTabs[0].id, { code: action_str_zoom });
  })
}

const reset = () => {
  btn_1.classList.remove('active');
  btn_2.classList.remove('active');
  btn_3.classList.remove('active');
  btn_4.classList.remove('active');
  btn_5.classList.remove('active');
}

btn_1.addEventListener('click', () => update_speed(1, btn_1));
btn_2.addEventListener('click', () => update_speed(2, btn_2));
btn_3.addEventListener('click', () => update_speed(3, btn_3));
btn_4.addEventListener('click', () => update_speed(4, btn_4));
btn_5.addEventListener('click', () => update_speed(5, btn_5));
