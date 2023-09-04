var dataAccountValid = true;

function addErrorIconProfile(element, tooltip) {
    let error = `
        <svg xmlns="http://www.w3.org/2000/svg" id="${element}" class="svgError w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="${tooltip}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
    `;

    if ($('#' + element + ' .svgError').length === 0) {
        $('#' + element).append(error);
        $('#' + element + 'Svg').hide();
    };

    $('#' + element + ' .svgError').hover(function () {
        $('#' + element + ' .svgError').tooltip('show');
    });
};

function errorFormProfile(color) {
    $('#btnInfosAccount').css({ 'color': `${color}`, 'border-color': `${color}` });
    $('#titleInfosAccount').css('color', `${color}`);
    $('#profileBody').css('border-color', `${color}`);
};

function validateInputProfile(id, tooltip) {
    if (!id.val()) {
        errorFormProfile('#ec2626');
        addErrorIconProfile(id.attr('id') + 'Element', tooltip);
        $('#' + id.attr('id') + 'Component').css({ 'border-color': '#ec2626', 'color': '#ec2626' });
        $('#' + id.attr('id')).addClass('errorInputProfile');
        return false;
    };

    errorFormProfile('#fff');

    return true;
};

function validateProfileFormFields() {
    dataAccountValid = true;

    let fieldsToValidate = ['#userName', '#userLastname', '#userEmail', '#userPassword'];

    fieldsToValidate.forEach((id, index) => {
        let tooltipMessage = id === '#userName' ? 'Nome inválido' :
                             id === '#userLastname' ? 'Sobrenome inválido' :
                             id === '#userEmail' ? 'Email inválido' :
                             'Senha inválida';

        let inputElement = $(id);

        validateInputProfile(inputElement, tooltipMessage);
    });
};

function handleProfileFormStatus() {
    const input = $('input').hasClass('errorInputProfile');

    if (input) {
        errorFormProfile('#ec2626');
    } else {
        errorFormProfile('#fff');
    };

    $('input').on('keyup', function () {
        if ($('.errorInputProfile').length === 0) {
            errorFormProfile('#fff');
        } else {
            errorFormProfile('#ec2626');
        };
    });
};

function handleProfileFormKeyup() {
    $('#userName, #userLastname, #userEmail, #userPassword').on('keyup', function () {
        let inputSeleceted = $(this).attr('id');
        let idParent = $(this).parent().attr('id');

        let idGrandparent = $('#' + idParent).parent().attr('id');
        let idSvgUnlock = $('#' + idParent + 'Svg').attr('id');

        if ($(this).val().trim() !== '') {
            $('#' + idParent + ' .svgError').hide();
            $('#' + idSvgUnlock).show();
            $('#' + inputSeleceted).removeClass('errorInputProfile')
            $('#' + idGrandparent).css({ 'border-color': '#fff', 'color': '#fff' });
        } else {
            $('#' + idSvgUnlock).hide();
            validateProfileFormFields();
            $('#' + idParent + ' .svgError').show();
            $('#' + inputSeleceted).addClass('errorInputProfile');
            $('#' + idGrandparent).css({ 'border-color': '#ec2626', 'color': '#ec2626' });
        };
    });
};

handleProfileFormKeyup();

function handleSubmitAccountUpdate() {
    validateProfileFormFields();

    if(dataAccountValid) {
        const form = $('#accountData');
    
        $.ajax({
            url: 'http://localhost/shopMVC/updateDataAccount',
            type: 'POST',
            data: form.serialize(),
            dataType: 'json',
            complete: function (response) {
                if(response.responseJSON.errors == 'userPassword') {
                    $('#userPasswordComponent').css({ 'border-color': '#ec2626', 'color': '#ec2626' });
                    $('#userPassword').addClass('errorInputProfile');
                    addErrorIconProfile('userPasswordElement', 'Senha inválida');
                    errorFormProfile('#ec2626');
                };

                if(response.responseJSON.errors == 'userEmail') {
                    $('#userEmailComponent').css({ 'border-color': '#ec2626', 'color': '#ec2626' });
                    $('#userEmail').addClass('errorInputProfile');
                    addErrorIconProfile('userEmailElement', 'Email inválido');
                    errorFormProfile('#ec2626');
                };

                if(response.responseJSON.result == true) {
                    setTimeout(function() {
                        $('#profileBody').html(` 
                            <div class="loadingFormAccount">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>`
                        );
                    });

                    setTimeout(function() {
                        $('#profileBody').hide();
                        $('#myAccount').append(`
                            <div id="templateSuccess">
                                <svg  id="svgSuccess" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span id="textSuccess">Dados atualizados com sucesso!</span>
                            </div>
                        `)
                    }, 1500);

                    setTimeout(function() {
                        window.location.href = 'http://localhost/shopMVC/account';
                    }, 2500);
                };
            }
        });
    };
};

$('#btnInfosAccount').click(function () {
    handleProfileFormStatus();
    handleSubmitAccountUpdate();
});