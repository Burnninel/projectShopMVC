function login() {
    const form = $('#templateSignIn');

    $.ajax({
        url: 'http://localhost/shopMVC/login',
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        
        complete: function(response) {
            console.log('back: ' + response.responseJSON.result);
        }
    });
};

$('#buttonSubmitForm').click(function() {
    login();
})
