function headerContent() {
    var menu = `<div id="menu">menu</div>`;
    var logo = `<div id="logo">StreetSoul</div>`;
    var dropdown = `<div class="dropdown"></div>`;

    $('#header').append(menu);
    $('#header').append(logo);
    $('#header').append(dropdown);
};

headerContent();

function svgDropdown() {
    var svg = `
        <div id="myProfile" class="btn dropdown-toggle dropdown-toggle-unstyled" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svgProfile">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        </div>
    `;

    $('.dropdown').append(svg);
};

svgDropdown();

function dropdownBodyHeader() {
    var dropdownListHeader = `<ul class="dropdown-menu"></ul>`;
    $('.dropdown').append(dropdownListHeader)
};

dropdownBodyHeader();

function itemDropdown(id, title) {
    var item = `<li><button class="item-dropdown" id="${id}">${title}</button></li>`;
    $('.dropdown-menu').append(item)
}

itemDropdown('signIn', 'Entrar');
itemDropdown('signUp', 'Cadastre-se');

$(document).on('click', '#signIn', function() {

    window.location.href = 'http://localhost/trab/pages/signIn.html';
    
});

$(document).on('click', '#signUp', function() {
   
    window.location.href = 'http://localhost/trab/pages/signUp.html';
    
});