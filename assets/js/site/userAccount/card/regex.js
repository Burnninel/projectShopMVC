$(document).ready(function() {
    function formatCPF(cpf) {
      cpf = cpf.replace(/\D/g, '');
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d{2})$/, '$1-$2');
      return cpf;
    };

    $("#cpfCard").on('input', function() {
      var cpf = $(this).val();
      var formattedCPF = formatCPF(cpf);
      $(this).val(formattedCPF);
    });
});

$(document).ready(function() {
    $("#numberCard").on('input', function() {
      var number = $(this).val().replace(/\D/g, '');
      var formattedNumber = number.replace(/(\d{4})(?=\d)/g, '$1 ');
      $(this).val(formattedNumber);
    });
});