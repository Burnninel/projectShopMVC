function lenghtInputCard(input, length) {
    const inputCvv = $(`#${input}`);

    inputCvv.on('input', function() {
        const valueInputCvv = inputCvv.val();
        if (valueInputCvv.length > length) {
            inputCvv.val(valueInputCvv.slice(0, length));
        };
    });
};

$(document).ready(function() {
    lenghtInputCard('cvvCard', 3);
    lenghtInputCard('btnMonth', 2);
    lenghtInputCard('btnYear', 4);
});