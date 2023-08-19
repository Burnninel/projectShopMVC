function infoCard(elementId, type, name, maxlength, inputId, placeholder) {
    const infoCard = `
        <div id="${elementId}" class="inputStyling">
            <input type="${type}" name="${name}" maxlength="${maxlength}" class="inputBodyInfo" id="${inputId}" placeholder="${placeholder}">
        </div>
    `;
    
    $('#cardInfo').append(infoCard);
};

infoCard('cpfElement', 'text', 'cpf', '14', 'cpf', 'cpf');
infoCard('nickElement', 'text', 'nick', '16', 'nick', 'apelido');