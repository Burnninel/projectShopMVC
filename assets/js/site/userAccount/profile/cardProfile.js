function imgAccount() {
    const img = `<div id="myPhoto" data-bs-toggle="modal" data-bs-target="#modalForm"></div>`;
    $('#cardAccount').append(img)
}

imgAccount();

function itemCardAccount(id) {
    let item = `<div id="${id}"></div>`;
    $('#cardAccount').append(item);
};

itemCardAccount('myNickname');
itemCardAccount('dateCreate');
itemCardAccount('menuInfosAccount');

function dateCreate(id, text) {
    var span = `<span id="${id}">${text}</span>`;

    $('#dateCreate').append(span);
};

dateCreate('titleDate', 'Entrou em:');
dateCreate('textDate');

function svgMenuProfile(id, svg) {
    var svg = `
        <div id="${id}" class="svgMenuProfile">
            ${svg}
        </div>
    `;

    $('#menuInfosAccount').append(svg);
};

function menusCardProfile() {
    const svgAccount = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" height="1.1rem"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`;
    const svgMap = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" height="1.1rem"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>`;
    const svgCard = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" height="1.1rem"><path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/></svg>`;

    svgMenuProfile('menuAccount', svgAccount);
    svgMenuProfile('menuMap', svgMap);
    svgMenuProfile('menuCard', svgCard);
}

menusCardProfile();