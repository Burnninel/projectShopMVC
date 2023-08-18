function inputNumberCard(idElement) {
    const inputNumberCard = `<div class="inputStyling" id="${idElement}"></div>`;
    $('#formCard').append(inputNumberCard);
};

inputNumberCard('numberElement');

function inputSecurity() {
    const multipleInputRowForm = `<div class="multipleInputRowForm inputStyling" id="cardSecurity"></div>`;
    $('#formCard').append(multipleInputRowForm);
};

inputSecurity();

function nameCard(idElement) {
    var nameCard = `
        <div class="inputStyling" id="${idElement}"> <input type="text" name="nameCard" class="inputBodyInfo" id="nameCard" placeholder="nome do titular" maxlength="40"></div>
    `;

    $('#formCard').append(nameCard);
};

nameCard('nameElement');

function cardInfo() {
    const cardInfo = `<div class="multipleInputRowForm" id="cardInfo"></div>`;
    $('#formCard').append(cardInfo);
};

cardInfo();

function btnAddCard() {
    const btnAddCard = `<div class="inputsAddress"> <button id="btnAddCard" class="btnFormAccount" type="button">adicionar cartão</button> </div>`;
    $('#formCard').append(btnAddCard);
};

btnAddCard();