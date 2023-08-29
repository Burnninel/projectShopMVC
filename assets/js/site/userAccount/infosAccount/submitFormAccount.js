function handleSubmitAccountUpdate() {
    const form = $('#accountDetails');

    $.ajax({
        url: 'http://localhost/shopMVC/updateDetailsAccount',
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        complete: function(response) {
            console.log('back: ' + response.responseJSON.result);
        },
    });
}


$('#btnInfosAccount').click(function() {
    handleSubmitAccountUpdate();
})