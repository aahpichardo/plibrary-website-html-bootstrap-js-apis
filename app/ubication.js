window.addEventListener('DOMContentLoaded', event => {
    const mapLink = document.querySelector("#map-link");
    mapLink.href = "";
    mapLink.textContent = "";
  
    const latitude = 28.64253795039226;
    const longitude = -106.14570430760642;
  
    const iframeHtml = `<iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.005},${latitude-0.005},${longitude+0.005},${latitude+0.005}&amp;layer=mapnik&amp;marker=${latitude},${longitude}"></iframe>`;
  
    mapLink.innerHTML = iframeHtml;
  });