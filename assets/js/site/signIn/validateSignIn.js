function login() {
    const form = $('#templateSignIn');

    $.ajax({
        url: 'http://localhost/shopMVC/login',
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        complete: function(response) {
            console.log('back: ' + response.responseJSON.result);

            if(response.responseJSON.result == false) {
                errorSvg('emailSingInContent', 'Email ou senha inválidos');
                errorSvg('pwSingInContent', 'Email ou senha inválidos');
                $('#emailSingIn').addClass('inputFormStatusError');
                $('#pwSingIn').addClass('inputFormStatusError');
            } 
        }
    });
};

function activeKeyup() {
    $('#emailSingIn, #pwSingIn').on('keyup', function() {
        var inputIdSelected = $(this).attr('id');
        var idParent = $(this).parent().attr('id');
    
        if ($(this).val().trim() !== '') {
            $('#' + idParent + ' .svgError').hide();
            $(`#${inputIdSelected}`).removeClass('inputFormStatusError');
        } else {
            $('#' + idParent + ' .svgError').show();
            $('#' + inputIdSelected).addClass('inputFormStatusError');
        };
    });
}

$('#buttonSubmitForm').click(function() {
    login();
    activeKeyup();
})