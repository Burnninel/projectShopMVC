$(document).ready(function() {
    $('#btnAlterLeft').addClass('itemActive');

    $('#checkboxAlterAddressCard').click(function() {
       
        if ($('#btnAlterRight').hasClass('itemActive')) {
            $('#btnAlterRight').removeClass('itemActive');

            $('#btnAlterRight').removeClass('checkboxOn');
            $('#btnAlterLeft').addClass('checkboxOn');
            $('#btnAlterRight').addClass('checkboxOff');

            $('#btnAlterLeft').addClass('itemActive');

            $('#formCard').hide();
            $('#formAddress').show();

            $('#titleHeaderAddressCard').text('Adicionar endereço');
        } else {
            $('#btnAlterRight').addClass('itemActive');
            $('#btnAlterLeft').removeClass('itemActive');

            $('#btnAlterLeft').removeClass('checkboxOn');
            $('#btnAlterRight').addClass('checkboxOn');
            $('#btnAlterLeft').addClass('checkboxOff');            
            
            $('#formAddress').hide();
            $('#formCard').show();

            $('#titleHeaderAddressCard').text('Adicionar cartão');
        };

    });

});