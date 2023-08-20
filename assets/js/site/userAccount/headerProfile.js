function btnAlterAddressCard() {
    const btnAlterInfoCard = `<div id="checkboxAlterAddressCard"></div>`;
    $('#headerAlterAddressCard').append(btnAlterInfoCard);
};

function titleAddressCard() {
    const titleAddressCard = `<span id="titleHeaderAddressCard">Adicionar endereço</span>`;
    $('#headerAlterAddressCard').append(titleAddressCard);
}

function svgAddressInfo(typeBtnAlter, id, svg) {
    const checkboxAlterCardInfo = 
                                `
                                    <div class="${typeBtnAlter}" id="${id}">
                                        ${svg}
                                    </div>
                                `;
    
    $('#checkboxAlterAddressCard').append(checkboxAlterCardInfo);
};

var svgMap = `<svg  class="svgInfosProfile" id="card" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /> </svg>`;
var svgCard = `<svg class="svgInfosProfile" id="map" .xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /> <path stroke-linecap="round" stroke-linejoin="round"d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /> </svg>`;

titleAddressCard();

btnAlterAddressCard();

svgAddressInfo('checkboxOn', 'btnAlterLeft', svgCard);
svgAddressInfo('checkboxOff', 'btnAlterRight', svgMap);