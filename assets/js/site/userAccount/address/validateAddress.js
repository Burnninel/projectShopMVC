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

function handleSubmit() {
    const form = $('#formAddress');

    if(addressValid) {

        $.ajax({
            url: 'http://localhost/shopMVC/address',
            type: 'POST',
            data: form.serialize(),
            dataType: 'json',
            complete: function(response) {
                console.log('back: ' + response.responseJSON.result);
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
    handleSubmit();
    addErrorForm('titleHeaderAddressCard', 'profileBody', 'btnSubmitAddress');
    svgError();
    keyupAddres();
});