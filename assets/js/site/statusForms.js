function errorSvg(element, tooltip) {
    var error = `
        <svg xmlns="http://www.w3.org/2000/svg" id="${element}Element" class="svgError w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="${tooltip}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
    `;

    if ($('#' + element + ' .svgError').length === 0) {
        $('#' + element).append(error);
    }

    $('#' + element + ' .svgError').hover(function() {
        $('#' + element + ' .svgError').tooltip('show');
    })

    console.log(element)
};

function removeErrorForm(form, btn) {
    $('input').on('keyup', function() {
        var lastInput = $('input:last');
    
        if (!lastInput.hasClass('inputFormStatusError')) {
            $('#' + form).css('border-color', '#fff');
            $('#' + btn).css('border-color', '#fff');
        } else {
            $('#' + form).css('border-color', '#ec2626');
            $('#' + btn).css('border-color', '#ec2626');
        }
    });
}

function addErrorForm(form, btn) {
    var input = $('input').hasClass('inputFormStatusError')

    if(input) {
        $('#' + form).css('border-color', '#ec2626');
        $('#' + btn).css('border-color', '#ec2626');
    } else {
        $('#' + form).css('border-color', '#fff');
        $('#' + btn).css('border-color', '#fff');
    }
}