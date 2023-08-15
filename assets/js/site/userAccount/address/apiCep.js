$('#btnSearchCEP').click(function() {
    var cep = $('#cep').val()

    console.log('ola')

    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#streetAddress').val(data.logradouro);
            $('#villageAddress').val(data.bairro);
            $('#cityAddress').val(data.localidade);
            $('#ufAddress').val(data.uf);
            console.log(data)
        },
        error: function (xhr, status, error) {
            console.log(status, xhr, error);
        }
    });
});