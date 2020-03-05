//mport * as episodes from 'episodes.js'

let randomEp = document.getElementById('randomEp');

/* chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
}); */

randomEp.onclick = function(element) {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.executeScript(
    //       tabs[0].id,
    //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
    // });
    const index = Math.floor(Math.random()*episodes.length);
    const randEp = episodes[index];
    chrome.tabs.create({'url': randEp});
  };