function CreateProductSearch(productos) {
    divContainer.innerHTML = "";
    const section = document.createElement(`section`);
    section.classList.add('section');
    divContainer.append(section)
    const h2 = document.createElement('h2');
    h2.innerText = 'Productos encontrados'
    divContainer.append(h2);
    divContainer.append(section)
    const divContainerProduct = document.createElement('div');
    divContainerProduct.classList.add('products-container');
    section.append(divContainerProduct)

    if (productos.length == 0) {
      productos.push({
        name: 'Producto no encontrado',
        url_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwUjjXPpp1wmubF_5RX6Rqp5lSLsOkzdkMrdZJlp9N5BCB8vjJ26HmEIxdnfjVIa0cPA&usqp=CAU',
        price: '',
        discount: 0
      })
    }

    productos.forEach((product) => {
      
      
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
  
      b.innerHTML = ""
      if (product.discount > 0) {
        b.innerText = 'Discount: '
        spanDiscount.innerText = product.discount;
  
      }
  
      // divContainer.append(section)
      // section.append(h2)
      // section.append(divContainerProduct)
  
      divContainerProduct.append(article);
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