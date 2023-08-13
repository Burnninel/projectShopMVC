var credentialsValid = true;

function validateInput(id) {
    if(!id) {
        return false;
    };
    
    return true;
};

function validateForm() {
    var name = $('#name').val();
    var lastName = $('#lastname').val();
    var password = $('#password').val();

    credentialsValid = validateInput(name) ||
                       validateInput(lastName) ||
                       validateInput(password);
};

function validateEmail() {
    var email = $('#email').val();
    var emailRegex = /^\S+@\S+\.\S+$/;

    if(!email.match(emailRegex)) {
        credentialsValid = false;
        console.log('emailRegex: ' + credentialsValid);
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
                    console.log('front: ' + credentialsValid);
                    return;
                }
            }
        });
    }
};

$('#btnCreateAccount').click(function() {
    validateForm();
    validateEmail();
    handleSubmit();
})