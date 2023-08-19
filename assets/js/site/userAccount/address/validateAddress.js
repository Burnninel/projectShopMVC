var addressValid = true;

function validateInput(id, tooltip) {
    if(!id.val()) {
       
        errorSvg(id.attr('id') + 'Component', tooltip);
        $('#' + id.attr('id')).addClass('inputFormStatusError');
        return false;
    };
    
    return true;
};

function valuesForm() {
    var cep = $('#cep');
    var street = $('#street');
    var numberAddress = $('#number');
    var neighborhood = $('#neighborhood');
    var city = $('#city');
    var uf = $('#uf');
    
    addressValid = validateInput(cep, 'Digite um cep válido');
    addressValid = validateInput(street, 'Rua inválida');
    addressValid = validateInput(numberAddress, 'Numero inválido');
    addressValid = validateInput(neighborhood, 'Bairro inválido'); 
    addressValid = validateInput(city, 'Cidade inválida');
    addressValid = validateInput(uf, 'Uf inválida');

}

function handleSubmitAddress() {
    const form = $('#formAddress');

    if(addressValid) {

        $.ajax({
            url: 'http://localhost/shopMVC/address',
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
                                    <span id="textSuccess">Endereço cadastrado com sucesso!</span>
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

function keyupAddres() {
    $('#cep, #street, #number, #neighborhood, #city, #uf').on('keyup', function() {
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

$('#btnSubmitAddress').click(function(event) {
    valuesForm();
    handleSubmitAddress();
    addErrorForm('titleHeaderAddressCard', 'profileBody', 'btnSubmitAddress');
    removeErrorForm('titleHeaderAddressCard', 'profileBody', 'btnSubmitAddress');
    addErrorFormAccount('map', 'chackboxAlterCardInfo', 'btnSearchCEP', 'svgSearchBtn');
    removeErrorFormAccount('map', 'chackboxAlterCardInfo', 'btnSearchCEP', 'svgSearchBtn');
    keyupAddres();
});