var credentialsInvalid = false;

function validateSignUp(id) {
    if (!id) {
        return true;
    };

    return false;
};

function valuesForm() {
    var name = $('#name').val();
    var lastName = $('#lastname').val();
    var password = $('#password').val();

    credentialsInvalid = validateSignUp(name) ||
                         validateSignUp(lastName) ||
                         validateSignUp(password);
};

function validationEmail() {
    const form = $('#templateSignUp');

    $.ajax({
        url: 'http://localhost/shopMVC/submit',
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        beforeSend: function() {
            $('#btnCreateAccount').html('Carregando..');
        },
        complete: function(response) {
            console.log(response.responseJSON.result)
        }
    });
};

$('#btnCreateAccount').click(function() {
    valuesForm();
    validationEmail();
})