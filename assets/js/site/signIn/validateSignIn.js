function login() {
    const form = $('#templateSignIn');

    $.ajax({
        url: 'http://localhost/shopMVC/login',
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        complete: function(response) {
            if(response.responseJSON.result == false) {
                errorSvg('emailSingInContent', 'Email ou senha inválidos');
                errorSvg('pwSingInContent', 'Email ou senha inválidos');
                $('#emailSingIn').addClass('inputFormStatusError');
                $('#pwSingIn').addClass('inputFormStatusError');
                addErrorForm('templateSignIn', 'buttonSubmitForm');
                return;
            } 
            setTimeout(function() {
                $('body').html(` 
                    <div id="signIn">
                        <span class="loader"></span>
                    </div>

                `);
            })
            setTimeout(function() {
                window.location.href = 'http://localhost/shopMVC/account';
            }, 3000)
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
    removeErrorForm('templateSignIn', 'buttonSubmitForm');

})