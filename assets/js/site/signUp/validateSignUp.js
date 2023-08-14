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
            
            complete: function(response) {
                console.log('back: ' + response.responseJSON.result);
                if(response.responseJSON.result == false) {
                    credentialsValid = false;
                    errorSvg('emailComponent', 'Email invalido');
                    $('#email').addClass('inputFormStatusError');
                    return;
                }
                setTimeout(function() {
                    $('#templateSignUp').html(` 
                        <div class="templateLoading">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>`
                    );
                })
                setTimeout(function() {
                    $('#templateSignUp').hide();
                    $('#signUpComponent').append(`
                        <div id="templateSuccess">
                            <svg  id="svgSuccess" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span id="textSuccess">Conta criada com sucesso!</span>
                        </div>
                    `)
                }, 1500)

                setTimeout(function() {
                    window.location.href = 'http://localhost/shopMVC/signIn';
                }, 3000)

            }
        });
    }
};

function activeKeyup() {
    $('#name, #lastname, #email, #password').on('keyup', function() {
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

$('#btnCreateAccount').click(function() {
    validateForm();
    validateEmail();
    handleSubmit();
    activeKeyup();
})