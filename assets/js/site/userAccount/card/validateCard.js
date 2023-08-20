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

    if(cardValid) {
        $.ajax({
            url: 'http://localhost/shopMVC/card',
            type: 'POST',
            data: form.serialize(),
            dataType: 'json',
            complete: function(response) {
                console.log('back: ' + response.responseJSON.result);
                if(response.responseJSON.result == true) {
                    setTimeout(function() {
                        $('#profileBody').html(` 
                            <div class="loadingFormAccount">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>`
                        )
                        setTimeout(function() {
                            $('#profileBody').hide();
                            $('#myAccount').append(`
                                <div id="templateSuccess">
                                    <svg  id="svgSuccess" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span id="textSuccess">Cartão cadastrado com sucesso!</span>
                                </div>
                            `)
                        }, 1500)
                        setTimeout(function() {
                            window.location.href = 'http://localhost/shopMVC/account';
                        }, 2500)
                    })
                }
            }
        });
    }

};

function keyupCard() {
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
    addErrorForm('titleHeaderAddressCard', 'profileBody', 'btnAddCard');
    removeErrorForm('titleHeaderAddressCard', 'profileBody', 'btnAddCard');
    addErrorFormAccount('card', 'checkboxAlterAddressCard', 'btnSearchCEP', 'svgSearchBtn');
    removeErrorFormAccount('card', 'checkboxAlterAddressCard', 'btnSearchCEP', 'svgSearchBtn');
    keyupCard();
});