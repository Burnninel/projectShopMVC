function checkboxAlter() {
    $('#btnMap').addClass('itemActive');

    $('#checkboxAlterAddressCard').click(function() {

        if ($('#btnCard').hasClass('itemActive')) {
            $('#btnCard').removeClass('itemActive');

            $('#btnCard').removeClass('checkboxOn');
            $('#btnMap').addClass('checkboxOn');
            $('#btnMap').css('color', '#fff');

            $('#btnCard').addClass('checkboxOff');
            $('#btnCard').css('color', '#ffffff23');

            $('#btnMap').addClass('itemActive');

            $('#formCard').hide();
            $('#formAddress').show();

            $('#titleHeaderAddressCard').text('Adicionar endereço');
        } else {
            $('#btnCard').addClass('itemActive');
            $('#btnMap').removeClass('itemActive');

            $('#btnMap').removeClass('checkboxOn');
            $('#btnMap').addClass('checkboxOff');            
            $('#btnMap').css('color', '#ffffff23');

            $('#btnCard').addClass('checkboxOn');
            $('#btnCard').css('color', '#fff');
            
            $('#formAddress').hide();
            $('#formCard').show();

            $('#titleHeaderAddressCard').text('Adicionar cartão');
        };

    });

}

checkboxAlter();