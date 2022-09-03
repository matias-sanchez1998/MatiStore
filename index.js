const api = axios.create({
  baseURL: 'https://matiassanchez.herokuapp.com/api',
  //method: 'GET',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',

  }
});

divHeaderContainer.addEventListener('click',() => {
  location.hash = ""
})

async function createCategory() {
  const res = await api.get('/category');
  const data = await res.data;
  const container = document.querySelector('.container')
  container.innerHTML= ""
  data.forEach(category => {

    const section = document.createElement('section');
    section.classList.add('section');
    section.setAttribute('id', `section${category.id}`);

    const divContainer = document.createElement('div');
    divContainer.classList.add('products-container');
    divContainer.setAttribute('id', `products-container${category.id}`)
    const h2 = document.createElement('h2');
    h2.innerText = `${category.name}`.toUpperCase()

    container.append(section)
    section.append(h2)
    section.append(divContainer)

  });
}

async function createProduct() {
  const res = await api.get('/product')
  const data = await res.data;
  data.forEach(product => {
    const section = document.querySelector(`#products-container${product.category}`)
    const article = document.createElement('article');
    article.classList.add('product');

    // div ProductInfo

    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');
    const h4 = document.createElement('h4');
    h4.classList.add('product-title');
    const pPrice = document.createElement('p');
    pPrice.classList.add('product-price');
    const buttonCart = document.createElement('button');
    const buttonfavourites = document.createElement('button');
    buttonCart.classList.add('add-to-cart');
    buttonfavourites.classList.add('add-to-favorites');
    const spanCart = document.createElement('span');
    const spanFavourite = document.createElement('span');
    spanCart.classList.add('icon', 'cart');
    spanFavourite.classList.add('icon', 'favorite');


    // div image
    const divImage = document.createElement('div');
    divImage.classList.add('product-image-container');
    const imgProduct = document.createElement('img');
    imgProduct.classList.add('product-image');

    //div Discount or Description

    const divDescription = document.createElement('div');
    divDescription.classList.add('product-description-container');
    const pDiscount = document.createElement('p');
    pDiscount.classList.add('product-description');
    const b = document.createElement('b')
    
    const spanDiscount = document.createElement('description-text');
    spanDiscount.classList.add('description-text')

    h4.innerText = `${product.name}`;
    pPrice.innerText = product.price;
    imgProduct.src = product.url_image;

    if (!product.url_image) {
      imgProduct.src = 'https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png'
    }

    if (product.discount > 0) {
      b.innerText = 'Discount: '
      spanDiscount.innerText = product.discount;

    }

    section.append(article);
    article.append(divProductInfo);
    article.append(divImage);
    article.append(divDescription);

    divProductInfo.append(h4);
    divProductInfo.append(pPrice);
    divProductInfo.append(buttonCart);
    buttonCart.append(spanCart);
    divProductInfo.append(buttonfavourites);
    buttonfavourites.append(spanFavourite);

    divImage.append(imgProduct);

    divDescription.append(pDiscount);
    pDiscount.append(b);
    pDiscount.appendChild(spanDiscount);
  });

}

async function getProductBySearch(query) {
  const res = await api.get('/product')
  const data = await res.data;
  const productos = data.filter((product) => {
    if (product.name.includes(query)) {
      return product;
    }
  })

  CreateProductSearch(productos);
  console.log(productos);
}



