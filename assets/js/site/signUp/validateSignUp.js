var credentialsValid = true;

function validateInput(id, tooltip) {
    if(!id.val()) {
        errorSvg(id.attr('id') + 'Component', tooltip);
        $('#' + id.attr('id')).addClass('inputFormStatusError');
        return false;
    };
    
    return true;
};

function validateForm() {
    var name = $('#name');
    var lastName = $('#lastname');
    var password = $('#password');

    credentialsValid = validateInput(name, 'Digite um nome válido') ||
                       validateInput(lastName, 'Digite um sobrenome válido') ||
                       validateInput(password, 'Digite uma senha válida');
};

function validateEmail() {
    var email = $('#email').val();
    var emailRegex = /^\S+@\S+\.\S+$/;

    if(!email.match(emailRegex)) {
        credentialsValid = false;
        errorSvg('emailComponent', 'Email inválido');
        $('#email').addClass('inputFormStatusError');
        return;
    };
}

function handleSubmit() {
    const form = $('#templateSignUp');

    if(credentialsValid) {
        $.ajax({
            url: 'http://localhost/shopMVC/submit',
            type: 'POST',
            data: form.serialize(),
            dataType: 'json',
            beforeSend: function() {
                $('#btnCreateAccount').text('Carregando...');
            },
            complete: function(response) {
                console.log('back: ' + response.responseJSON.result);
                if(response.responseJSON.result == false) {
                    credentialsValid = false;
                    errorSvg('emailComponent', 'Email invalido');
                    $('#email').addClass('inputFormStatusError');
                    return;
                }
            }
        });
    }
};

function activeKeyup() {
    $('#name, #lastname, #password').on('keyup', function() {
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

$('#btnCreateAccount').click(function() {
    validateForm();
    validateEmail();
    handleSubmit();
    activeKeyup();
})