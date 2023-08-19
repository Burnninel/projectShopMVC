var cardValid = true;

function validateInputCard(id, tooltip) {
    if(!id.val()) {
       
        errorSvg(id.attr('id') + 'Element', tooltip);
        $('#' + id.attr('id')).addClass('inputFormStatusError');
        return false;
    };
    
    return true;
};

function valuesFormCard() {
    var numberCard = $('#numberCard');
    var month = $('#month');
    var year = $('#year');
    var cvv = $('#cvv');
    var nameCard = $('#nameCard');
    var cpf = $('#cpf');
    var nick = $('#nick');
    
    cardValid = validateInputCard(numberCard, 'Número inválido');
    cardValid = validateInputCard(month, 'Mês inválido');
    cardValid = validateInputCard(year, 'Ano inválido');
    cardValid = validateInputCard(cvv, 'CVV inválido'); 
    cardValid = validateInputCard(nameCard, 'Nome inválido');
    cardValid = validateInputCard(cpf, 'CPF inválido');
    cardValid = validateInputCard(nick, 'Apelido inválido');

}

function handleSubmitCard() {
    const form = $('#formCard');

    $.ajax({
        url: 'http://localhost/shopMVC/card',
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        complete: function(response) {
            console.log('back: ' + response.responseJSON.result);
        }
    });

};

function keyupAddres() {
    $('#numberCard, #month, #year, #cvv, #nameCard, #cpf, #nick').on('keyup', function() {
        var inputIdSelected = $(this).attr('id');
        var idParent = $(this).parent().attr('id');
    
        if ($(this).val().trim() !== '') {
            $('#' + idParent + ' .svgError').hide();
            $(`#${inputIdSelected}`).removeClass('inputFormStatusError');
        } else {
            $('#' + idParent + ' .svgError').show();
            $(`#${inputIdSelected}`).addClass('inputFormStatusError');
        };
    });
}

$('#btnAddCard').click(function() {
    handleSubmitCard();
    valuesFormCard();
    keyupAddres();
    
});