let navList = document.querySelector('#nav-list')
navList.children[3].children[0].target = "_blank"

[...document.links].forEach(link => {
    if (link.hostname != window.location.hostname)
      link.target = '_blank'
  })