function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
     var b = c[a];
     b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
};
externalLinks();

let images = document.querySelectorAll('img')

if (images.length > 0) {
  let ogImage = document.createElement('meta')
  ogImage.setAttribute('property','og:image')
  ogImage.content = images[0].src
  document.head.appendChild(ogImage)
}