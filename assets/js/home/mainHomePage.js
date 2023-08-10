function imageFrontHomePage() {
    var imageFront = `
        <div id="componentImgShopAll">
            <img src="${PATH}/assets/img/image.png" id="imgShopAll" alt="imgShopAll">
        </div>
    `;

    $('#componentsHome').append(imageFront);
};

imageFrontHomePage();

function prominenceItensHomePage() {
    var prominenceItens = `
        <div id="componentProminenceItens"></div>
    `;

    $('#componentsHome').append(prominenceItens);
};

prominenceItensHomePage();

function bannerHomePage() {
    var bannerHomePage = `
        <div id="componentBannerSnow"></div>
    `;

    $('#componentsHome').append(bannerHomePage);
};

bannerHomePage();

function titleCarouselHomePage() {
    var titleCarousel = `
        <h4 id="titleCarousel">novidades</h4>
    `;

    $('#componentsHome').append(titleCarousel);
}

titleCarouselHomePage();

function carouselHomePage() {
    var carouselHomePage = `
        <div id="componentCarousel" class="container text-center"></div>
    `;

    $('#componentsHome').append(carouselHomePage);
};

carouselHomePage();

function footerHomePage() {
    var footerHomePage = `
        <footer id="footerHome"></footer>`
    ;

    $('#componentsHome').append(footerHomePage);
};

footerHomePage();