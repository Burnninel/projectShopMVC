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
                             id === '#userEmail' ? 'Email inválido' : 'Senha inválida';

        let inputElement = $(id);

        validateInputProfile(inputElement, tooltipMessage);
    });
};

function errorFormProfile(color) {
    $('#btnInfosAccount').css({ 'color': `${color}`, 'border-color': `${color}` });
    $('#titleInfosAccount').css('color', `${color}`);
    $('#profileBody').css('border-color', `${color}`);
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

    const form = $('#accountDetails');

    $.ajax({
        url: 'http://localhost/shopMVC/updateDetailsAccount',
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        complete: function (response) {
            console.log('back: ' + response.responseJSON.result);
        }
    });
};

$('#btnInfosAccount').click(function () {
    handleProfileFormStatus();
    handleSubmitAccountUpdate();
});