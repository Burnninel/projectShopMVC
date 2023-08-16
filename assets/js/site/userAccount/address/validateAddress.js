
function handleSubmit() {
    const form = $('#formAddress');

        $.ajax({
            url: 'http://localhost/shopMVC/address',
            type: 'POST',
            data: form.serialize(),
            dataType: 'json',
            complete: function(response) {
                console.log('back: ' + response.responseJSON.result);
            }
        });
};

$('#btnSubmitAddress').click(function(event) {
    handleSubmit();
});