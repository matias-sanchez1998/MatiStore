searchFormBtn.addEventListener('click', () => {
  location.hash = '#search=' + (searchFormInput.value).trim().toUpperCase();
  searchPages()
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

window.addEventListener('load', () =>
  location.hash = "")

function navigator() {
  console.log({ location });

  if (location.hash.startsWith('#search=')) {
    searchPages();
  } else {
    homePage();
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function searchPages() {
  console.log('Search!!');

  const [_, query] = location.hash.split('=');


  getProductBySearch(query);
}


function homePage() {
  createCategory();
  createProduct();
}