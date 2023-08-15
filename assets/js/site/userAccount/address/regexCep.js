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