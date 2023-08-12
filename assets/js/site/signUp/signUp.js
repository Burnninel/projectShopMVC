form('templateSignUp', 'post', 'signUpComponent')

titleForm('titleSingUp', 'Criar uma conta', 'templateSignUp')

formBody('form', 'templateSignUp');

inputsForms('myName', 'text', 'name', 'name', 'insira seu nome', 'form');
inputsForms('myLastName', 'text', 'lastname', 'lastName', 'insira seu sobrenome', 'form');
inputsForms('myEmail', 'email', 'email', 'email', 'insira seu email', 'form');
inputsForms('myPassword', 'password', 'password', 'password', 'insira sua senha', 'form');

btnForm('btnCreateAccount', 'Enviar', 'form');

$('#btnCreateAccount').click(function() {
    const form = $('#templateSignUp');

    $.ajax({
        url: 'http://localhost/shopMVC/submit',
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        beforeSend: function() {
            $('#btnCreateAccount').text('Carregando...');
        },
        complete: function(response) {
            $('#btnCreateAccount').text('Enviar');
        }
    });

});