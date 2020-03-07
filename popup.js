//const simpsons_data = JSON.parse(simpsons_data);
//console.log(simpsons_data);
let randomEp = document.getElementById("randomEp");
// let epLink = document.getElementById('epLink');
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
  //let results = [];
  let epStart = Number(document.getElementById("epStart").value);
  let epEnd = Number(document.getElementById("epEnd").value);
  if (epStart > epEnd) {
    let temp = epStart;
    epStart = epEnd;
    epEnd = temp;
  }
  function getEpisodes(epStart, epEnd, episodes) {
    for (let i = 0; i < simpsons_data.episodes.length; i++) {
      let current = simpsons_data.episodes[i];
      if (current.season == epStart) {
        epStart = i;
        break;
      }
    }
    for (let i = simpsons_data.episodes.length - 1; i > 0; i--) {
      let current = simpsons_data.episodes[i];
      if (current.season == epEnd) {
        epEnd = i + 1;
        break;
      }
    }
    return Math.floor(Math.random() * (epEnd - epStart)) + epStart;
  }
  const index = getEpisodes(epStart, epEnd, episodes);
  //const index = Math.floor(Math.random()*epRange.length);
  const randEp = episodes[index];
  const epTitle = simpsons_data.episodes[index].title;
  const epInfo = document.getElementById("epInfo");
  const epLink = document.createElement("a");
  const epDiv = document.createElement("div");
  const seasonEpNo = document.createElement("span");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const epDescript = document.createElement("span");
  seasonEpNo.innerHTML =
    "Season " +
    simpsons_data.episodes[index].season +
    " Episode " +
    simpsons_data.episodes[index].episode;
  seasonEpNo.id = "seasonEpNo";
  epDescript.id = "epDescript";
  epDescript.innerHTML = simpsons_data.episodes[index].description;
  epDescript.style = "font-size: 85%;";
  epDiv.id = "epDiv";
  epLink.id = "epLink";
  epLink.href = randEp;
  epLink.innerHTML = epTitle;
  epDiv.appendChild(epLink);
  epDiv.appendChild(br1);
  epDiv.appendChild(seasonEpNo);
  epDiv.appendChild(br2);
  epDiv.appendChild(epDescript);
  epInfo.appendChild(epDiv);
  //chrome.tabs.create({'url': randEp});
  // epLink.onclick = () => {
  //   chrome.tabs.create({ url: randEp });
  // };
};
