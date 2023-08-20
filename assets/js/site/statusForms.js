function errorSvg(element, tooltip) {
    var error = `
        <svg xmlns="http://www.w3.org/2000/svg" id="${element}Element" class="svgError w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="${tooltip}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
    `;

    if ($('#' + element + ' .svgError').length === 0) {
        $('#' + element).append(error);
    };

    $('#' + element + ' .svgError').hover(function () {
        $('#' + element + ' .svgError').tooltip('show');
    });
};

function removeErrorForm(title, form, btn) {
    $('input').on('keyup', function () {
        var inputs = $('input');

        if (!inputs.hasClass('inputFormStatusError')) {
            $('#' + title).css('color', '#fff');
            $('#' + form).css('border-color', '#fff');
            $('#' + btn).css('border-color', '#fff');
            $('#' + btn).css('color', '#fff');
        } else {
            $('#' + title).css('color', '#ec2626');
            $('#' + form).css('border-color', '#ec2626');
            $('#' + btn).css('border-color', '#ec2626');
            $('#' + btn).css('color', '#ec2626');
        };
    });
};

function addErrorForm(title, form, btn) {
    var input = $('input').hasClass('inputFormStatusError')

    if (input) {
        $('#' + title).css('color', '#ec2626');
        $('#' + form).css('border-color', '#ec2626');
        $('#' + btn).css('border-color', '#ec2626');
        $('#' + btn).css('color', '#ec2626');
    } else {
        $('#' + title).css('color', '#fff');
        $('#' + form).css('border-color', '#fff');
        $('#' + btn).css('border-color', '#fff');
        $('#' + btn).css('color', '#fff');
    }
}

function addErrorFormAccount(idSvg, chechbox, search, btn) {
    var input = $('input').hasClass('inputFormStatusError');

    if (input) {
        $('#' + idSvg).css('color', '#ec2626');
        $('#' + chechbox).css('border-color', '#ec2626');
        $('#' + search).css('border-color', '#ec2626');
        $('#' + btn).css('color', '#ec2626');
    } else {
        $('#' + idSvg).css('color', '#fff');
        $('#' + chechbox).css('border-color', '#fff');
        $('#' + search).css('border-color', '#fff');
        $('#' + btn).css('color', '#fff');
    };
};

function removeErrorFormAccount(idSvg, chechbox, search, btn) {
    $('input').on('keyup', function () {
        var inputs = $('input');

        if (!inputs.hasClass('inputFormStatusError')) {
            $('#' + idSvg).css('color', '#fff');
            $('#' + chechbox).css('border-color', '#fff');
            $('#' + search).css('border-color', '#fff');
            $('#' + btn).css('color', '#fff');
        } else {
            $('#' + idSvg).css('color', '#ec2626');
            $('#' + chechbox).css('border-color', '#ec2626');
            $('#' + search).css('border-color', '#ec2626');
            $('#' + btn).css('color', '#ec2626');
        };
    });
};

function removeErrorAlterCheckbox() {

    $('svg').css('color', '#fff');
    $('#titleHeaderAddressCard').css('color', '#fff');
    $('#checkboxAlterAddressCard').css('border-color', '#fff');
    $('#profileBody').css('border-color', '#fff');
    $('#btnSearchCEP').css('border-color', '#fff');
    $('.btnFormAccount').css('border-color', '#fff');
    $('.btnFormAccount').css('color', '#fff');
    $('input').removeClass('inputFormStatusError');
    $('input').removeClass('svgError');

};

$('#checkboxAlterAddressCard').click(function() {
    removeErrorAlterCheckbox();
});