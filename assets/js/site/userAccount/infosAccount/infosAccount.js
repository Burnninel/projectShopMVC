function infosAccount() {
    const infosAccount = `<div id="infosAccount"></div>`;
    $('#profileBody').append(infosAccount);
}

infosAccount();

function headerInfosAccount() {
    const header = `<div id="headerInfosAccount"></div>`;
    $('#infosAccount').append(header);
};

headerInfosAccount();

function titleInfosAccount() {
    const title = `<h3 id="titleInfosAccount">Informações da conta</h3>`;
    $('#headerInfosAccount').append(title);
};

titleInfosAccount();

function editInfosProfile() {
    const btnEdit = `<div id="editInfosProfile"></div>`;
    $('#headerInfosAccount').append(btnEdit);
};

editInfosProfile();

function svgInfosAccount() {
    const svgEdit = `
        <div id="svgInfosAccount">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" fill="none" viewBox="0 0 24 24" stroke="#fff" stroke-width="1.5" id="goHomeAccount" class="svgAccount"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" fill="none" viewBox="0 0 24 24" stroke="#fff" stroke-width="1.5" id="editInfosAccount" class="svgAccount"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </div>
    `;
    
    $('#editInfosProfile').append(svgEdit);
};

svgInfosAccount()

function accountDetails() {
    const accountDetails = `<form id="accountDetails" method="post"></form>`;
    $('#infosAccount').append(accountDetails);
};

accountDetails();

function elementsAccountDetails(forLabel, textLabel, type, nameInput, id, statusInput) {
    let elementsAccount = `
        <div class="elementAccount" id="${id + 'Component'}">
            <label for="${forLabel}" class="labelAccountDetails">${textLabel}:</label>
            <div id="${id + 'Element'}" class="elementInputDetails">
                <input type="${type}" name="${nameInput}" id="${id}" class="inputAccountDetails" ${statusInput}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="none" viewBox="0 0 24 24" stroke="#ffffffb8" stroke-width="1.5" class="lockInput"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
        </div>
    `;

    $('#accountDetails').append(elementsAccount);
};

elementsAccountDetails('userName', 'Nome', 'text', 'userName', 'userName', 'disabled');
elementsAccountDetails('userName', 'Sobrenome', 'text', 'userLastname', 'userLastname', 'disabled');
elementsAccountDetails('userName', 'Email', 'text', 'userEmail', 'userEmail', 'disabled');
elementsAccountDetails('userName', 'Senha', 'password', 'userPassword', 'userPassword', 'disabled');

function btnInfosProfile() {
    const btn = `<button id="btnInfosAccount" type="button" disabled>salvar</button>`;
    $('#accountDetails').append(btn);
}

btnInfosProfile();

$('#menuAccount').click(function() {
    $('#infosProfile').hide();
    $('#infosAccount').show();
});