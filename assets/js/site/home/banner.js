function containerBanner(title, id, btn, img, alt) {
    var containerBanner = `
        <div class="containerImgBanner">
            <div class="elementGroupBannerSnow">
                <span class="titleBannerSnow">${title}</span>
                <button class="btnBannerSnow" id="${id}">${btn}</button>  
            </div>
            <img src="${PATH}/assets/img/${img}.png" class="imgBanner" alt="${alt}">
        </div>
    `;
    
    $('#componentBannerSnow').append(containerBanner);
};

containerBanner('masculino', 'btnBannerMan', 'shop now',  'bannerNeveMasculino', 'imgBannerMan');
containerBanner('feminino', 'btnBannerWoman', 'shop now', 'bannerNeveFeminino', 'imgBannerWoman');