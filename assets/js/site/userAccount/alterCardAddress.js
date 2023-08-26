function checkboxAlter() {
    $('#btnMap').addClass('itemActive');

    $('#checkboxAlterAddressCard').click(function() {
       
        if ($('#btnCard').hasClass('itemActive')) {
            $('#btnCard').removeClass('itemActive');

            $('#btnCard').removeClass('checkboxOn');
            $('#btnMap').addClass('checkboxOn');
            $('#btnCard').addClass('checkboxOff');

            $('#btnMap').addClass('itemActive');

            $('#formCard').hide();
            $('#formAddress').show();

            $('#titleHeaderAddressCard').text('Adicionar endereço');
        } else {
            $('#btnCard').addClass('itemActive');
            $('#btnMap').removeClass('itemActive');

            $('#btnMap').removeClass('checkboxOn');
            $('#btnCard').addClass('checkboxOn');
            $('#btnMap').addClass('checkboxOff');            
            
            $('#formAddress').hide();
            $('#formCard').show();

            $('#titleHeaderAddressCard').text('Adicionar cartão');
        };

    });

}

checkboxAlter();