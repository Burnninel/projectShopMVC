function cardItemCarousel(id, productName, alt, productImg, productValue, component) {
    var parcelValue = productValue / 10;  
    var card = `
      <div class="card cardItemShop" id="${id}">
        <div class="itemShop">
          <img src="${PATH}/assets/img/${productImg}.png" alt="${alt}" class="imgItem">
          <div class="formAddressItemShop">
            <h5 class="title">${productName}</h5>
            <span class="productValue">R$${productValue}</span>
            <span class="parcelProductValue">10x de R$${parcelValue} sem juros</span>
            <button class="btnBuyCarousel">Comprar</button>
          </div>
        </div>
      </div>
    `;

    $(`#${component}`).append(card);
};

function carousel(idCarousel, active) {  
  var carousel = `
    <div class="carousel-item ${active}">
        <div class="carouselBody" id="${idCarousel}"></div>
    </div>
  `;

    $('.carousel-inner').append(carousel);
};

function carouselComponent() {
  var carousel =  ` <div class="carousel slide" id="myCarousel"> <div class="carousel-inner"></div> </div>`;
  $('#componentCarousel').append(carousel);
};

function carouselArrows(className, id, slide, svg) {

  var arrowsElement = `
    <div class="${className} btnCarousel" id="${id}" data-bs-target="#myCarousel" data-bs-slide="${slide}">
        ${svg}
    </div>
  `;

  $('#componentCarousel').append(arrowsElement);
};

var svgNext = `<svg class="svgCarousel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>`;
var svgPrev = `<svg class="svgCarousel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg> `;

carouselArrows('prev', 'btnPrevCarousel', 'prev', svgPrev);

carouselComponent();

carouselArrows('next', 'btnNextCarousel', 'next', svgNext);

carousel('firstCarousel', 'active');
carousel('secondCarousel');

cardItemCarousel('one', '1', 'product1', 'product1', '999.90', 'firstCarousel');
cardItemCarousel('two', '2', 'product2', 'product1', '999.90', 'firstCarousel');
cardItemCarousel('three', '3', 'product3', 'product1', '999.90', 'firstCarousel');
cardItemCarousel('four', '4', 'product4', 'product1', '999.90', 'firstCarousel');

cardItemCarousel('five', '5', 'product5', 'product1','1999.90', 'secondCarousel');
cardItemCarousel('six', '6', 'product6', 'product1', '1999.90', 'secondCarousel');
cardItemCarousel('seven', '7', 'product6', 'product1', '1999.90', 'secondCarousel');
cardItemCarousel('eitch', '8', 'product7', 'product1', '1999.90', 'secondCarousel');