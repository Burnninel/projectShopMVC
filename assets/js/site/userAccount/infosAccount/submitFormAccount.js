var dataAccountValid = true;

function errorSvgAccount(element, tooltip) {
    var error = `
        <svg xmlns="http://www.w3.org/2000/svg" id="${element}" class="svgError w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="${tooltip}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
    `;

    if ($('#' + element + ' .svgError').length === 0) {
        $('#' + element).append(error)
        $('#' + element + 'Svg').hide()
    };

    $('#' + element + ' .svgError').hover(function () {
        $('#' + element + ' .svgError').tooltip('show');
    });
};

function validateInputDetailsAccount(id, tooltip) {
    if(!id.val()) {
        errorSvgAccount(id.attr('id') + 'Element', tooltip);
        $('#' + id.attr('id') + 'Component').css({'border-color': '#ec2626', 'color': '#ec2626'});
        $('#' + id.attr('id')).css('color', '#ec2626');
        return false;
    };
    
    return true;
};

function valuesFormDetailsAccount() {
    let userName = $('#userName');
    let userLastname = $('#userLastname');
    let userEmail = $('#userEmail');
    let userPassword = $('#userPassword');
    
    dataAccountValid = validateInputDetailsAccount(userName, 'Nome inválido');
    dataAccountValid = validateInputDetailsAccount(userLastname, 'Sobrenome inválido');
    dataAccountValid = validateInputDetailsAccount(userEmail, 'Email inválido');
    dataAccountValid = validateInputDetailsAccount(userPassword, 'Senha inválida'); 
}

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

function keyupAccountDetails() {
    $('#userName, #userLastname, #userEmail, #userPassword').on('keyup', function() {
        var inputIdSelected = $(this).attr('id');
        var idParent = $(this).parent().attr('id');
    
        var idGrandparent = $('#' + idParent).parent().attr('id');
        
        var idSvgUnlock = $('#' + idParent + 'Svg').attr('id');

        if ($(this).val().trim() !== '') {
            $('#' + idParent + ' .svgError').hide();
            $('#' + idSvgUnlock).show();
            $('#' + inputIdSelected).removeClass('inputFormStatusError');
            $('#' + inputIdSelected).css('color', '#fff');
            $('#' + idGrandparent).css({'border-color': '#fff', 'color': '#fff'})
            
        } else {
            $('#' + idSvgUnlock).hide();
            errorSvgAccount(inputIdSelected + 'Element', 'Dados inválidos');
            $('#' + idParent + ' .svgError').show();
            $('#' + inputIdSelected).css('color', '#ec2626');
            $('#' + idGrandparent).css({'border-color': '#ec2626', 'color': '#ec2626'})
        };
    });
}

$('#btnInfosAccount').click(function() {
    valuesFormDetailsAccount();
    handleSubmitAccountUpdate();
    keyupAccountDetails();
})