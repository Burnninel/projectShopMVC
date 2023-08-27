function componentProminenceItens() {
    var componentProminenceItens = 
            `
            <h4 id="titleProminence">destaque</h4>
            <div id="imgCard">
                <div class="firstCardImgProminence"></div>
                <div class="secondCardImgProminence"></div>
            </div>
            `;

    $('#componentProminenceItens').append(componentProminenceItens);
};

componentProminenceItens();

function cardItemImgProminence(img, btn, group) {
    var componentProminenceItens = 
            `
            <div class="cardItemImgProminence">
                <img src="${PATH}/assets/img/${img}.png" alt="" class="itemImgProminence">
                <button class="btnCardImgProminence">${btn}</button>
            </div>
            `;

    $(`.${group}`).append(componentProminenceItens);
};

cardItemImgProminence('imgProminenceOne', 'jaquetas', 'firstCardImgProminence');
cardItemImgProminence('imgProminenceTwo', 'fleeces', 'firstCardImgProminence');
cardItemImgProminence('imgProminenceThree', 'calças', 'secondCardImgProminence');
cardItemImgProminence('imgProminenceFour', 'botas', 'secondCardImgProminence');