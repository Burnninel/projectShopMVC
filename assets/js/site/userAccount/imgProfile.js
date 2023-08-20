$(document).ready(function() {
    $('#upImgProfile').on('change', function(event) {
        var selectedFile = event.target.files[0]; // Pega o arquivo selecionado

        if (selectedFile) {
            var fileName = selectedFile.name;
            if (fileName.length > 22) {
                fileName = fileName.substring(0, 22) + '...'; // Limita o nome a 15 caracteres
            }
            $('#elementsFormImgProfile').append(`<span id="nameImgProfile">Arquivo: <span id="fileSelectedName">${fileName}</span> </span>`)
        }
    });
});

function handleSubmitImg() {
    var form = $('#formImgProfile')[0];
    
    var formData = new FormData(form)

    $.ajax({
        url: 'http://localhost/shopMVC/imgProfile',
        type: 'POST',
        data: formData,
        dataType: 'json',
        mimeType: "multipart/form-data",
        processData: false,
        contentType: false,
        complete: function (response) {
            console.log('back: ' + response);
        }
    });

};

$('#btnImgProfile').click(function () {
    handleSubmitImg();
});

