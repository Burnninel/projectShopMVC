function dropdownValidity(id) {
    const dropdown = `<div class="dropdown" id="${id}"></div>`;
    $('#cardSecurity').append(dropdown);
};

dropdownValidity('monthValidityCard');
dropdownValidity('yearValidityCard');

function generateItemDropdownMonth() {
    const month = 13;

    for (i = 1; i < month; i++) {
        if(i < 10) {
            const itemMount = `<li class="itemDropdown itemMonth"><span class="textItemDropdown">${'0' + i}</span></li>`;
            $('#listItemMonth').append(itemMount);        
        } else {
            const itemMount = `<li class="itemDropdown itemMonth"><span class="textItemDropdown">${i}</span></li>`;
            $('#listItemMonth').append(itemMount);  
        };
    };
};

function generateItemDropdownYear() {
    const year = 1900;

    for (i = 2035; i > year; i--) {
            const itemYear = `<li class="itemDropdown itemYear"><span class="textItemDropdown">${i}</span></li>`;
            $('#listItemYear').append(itemYear);        
    };
};

function btnDropdown(idElement, id, name, text, element) {
    const btnMonth = `<div class="inputStyling" id="${idElement}"> <input type="number" class="inputBodyInfo" id="${id}" data-bs-toggle="dropdown" aria-expanded="false" name="${name}" placeholder="${text}"> </div>`;
    $(`#${element}`).append(btnMonth);
};

function listItemDropdown(id, element) {
    const listItemDropdown = `<ul class="dropdown-menu p-0 listValidityCard" id="${id}"></ul>`;
    $(`#${element}`).append(listItemDropdown);
};

function cvvElement(idElement, type, name, idInput, placeholder, maxlength) {
    const cvvElement = `<div class="inputStyling" id="${idElement}"> <input type="${type}" name="${name}" id="${idInput}" class="inputBodyInfo" placeholder="${placeholder}" maxlength="${maxlength}"> </div>`;
    $(`#cardSecurity`).append(cvvElement);
};

function dropdownValidityMounth() {
    btnDropdown('monthElement', 'month', 'month', 'mês', 'monthValidityCard');
    listItemDropdown('listItemMonth', 'monthElement');
    generateItemDropdownMonth();

    btnDropdown('yearElement', 'year', 'year', 'ano', 'yearValidityCard');
    listItemDropdown('listItemYear', 'yearElement');
    generateItemDropdownYear();
    
    cvvElement('cvvElement', 'number', 'cvv', 'cvv', 'cvv', '3');

};

dropdownValidityMounth();


$('.itemMonth').click(function() {
        const nameSelect = $(this).text();
        $('#month').val(nameSelect);
});

$('.itemYear').click(function() {
    const nameSelect = $(this).text();
    $('#year').val(nameSelect);
});