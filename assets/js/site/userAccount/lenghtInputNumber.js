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
    lenghtInputCard('cvv', 3);
    lenghtInputCard('month', 2);
    lenghtInputCard('year', 4);
});