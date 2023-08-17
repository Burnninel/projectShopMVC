$(document).ready(function() {
    $('#cep').on('input', function() {
        var cep = $(this).val();

        cep = cep.replace(/\D/g, '');

        if (cep.length > 5) {
            cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
        }

        $(this).val(cep);
    });
});

$('#btnSearchCEP').click(function() {
    var cep = $('#cep').val()

    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#street').val(data.logradouro);
            $('#neighborhood').val(data.bairro);
            $('#city').val(data.localidade);
            $('#uf').val(data.uf);
            console.log(data)
        },
        error: function (xhr, status, error) {
            console.log(status, xhr, error);
        }
    });
});