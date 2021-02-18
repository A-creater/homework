let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.nav-list__elem');

titleElem.onclick = () => {
  menuElem.classList.toggle('open__show');
};




